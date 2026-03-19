/**
 * Update `lastUpdated` in registry/skills.ts using the latest commit date for each skill path.
 * Also refresh the `files` list from the repo's directory contents.
 * Requires Node 18+ (for global fetch). Set GH_TOKEN for authenticated requests.
 *
 * Usage:
 *   GH_TOKEN=xxx node scripts/updateLastUpdated.js
 */

import fs from 'fs';
import path from 'path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const constantsPath = path.join(ROOT, 'registry', 'skills.ts');
const GH_TOKEN = process.env.GH_TOKEN;

const headers = GH_TOKEN
  ? { Authorization: `Bearer ${GH_TOKEN}`, 'User-Agent': 'skill-updater' }
  : { 'User-Agent': 'skill-updater' };

function parseRepoUrl(url) {
  // Expect: https://github.com/<owner>/<repo>/tree/<branch>/<path/to/skill>
  try {
    const u = new URL(url);
    const segments = u.pathname.split('/').filter(Boolean);
    const owner = segments[0];
    const repo = segments[1];
    const treeIndex = segments.indexOf('tree');
    if (treeIndex === -1 || segments.length < treeIndex + 3) return null;
    const branch = segments[treeIndex + 1];
    const skillPath = segments.slice(treeIndex + 2).join('/');
    return { owner, repo, branch, skillPath };
  } catch (err) {
    return null;
  }
}

async function fetchLastCommitDate({ owner, repo, branch, skillPath }) {
  const apiUrl = `https://api.github.com/repos/${owner}/${repo}/commits?path=${encodeURIComponent(
    skillPath
  )}&sha=${encodeURIComponent(branch)}&per_page=1`;
  const res = await fetch(apiUrl, { headers });
  if (!res.ok) {
    throw new Error(`GitHub API error ${res.status} for ${apiUrl}`);
  }
  const data = await res.json();
  if (!Array.isArray(data) || data.length === 0) {
    throw new Error(`No commits returned for ${owner}/${repo}:${skillPath}`);
  }
  return data[0].commit.author.date;
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return `${d.getUTCFullYear()}.${d.getUTCMonth() + 1}.${d.getUTCDate()}`;
}

async function fetchFilesList({ owner, repo, branch, skillPath }) {
  const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${skillPath}?ref=${encodeURIComponent(
    branch
  )}`;
  const res = await fetch(apiUrl, { headers });
  if (!res.ok) {
    throw new Error(`GitHub API error ${res.status} for ${apiUrl}`);
  }
  const data = await res.json();
  if (!Array.isArray(data)) {
    throw new Error(`Unexpected contents response for ${owner}/${repo}:${skillPath}`);
  }
  return data.map((item) => (item.type === 'dir' ? `${item.name}/` : item.name)).sort();
}

function escapeForRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

async function main() {
  const content = fs.readFileSync(constantsPath, 'utf8');
  const lines = content.split('\n');

  const updates = [];

  lines.forEach((line, idx) => {
    if (line.includes("repoUrl: '")) {
      const match = line.match(/repoUrl:\s*'([^']+)'/);
      if (!match) return;
      const repoUrl = match[1];
      const parsed = parseRepoUrl(repoUrl);
      if (!parsed) return;

      // find the nearest preceding lastUpdated line
      let lastIdx = idx;
      while (lastIdx >= 0 && !lines[lastIdx].includes('lastUpdated')) {
        lastIdx -= 1;
      }
      if (lastIdx < 0) return;

      updates.push({ repoUrl, parsed, lastIdx });
    }
  });

  console.log(`Found ${updates.length} skills with repoUrl`);

  for (const item of updates) {
    try {
      const dateStr = await fetchLastCommitDate(item.parsed);
      const formatted = formatDate(dateStr);
      lines[item.lastIdx] = lines[item.lastIdx].replace(
        /lastUpdated:\s*'[^']*'/,
        `lastUpdated: '${formatted}'`
      );
      console.log(`✓ ${item.repoUrl} -> ${formatted}`);
    } catch (err) {
      console.error(`✗ ${item.repoUrl} - ${err.message}`);
    }

    // Update files list
    try {
      const files = await fetchFilesList(item.parsed);
      const filesLine = `    files: [${files.map((f) => `'${f}'`).join(', ')}],`;
      const urlEscaped = escapeForRegex(item.repoUrl);
      const re = new RegExp(
        `(files:\\s*\\[[^\\]]*\\],?\\n\\s*repoUrl:\\s*'${urlEscaped}')`
      );
      const replaced = lines.join('\n').replace(re, `${filesLine}\n    repoUrl: '${item.repoUrl}'`);
      if (replaced !== lines.join('\n')) {
        Object.assign(lines, replaced.split('\n'));
        console.log(`   files updated (${files.length})`);
      } else {
        console.warn(`   files not updated for ${item.repoUrl} (pattern not found)`);
      }
    } catch (err) {
      console.error(`   files update failed for ${item.repoUrl} - ${err.message}`);
    }
  }

  fs.writeFileSync(constantsPath, lines.join('\n'));
  console.log('Done. registry/skills.ts updated.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
