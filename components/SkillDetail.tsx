import React, { useState } from 'react';
import JSZip from 'jszip';
import { Skill } from '../types';

interface SkillDetailProps {
  skill: Skill;
  onClose: () => void;
  onTagClick: (tag: string, e?: React.MouseEvent) => void;
}

const formatSkillName = (name: string) =>
  name.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

const SkillDetail: React.FC<SkillDetailProps> = ({ skill, onClose, onTagClick }) => {
  type HttpError = Error & { status?: number };

  const githubAuthHeader = import.meta.env.VITE_GITHUB_TOKEN
    ? { Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}` }
    : undefined;

  const shouldUseGitHubAuth = (url: string) => {
    try {
      const hostname = new URL(url).hostname;
      // raw.githubusercontent.com rejects preflight with Authorization headers; skip auth there.
      return hostname !== 'raw.githubusercontent.com';
    } catch {
      return true;
    }
  };

  const fetchWithGitHubAuth = async (url: string, options: RequestInit = {}) => {
    const useAuth = !!githubAuthHeader && shouldUseGitHubAuth(url);
    const headersWithAuth = {
      ...(options.headers || {}),
      ...(useAuth ? githubAuthHeader : {})
    };

    const attempt = await fetch(url, { ...options, headers: headersWithAuth });

    // If an auth attempt fails (e.g., bad token), retry without the token to fall back to the previous unauthenticated behavior.
    if (!attempt.ok && useAuth) {
      const fallback = await fetch(url, options);
      if (fallback.ok) return fallback;
    }

    return attempt;
  };

  const [copied, setCopied] = useState(false);
  const [isCopying, setIsCopying] = useState(false);
  const [showWebInstructions, setShowWebInstructions] = useState(true);
  const [showCliInstructions, setShowCliInstructions] = useState(true);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState<string | null>(null);
  const addSkillCommand = skill.repoUrl ? `npx add-skill ${skill.repoUrl}` : 'npx add-skill <repo-url>';
  const canCopyAddSkill = Boolean(skill.repoUrl);

  const trackEvent = (action: string, params?: Record<string, unknown>) => {
    if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
    window.gtag('event', action, { event_category: 'interaction', ...params });
  };

  const handleCopy = async () => {
    if (!canCopyAddSkill) return;
    setIsCopying(true);
    try {
      await navigator.clipboard.writeText(addSkillCommand);
      setCopied(true);
      trackEvent('copy_add_skill_command', { skill_id: skill.id, skill_name: skill.name });
      setTimeout(() => setCopied(false), 2000);
    } finally {
      setIsCopying(false);
    }
  };

  const parseGitHubRepoUrl = (repoUrl?: string) => {
    if (!repoUrl) return null;

    try {
      const url = new URL(repoUrl);
      const segments = url.pathname.split('/').filter(Boolean);
      const treeIndex = segments.indexOf('tree');

      if (treeIndex === -1 || segments.length < treeIndex + 2) return null;

      const owner = segments[0];
      const repo = segments[1];
      const branch = segments[treeIndex + 1];
      const path = segments.slice(treeIndex + 2).join('/');

      if (!owner || !repo || !branch || !path) return null;

      return { owner, repo, branch, path };
    } catch {
      return null;
    }
  };

  const createHttpError = (response: Response, context: string): HttpError => {
    const error = new Error(`${context} (status ${response.status})`) as HttpError;
    error.status = response.status;
    return error;
  };

  const downloadFilesFromRawGitHub = async (
    zip: JSZip,
    repoInfo: { owner: string; repo: string; branch: string; path: string },
    files: string[]
  ) => {
    const basePath = repoInfo.path.replace(/\/$/, '');

    for (const filePath of files) {
      const relativePath = filePath.replace(/^\/+/, '');
      const rawUrl = `https://raw.githubusercontent.com/${repoInfo.owner}/${repoInfo.repo}/${repoInfo.branch}/${basePath}/${relativePath}`;
      const fileResponse = await fetchWithGitHubAuth(rawUrl);

      if (!fileResponse.ok) {
        throw createHttpError(fileResponse, `Failed to fetch ${relativePath}`);
      }

      const arrayBuffer = await fileResponse.arrayBuffer();
      zip.file(relativePath, arrayBuffer);
    }
  };

  const downloadFromRepoArchive = async (
    zip: JSZip,
    repoInfo: { owner: string; repo: string; branch: string; path: string }
  ) => {
    // Download whole repo archive to include every file in the skill subdirectory (including hidden files).
    const archiveUrl = `https://codeload.github.com/${repoInfo.owner}/${repoInfo.repo}/zip/${repoInfo.branch}`;
    const archiveResponse = await fetchWithGitHubAuth(archiveUrl);

    if (!archiveResponse.ok) {
      throw createHttpError(archiveResponse, 'Failed to download repository archive');
    }

    const archiveBuffer = await archiveResponse.arrayBuffer();
    const archiveZip = await JSZip.loadAsync(archiveBuffer);
    const normalizedPath = repoInfo.path.replace(/\/$/, '');
    const prefix = `${repoInfo.repo}-${repoInfo.branch}/${normalizedPath}/`;
    const tasks: Promise<void>[] = [];

    archiveZip.forEach((relativePath, file) => {
      if (file.dir) return;
      if (relativePath.startsWith(prefix)) {
        const outputPath = relativePath.slice(prefix.length);
        tasks.push(
          file.async('arraybuffer').then((data) => {
            zip.file(outputPath, data);
          })
        );
      }
    });

    if (tasks.length === 0) {
      throw new Error('No files found in the specified repository path.');
    }

    await Promise.all(tasks);
  };

  const fetchAndZipDirectory = async (
    zip: JSZip,
    repoInfo: { owner: string; repo: string; branch: string; path: string },
    currentPath: string,
    basePath: string
  ) => {
    const apiUrl = `https://api.github.com/repos/${repoInfo.owner}/${repoInfo.repo}/contents/${currentPath}?ref=${repoInfo.branch}`;
    const response = await fetchWithGitHubAuth(apiUrl, {
      headers: { Accept: 'application/vnd.github+json' }
    });

    if (!response.ok) {
      throw createHttpError(response, 'Failed to load files from GitHub');
    }

    const entries = (await response.json()) as {
      type: 'file' | 'dir';
      name: string;
      path: string;
      download_url: string | null;
    }[];

    if (!Array.isArray(entries)) {
      throw new Error('Unexpected response from GitHub');
    }

    for (const entry of entries) {
      const relativePath = entry.path.startsWith(basePath)
        ? entry.path.slice(basePath.length + 1)
        : entry.name;

      if (entry.type === 'dir') {
        await fetchAndZipDirectory(zip, repoInfo, entry.path, basePath);
      } else if (entry.type === 'file' && entry.download_url) {
        const fileResponse = await fetchWithGitHubAuth(entry.download_url);
        if (!fileResponse.ok) {
          throw createHttpError(fileResponse, `Failed to fetch ${relativePath}`);
        }
        const arrayBuffer = await fileResponse.arrayBuffer();
        zip.file(relativePath, arrayBuffer);
      }
    }
  };

  const handleDownloadZip = async () => {
    const repoInfo = parseGitHubRepoUrl(skill.repoUrl);
    if (!repoInfo) {
      setDownloadError('No GitHub repo path available for this skill.');
      trackEvent('download_skill_zip_failed', { reason: 'no_repo', skill_id: skill.id, skill_name: skill.name });
      return;
    }

    setIsDownloading(true);
    setDownloadError(null);

    try {
      const zip = new JSZip();
      let downloaded = false;

      try {
        await downloadFromRepoArchive(zip, repoInfo);
        downloaded = true;
      } catch (archiveError) {
        console.warn('Repository archive download failed, trying raw/API fallback', archiveError);
      }

      if (!downloaded) {
        const hasDeclaredFiles = Array.isArray(skill.files) && skill.files.length > 0;

        if (hasDeclaredFiles) {
          try {
            await downloadFilesFromRawGitHub(zip, repoInfo, skill.files);
            downloaded = true;
          } catch (rawError) {
            console.warn('Raw GitHub download failed, falling back to GitHub API', rawError);
          }
        }
      }

      if (!downloaded) {
        await fetchAndZipDirectory(zip, repoInfo, repoInfo.path, repoInfo.path);
      }

      if (Object.keys(zip.files).length === 0) {
        throw new Error('No files were added to the ZIP archive.');
      }

      const blob = await zip.generateAsync({ type: 'blob' });
      const element = document.createElement('a');
      element.href = URL.createObjectURL(blob);
      element.download = `${skill.name || skill.id}-skill-bundle.zip`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      trackEvent('download_skill_zip', { skill_id: skill.id, skill_name: skill.name });
    } catch (error) {
      console.error(error);
      setDownloadError(
        error instanceof Error
          ? (error as HttpError).status === 403
            ? 'GitHub blocked the request (likely rate limited). Please retry in a moment or open the repository directly.'
            : error.message
          : 'Unable to download skill bundle.'
      );
      trackEvent('download_skill_zip_failed', { reason: 'error', skill_id: skill.id, skill_name: skill.name });
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white md:bg-black/40 backdrop-blur-sm p-0 md:p-8 overflow-y-auto">
      <div className="absolute inset-0 cursor-pointer hidden md:block" onClick={onClose} />
      
      <div className="bg-white w-full h-full md:h-auto md:max-w-[1200px] md:max-h-[95vh] overflow-y-auto relative shadow-none md:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] flex flex-col xl:flex-row border-0 md:border border-black">
        
        {/* Main Info Section */}
        <div className="flex-1 p-6 md:p-12 border-b xl:border-b-0 xl:border-r border-black/10 overflow-visible md:overflow-y-auto md:max-h-[85vh]">
          <button 
            onClick={() => { onClose(); trackEvent('close_skill_detail', { skill_id: skill.id, skill_name: skill.name }); }}
            type="button"
            className="mb-8 text-black/60 hover:text-black transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-widest sticky top-0 bg-white/95 backdrop-blur py-2 w-full z-10 md:static md:bg-transparent md:py-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Registry
          </button>

          <div className="space-y-8">
            <div>
              <div className="flex flex-wrap gap-3 mb-4">
                {skill.roles.map((role) => (
                  <span key={role} className="inline-block px-2 py-1 bg-black text-white text-[9px] font-bold uppercase tracking-widest">
                    {role}
                  </span>
                ))}
                {skill.isTrending && (
                  <span className="inline-block px-2 py-1 bg-black/[0.05] text-black text-[9px] font-bold uppercase tracking-widest border border-black/10">
                    Trending
                  </span>
                )}
              </div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-black mb-4 leading-none">
                {formatSkillName(skill.name)}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-black/40">
                <span>Created by {skill.author}</span>
                <span className="hidden md:block w-1 h-1 rounded-full bg-black/10" />
                <span>Updated {skill.lastUpdated}</span>
                {skill.repoUrl && (
                  <>
                    <span className="hidden md:block w-1 h-1 rounded-full bg-black/10" />
                    <a
                      href={skill.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() =>
                        trackEvent('open_repo_link', { skill_id: skill.id, skill_name: skill.name })
                      }
                      className="flex items-center gap-2 text-xs font-semibold text-black/70 hover:text-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-sm"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="text-black/60"
                        fill="currentColor"
                      >
                        <path d="M12 .5C5.65.5.5 5.72.5 12.2c0 5.18 3.3 9.57 7.88 11.12.58.11.8-.26.8-.58 0-.29-.01-1.06-.02-2.07-3.2.7-3.88-1.56-3.88-1.56-.53-1.37-1.3-1.74-1.3-1.74-1.06-.74.08-.73.08-.73 1.17.08 1.78 1.23 1.78 1.23 1.04 1.83 2.72 1.3 3.38.99.11-.77.41-1.3.75-1.6-2.55-.3-5.23-1.3-5.23-5.78 0-1.28.44-2.33 1.16-3.15-.12-.3-.5-1.52.1-3.17 0 0 .96-.31 3.15 1.2a10.6 10.6 0 0 1 2.87-.4c.98 0 1.97.13 2.88.4 2.18-1.51 3.14-1.2 3.14-1.2.6 1.65.23 2.87.11 3.17.72.82 1.15 1.87 1.15 3.15 0 4.5-2.69 5.47-5.25 5.77.42.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.3 0 .32.21.7.81.58A11.72 11.72 0 0 0 23.5 12.2C23.5 5.72 18.35.5 12 .5Z" />
                      </svg>
                      <span className="underline decoration-dotted underline-offset-2">GitHub</span>
                    </a>
                  </>
                )}
              </div>
            </div>

            <div className="space-y-12">
              <p className="text-lg md:text-xl text-black/70 leading-relaxed font-medium">
                {skill.longDescription}
              </p>

              {/* Indexable Content Block */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 py-8 border-y border-black/5">
                <div className="min-w-0">
                  <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-black mb-4">What this Claude Skill does</h3>
                  <ul className="space-y-3">
                    {skill.features.map((feature, i) => (
                      <li key={i} className="flex gap-3 text-sm text-black/60 leading-snug break-words min-w-0">
                        <span className="text-black/20 font-mono">•</span>
                        <span className="min-w-0">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="min-w-0">
                  <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-black mb-4">Best for</h3>
                  <ul className="space-y-3">
                    {skill.bestFor.map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm text-black/60 leading-snug break-words min-w-0">
                        <span className="text-black/20 font-mono">→</span>
                        <span className="min-w-0">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* SEO: Example Prompts Plain Text Section */}
              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-black mb-6">Example Prompts</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                  {skill.triggers.map((trigger, idx) => (
                    <div key={idx} className="group cursor-text border-l border-black/5 pl-4 py-1">
                      <p className="text-sm text-black/50 group-hover:text-black/80 transition-colors leading-relaxed italic">
                        "{trigger}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/*
              <div className="bg-black/[0.02] border border-black/5 p-6 space-y-4">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-black/30">Configuration Metadata</h4>
                <div className="font-mono text-[11px] text-black/60 leading-relaxed overflow-x-auto">
                  <pre className="whitespace-pre-wrap">{skill.yamlConfig}</pre>
                </div>
              </div>
              */}
            </div>
          </div>
        </div>

        {/* Technical Specs Sidebar */}
        <div className="w-full xl:w-[280px] bg-black/[0.02] p-6 sm:p-8 md:p-10 border-b xl:border-b-0 xl:border-r border-black/10 flex flex-col gap-8 md:max-h-[85vh] md:overflow-y-auto">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/60">Technical Specs</h3>
          
          <div className="space-y-6">
            <section>
              <h4 className="text-[9px] font-bold uppercase tracking-widest text-black/60 mb-2">Type</h4>
              <p className="text-[13px] font-semibold text-black/80">{skill.type}</p>
            </section>

            <section>
              <h4 className="text-[9px] font-bold uppercase tracking-widest text-black/60 mb-2">Compatibility</h4>
              <ul className="space-y-1">
                {skill.compatibility.map((item, idx) => (
                  <li key={idx} className="text-[12px] font-medium text-black/60">{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h4 className="text-[9px] font-bold uppercase tracking-widest text-black/60 mb-2">Files Included</h4>
              <ul className="space-y-1 font-mono text-[11px] text-black/50">
                {skill.files.map((file, idx) => (
                  <li key={idx}>/ {file}</li>
                ))}
              </ul>
            </section>

            {/* Discovery Tags Section */}
            <section>
              <h4 className="text-[9px] font-bold uppercase tracking-widest text-black/60 mb-4">Registry Tags</h4>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {skill.tags.map((tag, idx) => (
                  <button 
                    key={idx} 
                    onClick={(e) => onTagClick(tag, e)}
                    type="button"
                    className="text-[10px] font-bold uppercase tracking-widest text-black/60 hover:text-black border-b border-black/10 hover:border-black transition-all px-1.5 py-1 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </section>
          </div>

          <div className="mt-auto pt-8 border-t border-black/5">
            <div className="flex items-center gap-3 opacity-30">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[9px] font-bold uppercase tracking-widest">Verified</span>
            </div>
          </div>
        </div>

        {/* Deployment Section */}
        <div className="w-full xl:w-[380px] bg-white p-6 sm:p-8 md:p-12 flex flex-col gap-10 md:max-h-[85vh] md:overflow-y-auto">
          <section className="space-y-4">
            <button 
              onClick={() => { handleDownloadZip(); trackEvent('click_download_button', { skill_id: skill.id, skill_name: skill.name }); }}
              disabled={isDownloading || !skill.repoUrl}
              aria-busy={isDownloading}
              className={`w-full bg-black text-white py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 ${
                isDownloading || !skill.repoUrl ? 'opacity-60 cursor-not-allowed' : 'hover:bg-black/90'
              } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white`}
            >
              {isDownloading ? 'Downloading Bundle...' : 'Download Skill.zip'}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
            </button>
            {downloadError && (
              <p className="text-[11px] text-red-600">{downloadError}</p>
            )}
            <p className="text-[11px] leading-relaxed text-black/50 italic">
              Includes SKILL.md and all required resource files for direct upload to your Capabilities dashboard.
            </p>
            {/* Option 1: Web-Ready */}
            <div className="border-t border-black/5 pt-4">
              <button 
                onClick={() => { setShowWebInstructions(!showWebInstructions); trackEvent('toggle_web_instructions', { skill_id: skill.id, open: !showWebInstructions }); }}
                type="button"
                aria-expanded={showWebInstructions}
                aria-controls="web-instructions"
                className="flex items-center justify-between w-full text-[10px] font-bold uppercase tracking-widest text-black/60 hover:text-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-sm"
              >
                <span>Install Skill in Claude (Web)</span>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className={`transition-transform ${showWebInstructions ? 'rotate-180' : ''}`}>
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              {showWebInstructions && (
                <div id="web-instructions" role="region" aria-label="Install Skill in Claude web instructions" className="mt-3 text-[11px] text-black/60 leading-relaxed bg-black/[0.02] p-3 border-l-2 border-black/10 space-y-2">
                  <p>- Download the ZIP file, open Settings in the Claude web app, enable Skills, and select Upload Skill.</p>
                  <p>- Claude automatically reads and indexes the included YAML metadata, making the skill available for agent execution.</p>
                </div>
              )}
            </div>
            {/* Option 2: Dev-First */}
            <div className="border-t border-black/5 pt-4">
              <button 
                onClick={() => { setShowCliInstructions(!showCliInstructions); trackEvent('toggle_cli_instructions', { skill_id: skill.id, open: !showCliInstructions }); }}
                type="button"
                aria-expanded={showCliInstructions}
                aria-controls="cli-instructions"
                className="flex items-center justify-between w-full text-[10px] font-bold uppercase tracking-widest text-black/60 hover:text-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-sm"
              >
                <span>Install Skill via CLI</span>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className={`transition-transform ${showCliInstructions ? 'rotate-180' : ''}`}>
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              {showCliInstructions && (
                <div id="cli-instructions" role="region" aria-label="Install Skill via CLI instructions" className="mt-3 text-[11px] text-black/60 leading-relaxed bg-black/[0.02] p-3 border-l-2 border-black/10 space-y-2">
                  <p> For <strong>Claude Code</strong>, copy the skill folder to ~/.claude/skills/ (personal) or .claude/skills/ (project).</p>
                  <p> For the OpenAI <strong>Codex CLI</strong>, copy the skill folder to ~/.codex/skills/.</p>
                  <p>- Both environments use the same SKILL.md format and structure. Once placed in one of these directories, the skill is automatically discovered and loaded after restarting.</p>
                  <div className="pt-2 space-y-1">
                    <p>For <strong>Gemini CLI</strong>:</p>
                    <ol className="list-decimal list-inside space-y-1">
                      <li>
                        Package the skill into a <code className="px-1 bg-black/5 rounded">.skill</code> file via{' '}
                        <code className="px-1 bg-black/5 rounded">node &lt;path-to-skill-creator&gt;/scripts/package_skill.cjs &lt;unzip-skill-folder&gt;</code>.
                      </li>
                      <li>
                        Install it with{' '}
                        <code className="px-1 bg-black/5 rounded">
                          gemini skills install &lt;path/to/skill-name.skill&gt; --scope workspace|user
                        </code>.
                      </li>
                      <li>Run <code className="px-1 bg-black/5 rounded">/skills reload</code> in the Gemini CLI to enable it.</li>
                    </ol>
                  </div>
                </div>
              )}
            </div>
            {/* <div className="flex items-center gap-3">
              <span className="h-px flex-1 bg-black/10" aria-hidden="true" />
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/40">Or</span>
              <span className="h-px flex-1 bg-black/10" aria-hidden="true" />
            </div>
            <button 
              onClick={() => { handleCopy(); trackEvent('click_copy_add_skill_command', { skill_id: skill.id, skill_name: skill.name }); }}
              disabled={!canCopyAddSkill}
              aria-busy={isCopying}
              className={`w-full bg-black text-white py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 ${
                !canCopyAddSkill ? 'opacity-60 cursor-not-allowed' : 'hover:bg-black/90'
              } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white`}
            >
              {copied ? 'Command Copied' : 'Copy add-skill Command'}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
            </button>
            <p className="text-[11px] leading-relaxed text-black/50 italic">
              Click the copy button, then paste into your terminal to start installation.
            </p> */}
          </section>
        </div>
      </div>
    </div>
  );
};

export default SkillDetail;
