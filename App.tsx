import React, { useState, useMemo, useEffect, useRef } from 'react';
import Sidebar from './components/Sidebar';
import SkillCard from './components/SkillCard';
import SkillDetail from './components/SkillDetail';
import { SKILLS } from './registry/skills';
import { Skill, Role } from './types';

const App: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>(Role.ALL);
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'Trending' | 'All'>('Trending');
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaqs, setOpenFaqs] = useState<Set<number>>(new Set());
  const [showScrollHint, setShowScrollHint] = useState(false);
  const skillsScrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    if (selectedSkill) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedSkill]);

  const filteredSkills = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();
    const isSearching = normalizedQuery.length > 0;
    const queryTokens = normalizedQuery.split(/\s+/).filter(Boolean);

    const baseList = isSearching
      ? SKILLS
      : SKILLS.filter((skill) => {
          const sidebarMatch =
            activeFilter === Role.ALL ||
            (activeFilter === 'Cowork'
              ? skill.isCowork
              : skill.roles.includes(activeFilter as Role));

          const tagMatch = !activeTag || skill.tags.includes(activeTag);
          const viewMatch = viewMode === 'All' || skill.isTrending;

          return sidebarMatch && tagMatch && viewMatch;
        });

    if (!isSearching) {
      return baseList;
    }

    const toSearchableText = (value: string | string[] | number | boolean | undefined) => {
      if (value === undefined) return '';
      if (Array.isArray(value)) return value.join(' ').toLowerCase();
      return String(value).toLowerCase();
    };

    return baseList
      .map((skill) => {
        // Weighted relevance across all fields on the Skill object.
        const searchableFields: Array<{ value: string | string[] | number | boolean | undefined; weight: number }> = [
          { value: skill.name, weight: 6 },
          { value: skill.description, weight: 5 },
          { value: skill.longDescription, weight: 4 },
          { value: skill.tags, weight: 4 },
          { value: skill.triggers, weight: 3.5 },
          { value: skill.features, weight: 3.5 },
          { value: skill.bestFor, weight: 3 },
          { value: skill.author, weight: 3 },
          { value: skill.roles, weight: 3 },
          { value: skill.type, weight: 2.5 },
          { value: skill.compatibility, weight: 2.5 },
          { value: skill.files, weight: 2 },
          { value: skill.setupCommand, weight: 2 },
          { value: skill.yamlConfig, weight: 2 },
          { value: skill.repoUrl, weight: 2 },
          { value: skill.lastUpdated, weight: 1.5 },
          { value: skill.downloads, weight: 1.5 },
          { value: skill.stars, weight: 1.2 },
          { value: skill.isTrending, weight: 1 },
          { value: skill.isCowork, weight: 1 },
          { value: skill.id, weight: 0.5 },
        ];

        const score = searchableFields.reduce((acc, field) => {
          const haystack = toSearchableText(field.value);
          if (!haystack) return acc;

          const fieldHits = queryTokens.reduce((tokenAcc, token) => {
            return tokenAcc + (haystack.includes(token) ? field.weight : 0);
          }, 0);

          return acc + fieldHits;
        }, 0);

        return { skill, score };
      })
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score || a.skill.name.localeCompare(b.skill.name))
      .map(({ skill }) => skill);
  }, [activeFilter, activeTag, viewMode, searchQuery]);

  useEffect(() => {
    const el = skillsScrollRef.current;
    if (!el) return;

    const updateScrollHint = () => {
      const maxScrollTop = el.scrollHeight - el.clientHeight;
      const atBottom = el.scrollTop >= maxScrollTop - 4;
      const hasOverflow = maxScrollTop > 4;
      setShowScrollHint(hasOverflow && !atBottom);
    };

    updateScrollHint();
    el.addEventListener('scroll', updateScrollHint, { passive: true });
    window.addEventListener('resize', updateScrollHint);

    return () => {
      el.removeEventListener('scroll', updateScrollHint);
      window.removeEventListener('resize', updateScrollHint);
    };
  }, [filteredSkills.length, viewMode, activeFilter, activeTag, searchQuery]);

  const trackEvent = (action: string, params?: Record<string, unknown>) => {
    if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
    window.gtag('event', action, { event_category: 'interaction', ...params });
  };

  // Send device/theme context once per session
  const deviceContextSent = useRef(false);
  useEffect(() => {
    if (deviceContextSent.current) return;
    deviceContextSent.current = true;
    const isDark = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;
    trackEvent('session_context', {
      device_type: typeof window !== 'undefined' && window.innerWidth < 768 ? 'mobile' : 'desktop',
      viewport_width: typeof window !== 'undefined' ? window.innerWidth : undefined,
      viewport_height: typeof window !== 'undefined' ? window.innerHeight : undefined,
      prefers_color_scheme: isDark ? 'dark' : 'light'
    });
  }, []);

  useEffect(() => {
    const term = searchQuery.trim();
    if (!term) return;
    const timeout = setTimeout(() => {
      trackEvent('search', { search_term: term });
    }, 400);
    return () => clearTimeout(timeout);
  }, [searchQuery]);

  // Track filter combinations when filters change (skip initial load)
  const hasTrackedFilterCombo = useRef(false);
  useEffect(() => {
    if (!hasTrackedFilterCombo.current) {
      hasTrackedFilterCombo.current = true;
      return;
    }
    trackEvent('filter_combination', {
      role: activeFilter,
      tag: activeTag ?? 'All',
      view_mode: viewMode
    });
  }, [activeFilter, activeTag, viewMode]);

  const getPageContent = () => {
    if (activeTag) {
      return {
        h1: `${activeTag} Claude Skills`,
        intro: `Explore the best Claude Skills and MCP servers specifically designed for ${activeTag}. Boost your development speed with pre-built agentic workflows and tool configurations for ${activeTag} ecosystems.`
      };
    }

    switch (activeFilter) {
      case Role.FRONTEND:
        return {
          h1: "Frontend Claude Skills",
          intro: "Browse Claude Skills and MCP servers for React, UI scaffolding, Tailwind, testing, and frontend workflows. Optimize your client-side development with automated component generation and styling protocols."
        };
      case Role.BACKEND:
        return {
          h1: "Backend Claude Skills",
          intro: "Scale your server-side logic with Claude Skills for Node.js, Python, SQL optimization, and API architecture. Integrate direct database access and server-side model context protocol (MCP) servers."
        };
      case Role.DEVOPS:
        return {
          h1: "DevOps & Infrastructure Skills",
          intro: "Automate your CI/CD pipelines, Kubernetes clusters, and cloud deployments with enterprise-grade MCP servers. Monitor resource usage and manage container orchestration directly through Claude Code."
        };
      case Role.DATA:
        return {
          h1: "Data Engineering & Science Skills",
          intro: "Process massive datasets and optimize model workflows with Claude-powered data profiling and statistical analysis tools. Connect to SQL, Parquet, and CSV sources with high-performance handlers."
        };
      case Role.PRODUCT:
        return {
          h1: "Product & Workflow Skills",
          intro: "Streamline team collaboration with skills for PR auditing, documentation sync, and context-aware task management. Bridge the gap between engineering output and product requirements."
        };
      case Role.MARKETING:
        return {
          h1: "Marketing Claude Skills",
          intro: "Plan campaigns, refine brand assets, audit SEO, and ship content faster with Claude Skills built for marketing workflows across growth, content, and creative ops."
        };
      default:
        return {
          h1: "The Global Registry for Claude Agent Skills.",
          intro: "Access the largest open-source library of Claude Skills, MCP Servers, and Custom Agentic Workflows. Whether you need code execution, real-time data fetching, or advanced browser automation, find the exact SKILL.md or configuration file you need to supercharge your Claude instance."
        };
    }
  };

  const { h1, intro } = getPageContent();

  const getFaqs = () => {
    if (activeFilter === Role.FRONTEND) {
      return [
        { q: "What are Frontend Claude Skills?", a: "Frontend Claude Skills help you scaffold UI, generate components, refactor code, and speed up frontend workflows." },
        { q: "What tools do these skills support?", a: "Common tools include React, Tailwind, component libraries, and frontend testing setups." },
        { q: "Are these skills MCP-compatible?", a: "Verified listings in this category are MCP-compatible and include setup instructions." },
        { q: "How do I choose the best frontend skill?", a: "Use tags, ratings, downloads, and compatibility notes to find the best fit for your stack." },
        { q: "What are example use cases?", a: "Examples include generating React components, creating page layouts, and adding test suites faster." }
      ];
    }
    if (activeFilter === Role.BACKEND) {
      return [
        { q: "What are Backend Claude Skills?", a: "Backend Claude Skills help with API scaffolding, code generation, refactoring, validation, and backend automation." },
        { q: "Do these skills support common frameworks?", a: "Many skills work well with common backend patterns and languages, depending on how the MCP server is implemented." },
        { q: "Are backend skills verified for MCP?", a: "Verified backend skills are checked for MCP compatibility and basic setup completeness." },
        { q: "What are common backend use cases?", a: "Generating REST endpoints, validating request/response schemas, and accelerating service boilerplate." },
        { q: "How do I install a backend Claude Skill?", a: "Each listing includes installation steps, required environment variables, and configuration guidance." }
      ];
    }
    if (activeFilter === Role.DEVOPS) {
      return [
        { q: "What are DevOps Claude Skills?", a: "DevOps Claude Skills help automate infrastructure workflows like CI/CD checks, debugging, deployment support, and environment setup." },
        { q: "Do these skills work with Kubernetes and CI tools?", a: "Many DevOps skills support workflows around Kubernetes, logs, configs, and common deployment pipelines." },
        { q: "Are DevOps skills MCP-compatible?", a: "Verified DevOps skills are checked for MCP compatibility and include install + configuration details." },
        { q: "What can DevOps Claude Skills help with?", a: "Common tasks include diagnosing failures, generating configs, and speeding up operational playbooks." },
        { q: "Are these skills safe to run?", a: "Always review permissions, environment variables, and the source. Verified helps reduce setup risk but is not a full security audit." }
      ];
    }
    if (activeFilter === Role.DATA) {
      return [
        { q: "What are Data Science Claude Skills?", a: "Data Science Claude Skills help with data profiling, summaries, reporting, transformations, and analysis workflows." },
        { q: "Do these skills support common data formats?", a: "Many support common formats like CSV/JSON and workflows like profiling and exploration." },
        { q: "Are these skills MCP-compatible?", a: "Verified data skills are checked for MCP compatibility and include setup instructions." },
        { q: "What are common use cases?", a: "Generating quick dataset summaries, profiling columns, and automating repetitive analysis tasks." },
        { q: "How do I install a data science Claude Skill?", a: "Each listing includes installation steps, required environment variables, and setup guidance." }
      ];
    }
    if (activeFilter === Role.PRODUCT) {
      return [
        { q: "What are Product Management Claude Skills?", a: "PM Claude Skills help with writing specs, summarizing research, turning notes into plans, and improving team communication." },
        { q: "What are common PM use cases?", a: "Creating PRDs, extracting action items, writing release notes, and reviewing product docs." },
        { q: "Are PM skills MCP-compatible?", a: "Verified listings are checked for MCP compatibility and basic setup completeness." },
        { q: "How do I choose the best PM skill?", a: "Look at documentation quality, ratings, and whether the outputs match your team workflow." },
        { q: "Can I submit a PM skill?", a: "Yes — you can submit skills with clear documentation and example prompts so others can reuse them." }
      ];
    }
    if (activeFilter === Role.MARKETING) {
      return [
        { q: "What are Marketing Claude Skills?", a: "Marketing Claude Skills help with content planning, SEO audits, brand consistency, and campaign execution across channels." },
        { q: "What are common marketing use cases?", a: "Drafting blog briefs, analyzing competitor ads, polishing social copy, and generating naming or positioning ideas." },
        { q: "Are marketing skills MCP-compatible?", a: "Verified listings are checked for MCP compatibility and usable setup documentation." },
        { q: "How do I choose the right marketing skill?", a: "Use tags like SEO, Branding, or Social, and check example prompts to match your workflow." },
        { q: "Can I submit a marketing skill?", a: "Yes — submit skills with clear documentation and real prompt examples so teams can adopt them quickly." }
      ];
    }
    // Default / Homepage FAQs
    return [
      { q: "What is a Claude Skill?", a: "Skills are packaged instructions, scripts, and resources that turn Claude/GPT from a general-purpose agent into a specialized one tailored to your needs." },
      { q: "What is an MCP Server?", a: "An MCP Server (Model Context Protocol server) is a standard tool interface that lets Claude connect to external capabilities like scaffolding, DevOps tooling, and data workflows." },
      { q: "Is this a marketplace?", a: "No — this is a Claude Skills registry and directory, built for discovery and documentation. It’s free to browse and does not require payments." },
      { q: "Are the Claude Skills on this registry free?", a: "Most listings are free and open-source, but each skill may have its own license. We show key metadata like compatibility, author, and included files." },
      { q: "How do I install a Claude Skill?", a: "Each listing provides installation instructions, required environment variables, and setup guidance, including support for the Claude Code CLI and CodeX CLI where available" },
      { q: "What does “Verified MCP Server” mean?", a: "Verified means the listing has been checked for MCP compatibility and basic setup completeness, so it’s easier to install and run." },
      { 
        q: "Can I submit my own Claude Skill or MCP Server?", 
        a: (
          <>
            Yes — you can submit your Claude Skill or MCP server, along with documentation, metadata, and a working configuration, to this{' '}
            <a 
              href="https://github.com/claude-skills-registry/skills" 
              target="_blank" 
              rel="noreferrer" 
              className="underline decoration-black/30 hover:decoration-black transition-colors"
            >
              GitHub repository
            </a>{' '}
            so others can install it quickly.
          </>
        ) 
      }
    ];
  };

  const handleRoleChange = (role: string) => {
    setActiveFilter(role);
    setActiveTag(null);
    trackEvent('filter_role', { role });
  };

  const handleTagClick = (tag: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActiveTag(tag);
    setActiveFilter(Role.ALL);
    setSelectedSkill(null);
    trackEvent('select_tag', { tag });
  };

  const handleSkillSelect = (skill: Skill) => {
    setSelectedSkill(skill);
    trackEvent('select_skill', { skill_id: skill.id, skill_name: skill.name });
    if (!skill.repoUrl) {
      trackEvent('download_blocked', { skill_id: skill.id, skill_name: skill.name, reason: 'no_repo' });
    }
  };

  const toggleFaq = (index: number, question: string) => {
    setOpenFaqs((prev) => {
      const next = new Set(prev);
      const isOpen = next.has(index);
      if (isOpen) {
        next.delete(index);
        trackEvent('faq_close', { index, question, role: activeFilter, tag: activeTag ?? 'All' });
      } else {
        next.add(index);
        trackEvent('faq_open', { index, question, role: activeFilter, tag: activeTag ?? 'All' });
      }
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col selection:bg-black selection:text-white">
      <div className="fixed inset-0 grid-bg opacity-30 pointer-events-none z-0" />

      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-black/10 px-4 py-4 md:px-8 md:py-6 flex items-center justify-between">
        <div className="flex items-center gap-4 md:gap-6">
          <button
            type="button"
            className="w-8 h-8 bg-black flex items-center justify-center text-white font-bold text-lg select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            onClick={() => {setActiveFilter(Role.ALL); setActiveTag(null); trackEvent('nav_home');}}
            aria-label="Go to home"
          >
            C
          </button>
          <button
            type="button"
            className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] cursor-pointer truncate focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-sm"
            onClick={() => {setActiveFilter(Role.ALL); setActiveTag(null); trackEvent('nav_home');}}
          >
            Claude Skills Registry
          </button>
        </div>
        
        <div className="hidden md:flex items-center gap-12 text-[10px] font-bold uppercase tracking-widest text-black/60">
          <a 
            href="https://github.com/claude-skills-registry/skills" 
            className="hover:text-black transition-colors flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-sm"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="opacity-70">
              <path 
                fill="currentColor" 
                d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58 0-.28-.02-1.05-.02-2.06-3.34.72-4.04-1.61-4.04-1.61-.54-1.4-1.32-1.78-1.32-1.78-1.08-.74.08-.72.08-.72 1.2.08 1.84 1.24 1.84 1.24 1.06 1.82 2.78 1.3 3.46.98.1-.76.42-1.3.76-1.6-2.67-.3-5.48-1.34-5.48-5.98 0-1.32.46-2.4 1.24-3.24-.12-.3-.54-1.52.12-3.16 0 0 1.02-.32 3.34 1.24a11.5 11.5 0 0 1 3.04-.4c1.02 0 2.04.14 3.02.4 2.32-1.56 3.34-1.24 3.34-1.24.66 1.64.24 2.86.12 3.16.78.84 1.24 1.92 1.24 3.24 0 4.66-2.82 5.68-5.5 5.98.44.38.82 1.12.82 2.26 0 1.64-.02 2.96-.02 3.36 0 .32.22.7.82.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0Z" 
              />
            </svg>
            Github Repo
          </a>
        </div>
      </header>

      <div className="flex flex-1 relative z-10">
        <Sidebar activeFilter={activeFilter} setActiveFilter={handleRoleChange} />

        <main className="flex-1 p-4 md:p-16 max-w-[1600px] mx-auto w-full">
          
          {/* Mobile Role Navigation - Horizontal Scroll */}
          <div className="md:hidden sticky top-[65px] z-30 bg-white/95 backdrop-blur border-b border-black/5 -mx-4 px-4 py-3 mb-8 overflow-x-auto flex gap-2 no-scrollbar">
             {Object.values(Role).map(role => (
               <button
                 key={role}
                 type="button"
                 onClick={() => handleRoleChange(role)}
                 className={`whitespace-nowrap px-4 py-3 min-h-[44px] text-[11px] font-bold uppercase tracking-widest border rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
                   activeFilter === role
                   ? 'bg-black text-white border-black'
                   : 'bg-white text-black/70 border-black/20'
                 }`}
               >
                 {role}
               </button>
             ))}
             <button
               type="button"
               onClick={() => handleRoleChange('Cowork')}
               className={`whitespace-nowrap px-4 py-3 min-h-[44px] text-[11px] font-bold uppercase tracking-widest border rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
                 activeFilter === 'Cowork'
                 ? 'bg-black text-white border-black'
                 : 'bg-white text-black/70 border-black/20'
               }`}
             >
               Cowork
             </button>
          </div>

          {activeTag && (
            <div className="mb-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-black/60">
              <button type="button" onClick={() => { setActiveTag(null); trackEvent('clear_tag'); }} className="hover:text-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-sm">All Skills</button>
              <span>/</span>
              <span className="text-black">Tag: {activeTag}</span>
            </div>
          )}

          <div className="mb-12 md:mb-20 space-y-4 md:space-y-6">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-[0.9] max-w-4xl">
              {h1}
            </h2>
            <p className="text-base md:text-lg text-black/50 max-w-2xl leading-relaxed">
              {intro}
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 md:gap-8 mb-8 md:mb-12 border-b border-black/5 pb-8">
            <div className="flex flex-col gap-6 w-full md:w-auto">
              <div className="relative group w-full md:w-96">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/60 mb-2 block">Search Registry</span>
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter by name, description..."
                  className="w-full bg-transparent border-b border-black/10 py-3 md:py-2 text-sm font-mono placeholder:text-black/40 focus:outline-none focus:border-black transition-colors rounded-none focus-visible:ring-2 focus-visible:ring-black/20 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                />
                <div className="absolute right-0 bottom-2.5 opacity-20 group-hover:opacity-40 transition-opacity">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
                  </svg>
                </div>
              </div>

              <div className="flex bg-black/[0.03] p-1 rounded-none border border-black/5 w-full md:w-fit">
                {(['Trending', 'All'] as const).map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => { setViewMode(mode); trackEvent('toggle_view', { view_mode: mode }); }}
                    className={`flex-1 md:flex-none px-4 md:px-8 py-3 md:py-2.5 min-h-[44px] text-[10px] font-bold uppercase tracking-[0.15em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
                      viewMode === mode 
                      ? 'bg-white text-black shadow-sm border border-black/10' 
                      : 'text-black/60 hover:text-black'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-black/60">
              <span>Showing</span>
              <span className="text-black font-mono">{filteredSkills.length}</span>
              <span>Skills</span>
            </div>
          </div>

          {filteredSkills.length > 0 ? (
            <div className="border border-black/10 bg-white">
              <div className="relative">
                <div
                  ref={skillsScrollRef}
                  className="overflow-y-auto max-h-[65vh] sm:max-h-[70vh] lg:max-h-[75vh] custom-scrollbar overscroll-contain"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-px bg-[#F7F7F7] pb-12 md:pb-0">
                  {filteredSkills.map((skill) => (
                    <SkillCard 
                      key={skill.id} 
                      skill={skill} 
                      onClick={handleSkillSelect}
                      onTagClick={handleTagClick}
                    />
                  ))}
                  </div>
                </div>
                {showScrollHint && (
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 md:hidden">
                    <div className="h-12 bg-gradient-to-t from-white via-white/80 to-transparent" />
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-black/60">
                      <span>Scroll for more</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="py-24 flex flex-col items-center justify-center text-center space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-black/20">Empty Response</span>
              <p className="text-black/40 text-sm">No skills matching the current search parameters.</p>
              <button 
                type="button"
                onClick={() => {setActiveFilter(Role.ALL); setViewMode('Trending'); setSearchQuery(''); setActiveTag(null);}}
                className="text-xs font-bold underline underline-offset-4 hover:text-black/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-sm"
              >
                Clear All Filters
              </button>
            </div>
          )}

          {/* Context-Aware FAQ Section */}
          <section className="mt-20 md:mt-32 pt-16 md:pt-24 border-t border-black/10">
            <h3 className="text-2xl md:text-4xl font-bold mb-12 md:mb-16 tracking-tight">
              {activeFilter === Role.ALL ? 'Registry FAQ' : `${activeFilter} Claude Skills — FAQ`}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-y-12 gap-x-10 md:gap-x-20">
              {getFaqs().map((item, i) => (
                <div key={i} className="space-y-2">
                  <button
                    type="button"
                    aria-expanded={openFaqs.has(i)}
                    aria-controls={`faq-panel-${i}`}
                    className="w-full text-left flex items-center justify-between gap-3 text-sm font-bold uppercase tracking-widest text-black/80 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-sm"
                    onClick={() => toggleFaq(i, item.q)}
                  >
                    <span>{i + 1}) {item.q}</span>
                    <span className="text-black/50">{openFaqs.has(i) ? '−' : '+'}</span>
                  </button>
                  {openFaqs.has(i) && (
                    <p id={`faq-panel-${i}`} className="text-black/60 text-sm leading-relaxed max-w-lg">
                      {item.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="mt-20 md:mt-32 pt-16 md:pt-24 border-t border-black/10 max-w-5xl">
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 tracking-tight">Claude Skills Registry (Verified MCP Servers)</h3>
              <p className="text-black/60 text-base md:text-lg leading-relaxed max-w-3xl">
                As Claude 3.5 and Claude 4 expand, finding high-quality Claude Skills and MCP servers gets harder. We solve discovery by indexing verified skills into one searchable directory — with install steps, environment variables, and compatibility notes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
              <div className="space-y-4">
                <div className="w-6 h-px bg-black/20" />
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-black">Verified MCP Servers</h4>
                <p className="text-sm text-black/50 leading-relaxed">
                  Every Claude Skill is checked for MCP compatibility, so it works cleanly with Claude Desktop, Claude Code CLI, and your dev environment.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-6 h-px bg-black/20" />
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-black">One-Click Documentation</h4>
                <p className="text-sm text-black/50 leading-relaxed">
                  Instant access to installation paths, required environment variables, and ready-to-use setup instructions.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-6 h-px bg-black/20" />
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-black">Community Rated</h4>
                <p className="text-sm text-black/50 leading-relaxed">
                  See which Claude Skills the community actually uses to ship faster, with ratings, downloads, and real-world usage signals.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>

      <footer className="border-t border-black/10 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between text-[10px] font-bold uppercase tracking-widest text-black/70 bg-white z-20 gap-4">
        <div className="flex items-center gap-3">
          <span className="text-black/80">© 2026 Automata Network</span>
          <a
            href="https://twitter.com/AutomataNetwork"
            target="_blank"
            rel="noreferrer"
            className="text-black/70 hover:text-black transition-colors flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-sm"
            aria-label="Automata Network on Twitter"
          >
          </a>
        </div>
        <div className="flex gap-4 order-1 md:order-2">
          <a href="http://ata.ws/twitter" aria-label="X" className="opacity-80 hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-sm">
            <svg width="18" height="18" viewBox="0 0 13 12" aria-hidden="true" focusable="false" className="w-4.5 h-4.5 fill-current">
              <path
                opacity="0.75"
                d="M10.2373 0H12.2316L7.87571 5.08269L13 12H8.9887L5.84463 7.80577L2.25141 12H0.254237L4.91243 6.5625L0 0H4.11299L6.95198 3.83365L10.2373 0ZM9.53672 10.7827H10.6412L3.5113 1.15385H2.32486L9.53672 10.7827Z"
              />
            </svg>
          </a>
          <a href="http://ata.ws/discord" aria-label="Discord" className="opacity-80 hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-sm">
            <svg width="18" height="18" viewBox="0 0 16 12" aria-hidden="true" focusable="false" className="w-4.5 h-4.5 fill-current">
              <path
                opacity="0.75"
                d="M13.5446 0.995235C12.5246 0.535265 11.4313 0.195287 10.288 0.00196665C10.2778 1.20538e-05 10.2673 0.00127167 10.2579 0.0055713C10.2484 0.00987094 10.2406 0.0169979 10.2354 0.0259651C10.0954 0.271949 9.93937 0.592595 9.83004 0.845911C8.61747 0.664748 7.38471 0.664748 6.17214 0.845911C6.05037 0.56517 5.91305 0.29143 5.76082 0.0259651C5.75566 0.0168875 5.74785 0.00959932 5.73844 0.0050732C5.72903 0.000547074 5.71847 -0.00100181 5.70816 0.00063334C4.56552 0.193954 3.47222 0.533932 2.45158 0.994568C2.4428 0.998251 2.43536 1.00453 2.43025 1.01257C0.355643 4.06237 -0.213007 7.03684 0.0663185 9.97398C0.0670958 9.98117 0.0693288 9.98813 0.0728816 9.99444C0.0764344 10.0007 0.0812327 10.0063 0.0869846 10.0106C1.29788 10.8922 2.64847 11.5638 4.0822 11.9972C4.0922 12.0003 4.10289 12.0002 4.11288 11.9972C4.12287 11.9941 4.13169 11.988 4.1382 11.9798C4.44672 11.5673 4.72012 11.1295 4.95551 10.6713C4.95878 10.665 4.96066 10.6581 4.96103 10.651C4.9614 10.644 4.96025 10.6369 4.95766 10.6304C4.95507 10.6238 4.9511 10.6179 4.94601 10.6129C4.94092 10.608 4.93484 10.6043 4.92818 10.6019C4.49753 10.4398 4.08026 10.2441 3.68021 10.0166C3.67303 10.0125 3.66697 10.0067 3.66259 9.99969C3.6582 9.99267 3.65563 9.98467 3.6551 9.97641C3.65457 9.96815 3.65611 9.95989 3.65956 9.95237C3.66301 9.94485 3.66827 9.9383 3.67488 9.93331C3.75888 9.87132 3.84288 9.80666 3.92287 9.74199C3.93007 9.73618 3.93875 9.73248 3.94793 9.7313C3.95711 9.73012 3.96644 9.73152 3.97487 9.73533C6.5928 10.9113 9.42805 10.9113 12.0153 9.73533C12.0238 9.73129 12.0332 9.72971 12.0425 9.73077C12.0518 9.73184 12.0606 9.73549 12.068 9.74133C12.148 9.80665 12.2313 9.87132 12.316 9.93331C12.3226 9.9382 12.328 9.94466 12.3315 9.95211C12.3351 9.95957 12.3368 9.9678 12.3364 9.97605C12.336 9.98431 12.3335 9.99234 12.3293 9.99942C12.325 10.0065 12.3191 10.0124 12.312 10.0166C11.9133 10.246 11.4987 10.4399 11.0633 10.6013C11.0566 10.6037 11.0506 10.6075 11.0455 10.6125C11.0404 10.6175 11.0364 10.6235 11.0338 10.6301C11.0312 10.6367 11.0301 10.6438 11.0305 10.6509C11.0308 10.658 11.0327 10.665 11.036 10.6713C11.276 11.1292 11.5507 11.5652 11.8526 11.9792C11.8589 11.9877 11.8677 11.994 11.8777 11.9974C11.8877 12.0007 11.8985 12.0009 11.9086 11.9978C13.3448 11.5656 14.6976 10.8938 15.9099 10.0106C15.9158 10.0065 15.9207 10.0012 15.9244 9.99495C15.9281 9.98874 15.9304 9.98182 15.9312 9.97464C16.2645 6.57887 15.3725 3.6284 13.5653 1.0139C13.5608 1.0054 13.5535 0.99878 13.5446 0.995235ZM5.34683 8.18543C4.55886 8.18543 3.90887 7.47281 3.90887 6.59887C3.90887 5.72426 4.54619 5.0123 5.34683 5.0123C6.15348 5.0123 6.79746 5.73026 6.78479 6.59887C6.78479 7.47348 6.14748 8.18543 5.34683 8.18543ZM10.6633 8.18543C9.8747 8.18543 9.22539 7.47281 9.22539 6.59887C9.22539 5.72426 9.86203 5.0123 10.6633 5.0123C11.47 5.0123 12.114 5.73026 12.1013 6.59887C12.1013 7.47348 11.4707 8.18543 10.6633 8.18543Z"
              />
            </svg>
          </a>
          <a href="http://ata.ws/medium" aria-label="Medium" className="opacity-80 hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-sm">
            <svg width="18" height="18" viewBox="0 0 13 13" aria-hidden="true" focusable="false" className="w-4.5 h-4.5 fill-current">
              <g opacity="0.75" clipPath="url(#medium_clip)">
                <path d="M10.7197 0C11.979 0.000230329 12.9998 1.02102 13 2.28027V4.71191C12.9456 4.70829 12.891 4.70606 12.8359 4.70605H12.8232C12.5325 4.70605 12.1756 4.77654 11.9219 4.9043C11.633 5.03805 11.378 5.23849 11.166 5.50098C10.8249 5.92382 10.6186 6.49561 10.5684 7.1377C10.5667 7.15684 10.5648 7.17616 10.5635 7.19531C10.5621 7.21447 10.5614 7.2317 10.5605 7.25C10.5588 7.28437 10.5574 7.3189 10.5566 7.35352C10.5554 7.40901 10.5547 7.46526 10.5557 7.52148C10.5897 8.97599 11.3759 10.1387 12.7715 10.1387C12.8497 10.1387 12.9259 10.1351 13 10.1279V10.7197C12.9998 11.979 11.979 12.9998 10.7197 13H2.28027C1.02102 12.9998 0.000230329 11.979 0 10.7197V2.28027C0.000230586 1.02102 1.02102 0.000230586 2.28027 0H10.7197ZM2.3877 3.10352L2.39746 3.10547C2.77954 3.19171 2.97358 3.32044 2.97363 3.78418V9.21484C2.97363 9.67873 2.77861 9.8073 2.39648 9.89355L2.38672 9.89648V9.97559H3.91699V9.89648L3.90723 9.89453C3.52519 9.8083 3.33116 9.67939 3.33105 9.21582V4.09961L5.82812 9.97559H5.96973L8.54004 3.93555V9.34961C8.50729 9.71596 8.31475 9.8291 7.96875 9.90723L7.95898 9.90918V9.98828H10.625V9.90918L10.6143 9.90723C10.2682 9.82911 10.0718 9.71577 10.0391 9.34961L10.0371 3.78418H10.0391C10.0391 3.32061 10.2326 3.19171 10.6143 3.10547L10.625 3.10352V3.02441H8.53125L6.58789 7.59277L4.64355 3.02441H2.3877V3.10352ZM13 8.94727C12.2725 8.73315 11.7519 7.92924 11.8057 6.97852H13V8.94727ZM12.8145 5.01074C12.8802 5.01183 12.9423 5.02032 13 5.03613V6.70312H11.833C11.8767 5.7275 12.2266 5.02301 12.8145 5.01074Z" />
              </g>
              <defs>
                <clipPath id="medium_clip">
                  <rect width="13" height="13" />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a href="http://ata.ws/telegram" aria-label="Telegram" className="opacity-80 hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-sm">
            <svg width="18" height="18" viewBox="0 0 14 12" aria-hidden="true" focusable="false" className="w-4.5 h-4.5 fill-current">
              <path
                opacity="0.75"
                d="M13.055 0.0789028L0.653714 4.96642C-0.192625 5.31384 -0.187729 5.79638 0.498435 6.01155L3.68235 7.02665L11.049 2.27639C11.3973 2.05979 11.7156 2.17631 11.454 2.41364L5.48554 7.9188H5.48414L5.48554 7.91952L5.26591 11.2737C5.58766 11.2737 5.72965 11.1228 5.91011 10.9448L7.4566 9.40786L10.6734 11.8363C11.2665 12.1701 11.6925 11.9985 11.8401 11.2751L13.9517 1.10402C14.1679 0.218301 13.6209 -0.182737 13.055 0.0789028Z"
              />
            </svg>
          </a>
          <a href="http://ata.ws/github" aria-label="GitHub" className="opacity-80 hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-sm">
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="w-4.5 h-4.5 fill-current">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.758-1.333-1.758-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.304 3.492.997.108-.776.418-1.305.76-1.605-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.922.42.36.81 1.096.81 2.214 0 1.596-.015 2.884-.015 3.276 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
        </div>
      </footer>

      {selectedSkill && (
        <SkillDetail 
          skill={selectedSkill} 
          onClose={() => setSelectedSkill(null)} 
          onTagClick={handleTagClick}
        />
      )}
    </div>
  );
};

export default App;
