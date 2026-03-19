
import { Skill, Role } from '../types';

export const SKILLS: Skill[] = [
  {
    id: '9',
    name: 'frontend-design',
    description: 'Creates distinctive, production-ready frontend interfaces with bold aesthetics and real code.',
    longDescription: 'A design-forward Claude Skill that commits to a clear aesthetic direction and produces production-grade HTML/CSS/React interfaces. It avoids generic AI slop by choosing purposeful typography, motion, and spatial composition, delivering memorable, shippable frontends.',
    author: 'Anthropic',
    downloads: '10.8k',
    stars: 42002,
    roles: [Role.FRONTEND],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add frontend-design',
    yamlConfig: 'tools:\n  - name: frontend-design\n    version: 1.0.0\n    mode: bold',
    lastUpdated: '2025.12.4',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'Claude App',
      'Gemini CLI'
    ],
        files: ['LICENSE.txt', 'SKILL.md'],
    repoUrl: 'https://github.com/anthropics/skills/tree/main/skills/frontend-design',
    triggers: [
      'Design a maximalist landing page for a new fintech launch',
      'Build a brutalist React dashboard with bold typography and motion',
      'Create a retro-futuristic portfolio layout in HTML/CSS',
      'Restyle an existing page with a luxury editorial theme'
    ],
    features: [
      'Commits to a singular aesthetic direction with purposeful typography and color systems',
      'Generates production-ready HTML/CSS/React with cohesive motion and spacing',
      'Avoids generic AI design tropes by using distinctive layouts and textures'
    ],
    bestFor: [
      'Teams needing memorable, shippable frontend experiences',
      'Designers who want expressive UI scaffolds fast',
      'Product squads refreshing brand surfaces without generic patterns'
    ],
    tags: ['Frontend', 'UI Design', 'CSS', 'React', 'Animations']
  },
  {
    id: '10',
    name: 'algorithmic-art',
    description: 'Builds seeded, interactive p5.js generative art from an algorithmic philosophy manifesto.',
    longDescription: 'A creative coding skill that first writes an algorithmic art philosophy, then ships a self-contained p5.js artifact with seed controls and parameter sliders. It emphasizes emergent systems, controlled randomness, and master-level craft for gallery-ready generative works.',
    author: 'Anthropic',
    downloads: '6.4k',
    stars: 42002,
    roles: [Role.FRONTEND],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add algorithmic-art',
    yamlConfig: 'tools:\n  - name: algorithmic-art\n    runtime: p5.js\n    seed_controls: true',
    lastUpdated: '2025.12.1',
    type: 'Agent Skill',
    compatibility: [
      'Claude App',
      'Codex CLI',
      'Claude Code CLI',
      'p5.js',
      'Gemini CLI'
    ],
        files: ['LICENSE.txt', 'SKILL.md', 'templates/'],
    repoUrl: 'https://github.com/anthropics/skills/tree/main/skills/algorithmic-art',
    triggers: [
      'Create a flow-field generative artwork with seeded randomness',
      'Write an algorithmic philosophy and render it in p5.js',
      'Build an interactive HTML artifact with parameter sliders'
    ],
    features: [
      'Generates an algorithmic philosophy before coding the artwork',
      'Ships a self-contained p5.js artifact with seed navigation and controls',
      'Enforces seeded randomness and reproducible parameter sets'
    ],
    bestFor: [
      'Generative artists shipping interactive drops',
      'Hackathons needing gallery-quality p5 exports',
      'Engineers exploring flow fields, particles, and noise fields'
    ],
    tags: ['Generative Art', 'p5.js', 'Creative Coding', 'Interactive', 'Seeded']
  },
  {
    id: '11',
    name: 'brand-guidelines',
    description: 'Applies Anthropic brand colors and typography across decks, docs, and artifacts.',
    longDescription: 'Keeps artifacts on-brand by enforcing Anthropic colors, Poppins/Lora typography, and accent cycling. Great for post-processing slides, docs, and visual assets that need the official Anthropic look without manual styling.',
    author: 'Anthropic',
    downloads: '3.1k',
    stars: 42002,
    roles: [Role.FRONTEND, Role.MARKETING],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add brand-guidelines',
    yamlConfig: 'tools:\n  - name: brand-guidelines\n    palette: anthropic\n    typography: poppins-lora',
    lastUpdated: '2025.12.1',
    type: 'Agent Skill',
    compatibility: [
      'Claude App',
      'Codex CLI',
      'Claude Code CLI',
      'PPTX tooling',
      'Gemini CLI'
    ],
        files: ['LICENSE.txt', 'SKILL.md'],
    repoUrl: 'https://github.com/anthropics/skills/tree/main/skills/brand-guidelines',
    triggers: [
      'Restyle this deck to match Anthropic branding',
      'Apply Anthropic colors and typography to my document',
      'Ensure this visual follows Anthropic brand guidelines'
    ],
    features: [
      'Applies Anthropic palette (dark, light, mid gray, accent colors)',
      'Uses Poppins for headings and Lora for body with smart fallbacks',
      'Cycles accent colors on non-text shapes while preserving hierarchy'
    ],
    bestFor: [
      'Internal decks and docs that must stay on-brand',
      'Teams templating artifacts with Anthropic styling',
      'Reviewers enforcing color and typography standards'
    ],
    tags: ['Branding', 'Typography', 'Colors', 'Anthropic', 'Templates']
  },
  {
    id: '12',
    name: 'canvas-design',
    description: 'Crafts design philosophies then renders museum-grade posters as PNG/PDF.',
    longDescription: 'A visual design skill that writes a design manifesto and then expresses it as a polished static artifact. It prioritizes spatial composition, minimal text, meticulous craft, and export-ready PNG/PDF outputs.',
    author: 'Anthropic',
    downloads: '7.5k',
    stars: 42002,
    roles: [Role.FRONTEND],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add canvas-design',
    yamlConfig: 'tools:\n  - name: canvas-design\n    output: pdf\n    quality: high',
    lastUpdated: '2025.12.1',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'Claude App',
      'Gemini CLI'
    ],
        files: ['LICENSE.txt', 'SKILL.md', 'canvas-fonts/'],
    repoUrl: 'https://github.com/anthropics/skills/tree/main/skills/canvas-design',
    triggers: [
      'Design a brutalist poster as a high-res PNG',
      'Create a gallery-ready PDF from a design philosophy',
      'Generate an abstract print with minimal text'
    ],
    features: [
      'Creates a design philosophy before rendering the canvas',
      'Exports single-page, print-ready PNG/PDF artifacts',
      'Enforces minimal text and master-level spacing and craft'
    ],
    bestFor: [
      'Posters and print-quality artifacts',
      'Visual essays, zines, and art objects',
      'Design teams needing gallery-level comps fast'
    ],
    tags: ['Design', 'Poster', 'PDF', 'PNG', 'Visual Arts']
  },
  {
    id: '13',
    name: 'doc-coauthoring',
    description: 'Structured three-stage workflow for drafting and refining documentation.',
    longDescription: 'Guides teams through context gathering, iterative structuring, and reader testing for docs. Ideal for PRDs, RFCs, decision records, and proposals where clarity, audience fit, and reviewability matter.',
    author: 'Anthropic',
    downloads: '12.0k',
    stars: 42002,
    roles: [Role.PRODUCT],
    isTrending: false,
    isCowork: true,
    setupCommand: 'claude mcp add doc-coauthoring',
    yamlConfig: 'tools:\n  - name: doc-coauthoring\n    workflow: guided\n    stages: 3',
    lastUpdated: '2025.12.4',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'Claude App',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/anthropics/skills/tree/main/skills/doc-coauthoring',
    triggers: [
      'Help me draft a PRD with a co-authoring flow',
      'Guide me through a design doc with reader testing',
      'Set up a structured workflow for this RFC'
    ],
    features: [
      'Stage 1 context gathering with clarifying questions',
      'Section-by-section brainstorming and refinement',
      'Reader-testing pass to surface gaps before sharing'
    ],
    bestFor: [
      'PRDs, RFCs, and design docs',
      'Decision records and proposals',
      'Leadership updates that need airtight clarity'
    ],
    tags: ['Docs', 'PRD', 'RFC', 'Collaboration', 'Writing']
  },
  {
    id: '14',
    name: 'docx',
    description: 'Creates and edits Word documents with tracked changes, comments, and preserved formatting.',
    longDescription: 'A DOCX-focused skill for professional document workflows. It drafts, edits, and restructures Word files while preserving styles, handling comments, and managing tracked changes for review cycles.',
    author: 'Anthropic',
    downloads: '14.2k',
    stars: 42002,
    roles: [Role.PRODUCT],
    isTrending: false,
    isCowork: true,
    setupCommand: 'claude mcp add docx',
    yamlConfig: 'tools:\n  - name: docx\n    track_changes: true\n    comments: true',
    lastUpdated: '2025.12.1',
    type: 'Agent Skill',
    compatibility: [
      'Claude App',
      'Codex CLI',
      'Claude Code CLI',
      'DOCX Pipelines',
      'Gemini CLI'
    ],
        files: ['LICENSE.txt', 'SKILL.md', 'docx-js.md', 'ooxml.md', 'ooxml/', 'scripts/'],
    repoUrl: 'https://github.com/anthropics/skills/tree/main/skills/docx',
    triggers: [
      'Rewrite this docx and keep tracked changes',
      'Add comments and suggestions to this proposal',
      'Extract and restructure text from a Word doc'
    ],
    features: [
      'Preserves formatting, styles, and tracked changes',
      'Adds inline comments and suggestions cleanly',
      'Extracts text and structure for downstream edits'
    ],
    bestFor: [
      'Contract and policy edits with review history',
      'Product specs that need comment threads',
      'Teams requiring DOCX fidelity across versions'
    ],
    tags: ['DOCX', 'Office', 'Formatting', 'Comments', 'Track Changes']
  },
  {
    id: '15',
    name: 'internal-comms',
    description: 'Templates and guidance for internal updates, newsletters, and incident comms.',
    longDescription: 'Provides structured patterns for internal communication: 3P updates, leadership notes, FAQs, and incident reports. It tunes tone for audience, keeps brevity, and enforces clarity so updates land well.',
    author: 'Anthropic',
    downloads: '5.6k',
    stars: 42002,
    roles: [Role.PRODUCT],
    isTrending: false,
    isCowork: true,
    setupCommand: 'claude mcp add internal-comms',
    yamlConfig: 'tools:\n  - name: internal-comms\n    templates: 3p,newsletter,faq',
    lastUpdated: '2025.12.1',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'Claude App',
      'Gemini CLI'
    ],
        files: ['LICENSE.txt', 'SKILL.md', 'examples/'],
    repoUrl: 'https://github.com/anthropics/skills/tree/main/skills/internal-comms',
    triggers: [
      'Draft a 3P status update for leadership',
      'Write an internal newsletter in our house style',
      'Summarize an incident with clear follow-ups'
    ],
    features: [
      'Provides templates for 3P updates, newsletters, and FAQs',
      'Adjusts tone and structure for internal audiences',
      'Includes checklists for clarity, brevity, and next steps'
    ],
    bestFor: [
      'Leadership briefings and internal updates',
      'Incident and status communications',
      'Teams standardizing internal messaging'
    ],
    tags: ['Communications', 'Status', 'Updates', 'Leadership', 'Newsletter']
  },
  {
    id: '16',
    name: 'mcp-builder',
    description: 'Blueprints and best practices for building MCP servers in Python or TypeScript.',
    longDescription: 'A development guide that walks through designing, scaffolding, and hardening MCP servers. Covers tool schemas, resource definitions, security considerations, and deployment patterns for Claude integrations.',
    author: 'Anthropic',
    downloads: '9.9k',
    stars: 42002,
    roles: [Role.DEVOPS],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add mcp-builder',
    yamlConfig: 'tools:\n  - name: mcp-builder\n    languages: [python, typescript]\n    templates: enabled',
    lastUpdated: '2025.12.1',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'Claude App',
      'Gemini CLI'
    ],
        files: ['LICENSE.txt', 'SKILL.md', 'reference/', 'scripts/'],
    repoUrl: 'https://github.com/anthropics/skills/tree/main/skills/mcp-builder',
    triggers: [
      'Show me how to scaffold a new MCP server',
      'Design tool schemas for an external API',
      'Harden and deploy an MCP connector'
    ],
    features: [
      'Provides FastMCP and TypeScript SDK starter patterns',
      'Guides tool/resource schema design and validation',
      'Includes security, testing, and deployment checklists'
    ],
    bestFor: [
      'Platform teams adding new connectors',
      'Hackers prototyping MCP servers quickly',
      'Maintainers documenting tool contracts for Claude'
    ],
    tags: ['MCP', 'SDK', 'APIs', 'TypeScript', 'Python']
  },
  {
    id: '17',
    name: 'pdf',
    description: 'Extracts, merges, fills, and generates PDFs with form handling support.',
    longDescription: 'A PDF toolkit for text/table extraction, merging and splitting documents, rotating pages, and filling forms. Perfect for automating PDF-heavy workflows while keeping fidelity.',
    author: 'Anthropic',
    downloads: '11.3k',
    stars: 42002,
    roles: [Role.PRODUCT],
    isTrending: false,
    isCowork: true,
    setupCommand: 'claude mcp add pdf',
    yamlConfig: 'tools:\n  - name: pdf\n    forms: true\n    merge: true',
    lastUpdated: '2025.12.1',
    type: 'Agent Skill',
    compatibility: [
      'Claude App',
      'Codex CLI',
      'Claude Code CLI',
      'Python 3.10+',
      'Gemini CLI'
    ],
        files: ['LICENSE.txt', 'SKILL.md', 'forms.md', 'reference.md', 'scripts/'],
    repoUrl: 'https://github.com/anthropics/skills/tree/main/skills/pdf',
    triggers: [
      'Extract tables from this PDF and summarize',
      'Merge these PDFs into a single document',
      'Fill out this PDF form programmatically'
    ],
    features: [
      'Text and table extraction utilities for PDFs',
      'Merge, split, rotate, and assemble PDF documents',
      'Form filling and validation support for complex inputs'
    ],
    bestFor: [
      'Form processing and document assembly',
      'Bulk PDF analysis and extraction',
      'Operational teams automating PDF workflows'
    ],
    tags: ['PDF', 'Forms', 'Parsing', 'Automation', 'Documents']
  },
  {
    id: '18',
    name: 'pptx',
    description: 'Builds and edits presentations with layouts, speaker notes, and comments.',
    longDescription: 'A presentation-focused skill that creates and restructures PPTX files while preserving layouts, themes, and fonts. It adds speaker notes, comments, and slide-level edits for polished decks.',
    author: 'Anthropic',
    downloads: '8.8k',
    stars: 42002,
    roles: [Role.PRODUCT],
    isTrending: false,
    isCowork: true,
    setupCommand: 'claude mcp add pptx',
    yamlConfig: 'tools:\n  - name: pptx\n    preserve_layouts: true\n    notes: true',
    lastUpdated: '2025.12.1',
    type: 'Agent Skill',
    compatibility: [
      'Claude App',
      'Codex CLI',
      'Claude Code CLI',
      'PPTX Pipelines',
      'Gemini CLI'
    ],
        files: ['LICENSE.txt', 'SKILL.md', 'html2pptx.md', 'ooxml.md', 'ooxml/', 'scripts/'],
    repoUrl: 'https://github.com/anthropics/skills/tree/main/skills/pptx',
    triggers: [
      'Create a new executive-ready slide deck',
      'Refactor this PPTX while keeping layout and notes',
      'Add speaker notes and comments to this presentation'
    ],
    features: [
      'Creates and edits slides while preserving themes and layouts',
      'Adds comments and speaker notes for collaboration',
      'Supports structured edits without breaking formatting'
    ],
    bestFor: [
      'Executive and product decks',
      'Workshops and training presentations',
      'Template-driven slide production'
    ],
    tags: ['PPTX', 'Slides', 'Presentations', 'Speaker Notes', 'Layouts']
  },
  {
    id: '19',
    name: 'skill-creator',
    description: 'Guides authors through drafting new SKILL.md files and metadata.',
    longDescription: 'A meta-skill that helps you design, document, and publish Claude skills. It covers trigger design, YAML snippets, safety guidance, and documentation completeness for consistent registry entries.',
    author: 'Anthropic',
    downloads: '4.7k',
    stars: 42002,
    roles: [Role.PRODUCT],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add skill-creator',
    yamlConfig: 'tools:\n  - name: skill-creator\n    templates: true\n    safety_notes: true',
    lastUpdated: '2025.12.1',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'Claude App',
      'Gemini CLI'
    ],
        files: ['LICENSE.txt', 'SKILL.md', 'references/', 'scripts/'],
    repoUrl: 'https://github.com/anthropics/skills/tree/main/skills/skill-creator',
    triggers: [
      'Draft a new SKILL.md for my capability',
      'Review and improve this skill documentation',
      'Generate YAML metadata and triggers for a new skill'
    ],
    features: [
      'Checklists for metadata, triggers, and safety language',
      'Templates for SKILL.md and config files',
      'Guidance on agentic workflows and integration notes'
    ],
    bestFor: [
      'Teams publishing internal or public skills',
      'Contributors updating SKILL.md files',
      'Maintainers standardizing registry entries'
    ],
    tags: ['Skills', 'Metadata', 'Workflow', 'Authoring', 'Templates']
  },
  {
    id: '20',
    name: 'slack-gif-creator',
    description: 'Optimizes animated GIFs for Slack with size, loop, and palette guidance.',
    longDescription: 'A lightweight media skill for crafting Slack-friendly GIFs. It enforces dimensions, loop timing, and palette choices while providing storyboarding prompts to keep animations crisp and on-message.',
    author: 'Anthropic',
    downloads: '2.9k',
    stars: 42002,
    roles: [Role.PRODUCT],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add slack-gif-creator',
    yamlConfig: 'tools:\n  - name: slack-gif-creator\n    max_dimensions: 480\n    loop: true',
    lastUpdated: '2025.12.4',
    type: 'Agent Skill',
    compatibility: [
      'Claude App',
      'Codex CLI',
      'Claude Code CLI',
      'Slack',
      'Gemini CLI'
    ],
        files: ['LICENSE.txt', 'SKILL.md', 'core/', 'requirements.txt'],
    repoUrl: 'https://github.com/anthropics/skills/tree/main/skills/slack-gif-creator',
    triggers: [
      'Make a celebratory Slack GIF for a launch',
      'Storyboard and export a looping GIF under 3MB',
      'Optimize this animation for Slack delivery'
    ],
    features: [
      'Constraints for Slack-friendly dimensions and duration',
      'Palette and loop guidance to keep files lightweight',
      'Storyboarding prompts for clear, fun animations'
    ],
    bestFor: [
      'Team celebrations and launch moments',
      'Culture GIF threads in Slack',
      'Lightweight animations that stay within Slack limits'
    ],
    tags: ['GIF', 'Slack', 'Animation', 'Loops', 'Assets']
  },
  {
    id: '21',
    name: 'theme-factory',
    description: 'Applies curated color/font themes or generates new ones for any artifact.',
    longDescription: 'A theming toolkit with 10 preset palettes and font pairings that can be applied to slides, docs, HTML, or generated on the fly. Ensures cohesive color systems and typography across artifacts.',
    author: 'Anthropic',
    downloads: '6.1k',
    stars: 42002,
    roles: [Role.FRONTEND, Role.MARKETING],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add theme-factory',
    yamlConfig: 'tools:\n  - name: theme-factory\n    presets: 10\n    generate: true',
    lastUpdated: '2025.12.1',
    type: 'Agent Skill',
    compatibility: [
      'Claude App',
      'Codex CLI',
      'Claude Code CLI',
      'Slides & Docs',
      'Gemini CLI'
    ],
        files: ['LICENSE.txt', 'SKILL.md', 'theme-showcase.pdf', 'themes/'],
    repoUrl: 'https://github.com/anthropics/skills/tree/main/skills/theme-factory',
    triggers: [
      'Apply a bold theme to this slide deck',
      'Generate a new color/font pairing for my report',
      'Restyle this HTML artifact with a curated theme'
    ],
    features: [
      'Ten curated theme presets with color and font pairings',
      'On-the-fly theme generation for custom palettes',
      'Applies consistent tokens across slides, docs, and HTML'
    ],
    bestFor: [
      'Rapid theming of artifacts and decks',
      'Brand experiments and style exploration',
      'Designers needing consistent tokens fast'
    ],
    tags: ['Themes', 'Colors', 'Typography', 'Branding', 'Style']
  },
  {
    id: '22',
    name: 'web-artifacts-builder',
    description: 'Builds complex claude.ai artifacts with React, Tailwind, and shadcn/ui.',
    longDescription: 'A frontend toolkit for multi-component claude.ai artifacts that need state management, routing, or shadcn/ui components. It scaffolds repos, applies Tailwind, and encourages production-grade React patterns.',
    author: 'Anthropic',
    downloads: '10.2k',
    stars: 42002,
    roles: [Role.FRONTEND],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add web-artifacts-builder',
    yamlConfig: 'tools:\n  - name: web-artifacts-builder\n    frameworks: [react, tailwind, shadcn]\n    init_script: scripts/init-artifact.sh',
    lastUpdated: '2025.12.1',
    type: 'Agent Skill',
    compatibility: [
      'Claude App',
      'Codex CLI',
      'Claude Code CLI',
      'React 18+',
      'Gemini CLI'
    ],
        files: ['LICENSE.txt', 'SKILL.md', 'scripts/'],
    repoUrl: 'https://github.com/anthropics/skills/tree/main/skills/web-artifacts-builder',
    triggers: [
      'Scaffold a React/Tailwind artifact for Claude',
      'Add shadcn/ui components with routing support',
      'Create a multi-step interactive artifact with state'
    ],
    features: [
      'Repository scaffolding scripts for claude.ai artifacts',
      'React + Tailwind + shadcn/ui component patterns',
      'Supports routing, state, and complex UI composition'
    ],
    bestFor: [
      'Complex interactive claude.ai artifacts',
      'Multi-step demos and stateful experiences',
      'Frontend engineers building rich showcases'
    ],
    tags: ['React', 'Tailwind', 'shadcn', 'Artifacts', 'Frontend']
  },
  {
    id: '23',
    name: 'webapp-testing',
    description: 'Playwright-based toolkit for testing local web apps with screenshots and logs.',
    longDescription: 'Automates browser testing via Playwright scripts to verify frontend behavior, capture screenshots, and surface console/network logs. Ideal for smoke tests, debugging regressions, and UI validations.',
    author: 'Anthropic',
    downloads: '5.0k',
    stars: 42002,
    roles: [Role.DEVOPS],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add webapp-testing',
    yamlConfig: 'tools:\n  - name: webapp-testing\n    runner: playwright\n    headless: true',
    lastUpdated: '2025.12.1',
    type: 'Agent Skill',
    compatibility: [
      'Claude App',
      'Codex CLI',
      'Claude Code CLI',
      'Playwright',
      'Gemini CLI'
    ],
        files: ['LICENSE.txt', 'SKILL.md', 'examples/', 'scripts/'],
    repoUrl: 'https://github.com/anthropics/skills/tree/main/skills/webapp-testing',
    triggers: [
      'Write a Playwright smoke test for my local app',
      'Capture screenshots and console logs for this page',
      'Validate UI flows in staging with Playwright'
    ],
    features: [
      'Generates Playwright scripts for local or staging apps',
      'Captures screenshots, console, and network logs',
      'Supports headless runs for CI-friendly smoke tests'
    ],
    bestFor: [
      'QA smoke tests on staging builds',
      'Debugging UI regressions quickly',
      'Automated validation of critical user flows'
    ],
    tags: ['Playwright', 'Testing', 'QA', 'Screenshots', 'Browser']
  },
  {
    id: '24',
    name: 'xlsx',
    description: 'Creates and edits spreadsheets with formulas, formatting, and analysis.',
    longDescription: 'A spreadsheet powerhouse for generating, editing, and analyzing XLSX/CSV files. It preserves formulas, recalculates sheets, formats tables, and supports data analysis and visualization.',
    author: 'Anthropic',
    downloads: '13.4k',
    stars: 42002,
    roles: [Role.DATA],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add xlsx',
    yamlConfig: 'tools:\n  - name: xlsx\n    formulas: true\n    recalc: true',
    lastUpdated: '2025.12.1',
    type: 'Agent Skill',
    compatibility: [
      'Claude App',
      'Codex CLI',
      'Claude Code CLI',
      'Python 3.10+',
      'Gemini CLI'
    ],
        files: ['LICENSE.txt', 'SKILL.md', 'recalc.py'],
    repoUrl: 'https://github.com/anthropics/skills/tree/main/skills/xlsx',
    triggers: [
      'Build an Excel model with formulas and formatting',
      'Clean and analyze this CSV into a styled XLSX',
      'Preserve and recalc formulas while editing this sheet'
    ],
    features: [
      'Creates and edits spreadsheets while preserving formulas and styles',
      'Supports recalculation, validation, and data analysis workflows',
      'Formats tables and charts for presentation-ready sheets'
    ],
    bestFor: [
      'Financial and operational models',
      'Data cleanup and migration from CSV/TSV',
      'Teams needing reliable Excel edits at scale'
    ],
    tags: ['Excel', 'Spreadsheet', 'Formulas', 'Data', 'Charts']
  },
  {
    id: '25',
    name: 'cache-components',
    description: 'Audits Next.js routes to prevent cache stampedes and stale ISR responses.',
    longDescription: 'A Vercel-built skill that inspects Next.js caching primitives, flags risky fetches, and proposes safe revalidation strategies. It keeps route handlers, RSC fetches, and ISR pages aligned with platform best practices for consistent performance.',
    author: 'Vercel Labs',
    downloads: '4.3k',
    stars: 137153,
    roles: [Role.FRONTEND],
    isTrending: true,
    isCowork: false,
    setupCommand: 'claude mcp add cache-components',
    yamlConfig: 'tools:\n  - name: cache-components\n    framework: nextjs\n    mode: audit',
    lastUpdated: '2026.1.8',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'Claude App',
      'Next.js 14+',
      'Gemini CLI'
    ],
        files: ['PATTERNS.md', 'REFERENCE.md', 'SKILL.md', 'TROUBLESHOOTING.md'],
    repoUrl: 'https://github.com/vercel/next.js/tree/canary/.claude-plugin/plugins/cache-components/skills/cache-components',
    triggers: [
      'Audit caching for this Next.js route',
      'Patch ISR settings to avoid stale data',
      'Explain how this fetch will be cached on Vercel'
    ],
    features: [
      'Detects cache stampede risks and missing revalidate settings',
      'Reviews RSC fetch usage and recommends cache modes',
      'Suggests safe ISR defaults with incremental invalidation plans'
    ],
    bestFor: [
      'Next.js teams shipping ISR-heavy apps',
      'Avoiding stale data and cache regressions',
      'Performance-focused frontend engineers'
    ],
    tags: ['Next.js', 'Caching', 'Performance', 'ISR', 'Vercel']
  },
  {
    id: '27',
    name: 'command-development',
    description: 'Scaffolds plugin commands with typed schemas, validation, and docs.',
    longDescription: 'A plugin-dev helper that drafts new command definitions, covers input/output schemas, and seeds tests. It keeps error handling, telemetry hooks, and README usage examples consistent across a command surface.',
    author: 'Anthropic',
    downloads: '3.5k',
    stars: 56950,
    roles: [Role.DEVOPS],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add command-development',
    yamlConfig: 'tools:\n  - name: command-development\n    language: typescript\n    templates: command',
    lastUpdated: '2025.11.17',
    type: 'Agent Skill / Plugin Dev',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'Claude App',
      'Gemini CLI'
    ],
        files: ['README.md', 'SKILL.md', 'examples/', 'references/'],
    repoUrl: 'https://github.com/anthropics/claude-code/tree/main/plugins/plugin-dev/skills/command-development',
    triggers: [
      'Scaffold a new plugin command with validation',
      'Add typed inputs and outputs to this command',
      'Write tests and docs for a command surface'
    ],
    features: [
      'Generates command manifests with input validation and typings',
      'Includes error handling, telemetry, and test stubs',
      'Produces README snippets and usage examples automatically'
    ],
    bestFor: [
      'Plugin developers adding new commands',
      'Teams standardizing command behaviors',
      'Maintainers shipping CLI-driven workflows'
    ],
    tags: ['CLI', 'Plugins', 'TypeScript', 'Validation', 'Docs']
  },
  {
    id: '28',
    name: 'code-change-verification',
    description: 'Verifies diffs with targeted tests, risk notes, and merge-ready checklists.',
    longDescription: 'An OpenAI-authored preflight skill that inspects code changes, proposes focused tests, and flags behavioral risks before merge. It pairs static heuristics with lightweight plans to keep CI fast while raising confidence.',
    author: 'OpenAI',
    downloads: '7.2k',
    stars: 18363,
    roles: [Role.DEVOPS],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add code-change-verification',
    yamlConfig: 'tools:\n  - name: code-change-verification\n    tests: auto\n    risk_threshold: medium',
    lastUpdated: '2026.1.10',
    type: 'Agent Skill',
    compatibility: [
      'Codex CLI',
      'Claude Code CLI',
      'GitHub Actions',
      'Gemini CLI'
    ],
        files: ['SKILL.md', 'scripts/'],
    repoUrl: 'https://github.com/openai/openai-agents-python/tree/main/.codex/skills/code-change-verification',
    triggers: [
      'Verify this PR before merge',
      'Generate a test plan for this diff',
      'Explain risks in these code changes'
    ],
    features: [
      'Runs static heuristics and suggests targeted tests',
      'Highlights behavioral risk areas with owners',
      'Outputs merge checklist with pass/fail signals'
    ],
    bestFor: [
      'Engineers shipping PRs in CI',
      'Release managers needing preflight checks',
      'Teams gating merges on risk analysis'
    ],
    tags: ['Testing', 'CI/CD', 'Risk Analysis', 'PR Review', 'Automation']
  },
  {
    id: '29',
    name: 'add-uint-support',
    description: 'Add unsigned integer (uint16/uint32/uint64) support to PyTorch operators by updating AT_DISPATCH macros.',
    longDescription: 'Walks through converting dispatch sites to AT_DISPATCH_V2, expanding type groups with unsigned macros, and pairing the changes with regression tests.',
    author: 'PyTorch',
    downloads: '2.1k',
    stars: 96650,
    roles: [Role.BACKEND],
    isTrending: true,
    isCowork: false,
    setupCommand: 'claude mcp add add-uint-support',
    yamlConfig: 'tools:\n  - name: add-uint-support\n    types: [uint16, uint32, uint64]\n    macro: at_dispatch_v2',
    lastUpdated: '2025.11.2',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'PyTorch',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/pytorch/pytorch/tree/main/.claude/skills/add-uint-support',
    triggers: [
      'Add uint16/uint32/uint64 coverage to an ATen operator',
      'User mentions unsigned or barebones unsigned type support',
      'Follow up after converting a kernel to AT_DISPATCH_V2'
    ],
    features: [
      'Explains AT_DISPATCH_V2 patterns and unsigned type groups',
      'Shows how to append AT_BAREBONES_UNSIGNED_TYPES or AT_INTEGRAL_TYPES_V2',
      'Pairs macro updates with targeted regression tests and overflow checks'
    ],
    bestFor: [
      'PyTorch kernel contributors',
      'Maintainers extending dtype parity across CPU/GPU',
      'Reviewers checking unsigned dispatch changes'
    ],
    tags: ['PyTorch', 'ATen', 'Dispatch', 'Unsigned', 'C++']
  },
  {
    id: '30',
    name: 'rule-identifier',
    description: 'Extracts implicit rules from codebases and turns them into enforceable policies.',
    longDescription: 'A writing-rules helper that scans repositories, surfaces unwritten conventions, and drafts .rules files for consistent guardrails. It keeps style, safety, and dependency policies explicit for teams.',
    author: 'Anthropic',
    downloads: '3.2k',
    stars: 56950,
    roles: [Role.PRODUCT],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add rule-identifier',
    yamlConfig: 'tools:\n  - name: rule-identifier\n    output: rules\n    mode: audit',
    lastUpdated: '2025.11.17',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'Claude App',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/anthropics/claude-code/tree/main/plugins/hookify/skills/writing-rules',
    triggers: [
      'Infer coding rules from this repo',
      'Draft .rules for lint and style enforcement',
      'Document implicit guardrails for new contributors'
    ],
    features: [
      'Scans code to surface implicit conventions',
      'Generates .rules files with rationales and examples',
      'Maps rules to lint or CI enforcement hooks'
    ],
    bestFor: [
      'Teams formalizing unwritten practices',
      'Repos lacking explicit guardrails',
      'Onboarding docs that explain style decisions'
    ],
    tags: ['Rules', 'Governance', 'Docs', 'Lint', 'Conventions']
  },
  {
    id: '31',
    name: 'agent-identifier',
    description: 'Designs robust agent metadata, behaviors, and safety settings for plugins.',
    longDescription: 'A plugin-dev skill that shapes agent personas, allowed tools, and safety modes. It produces ready-to-ship agent configs with scopes, prompts, and testing hooks for multi-skill deployments.',
    author: 'Anthropic',
    downloads: '3.8k',
    stars: 56950,
    roles: [Role.DEVOPS],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add agent-identifier',
    yamlConfig: 'tools:\n  - name: agent-identifier\n    templates: persona\n    safety: strict',
    lastUpdated: '2025.11.17',
    type: 'Agent Skill / Plugin Dev',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'Claude App',
      'Gemini CLI'
    ],
        files: ['SKILL.md', 'examples/', 'references/', 'scripts/'],
    repoUrl: 'https://github.com/anthropics/claude-code/tree/main/plugins/plugin-dev/skills/agent-development',
    triggers: [
      'Design an agent persona for this plugin',
      'Define allowed tools and scopes for my agent',
      'Set safety and evaluation hooks for deployment'
    ],
    features: [
      'Persona templates with goals, tone, and guardrails',
      'Tool/scope configuration with safety defaults',
      'Evaluation hooks for preflight and staged rollout'
    ],
    bestFor: [
      'Plugin developers publishing new agents',
      'Teams curating safe agent behaviors',
      'Multi-skill deployments needing consistent personas'
    ],
    tags: ['Agents', 'Safety', 'Personas', 'Plugins', 'Configuration']
  },
  {
    id: '32',
    name: 'hook-development',
    description: 'Creates lifecycle hooks for plugins with strong validation and telemetry.',
    longDescription: 'Drafts pre- and post-command hooks, validates inputs, and wires telemetry for plugin systems. It ensures hooks are composable, typed, and easy to test before rolling into production.',
    author: 'Anthropic',
    downloads: '2.6k',
    stars: 56950,
    roles: [Role.DEVOPS],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add hook-development',
    yamlConfig: 'tools:\n  - name: hook-development\n    language: typescript\n    hooks: [pre, post]',
    lastUpdated: '2025.11.17',
    type: 'Agent Skill / Plugin Dev',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'Claude App',
      'Gemini CLI'
    ],
        files: ['SKILL.md', 'examples/', 'references/', 'scripts/'],
    repoUrl: 'https://github.com/anthropics/claude-code/tree/main/plugins/plugin-dev/skills/hook-development',
    triggers: [
      'Add a pre-execution hook to this plugin',
      'Validate inputs and outputs for this hook',
      'Instrument telemetry for plugin lifecycle events'
    ],
    features: [
      'Generates hook scaffolds with typings and validation',
      'Includes telemetry and error-handling patterns',
      'Provides tests to cover hook behavior'
    ],
    bestFor: [
      'Plugin developers adding lifecycle hooks',
      'Teams enforcing consistent validation',
      'Maintainers instrumenting plugin behavior'
    ],
    tags: ['Hooks', 'Plugins', 'Telemetry', 'Validation', 'TypeScript']
  },
  {
    id: '33',
    name: 'mcp-integration',
    description: 'Connects external APIs to Claude via MCP with secure schemas and resources.',
    longDescription: 'Builds MCP integrations end-to-end: tool definitions, resource schemas, authentication flows, and deployment notes. It keeps connectors secure, typed, and ready for production traffic.',
    author: 'Anthropic',
    downloads: '6.0k',
    stars: 56950,
    roles: [Role.DEVOPS],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add mcp-integration',
    yamlConfig: 'tools:\n  - name: mcp-integration\n    auth: oauth\n    resources: true',
    lastUpdated: '2025.11.17',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'Claude App',
      'Gemini CLI'
    ],
        files: ['SKILL.md', 'examples/', 'references/'],
    repoUrl: 'https://github.com/anthropics/claude-code/tree/main/plugins/plugin-dev/skills/mcp-integration',
    triggers: [
      'Design an MCP server for this API',
      'Define tool/resource schemas with auth',
      'Document deployment steps for my MCP connector'
    ],
    features: [
      'Creates tool and resource schemas with validation',
      'Covers auth flows, secrets handling, and scopes',
      'Includes deployment and testing guidance for MCP'
    ],
    bestFor: [
      'Platform teams exposing APIs to Claude',
      'Engineers hardening MCP connectors',
      'Hackers prototyping MCP integrations quickly'
    ],
    tags: ['MCP', 'Integration', 'APIs', 'Schemas']
  },
  {
    id: '34',
    name: 'configured-agent',
    description: 'Produces plugin settings templates and configuration docs for agents.',
    longDescription: 'Defines configurable knobs for agents - tool access, safety thresholds, routing rules - and generates clear documentation for operators. It standardizes how teams ship configurable agent experiences.',
    author: 'Anthropic',
    downloads: '3.1k',
    stars: 56950,
    roles: [Role.PRODUCT],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add configured-agent',
    yamlConfig: 'tools:\n  - name: configured-agent\n    presets: true\n    safety: configurable',
    lastUpdated: '2025.11.17',
    type: 'Agent Skill / Plugin Dev',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'Claude App',
      'Gemini CLI'
    ],
        files: ['SKILL.md', 'examples/', 'references/', 'scripts/'],
    repoUrl: 'https://github.com/anthropics/claude-code/tree/main/plugins/plugin-dev/skills/plugin-settings',
    triggers: [
      'Add configurable settings to this agent',
      'Document presets and safety modes for operators',
      'Draft a config guide for plugin deployment'
    ],
    features: [
      'Creates settings schemas with defaults and fallbacks',
      'Documents configuration modes for operators',
      'Pairs presets with safety and observability notes'
    ],
    bestFor: [
      'Teams shipping configurable agents',
      'Platform operators managing plugin settings',
      'Maintainers standardizing agent presets'
    ],
    tags: ['Agents', 'Configuration', 'Safety', 'Docs', 'Presets']
  },
  {
    id: '35',
    name: 'command-name',
    description: 'Defines plugin structure, names, and wiring for coherent command surfaces.',
    longDescription: 'A structure-first helper that maps plugin commands, names them clearly, and drafts manifests. It aligns inputs, outputs, and telemetry to keep command suites predictable and discoverable.',
    author: 'Anthropic',
    downloads: '2.7k',
    stars: 56950,
    roles: [Role.DEVOPS],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add command-name',
    yamlConfig: 'tools:\n  - name: command-name\n    manifest: scaffold\n    telemetry: true',
    lastUpdated: '2025.11.17',
    type: 'Agent Skill / Plugin Dev',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'Claude App',
      'Gemini CLI'
    ],
        files: ['README.md', 'SKILL.md', 'examples/', 'references/'],
    repoUrl: 'https://github.com/anthropics/claude-code/tree/main/plugins/plugin-dev/skills/plugin-structure',
    triggers: [
      'Name and structure this plugin command set',
      'Draft a manifest with inputs and outputs',
      'Wire telemetry for a cohesive command surface'
    ],
    features: [
      'Creates command maps with clear naming',
      'Generates manifests and validation schemas',
      'Adds telemetry and discoverability hints'
    ],
    bestFor: [
      'Plugin teams aligning command suites',
      'Maintainers improving naming consistency',
      'CI pipelines that need validated manifests'
    ],
    tags: ['Plugins', 'Manifests', 'Telemetry', 'Naming', 'Schemas']
  },
  {
    id: '36',
    name: 'skill-development',
    description: 'Coaches authors through end-to-end skill creation with tests and safety notes.',
    longDescription: 'A plugin-dev mentor that covers ideation, triggers, YAML metadata, and validation. It generates SKILL.md drafts, safety callouts, and minimal test scaffolds to keep contributions consistent.',
    author: 'Anthropic',
    downloads: '4.4k',
    stars: 56950,
    roles: [Role.PRODUCT],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add skill-development',
    yamlConfig: 'tools:\n  - name: skill-development\n    templates: true\n    safety: reminders',
    lastUpdated: '2025.11.17',
    type: 'Agent Skill / Plugin Dev',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'Claude App',
      'Gemini CLI'
    ],
        files: ['SKILL.md', 'references/'],
    repoUrl: 'https://github.com/anthropics/claude-code/tree/main/plugins/plugin-dev/skills/skill-development',
    triggers: [
      'Walk me through drafting a new skill',
      'Add safety guidance to this SKILL.md',
      'Generate triggers and YAML metadata for my skill'
    ],
    features: [
      'Provides SKILL.md and metadata templates',
      'Includes safety and evaluation reminders',
      'Adds lightweight tests for handlers or tools'
    ],
    bestFor: [
      'Contributors adding new skills',
      'Maintainers standardizing documentation',
      'Teams shipping skills with safety built in'
    ],
    tags: ['Skills', 'Authoring', 'Templates', 'Safety', 'Docs']
  },
  {
    id: '37',
    name: 'cookbook-audit',
    description: 'Audits cookbooks for completeness, safety, and runnable instructions.',
    longDescription: 'Checks recipes for missing steps, unsafe guidance, and broken links. Produces redlines and patches so cookbook content stays accurate and safe to follow.',
    author: 'Anthropic',
    downloads: '2.2k',
    stars: 31097,
    roles: [Role.PRODUCT],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add cookbook-audit',
    yamlConfig: 'tools:\n  - name: cookbook-audit\n    checks: [safety, completeness]\n    output: diff',
    lastUpdated: '2025.12.1',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'Claude App',
      'Gemini CLI'
    ],
        files: ['.gitignore', 'SKILL.md', 'style_guide.md', 'validate_notebook.py'],
    repoUrl: 'https://github.com/anthropics/claude-cookbooks/tree/main/.claude/skills/cookbook-audit',
    triggers: [
      'Audit this cookbook for safety and completeness',
      'Flag missing steps or unsafe guidance',
      'Propose edits to make this recipe runnable'
    ],
    features: [
      'Scans for safety risks and unclear steps',
      'Suggests patches with diffs and notes',
      'Checks links and references for correctness'
    ],
    bestFor: [
      'Maintainers of public cookbooks',
      'Teams shipping how-to content',
      'Reviewers ensuring safety compliance'
    ],
    tags: ['Docs', 'Audit', 'Safety', 'Content', 'Cookbooks']
  },
  {
    id: '38',
    name: 'analyzing-financial-statements',
    description: 'Breaks down financial statements into ratios, trends, and risk signals.',
    longDescription: 'A finance-focused analysis skill that reads balance sheets, income statements, and cash flows to surface KPIs, liquidity metrics, and variance narratives. It packages outputs for exec-ready briefs.',
    author: 'Anthropic',
    downloads: '5.9k',
    stars: 31097,
    roles: [Role.DATA],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add analyzing-financial-statements',
    yamlConfig: 'tools:\n  - name: analyzing-financial-statements\n    outputs: ratios,summary\n    format: markdown',
    lastUpdated: '2025.11.28',
    type: 'Agent Skill',
    compatibility: [
      'Claude App',
      'Codex CLI',
      'Claude Code CLI',
      'Gemini CLI'
    ],
        files: ['SKILL.md', 'calculate_ratios.py', 'interpret_ratios.py'],
    repoUrl: 'https://github.com/anthropics/claude-cookbooks/tree/main/skills/custom_skills/analyzing-financial-statements',
    triggers: [
      'Analyze this company\'s financial statements',
      'Summarize liquidity and profitability ratios',
      'Create an exec brief from these filings'
    ],
    features: [
      'Computes key ratios and trend lines',
      'Highlights risks, anomalies, and variance drivers',
      'Packages findings into concise briefs'
    ],
    bestFor: [
      'FP&A and finance teams',
      'Investors reviewing filings',
      'Leadership needing quick financial reads'
    ],
    tags: ['Finance', 'Ratios', 'Analysis', 'Reports', 'Data']
  },
  {
    id: '39',
    name: 'applying-brand-guidelines',
    description: 'Applies brand palettes and typography to docs, slides, and web assets.',
    longDescription: 'Translates brand systems into tokens and applies them across artifacts. It respects accessibility, spacing, and hierarchy while keeping outputs on-brand and consistent.',
    author: 'Anthropic',
    downloads: '4.1k',
    stars: 31097,
    roles: [Role.FRONTEND, Role.MARKETING],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add applying-brand-guidelines',
    yamlConfig: 'tools:\n  - name: applying-brand-guidelines\n    palette: custom\n    typography: paired',
    lastUpdated: '2025.11.28',
    type: 'Agent Skill',
    compatibility: [
      'Claude App',
      'Codex CLI',
      'Claude Code CLI',
      'Gemini CLI'
    ],
        files: ['REFERENCE.md', 'SKILL.md', 'apply_brand.py', 'validate_brand.py'],
    repoUrl: 'https://github.com/anthropics/claude-cookbooks/tree/main/skills/custom_skills/applying-brand-guidelines',
    triggers: [
      'Restyle this doc to our brand system',
      'Apply palette and typography to this slide deck',
      'Generate brand tokens for these assets'
    ],
    features: [
      'Maps colors and type to brand tokens',
      'Applies hierarchy and spacing rules',
      'Checks contrast and accessibility while styling'
    ],
    bestFor: [
      'Designers enforcing brand standards',
      'Teams restyling decks and docs quickly',
      'Product marketing refreshing assets'
    ],
    tags: ['Branding', 'Design', 'Accessibility', 'Tokens', 'Typography']
  },
  {
    id: '40',
    name: 'creating-financial-models',
    description: 'Builds structured financial models with drivers, scenarios, and sanity checks.',
    longDescription: 'Generates three-statement models, sensitivity tabs, and QA checks. It keeps assumptions explicit, formulas audited, and outputs presentation-ready for stakeholders.',
    author: 'Anthropic',
    downloads: '6.6k',
    stars: 31097,
    roles: [Role.DATA],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add creating-financial-models',
    yamlConfig: 'tools:\n  - name: creating-financial-models\n    format: xlsx\n    scenarios: true',
    lastUpdated: '2025.11.28',
    type: 'Agent Skill',
    compatibility: [
      'Claude App',
      'Codex CLI',
      'Claude Code CLI',
      'XLSX',
      'Gemini CLI'
    ],
        files: ['SKILL.md', 'dcf_model.py', 'sensitivity_analysis.py'],
    repoUrl: 'https://github.com/anthropics/claude-cookbooks/tree/main/skills/custom_skills/creating-financial-models',
    triggers: [
      'Build a three-statement model for this business',
      'Add scenario analysis to this model',
      'Audit formulas and assumptions in this sheet'
    ],
    features: [
      'Creates linked three-statement models with drivers',
      'Adds scenarios, sensitivities, and sanity checks',
      'Formats outputs for stakeholder-ready decks'
    ],
    bestFor: [
      'Finance teams modeling new products',
      'Operators testing scenarios quickly',
      'Analysts auditing spreadsheet risk'
    ],
    tags: ['Finance', 'Modeling', 'XLSX', 'Assumptions', 'Scenarios']
  },
  {
    id: '41',
    name: 'example-skill',
    description: 'A minimal reference skill showing file structure, triggers, and metadata.',
    longDescription: 'A starter template that demonstrates SKILL.md, manifest, and handler wiring. Perfect for contributors who want a concrete, working reference before building their own skill.',
    author: 'Anthropic',
    downloads: '1.9k',
    stars: 3883,
    roles: [Role.PRODUCT],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add example-skill',
    yamlConfig: 'tools:\n  - name: example-skill\n    template: true',
    lastUpdated: '2025.11.20',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'Claude App',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/anthropics/claude-plugins-official/tree/main/plugins/example-plugin/skills/example-skill',
    triggers: [
      'Show me the structure of a basic skill',
      'Scaffold a new skill from the example',
      'Explain each part of the SKILL.md'
    ],
    features: [
      'Demonstrates minimal skill wiring',
      'Includes annotated SKILL.md and manifest',
      'Ready-to-run handler for quick testing'
    ],
    bestFor: [
      'New skill authors',
      'Workshops teaching skill anatomy',
      'Teams standardizing skill scaffolds'
    ],
    tags: ['Template', 'Skills', 'Example', 'Docs', 'Starter']
  },
  {
    id: '42',
    name: 'stripe-best-practices',
    description: 'Applies Stripe engineering guidance to integrations and webhooks.',
    longDescription: 'Reviews Stripe integrations for API usage, idempotency, and webhook hardening. Suggests code fixes, observability, and rollout plans to keep payments stable.',
    author: 'Anthropic',
    downloads: '4.9k',
    stars: 3883,
    roles: [Role.BACKEND],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add stripe-best-practices',
    yamlConfig: 'tools:\n  - name: stripe-best-practices\n    checks: [webhooks, api]\n    mode: review',
    lastUpdated: '2025.12.18',
    type: 'Agent Skill',
    compatibility: [
      'Claude App',
      'Codex CLI',
      'Claude Code CLI',
      'Stripe API',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/anthropics/claude-plugins-official/tree/main/external_plugins/stripe/skills/stripe-best-practices',
    triggers: [
      'Review my Stripe webhook handling',
      'Audit idempotency and retries in this integration',
      'Harden payment flows before launch'
    ],
    features: [
      'Checks API usage, idempotency, and retries',
      'Reviews webhook security and signature validation',
      'Proposes rollout and observability plans'
    ],
    bestFor: [
      'Backend teams integrating Stripe',
      'Fintech apps hardening payments',
      'Launch reviews for payment flows'
    ],
    tags: ['Stripe', 'Payments', 'Webhooks', 'API', 'Reliability']
  },
  {
    id: '43',
    name: 'action-creator',
    description: 'Generates structured actions for email agents with schemas and handlers.',
    longDescription: 'Designs action payloads, validation, and handler stubs for email-style agents. It keeps actions typed, idempotent, and easy to extend as workflows grow.',
    author: 'Anthropic',
    downloads: '2.4k',
    stars: 1158,
    roles: [Role.PRODUCT],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add action-creator',
    yamlConfig: 'tools:\n  - name: action-creator\n    channel: email\n    validation: strict',
    lastUpdated: '2025.11.7',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'Claude App',
      'Gemini CLI'
    ],
        files: ['SKILL.md', 'templates/'],
    repoUrl: 'https://github.com/anthropics/claude-agent-sdk-demos/tree/main/email-agent/agent/.claude/skills/action-creator',
    triggers: [
      'Create an action schema for this email flow',
      'Add validation to an existing action',
      'Generate handler stubs for new actions'
    ],
    features: [
      'Defines action payloads with strict schemas',
      'Includes validation and idempotency notes',
      'Provides handler stubs and examples'
    ],
    bestFor: [
      'Email agent builders',
      'Teams extending action surfaces',
      'Maintainers enforcing action quality'
    ],
    tags: ['Actions', 'Email', 'Schemas', 'Validation', 'Handlers']
  },
  {
    id: '44',
    name: 'listener-creator',
    description: 'Scaffolds listeners for inbound channels with filters and routing.',
    longDescription: 'Builds message listeners with filtering, routing rules, and test hooks. Keeps ingestion paths consistent and observable across email or webhook-based agents.',
    author: 'Anthropic',
    downloads: '2.1k',
    stars: 1158,
    roles: [Role.DEVOPS],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add listener-creator',
    yamlConfig: 'tools:\n  - name: listener-creator\n    channel: email\n    filters: true',
    lastUpdated: '2025.10.29',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'Claude App',
      'Gemini CLI'
    ],
        files: ['SKILL.md', 'templates/'],
    repoUrl: 'https://github.com/anthropics/claude-agent-sdk-demos/tree/main/email-agent/agent/.claude/skills/listener-creator',
    triggers: [
      'Create a listener for inbound messages',
      'Add routing and filters to this listener',
      'Test and document this ingestion path'
    ],
    features: [
      'Generates listener configs with filters and routing',
      'Adds tests and observability hooks',
      'Documents ingestion paths and failure modes'
    ],
    bestFor: [
      'Agent developers wiring inbound channels',
      'Teams standardizing ingestion behavior',
      'Ops teams monitoring listener health'
    ],
    tags: ['Listeners', 'Routing', 'Testing', 'Email', 'Ingestion']
  },
  {
    id: '45',
    name: 'executive-briefing',
    description: 'Condenses research into crisp executive briefs with risks and calls to action.',
    longDescription: 'Transforms research artifacts into one-page briefs with TL;DRs, risks, and decisions needed. It keeps leadership updates sharp, evidence-backed, and time-aware.',
    author: 'Anthropic',
    downloads: '4.0k',
    stars: 1158,
    roles: [Role.PRODUCT],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add executive-briefing',
    yamlConfig: 'tools:\n  - name: executive-briefing\n    format: briefing\n    length: 1-page',
    lastUpdated: '2025.12.12',
    type: 'Agent Skill',
    compatibility: [
      'Claude App',
      'Codex CLI',
      'Claude Code CLI',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/anthropics/claude-agent-sdk-demos/tree/main/research-agent/.claude/skills/executive-briefing',
    triggers: [
      'Summarize this research for executives',
      'Highlight risks and asks in one page',
      'Create a TL;DR with decisions needed'
    ],
    features: [
      'Condenses long research into exec-friendly briefs',
      'Highlights risks, dependencies, and asks',
      'Adds timing and owner notes for follow-ups'
    ],
    bestFor: [
      'Leadership updates',
      'Research teams sharing findings',
      'PMs preparing decision memos'
    ],
    tags: ['Brief', 'Executive', 'Summary', 'Risks', 'Decisions']
  },
  {
    id: '46',
    name: 'openai-skill-creator',
    description: 'Sample skill that demonstrates OpenAI Codex skill anatomy for Rust projects.',
    longDescription: 'A reference implementation shipped with Codex RS showing how to structure skill assets, handlers, and metadata. Perfect for Rust developers bootstrapping custom skills.',
    author: 'OpenAI',
    downloads: '2.5k',
    stars: 56256,
    roles: [Role.DEVOPS],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add openai-skill-creator',
    yamlConfig: 'tools:\n  - name: skill-creator\n    language: rust\n    template: sample',
    lastUpdated: '2026.1.7',
    type: 'Agent Skill',
    compatibility: [
      'Codex CLI',
      'Claude Code CLI',
      'Gemini CLI'
    ],
        files: ['SKILL.md', 'license.txt', 'scripts/'],
    repoUrl: 'https://github.com/openai/codex/tree/main/codex-rs/core/src/skills/assets/samples/skill-creator',
    triggers: [
      'Show me a Rust skill template',
      'Explain Codex skill file structure',
      'Generate a Rust handler from the sample'
    ],
    features: [
      'Rust-first sample with annotated code',
      'Demonstrates SKILL.md and manifest wiring',
      'Includes starter handler logic'
    ],
    bestFor: [
      'Rust developers learning Codex skills',
      'Teams standardizing skill structure',
      'Workshops teaching skill basics'
    ],
    tags: ['Rust', 'Template', 'Codex', 'Skills', 'Sample']
  },
  {
    id: '47',
    name: 'openai-skill-installer',
    description: 'Walks through installing and wiring Codex skills from Rust samples.',
    longDescription: 'Explains how to fetch, register, and validate skills using the Codex RS sample installer. It keeps installation steps reproducible with config snippets and validation checks.',
    author: 'OpenAI',
    downloads: '2.1k',
    stars: 56256,
    roles: [Role.DEVOPS],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add openai-skill-installer',
    yamlConfig: 'tools:\n  - name: skill-installer\n    language: rust\n    validate: true',
    lastUpdated: '2025.12.19',
    type: 'Agent Skill',
    compatibility: [
      'Codex CLI',
      'Claude Code CLI',
      'Gemini CLI'
    ],
        files: ['LICENSE.txt', 'SKILL.md', 'scripts/'],
    repoUrl: 'https://github.com/openai/codex/tree/main/codex-rs/core/src/skills/assets/samples/skill-installer',
    triggers: [
      'Show me how to install a Codex skill',
      'Validate a skill install from sample code',
      'Generate installation commands for a new skill'
    ],
    features: [
      'Provides installation flow with validation',
      'Includes Rust installer sample code',
      'Adds troubleshooting notes for skill wiring'
    ],
    bestFor: [
      'Developers installing Codex skills',
      'Teams documenting installation steps',
      'Workshops teaching skill setup'
    ],
    tags: ['Codex', 'Rust', 'Installation', 'Skills', 'Validation']
  },
  {
    id: '48',
    name: 'openai-knowledge',
    description: 'Surfaces OpenAI product knowledge with curated, up-to-date answers.',
    longDescription: 'A knowledge skill that maps OpenAI docs, announcements, and FAQs into structured responses. It provides precise citations and flags version-specific differences.',
    author: 'OpenAI',
    downloads: '7.0k',
    stars: 18363,
    roles: [Role.PRODUCT],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add openai-knowledge',
    yamlConfig: 'tools:\n  - name: openai-knowledge\n    sources: official\n    citations: true',
    lastUpdated: '2026.1.10',
    type: 'Agent Skill',
    compatibility: [
      'Codex CLI',
      'Claude Code CLI',
      'Claude App',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/openai/openai-agents-python/tree/main/.codex/skills/openai-knowledge',
    triggers: [
      'Answer OpenAI product questions with citations',
      'Explain differences between API versions',
      'Summarize docs for this OpenAI feature'
    ],
    features: [
      'Provides curated answers with citations',
      'Tracks version-specific nuances',
      'Covers common FAQs and product updates'
    ],
    bestFor: [
      'Support teams answering product questions',
      'Engineers integrating OpenAI APIs',
      'Docs writers needing quick references'
    ],
    tags: ['Knowledge', 'Docs', 'OpenAI', 'Citations', 'Product']
  },
  {
    id: '49',
    name: 'pr-draft-summary',
    description: 'Creates PR draft summaries with risk notes and next actions.',
    longDescription: 'Generates concise PR digests highlighting changes, risks, tests, and reviewers needed. Keeps stakeholders in sync and accelerates review cycles.',
    author: 'OpenAI',
    downloads: '6.2k',
    stars: 18363,
    roles: [Role.PRODUCT],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add pr-draft-summary',
    yamlConfig: 'tools:\n  - name: pr-draft-summary\n    format: markdown\n    include: risks,tests',
    lastUpdated: '2026.1.10',
    type: 'Agent Skill',
    compatibility: [
      'Codex CLI',
      'Claude Code CLI',
      'GitHub Actions',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/openai/openai-agents-python/tree/main/.codex/skills/pr-draft-summary',
    triggers: [
      'Summarize this PR before review',
      'List risks and missing tests for this diff',
      'Draft reviewer notes for this change'
    ],
    features: [
      'Creates structured PR summaries',
      'Highlights risks and test coverage gaps',
      'Adds reviewer and owner suggestions'
    ],
    bestFor: [
      'Developers prepping PRs',
      'Reviewers needing quick context',
      'Release managers tracking changes'
    ],
    tags: ['PR', 'Summary', 'Risks', 'Testing', 'Reviews']
  },
  {
    id: '50',
    name: 'examples-auto-run',
    description: 'Runs README examples automatically to ensure they stay green.',
    longDescription: 'Executes documented examples and flags breakages before release. Ideal for libraries that rely on snippet accuracy across versions.',
    author: 'OpenAI',
    downloads: '3.9k',
    stars: 18363,
    roles: [Role.DEVOPS],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add examples-auto-run',
    yamlConfig: 'tools:\n  - name: examples-auto-run\n    mode: ci\n    output: logs',
    lastUpdated: '2026.1.13',
    type: 'Agent Skill',
    compatibility: [
      'Codex CLI',
      'Claude Code CLI',
      'GitHub Actions',
      'Gemini CLI'
    ],
        files: ['SKILL.md', 'scripts/'],
    repoUrl: 'https://github.com/openai/openai-agents-python/tree/main/.codex/skills/examples-auto-run',
    triggers: [
      'Execute README examples for this project',
      'Add CI to run doc snippets automatically',
      'Report failing examples before release'
    ],
    features: [
      'Runs documented examples in CI',
      'Captures logs and highlights failures',
      'Keeps snippets in sync with code changes'
    ],
    bestFor: [
      'Library maintainers with many snippets',
      'Docs teams ensuring accuracy',
      'Release pipelines guarding against drift'
    ],
    tags: ['Examples', 'CI', 'Documentation', 'Automation', 'Testing']
  },
  {
    id: '51',
    name: 'docs-sync',
    description: 'Syncs code changes with documentation, ensuring drift-free releases.',
    longDescription: 'Monitors diffs, updates docs, and creates PRs or issues when documentation lags behind. Keeps developer and user docs aligned with shipped behavior.',
    author: 'OpenAI',
    downloads: '5.1k',
    stars: 18363,
    roles: [Role.PRODUCT],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add docs-sync',
    yamlConfig: 'tools:\n  - name: docs-sync\n    mode: watch\n    output: pr',
    lastUpdated: '2026.1.15',
    type: 'Agent Skill',
    compatibility: [
      'Codex CLI',
      'Claude Code CLI',
      'GitHub Actions',
      'Gemini CLI'
    ],
        files: ['SKILL.md', 'references/'],
    repoUrl: 'https://github.com/openai/openai-agents-python/tree/main/.codex/skills/docs-sync',
    triggers: [
      'Sync docs with these code changes',
      'Open a PR to update documentation',
      'Flag drift between code and docs'
    ],
    features: [
      'Detects doc drift after code changes',
      'Drafts updates and optional PRs',
      'Supports CI gating for doc freshness'
    ],
    bestFor: [
      'Maintainers with doc-heavy repos',
      'Release teams shipping user-facing changes',
      'Docs writers collaborating with engineering'
    ],
    tags: ['Docs', 'CI', 'Automation', 'Sync', 'PRs']
  },
  {
    id: '52',
    name: 'test-coverage-improver',
    description: 'Suggests targeted tests to raise coverage with minimal noise.',
    longDescription: 'Analyzes coverage reports and diffs to propose high-impact tests. It balances speed and confidence by focusing on risky paths and untested logic.',
    author: 'OpenAI',
    downloads: '6.7k',
    stars: 18363,
    roles: [Role.DEVOPS],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add test-coverage-improver',
    yamlConfig: 'tools:\n  - name: test-coverage-improver\n    mode: suggest\n    threshold: 80',
    lastUpdated: '2026.1.14',
    type: 'Agent Skill',
    compatibility: [
      'Codex CLI',
      'Claude Code CLI',
      'GitHub Actions',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/openai/openai-agents-python/tree/main/.codex/skills/test-coverage-improver',
    triggers: [
      'Recommend tests to raise coverage',
      'Analyze this diff for untested paths',
      'Plan targeted tests under time constraints'
    ],
    features: [
      'Reads coverage reports and diffs',
      'Prioritizes risky or untested code paths',
      'Suggests lean tests to hit thresholds'
    ],
    bestFor: [
      'CI pipelines enforcing coverage',
      'Teams under release pressure',
      'Maintainers addressing flaky coverage gaps'
    ],
    tags: ['Coverage', 'Testing', 'CI', 'Risk', 'Automation']
  },
  {
    id: '53',
    name: 'final-release-review',
    description: 'Runs a final checklist with risks, blockers, and docs before release.',
    longDescription: 'Aggregates diff insights, test status, and docs readiness into a single release brief. Flags blockers, owners, and mitigation steps to keep launches on track.',
    author: 'OpenAI',
    downloads: '4.8k',
    stars: 18363,
    roles: [Role.DEVOPS],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add final-release-review',
    yamlConfig: 'tools:\n  - name: final-release-review\n    checklist: full\n    output: summary',
    lastUpdated: '2026.1.17',
    type: 'Agent Skill',
    compatibility: [
      'Codex CLI',
      'Claude Code CLI',
      'GitHub Actions',
      'Gemini CLI'
    ],
        files: ['SKILL.md', 'references/', 'scripts/'],
    repoUrl: 'https://github.com/openai/openai-agents-python/tree/main/.codex/skills/final-release-review',
    triggers: [
      'Run a final release review',
      'List risks and blockers for this release',
      'Summarize readiness across code, tests, docs'
    ],
    features: [
      'Compiles risks, blockers, and owners',
      'Checks tests, docs, and dependency drift',
      'Outputs a concise release brief'
    ],
    bestFor: [
      'Release managers',
      'Teams coordinating launch readiness',
      'CI gates before production deploys'
    ],
    tags: ['Release', 'Checklist', 'Risks', 'Readiness', 'CI']
  },
  {
    id: '54',
    name: 'code-change-verification-js',
    description: 'Node-focused code change verifier with targeted checks and quick tests.',
    longDescription: 'A JS/TS flavor of code-change verification that inspects diffs, proposes Playwright/Jest snippets, and highlights runtime risks. Keeps CI lean while raising reviewer confidence.',
    author: 'OpenAI',
    downloads: '5.4k',
    stars: 2171,
    roles: [Role.DEVOPS],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add code-change-verification-js',
    yamlConfig: 'tools:\n  - name: code-change-verification\n    runtime: node\n    tests: suggest',
    lastUpdated: '2026.1.10',
    type: 'Agent Skill',
    compatibility: [
      'Codex CLI',
      'Claude Code CLI',
      'GitHub Actions',
      'Gemini CLI'
    ],
        files: ['SKILL.md', 'scripts/'],
    repoUrl: 'https://github.com/openai/openai-agents-js/tree/main/.codex/skills/code-change-verification',
    triggers: [
      'Verify JS/TS changes before merge',
      'Suggest Jest or Playwright checks for this diff',
      'Highlight runtime risks in this PR'
    ],
    features: [
      'Analyzes diffs for JS/TS-specific risks',
      'Suggests lightweight tests and scripts',
      'Outputs merge-ready checklists'
    ],
    bestFor: [
      'Node and frontend teams',
      'Release managers needing quick verification',
      'CI pipelines guarding PR merges'
    ],
    tags: ['JavaScript', 'Testing', 'CI', 'Risks', 'PR Review']
  },
  {
    id: '55',
    name: 'openai-knowledge-js',
    description: 'JavaScript-ready OpenAI knowledge base with citations and SDK notes.',
    longDescription: 'Tailored for the JS/TS stack, this skill answers OpenAI product questions and maps them to Node SDK usage with inline citations and code snippets.',
    author: 'OpenAI',
    downloads: '6.3k',
    stars: 2171,
    roles: [Role.PRODUCT],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add openai-knowledge-js',
    yamlConfig: 'tools:\n  - name: openai-knowledge\n    runtime: node\n    citations: true',
    lastUpdated: '2026.1.10',
    type: 'Agent Skill',
    compatibility: [
      'Codex CLI',
      'Claude Code CLI',
      'Claude App',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/openai/openai-agents-js/tree/main/.codex/skills/openai-knowledge',
    triggers: [
      'Answer OpenAI questions for Node developers',
      'Show SDK usage with citations',
      'Summarize product changes for JS teams'
    ],
    features: [
      'Provides JS/TS-focused answers with citations',
      'Includes Node SDK snippets',
      'Tracks version differences for JS clients'
    ],
    bestFor: [
      'Node developers integrating OpenAI',
      'Support teams for JS products',
      'Docs writers producing SDK examples'
    ],
    tags: ['JavaScript', 'OpenAI', 'Knowledge', 'SDK', 'Docs']
  },
  {
    id: '56',
    name: 'pr-draft-summary-js',
    description: 'Drafts PR summaries for JS/TS repos with risks and test prompts.',
    longDescription: 'Focuses on JavaScript and TypeScript diffs, producing reviewer-ready summaries, risk callouts, and suggested Jest/Playwright tests to accelerate approvals.',
    author: 'OpenAI',
    downloads: '4.9k',
    stars: 2171,
    roles: [Role.PRODUCT],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add pr-draft-summary-js',
    yamlConfig: 'tools:\n  - name: pr-draft-summary\n    runtime: node\n    include: risks,tests',
    lastUpdated: '2026.1.10',
    type: 'Agent Skill',
    compatibility: [
      'Codex CLI',
      'Claude Code CLI',
      'GitHub Actions',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/openai/openai-agents-js/tree/main/.codex/skills/pr-draft-summary',
    triggers: [
      'Summarize this JS/TS PR',
      'List risks and suggested tests for this diff',
      'Create reviewer notes for this change'
    ],
    features: [
      'Generates JS-focused PR summaries',
      'Calls out risks and missing tests',
      'Adds suggested reviewers or owners'
    ],
    bestFor: [
      'Frontend and Node teams',
      'Reviewers scanning large diffs',
      'Release managers tracking JS changes'
    ],
    tags: ['PR', 'JavaScript', 'Summary', 'Risks', 'Testing']
  },
  {
    id: '57',
    name: 'examples-auto-run-js',
    description: 'Keeps JS/TS README examples executable and green in CI.',
    longDescription: 'Runs documentation snippets for Node and browser examples, flags regressions, and posts logs for quick fixes. Ideal for SDK and UI libraries.',
    author: 'OpenAI',
    downloads: '3.4k',
    stars: 2171,
    roles: [Role.DEVOPS],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add examples-auto-run-js',
    yamlConfig: 'tools:\n  - name: examples-auto-run\n    runtime: node\n    output: logs',
    lastUpdated: '2026.1.13',
    type: 'Agent Skill',
    compatibility: [
      'Codex CLI',
      'Claude Code CLI',
      'GitHub Actions',
      'Gemini CLI'
    ],
        files: ['SKILL.md', 'scripts/'],
    repoUrl: 'https://github.com/openai/openai-agents-js/tree/main/.codex/skills/examples-auto-run',
    triggers: [
      'Run JS README snippets in CI',
      'Report failing examples for this package',
      'Add snippet execution to our pipeline'
    ],
    features: [
      'Executes JS/TS examples automatically',
      'Captures logs and highlights failures',
      'Integrates with CI for snippet health'
    ],
    bestFor: [
      'Library authors with JS docs',
      'SDK teams maintaining snippets',
      'CI setups guarding documentation accuracy'
    ],
    tags: ['JavaScript', 'Examples', 'CI', 'Docs', 'Automation']
  },
  {
    id: '58',
    name: 'test-coverage-improver-js',
    description: 'Suggests high-impact JS/TS tests to raise coverage efficiently.',
    longDescription: 'Analyzes coverage maps and diffs in JS/TS repos, recommending Jest or Playwright additions that deliver maximum confidence without slowing CI.',
    author: 'OpenAI',
    downloads: '4.5k',
    stars: 2171,
    roles: [Role.DEVOPS],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add test-coverage-improver-js',
    yamlConfig: 'tools:\n  - name: test-coverage-improver\n    runtime: node\n    target: jest',
    lastUpdated: '2026.1.13',
    type: 'Agent Skill',
    compatibility: [
      'Codex CLI',
      'Claude Code CLI',
      'GitHub Actions',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/openai/openai-agents-js/tree/main/.codex/skills/test-coverage-improver',
    triggers: [
      'Recommend JS/TS tests to lift coverage',
      'Analyze this diff for untested branches',
      'Propose Playwright checks for this UI change'
    ],
    features: [
      'Reads JS/TS coverage reports and diffs',
      'Targets risky or untested code paths',
      'Keeps CI lean with focused suggestions'
    ],
    bestFor: [
      'Front-end and Node teams',
      'CI gates enforcing coverage',
      'Releases needing fast confidence boosts'
    ],
    tags: ['JavaScript', 'Coverage', 'Testing', 'CI', 'Playwright']
  },
  {
    id: '59',
    name: 'changeset-validation',
    description: 'Validates Changesets for package releases with policy checks.',
    longDescription: 'Examines Changeset files, ensures versioning and policy compliance, and flags missing notes. Helps monorepos keep release metadata clean and predictable.',
    author: 'OpenAI',
    downloads: '3.0k',
    stars: 2171,
    roles: [Role.DEVOPS],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add changeset-validation',
    yamlConfig: 'tools:\n  - name: changeset-validation\n    policy: strict\n    output: report',
    lastUpdated: '2026.1.16',
    type: 'Agent Skill',
    compatibility: [
      'Codex CLI',
      'Claude Code CLI',
      'GitHub Actions',
      'Node Monorepos',
      'Gemini CLI'
    ],
        files: ['SKILL.md', 'references/', 'scripts/'],
    repoUrl: 'https://github.com/openai/openai-agents-js/tree/main/.codex/skills/changeset-validation',
    triggers: [
      'Validate Changesets before release',
      'Flag missing notes or version bumps',
      'Check Changeset policy compliance'
    ],
    features: [
      'Parses Changesets for completeness',
      'Checks versioning and policy rules',
      'Outputs a report with fix suggestions'
    ],
    bestFor: [
      'Monorepo maintainers using Changesets',
      'Release engineers preparing packages',
      'CI gates enforcing release hygiene'
    ],
    tags: ['Changesets', 'Releases', 'CI', 'Monorepo', 'Validation']
  },
  {
    id: '60',
    name: 'final-release-review-js',
    description: 'Runs release readiness checks for JS/TS packages with owners and risks.',
    longDescription: 'Pulls diff, test, and docs signals for Node projects to deliver a concise release brief. Flags blockers, assigns owners, and suggests rollout sequencing.',
    author: 'OpenAI',
    downloads: '3.8k',
    stars: 2171,
    roles: [Role.DEVOPS],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add final-release-review-js',
    yamlConfig: 'tools:\n  - name: final-release-review\n    runtime: node\n    checklist: full',
    lastUpdated: '2026.1.17',
    type: 'Agent Skill',
    compatibility: [
      'Codex CLI',
      'Claude Code CLI',
      'GitHub Actions',
      'Gemini CLI'
    ],
        files: ['SKILL.md', 'references/', 'scripts/'],
    repoUrl: 'https://github.com/openai/openai-agents-js/tree/main/.codex/skills/final-release-review',
    triggers: [
      'Run a JS release review',
      'List risks and owners for this package release',
      'Summarize readiness across code, tests, docs'
    ],
    features: [
      'Compiles JS/TS release risks and blockers',
      'Checks tests, docs, and versioning signals',
      'Produces a short release brief with owners'
    ],
    bestFor: [
      'Node release managers',
      'Teams shipping npm packages',
      'CI pipelines gating production releases'
    ],
    tags: ['JavaScript', 'Release', 'Checklist', 'Risks', 'CI']
  },
  {
    id: '61',
    name: 'integration-tests',
    description: 'Generates integration test plans and scripts for JS/TS services.',
    longDescription: 'Drafts end-to-end and integration tests with fixtures, env setup, and mocks for Node services. It balances coverage and runtime to keep suites CI-friendly.',
    author: 'OpenAI',
    downloads: '4.2k',
    stars: 2171,
    roles: [Role.DEVOPS],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add integration-tests',
    yamlConfig: 'tools:\n  - name: integration-tests\n    framework: playwright\n    headless: true',
    lastUpdated: '2026.1.13',
    type: 'Agent Skill',
    compatibility: [
      'Codex CLI',
      'Claude Code CLI',
      'GitHub Actions',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/openai/openai-agents-js/tree/main/.codex/skills/integration-tests',
    triggers: [
      'Draft integration tests for this service',
      'Set up fixtures and env for E2E tests',
      'Plan a lean integration suite for CI'
    ],
    features: [
      'Creates integration test plans and scripts',
      'Sets up fixtures, env, and mocks',
      'Optimizes runtime for CI friendliness'
    ],
    bestFor: [
      'Node service teams',
      'QA engineers building E2E coverage',
      'CI pipelines enforcing integration tests'
    ],
    tags: ['Integration Tests', 'JavaScript', 'Playwright', 'CI', 'QA']
  },
  {
    id: '62',
    name: 'docs-sync-js',
    description: 'Keeps JS/TS documentation aligned with code changes automatically.',
    longDescription: 'Monitors Node repos for drift, generates doc updates, and opens PRs. It ensures guides, README snippets, and API references match current behavior.',
    author: 'OpenAI',
    downloads: '4.6k',
    stars: 2171,
    roles: [Role.PRODUCT],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add docs-sync-js',
    yamlConfig: 'tools:\n  - name: docs-sync\n    runtime: node\n    mode: pr',
    lastUpdated: '2026.1.14',
    type: 'Agent Skill',
    compatibility: [
      'Codex CLI',
      'Claude Code CLI',
      'GitHub Actions',
      'Gemini CLI'
    ],
        files: ['SKILL.md', 'references/'],
    repoUrl: 'https://github.com/openai/openai-agents-js/tree/main/.codex/skills/docs-sync',
    triggers: [
      'Update docs for this JS change',
      'Open a PR with README snippet fixes',
      'Flag documentation drift in this repo'
    ],
    features: [
      'Detects doc drift for JS/TS projects',
      'Drafts updates and optional PRs',
      'Keeps examples and API references current'
    ],
    bestFor: [
      'Frontend and Node libraries',
      'Teams maintaining SDK docs',
      'Release managers enforcing doc freshness'
    ],
    tags: ['Docs', 'JavaScript', 'CI', 'Automation', 'PRs']
  },
  {
    id: '63',
    name: 'notion-knowledge-capture',
    description: 'Captures and structures knowledge into Notion with tags and backlinks.',
    longDescription: 'Ingests notes, specs, and meeting recaps into Notion databases with metadata, backlinks, and summaries. Keeps knowledge bases organized and searchable.',
    author: 'OpenAI',
    downloads: '5.0k',
    stars: 1616,
    roles: [Role.PRODUCT],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add notion-knowledge-capture',
    yamlConfig: 'tools:\n  - name: notion-knowledge-capture\n    links: backlinks\n    tags: auto',
    lastUpdated: '2025.12.19',
    type: 'Agent Skill',
    compatibility: [
      'Claude App',
      'Codex CLI',
      'Claude Code CLI',
      'Notion API',
      'Gemini CLI'
    ],
        files: ['LICENSE.txt', 'SKILL.md', 'evaluations/', 'examples/', 'reference/'],
    repoUrl: 'https://github.com/openai/skills/tree/main/skills/.curated/notion-knowledge-capture',
    triggers: [
      'Ingest these notes into Notion with tags',
      'Backlink related specs and docs',
      'Summarize and store this meeting recap'
    ],
    features: [
      'Creates structured Notion entries with tags',
      'Adds backlinks between related docs',
      'Summarizes content for quick scanning'
    ],
    bestFor: [
      'Knowledge management teams',
      'Project spaces in Notion',
      'Research groups sharing notes'
    ],
    tags: ['Notion', 'Knowledge Base', 'Docs', 'Backlinks', 'Tags']
  },
  {
    id: '64',
    name: 'notion-spec-to-implementation',
    description: 'Turns Notion specs into implementation plans with tasks and owners.',
    longDescription: 'Reads specs from Notion and produces structured plans: milestones, tasks, owners, and risks. Keeps implementation on track and documented within Notion.',
    author: 'OpenAI',
    downloads: '4.4k',
    stars: 1616,
    roles: [Role.PRODUCT],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add notion-spec-to-implementation',
    yamlConfig: 'tools:\n  - name: notion-spec-to-implementation\n    output: plan\n    include: risks,owners',
    lastUpdated: '2025.12.19',
    type: 'Agent Skill',
    compatibility: [
      'Claude App',
      'Codex CLI',
      'Claude Code CLI',
      'Notion API',
      'Gemini CLI'
    ],
        files: ['LICENSE.txt', 'SKILL.md', 'evaluations/', 'examples/', 'reference/'],
    repoUrl: 'https://github.com/openai/skills/tree/main/skills/.curated/notion-spec-to-implementation',
    triggers: [
      'Convert this Notion spec into a delivery plan',
      'Add owners and milestones to this spec',
      'Call out risks and dependencies from this doc'
    ],
    features: [
      'Extracts requirements and maps them to tasks',
      'Assigns owners, timelines, and milestones',
      'Surfaces risks and dependencies in-line'
    ],
    bestFor: [
      'PMs running projects out of Notion',
      'Eng teams planning features',
      'Stakeholders tracking delivery plans'
    ],
    tags: ['Notion', 'Planning', 'Tasks', 'Ownership', 'Risks']
  },
  {
    id: '65',
    name: 'create-plan',
    description: 'Creates crisp multi-step plans for ambiguous tasks with checkpoints.',
    longDescription: 'An experimental planner that turns fuzzy asks into sequenced steps, checkpoints, and success criteria. It adapts scope based on constraints and time.',
    author: 'OpenAI',
    downloads: '5.3k',
    stars: 1616,
    roles: [Role.PRODUCT],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add create-plan',
    yamlConfig: 'tools:\n  - name: create-plan\n    mode: experimental\n    checkpoints: true',
    lastUpdated: '2025.12.21',
    type: 'Agent Skill',
    compatibility: [
      'Claude App',
      'Codex CLI',
      'Claude Code CLI',
      'Gemini CLI'
    ],
        files: ['LICENSE.txt', 'SKILL.md'],
    repoUrl: 'https://github.com/openai/skills/tree/main/skills/.experimental/create-plan',
    triggers: [
      'Plan out this ambiguous task',
      'Create checkpoints and success criteria',
      'Sequence work for this project'
    ],
    features: [
      'Turns fuzzy tasks into clear plans',
      'Adds checkpoints and success metrics',
      'Adapts scope based on constraints'
    ],
    bestFor: [
      'PMs and tech leads planning work',
      'Individuals clarifying projects',
      'Teams needing fast, structured plans'
    ],
    tags: ['Planning', 'Execution', 'Checkpoints', 'Productivity', 'Scope']
  },
  {
    id: '66',
    name: 'openai-skill-creator-system',
    description: 'System-grade skill creator with defaults for the OpenAI skills registry.',
    longDescription: 'A registry-focused creator that emits SKILL.md, metadata, and safety defaults aligned with OpenAI\'s system skills. Great for contributors standardizing new entries.',
    author: 'OpenAI',
    downloads: '3.6k',
    stars: 1616,
    roles: [Role.DEVOPS],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add openai-skill-creator-system',
    yamlConfig: 'tools:\n  - name: skill-creator\n    profile: system\n    safety: default',
    lastUpdated: '2025.12.19',
    type: 'Agent Skill',
    compatibility: [
      'Codex CLI',
      'Claude Code CLI',
      'Gemini CLI'
    ],
        files: ['LICENSE.txt', 'SKILL.md', 'scripts/'],
    repoUrl: 'https://github.com/openai/skills/tree/main/skills/.system/skill-creator',
    triggers: [
      'Draft a system-compliant SKILL.md',
      'Generate metadata for the OpenAI registry',
      'Add safety defaults to a new skill'
    ],
    features: [
      'Creates SKILL.md with registry defaults',
      'Includes metadata and safety guidance',
      'Provides templates and examples'
    ],
    bestFor: [
      'Contributors to the OpenAI skills registry',
      'Teams standardizing skill docs',
      'Maintainers enforcing system defaults'
    ],
    tags: ['Skills', 'Templates', 'System', 'Docs', 'Registry']
  },
  {
    id: '67',
    name: 'gh-address-comments',
    description: 'Responds to GitHub issue comments with context-aware, actionable replies.',
    longDescription: 'Reads GitHub threads, surfaces context, and drafts replies that unblock authors. It cites code, links docs, and adds follow-up tasks when needed.',
    author: 'OpenAI',
    downloads: '4.7k',
    stars: 1616,
    roles: [Role.PRODUCT],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add gh-address-comments',
    yamlConfig: 'tools:\n  - name: gh-address-comments\n    platform: github\n    tone: concise',
    lastUpdated: '2025.12.19',
    type: 'Agent Skill',
    compatibility: [
      'Claude App',
      'Codex CLI',
      'Claude Code CLI',
      'GitHub',
      'Gemini CLI'
    ],
        files: ['LICENSE.txt', 'SKILL.md', 'scripts/'],
    repoUrl: 'https://github.com/openai/skills/tree/main/skills/.curated/gh-address-comments',
    triggers: [
      'Reply to this GitHub issue thread',
      'Summarize context and propose next steps',
      'Draft a concise comment with links'
    ],
    features: [
      'Reads thread context and code references',
      'Drafts actionable, concise replies',
      'Adds links or follow-up tasks automatically'
    ],
    bestFor: [
      'Maintainers triaging GitHub issues',
      'Teams managing OSS repos',
      'Support engineers closing loops quickly'
    ],
    tags: ['GitHub', 'Replies', 'Issues', 'Support', 'Productivity']
  },
  {
    id: '68',
    name: 'openai-skill-installer-system',
    description: 'Installs skills from the OpenAI registry with validation and rollback notes.',
    longDescription: 'A system-grade installer that fetches, validates, and registers skills with safe defaults. It logs changes, provides rollback steps, and keeps environments consistent.',
    author: 'OpenAI',
    downloads: '3.1k',
    stars: 1616,
    roles: [Role.DEVOPS],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add openai-skill-installer-system',
    yamlConfig: 'tools:\n  - name: skill-installer\n    profile: system\n    validate: strict',
    lastUpdated: '2026.1.9',
    type: 'Agent Skill',
    compatibility: [
      'Codex CLI',
      'Claude Code CLI',
      'Gemini CLI'
    ],
        files: ['LICENSE.txt', 'SKILL.md', 'scripts/'],
    repoUrl: 'https://github.com/openai/skills/tree/main/skills/.system/skill-installer',
    triggers: [
      'Install a skill from the registry',
      'Validate and register this skill safely',
      'Document rollback steps for this install'
    ],
    features: [
      'Fetches and validates skills with checksums',
      'Registers skills with safe defaults',
      'Provides rollback and audit logs'
    ],
    bestFor: [
      'Operators managing skill catalogs',
      'Teams enforcing installation standards',
      'CI scripts provisioning skills'
    ],
    tags: ['Installation', 'Skills', 'Registry', 'Validation', 'Ops']
  },
  {
    id: '69',
    name: 'at-dispatch-v2',
    description: 'Convert legacy AT_DISPATCH macros to AT_DISPATCH_V2 in ATen C++ code.',
    longDescription: 'Details the macro reordering, AT_WRAP usage, type-group expansion, and header includes needed to port ATen dispatch sites to the v2 API safely.',
    author: 'PyTorch',
    downloads: '2.0k',
    stars: 96650,
    roles: [Role.BACKEND],
    isTrending: true,
    isCowork: false,
    setupCommand: 'claude mcp add at-dispatch-v2',
    yamlConfig: 'tools:\n  - name: at-dispatch-v2\n    header: Dispatch_v2\n    macros: convert',
    lastUpdated: '2025.11.2',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'PyTorch',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/pytorch/pytorch/tree/main/.claude/skills/at-dispatch-v2',
    triggers: [
      'Port AT_DISPATCH_* macros to AT_DISPATCH_V2',
      'Work on aten/native kernels that use dispatch macros',
      'User mentions Dispatch_v2.h or dispatch conversion'
    ],
    features: [
      'Maps legacy macros to AT_EXPAND type groups',
      'Shows AT_WRAP lambda wrapping and argument order',
      'Calls out the required Dispatch_v2 include and conflict handling'
    ],
    bestFor: [
      'PyTorch C++ contributors',
      'Maintainers modernizing ATen kernels',
      'Teams standardizing dispatch macros'
    ],
    tags: ['PyTorch', 'C++', 'ATen', 'Macros', 'Refactor']
  },
  {
    id: '70',
    name: 'docstring',
    description: 'Write docstrings for PyTorch functions and methods following PyTorch conventions.',
    longDescription: 'Covers raw-string Sphinx formatting, signature lines, sections, math blocks, cross-references, and examples so docs stay aligned with torch/_tensor_docs.py patterns.',
    author: 'PyTorch',
    downloads: '3.3k',
    stars: 96650,
    roles: [Role.PRODUCT],
    isTrending: true,
    isCowork: true,
    setupCommand: 'claude mcp add docstring',
    yamlConfig: 'tools:\n  - name: docstring\n    format: pytorch\n    examples: true',
    lastUpdated: '2025.10.26',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'PyTorch',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/pytorch/pytorch/tree/main/.claude/skills/docstring',
    triggers: [
      'Draft or update a PyTorch docstring',
      'Ensure raw-string Sphinx formatting for torch APIs',
      'Add examples and cross-references for functions or methods'
    ],
    features: [
      'Defines required structure: signature, description, args, keyword args',
      'Shows Sphinx math, admonitions, and cross-reference patterns',
      'Emphasizes examples, defaults, and formatting rules'
    ],
    bestFor: [
      'PyTorch maintainers documenting APIs',
      'Contributors cleaning up docs formatting',
      'Reviewers validating docstring structure'
    ],
    tags: ['Docs', 'PyTorch', 'Sphinx', 'Docstring', 'Python']
  },
  {
    id: '71',
    name: 'skill-writer',
    description: 'Guide users through creating Agent Skills for Claude Code.',
    longDescription: 'Walks through scoping, folder placement, SKILL.md front matter, description formulas, and bundled resource structure so skills stay focused and discoverable.',
    author: 'PyTorch',
    downloads: '2.4k',
    stars: 96650,
    roles: [Role.DEVOPS],
    isTrending: true,
    isCowork: false,
    setupCommand: 'claude mcp add skill-writer',
    yamlConfig: 'tools:\n  - name: skill-writer\n    templates: true\n    reviews: optional',
    lastUpdated: '2025.10.26',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'Claude App',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/pytorch/pytorch/tree/main/.claude/skills/skill-writer',
    triggers: [
      'Create a new Agent Skill or SKILL.md',
      'Troubleshoot skill discovery and frontmatter',
      'Design directory structure and bundled assets'
    ],
    features: [
      'Clarifies scope and questions to focus one capability per skill',
      'Explains personal vs project skill locations',
      'Details required frontmatter, description formula, and optional allowed-tools'
    ],
    bestFor: [
      'Plugin or skill authors setting up new skills',
      'Teams standardizing SKILL.md docs',
      'Contributors converting prompts into discoverable skills'
    ],
    tags: ['Skills', 'Claude Code', 'Docs', 'Structure', 'Frontmatter']
  },
  {
    id: '72',
    name: 'gemini-skill-creator',
    description: 'Guide for creating effective skills; use when creating or updating a Gemini CLI skill.',
    longDescription: 'Defines what skills provide, how to keep them concise, the degrees-of-freedom guidance, and the anatomy of SKILL.md plus bundled scripts, references, and assets.',
    author: 'Google Gemini',
    downloads: '3.7k',
    stars: 91053,
    roles: [Role.DEVOPS],
    isTrending: true,
    isCowork: false,
    setupCommand: 'claude mcp add gemini-skill-creator',
    yamlConfig: 'tools:\n  - name: skill-creator\n    platform: gemini\n    resources: scripts',
    lastUpdated: '2026.1.14',
    type: 'Agent Skill',
    compatibility: ['Gemini CLI', 'Codex CLI', 'Claude Code CLI'],
        files: ['SKILL.md', 'scripts/'],
    repoUrl: 'https://github.com/google-gemini/gemini-cli/tree/main/packages/core/src/skills/builtin/skill-creator',
    triggers: [
      'Create or update a Gemini CLI skill',
      'Decide what to include in SKILL.md and bundled resources',
      'Explain skill principles and context budgeting'
    ],
    features: [
      'Explains what skills package (workflows, integrations, domain expertise)',
      'Outlines concise writing and degrees-of-freedom guidance',
      'Documents required SKILL.md frontmatter and optional scripts/references/assets layout'
    ],
    bestFor: [
      'Gemini CLI contributors authoring skills',
      'Teams sharing workflows via skills',
      'Maintainers reviewing skill structure'
    ],
    tags: ['Gemini', 'Skills', 'Docs', 'Structure', 'CLI']
  },
  {
    id: '73',
    name: 'gemini-pr-creator',
    description: 'Creates PRs that follow repository templates and standards.',
    longDescription: 'Walks through finding PR templates, drafting descriptions with checklists, and using the gh CLI with Conventional Commit titles for Gemini CLI changes.',
    author: 'Google Gemini',
    downloads: '2.9k',
    stars: 91053,
    roles: [Role.PRODUCT],
    isTrending: true,
    isCowork: false,
    setupCommand: 'claude mcp add gemini-pr-creator',
    yamlConfig: 'tools:\n  - name: pr-creator\n    platform: gemini\n    checklist: true',
    lastUpdated: '2026.1.14',
    type: 'Agent Skill',
    compatibility: ['Gemini CLI', 'Codex CLI', 'Claude Code CLI', 'GitHub'],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/google-gemini/gemini-cli/tree/main/.gemini/skills/pr-creator',
    triggers: [
      'Create a PR for Gemini CLI changes',
      'Need to locate and follow PR template files',
      'User invokes /pr or asks for gh CLI steps'
    ],
    features: [
      'Searches for templates under .github/PULL_REQUEST_TEMPLATE*',
      'Keeps headings and checklists intact and marks applicable items',
      'Uses gh pr create with body file and Conventional Commit title guidance'
    ],
    bestFor: [
      'Gemini CLI contributors',
      'Maintainers enforcing PR standards',
      'Teams automating PR creation'
    ],
    tags: ['PR', 'Gemini', 'Docs', 'Checklists', 'Contribution']
  },
  {
    id: '74',
    name: 'writing-dev-server-tests',
    description: 'Guides writing HMR/dev server tests in Bun’s test/bake harness.',
    longDescription: 'Explains devTest utilities, file layout, fixtures, and how to assert hot reload behavior and errors without using raw fs calls.',
    author: 'oven-sh',
    downloads: '2.3k',
    stars: 86361,
    roles: [Role.DEVOPS],
    isTrending: true,
    isCowork: false,
    setupCommand: 'claude mcp add writing-dev-server-tests',
    yamlConfig: 'tools:\n  - name: writing-dev-server-tests\n    runner: bun\n    headless: true',
    lastUpdated: '2025.12.25',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'Bun',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/oven-sh/bun/tree/main/.claude/skills/writing-dev-server-tests',
    triggers: [
      'Add or fix Bun dev server or hot reload tests',
      'Work in test/bake dev or dev-and-prod suites',
      'Need guidance on devTest APIs and expected errors'
    ],
    features: [
      'Maps bake harness files and test categories',
      'Shows devTest usage with dev.fetch/dev.client and reload assertions',
      'Highlights using dev.write/patch/delete instead of fs for hot reload'
    ],
    bestFor: [
      'Bun contributors expanding regression coverage',
      'Maintainers debugging dev server behavior',
      'QA engineers validating HMR flows'
    ],
    tags: ['Bun', 'Testing', 'Dev Server', 'HMR', 'Fixtures']
  },
  {
    id: '75',
    name: 'writing-bundler-tests',
    description: 'Guides writing Bun bundler tests with itBundled/expectBundled.',
    longDescription: 'Covers bundler test IDs, file setup, bundler options, runtime assertions, error/warning expectations, and dead-code markers.',
    author: 'oven-sh',
    downloads: '2.0k',
    stars: 86361,
    roles: [Role.BACKEND],
    isTrending: true,
    isCowork: false,
    setupCommand: 'claude mcp add writing-bundler-tests',
    yamlConfig: 'tools:\n  - name: writing-bundler-tests\n    runner: bun\n    snapshots: true',
    lastUpdated: '2025.12.25',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'Bun',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/oven-sh/bun/tree/main/.claude/skills/writing-bundler-tests',
    triggers: [
      'Create or update bundler/transpiler tests in test/bundler',
      'Need runtime assertions for bundle output',
      'Capture bundle errors, warnings, or DCE expectations'
    ],
    features: [
      'Shows itBundled usage and test ID conventions',
      'Lists key bundler options (format, target, minify, define, splitting)',
      'Explains runtime validations and bundleErrors/bundleWarnings handling'
    ],
    bestFor: [
      'Bun bundler maintainers',
      'Contributors covering bundling edge cases',
      'Engineers validating codegen changes'
    ],
    tags: ['Bun', 'Bundler', 'Testing', 'TypeScript', 'esbuild']
  },
  {
    id: '76',
    name: 'implementing-jsc-classes-cpp',
    description: 'Implements JavaScript classes in C++ using JavaScriptCore.',
    longDescription: 'Details class/constructor/prototype structure, iso subspaces, property tables, and creation helpers for Bun\'s JSC bindings.',
    author: 'oven-sh',
    downloads: '1.8k',
    stars: 86361,
    roles: [Role.BACKEND],
    isTrending: true,
    isCowork: false,
    setupCommand: 'claude mcp add implementing-jsc-classes-cpp',
    yamlConfig: 'tools:\n  - name: implementing-jsc-classes-cpp\n    language: cpp\n    bindings: jsc',
    lastUpdated: '2025.12.25',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'Bun',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/oven-sh/bun/tree/main/.claude/skills/implementing-jsc-classes-cpp',
    triggers: [
      'Add a new JS-exposed class implemented in C++',
      'Wire prototype/constructor pieces for JSC bindings',
      'Set up iso subspaces and property definitions'
    ],
    features: [
      'Outlines required class trio (DestructibleObject, Prototype, Constructor)',
      'Explains iso subspace registrations for classes with fields',
      'Provides property table and structure creation patterns'
    ],
    bestFor: [
      'Bun runtime contributors working in C++',
      'Engineers wiring new Web APIs',
      'Reviewers checking JSC bindings'
    ],
    tags: ['Bun', 'C++', 'JavaScriptCore', 'Bindings', 'Classes']
  },
  {
    id: '77',
    name: 'zig-system-calls',
    description: 'Guides using bun.sys for system calls and file I/O in Zig instead of std.fs/std.posix.',
    longDescription: 'Shows bun.sys.File wrappers, Maybe(T) error handling, cross-platform flags, and lower-level open/read/write patterns.',
    author: 'oven-sh',
    downloads: '1.7k',
    stars: 86361,
    roles: [Role.BACKEND],
    isTrending: true,
    isCowork: false,
    setupCommand: 'claude mcp add zig-system-calls',
    yamlConfig: 'tools:\n  - name: zig-system-calls\n    platforms: [macos, linux, windows]\n    api: bun.sys',
    lastUpdated: '2025.12.25',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'Bun',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/oven-sh/bun/tree/main/.claude/skills/zig-system-calls',
    triggers: [
      'Implement file or syscall logic in Zig for Bun',
      'Need error-aware wrappers versus raw std.fs',
      'Handle cross-platform file operations with bun.sys'
    ],
    features: [
      'Demonstrates bun.sys.File open/read/write/stat helpers',
      'Explains Maybe(T) error patterns and unwrap flows',
      'Covers bun.O flags and low-level open/read/write examples'
    ],
    bestFor: [
      'Zig developers extending Bun syscalls',
      'Engineers porting fs usage to bun.sys',
      'Contributors needing cross-platform file handling'
    ],
    tags: ['Zig', 'Bun', 'Syscalls', 'File I/O', 'bun.sys']
  },
  {
    id: '78',
    name: 'implementing-jsc-classes-zig',
    description: 'Creates JavaScript classes using Bun\'s Zig bindings generator (.classes.ts).',
    longDescription: 'Explains .classes.ts definitions, generated code, Zig implementations with JSError handling, and updating generated_classes_list.zig.',
    author: 'oven-sh',
    downloads: '1.6k',
    stars: 86361,
    roles: [Role.BACKEND],
    isTrending: true,
    isCowork: false,
    setupCommand: 'claude mcp add implementing-jsc-classes-zig',
    yamlConfig: 'tools:\n  - name: implementing-jsc-classes-zig\n    language: zig\n    bindings: generator',
    lastUpdated: '2025.12.25',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'Bun',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/oven-sh/bun/tree/main/.claude/skills/implementing-jsc-classes-zig',
    triggers: [
      'Define new JS APIs with Bun\'s bindings generator',
      'Implement constructors and properties in Zig',
      'Link .classes.ts definitions to Zig implementations'
    ],
    features: [
      'Shows class definition options (constructor, JSType, proto entries, caching)',
      'Provides Zig implementation template with callFrame handling and JSError returns',
      'Reminds to update generated classes list and lifecycle hooks'
    ],
    bestFor: [
      'Bun contributors adding JS bindings in Zig',
      'Engineers porting APIs to generator-based bindings',
      'Reviewers verifying class lifecycle hooks'
    ],
    tags: ['Zig', 'Bun', 'JavaScriptCore', 'Bindings', 'Generator']
  },
  {
    id: '79',
    name: 'electron-chromium-upgrade',
    description: 'Guide for performing Chromium version upgrades in Electron roller/chromium/main.',
    longDescription: 'Covers Phase One patch application via `e sync --3` and `e patches`, and Phase Two build fixes with `e build -k 999`, including commit rules and summaries.',
    author: 'Electron',
    downloads: '3.5k',
    stars: 119754,
    roles: [Role.DEVOPS],
    isTrending: true,
    isCowork: false,
    setupCommand: 'claude mcp add electron-chromium-upgrade',
    yamlConfig: 'tools:\n  - name: electron-chromium-upgrade\n    strategy: staged\n    tests: smoke',
    lastUpdated: '2025.12.19',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'Electron',
      'Chromium',
      'Gemini CLI'
    ],
        files: ['SKILL.md', 'references/'],
    repoUrl: 'https://github.com/electron/electron/tree/main/.claude/skills/electron-chromium-upgrade',
    triggers: [
      'Run e sync --3 and resolve patch conflicts during a roll',
      'Fix build failures on roller/chromium/main',
      'Write upgrade summaries and commits for patch fixes'
    ],
    features: [
      'Step-by-step loop for applying patches with git am and e patches',
      'Phase Two build triage with e build -k 999 and start --version',
      'Commit rules and cautions against dropping patches prematurely'
    ],
    bestFor: [
      'Electron maintainers handling Chromium upgrades',
      'Contributors debugging patch and build failures',
      'Release engineers coordinating rollouts'
    ],
    tags: ['Electron', 'Chromium', 'Upgrades', 'Patches', 'Build']
  },
  {
    id: '80',
    name: 'add-admin-api-endpoint',
    description: 'Add new endpoints to Ghost\'s Admin API at ghost/api/admin/**.',
    longDescription: 'Shows where to place endpoint controllers, how to register routes, and how to cover them with e2e-api tests plus permissions and validation references.',
    author: 'TryGhost',
    downloads: '2.8k',
    stars: 51602,
    roles: [Role.BACKEND],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add add-admin-api-endpoint',
    yamlConfig: 'tools:\n  - name: add-admin-api-endpoint\n    auth: admin\n    tests: required',
    lastUpdated: '2025.12.3',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'Ghost',
      'Gemini CLI'
    ],
        files: ['SKILL.md', 'permissions.md', 'reference.md', 'validation.md'],
    repoUrl: 'https://github.com/TryGhost/Ghost/tree/main/.claude/skills/add-admin-api-endpoint',
    triggers: [
      'Create a new admin API resource or endpoint in Ghost',
      'Register routes in ghost/core/core/server/web/api/endpoints/admin/routes.js',
      'Add e2e-api coverage for new admin endpoints'
    ],
    features: [
      'Outlines controller creation with docName and endpoint definitions',
      'Guides route wiring and use of API framework types',
      'Requires e2e tests and references permission/validation docs'
    ],
    bestFor: [
      'Ghost backend contributors',
      'Teams exposing new admin functionality',
      'Reviewers validating API additions'
    ],
    tags: ['Ghost', 'API', 'Admin', 'Node.js', 'Routing']
  },
  {
    id: '81',
    name: 'create-database-migration',
    description: 'Create database migrations for Ghost\'s MySQL schema.',
    longDescription: 'Uses slimer to scaffold migrations, updates schema.js, runs knex-migrator and integrity tests, and points to examples and rules.',
    author: 'TryGhost',
    downloads: '2.5k',
    stars: 51602,
    roles: [Role.BACKEND],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add create-database-migration',
    yamlConfig: 'tools:\n  - name: create-database-migration\n    tool: slimer\n    tests: required',
    lastUpdated: '2025.12.2',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'Ghost',
      'MySQL',
      'Gemini CLI'
    ],
        files: ['SKILL.md', 'examples.md', 'rules.md'],
    repoUrl: 'https://github.com/TryGhost/Ghost/tree/main/.claude/skills/create-database-migration',
    triggers: [
      'Add tables, columns, or settings in the Ghost database',
      'Run slimer migration scaffolding',
      'Update schema definitions and integrity tests'
    ],
    features: [
      'Explains slimer migration command and directory layout',
      'Covers updating schema.js and exporter table lists',
      'Lists required tests (knex-migrator, schema integrity, unit tests)'
    ],
    bestFor: [
      'Ghost core maintainers',
      'Contributors changing database schema',
      'Engineers validating migrations before release'
    ],
    tags: ['Ghost', 'Migration', 'MySQL', 'Schema', 'Knex']
  },
  {
    id: '82',
    name: 'clojure-review',
    description: 'Review Clojure/ClojureScript changes for Metabase style and quality.',
    longDescription: 'Provides what to flag, what not to post, and a detailed checklist on naming, docs, organization, tests, modules, REST API, MBQL, database, drivers, and misc cases.',
    author: 'Metabase',
    downloads: '3.9k',
    stars: 45599,
    roles: [Role.BACKEND],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add clojure-review',
    yamlConfig: 'tools:\n  - name: clojure-review\n    style: metabase\n    tests: suggest',
    lastUpdated: '2026.1.13',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'Metabase',
      'Clojure',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/metabase/metabase/tree/master/.claude/skills/clojure-review',
    triggers: [
      'Review PRs with Clojure/ClojureScript diffs',
      'Check adherence to Metabase Clojure style guides',
      'Run the review checklist for APIs, tests, and modules'
    ],
    features: [
      'Links shared style guide and commands references',
      'Enumerates review checklist across naming, docs, organization, tests',
      'Highlights special cases like kondo ignores and MBQL/driver rules'
    ],
    bestFor: [
      'Metabase reviewers',
      'Clojure maintainers enforcing standards',
      'Contributors self-reviewing before PRs'
    ],
    tags: ['Clojure', 'Code Review', 'Metabase', 'Style', 'Quality']
  },
  {
    id: '83',
    name: 'clojure-write',
    description: 'Guide Clojure/ClojureScript development using REPL-driven workflow and conventions.',
    longDescription: 'Promotes clojure-mcp tools, REPL-first loops, functional practices, and critical editing rules for Metabase code.',
    author: 'Metabase',
    downloads: '3.4k',
    stars: 45599,
    roles: [Role.BACKEND],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add clojure-write',
    yamlConfig: 'tools:\n  - name: clojure-write\n    style: metabase\n    tests: true',
    lastUpdated: '2025.12.12',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'Metabase',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/metabase/metabase/tree/master/.claude/skills/clojure-write',
    triggers: [
      'Write or refactor Clojure code for Metabase',
      'Set up REPL-driven development loops',
      'Ensure edits follow style and readability checks'
    ],
    features: [
      'Advises using clojure-mcp tools over shell commands',
      'Outlines REPL-driven workflow with small functions and tests',
      'Lists editing rules (check-readable, alignment, trailing spaces)'
    ],
    bestFor: [
      'Metabase Clojure contributors',
      'Developers adopting REPL workflows',
      'Teams enforcing functional best practices'
    ],
    tags: ['Clojure', 'REPL', 'Development', 'Metabase', 'Workflow']
  },
  {
    id: '84',
    name: 'docs-review',
    description: 'Review documentation changes for Metabase writing style.',
    longDescription: 'Explains review mode detection, mandatory numbered feedback, and a checklist covering tone, structure, links, formatting, and code examples.',
    author: 'Metabase',
    downloads: '2.8k',
    stars: 45599,
    roles: [Role.PRODUCT],
    isTrending: false,
    isCowork: true,
    setupCommand: 'claude mcp add docs-review',
    yamlConfig: 'tools:\n  - name: docs-review\n    style: metabase\n    checklist: yes',
    lastUpdated: '2025.12.18',
    type: 'Agent Skill',
    compatibility: [
      'Claude App',
      'Codex CLI',
      'Claude Code CLI',
      'Metabase',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/metabase/metabase/tree/master/.claude/skills/docs-review',
    triggers: [
      'Review Metabase docs PRs or markdown diffs',
      'Enforce numbered feedback and style guide compliance',
      'Check tone, headings, and link formatting'
    ],
    features: [
      'Differentiates PR review vs local output workflows',
      'Provides checklist for tone, structure, links, formatting, examples',
      'Defines required numbered issue format for feedback'
    ],
    bestFor: [
      'Docs reviewers at Metabase',
      'Contributors polishing doc PRs',
      'Maintainers enforcing style guide'
    ],
    tags: ['Docs', 'Review', 'Metabase', 'Style Guide', 'Markdown']
  },
  {
    id: '85',
    name: 'docs-write',
    description: 'Write documentation following Metabase\'s conversational, user-focused style.',
    longDescription: 'Guides drafting, editing, and polishing docs with clear headings, descriptive links, and actionable examples while avoiding AI tells.',
    author: 'Metabase',
    downloads: '3.0k',
    stars: 45599,
    roles: [Role.PRODUCT],
    isTrending: false,
    isCowork: true,
    setupCommand: 'claude mcp add docs-write',
    yamlConfig: 'tools:\n  - name: docs-write\n    style: metabase\n    examples: true',
    lastUpdated: '2025.11.19',
    type: 'Agent Skill',
    compatibility: [
      'Claude App',
      'Codex CLI',
      'Claude Code CLI',
      'Metabase',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/metabase/metabase/tree/master/.claude/skills/docs-write',
    triggers: [
      'Create or edit Metabase documentation or MDX files',
      'Need tone and structure guidance for user-facing docs',
      'Run polish checks and prettier formatting'
    ],
    features: [
      'Provides start-here questions to focus audience and need',
      'Outlines draft/edit/polish process with heading and link standards',
      'Calls out wording pitfalls and formatting rules'
    ],
    bestFor: [
      'Metabase doc writers',
      'Engineers adding docs with consistent voice',
      'Reviewers ensuring clarity and brevity'
    ],
    tags: ['Docs', 'Writing', 'Metabase', 'Style', 'MDX']
  },
  {
    id: '86',
    name: 'typescript-review',
    description: 'Review TypeScript/JavaScript changes for Metabase coding standards.',
    longDescription: 'Focuses on code quality, JSDoc correctness, type safety, and React best practices with links to shared TypeScript commands.',
    author: 'Metabase',
    downloads: '4.1k',
    stars: 45599,
    roles: [Role.FRONTEND],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add typescript-review',
    yamlConfig: 'tools:\n  - name: typescript-review\n    style: metabase\n    tests: suggest',
    lastUpdated: '2025.11.19',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'Metabase',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/metabase/metabase/tree/master/.claude/skills/typescript-review',
    triggers: [
      'Review PRs containing TypeScript or JavaScript for Metabase',
      'Check style conventions and lint expectations',
      'Verify types, JSDoc, and React patterns'
    ],
    features: [
      'Links TypeScript commands reference',
      'Enumerates review focus: standards, quality, JSDoc, type safety, React',
      'Encourages compliance with Metabase conventions'
    ],
    bestFor: [
      'Metabase reviewers on frontend/back-end code',
      'Contributors self-checking TS changes',
      'Teams enforcing type and React patterns'
    ],
    tags: ['TypeScript', 'Review', 'Metabase', 'React', 'Quality']
  },
  {
    id: '87',
    name: 'typescript-write',
    description: 'Write TypeScript/JavaScript code following Metabase standards.',
    longDescription: 'Points to development workflow and TypeScript command references to keep new code aligned with project practices.',
    author: 'Metabase',
    downloads: '3.7k',
    stars: 45599,
    roles: [Role.FRONTEND],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add typescript-write',
    yamlConfig: 'tools:\n  - name: typescript-write\n    style: metabase\n    tests: true',
    lastUpdated: '2025.11.19',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'Metabase',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/metabase/metabase/tree/master/.claude/skills/typescript-write',
    triggers: [
      'Develop or refactor TypeScript/JavaScript in Metabase',
      'Need guidance on commands and workflows',
      'Ensure code follows house conventions'
    ],
    features: [
      'References shared development workflow',
      'Links TypeScript commands helpers',
      'Sets expectations for standards-driven implementation'
    ],
    bestFor: [
      'Metabase frontend contributors',
      'Engineers standardizing TS practices',
      'New contributors seeking quick orientation'
    ],
    tags: ['TypeScript', 'JavaScript', 'Metabase', 'Development', 'Guidelines']
  },
  {
    id: '88',
    name: 'add-malli-schemas',
    description: 'Add Malli schemas to Metabase API endpoints with proper patterns, validation timing, and error handling.',
    longDescription: 'Provides reference files, a checklist for route/query/body/response schemas, examples, and common schema patterns for Malli.',
    author: 'Metabase',
    downloads: '2.9k',
    stars: 45599,
    roles: [Role.BACKEND],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add add-malli-schemas',
    yamlConfig: 'tools:\n  - name: add-malli-schemas\n    validate: true\n    tests: required',
    lastUpdated: '2025.12.18',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'Metabase',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/metabase/metabase/tree/master/.claude/skills/add-malli-schemas',
    triggers: [
      'Add or improve Malli schemas on Metabase endpoints',
      'Define request/response validation with defaults and optional fields',
      'Look for schema examples and naming conventions'
    ],
    features: [
      'Points to exemplar files across API modules',
      'Checklist for route/query/body/response schemas and named schema reuse',
      'Shows common schema types and error messaging patterns'
    ],
    bestFor: [
      'Metabase backend developers',
      'Contributors adding API validation',
      'Reviewers checking schema completeness'
    ],
    tags: ['Malli', 'Clojure', 'Metabase', 'API', 'Validation']
  },
  {
    id: '89',
    name: 'tldraw-skill-creator',
    description: 'Guide for creating effective Claude skills in the tldraw repo.',
    longDescription: 'Explains what skills provide, concise writing principles, degrees of freedom, and the anatomy of SKILL.md plus optional scripts, references, and assets.',
    author: 'tldraw',
    downloads: '3.2k',
    stars: 44585,
    roles: [Role.DEVOPS],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add tldraw-skill-creator',
    yamlConfig: 'tools:\n  - name: skill-creator\n    platform: tldraw\n    templates: true',
    lastUpdated: '2026.1.7',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'tldraw',
      'Gemini CLI'
    ],
        files: ['LICENSE.txt', 'SKILL.md', 'references/', 'scripts/'],
    repoUrl: 'https://github.com/tldraw/tldraw/tree/main/.claude/skills/skill-creator',
    triggers: [
      'Create or update a Claude skill in tldraw',
      'Write SKILL.md frontmatter and body for a skill',
      'Decide on scripts, references, or assets to bundle'
    ],
    features: [
      'Explains skill scope and context budgeting',
      'Describes required frontmatter and skill anatomy',
      'Covers optional scripts/references/assets directories'
    ],
    bestFor: [
      'tldraw contributors authoring skills',
      'Teams packaging workflows into skills',
      'Reviewers ensuring skills are token-efficient'
    ],
    tags: ['Skills', 'tldraw', 'Claude', 'Docs', 'Structure']
  },
  {
    id: '90',
    name: 'write-e2e-tests',
    description: 'Writing Playwright E2E tests for tldraw in apps/examples/e2e or apps/dotcom/client/e2e.',
    longDescription: 'Covers file layout, required declarations, setup patterns, fixtures, editor interactions, and UI/event assertions for end-to-end coverage.',
    author: 'tldraw',
    downloads: '2.7k',
    stars: 44585,
    roles: [Role.FRONTEND],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add write-e2e-tests',
    yamlConfig: 'tools:\n  - name: write-e2e-tests\n    runner: playwright\n    headless: true',
    lastUpdated: '2026.1.6',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'tldraw',
      'Playwright',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/tldraw/tldraw/tree/main/.claude/skills/write-e2e-tests',
    triggers: [
      'Add or update Playwright tests for tldraw UI flows',
      'Need fixtures and setup patterns for SDK examples or dotcom',
      'Test editor interactions or UI events via page.evaluate'
    ],
    features: [
      'Describes e2e folder structure, fixtures, and naming conventions',
      'Provides setup patterns (setupOrReset, shared pages, shape fixtures)',
      'Shows editor interactions, UI selectors, and event assertions'
    ],
    bestFor: [
      'tldraw QA contributors',
      'Engineers validating editor behavior',
      'Teams maintaining Playwright suites'
    ],
    tags: ['Playwright', 'tldraw', 'E2E', 'Testing', 'UI']
  },
  {
    id: '91',
    name: 'write-unit-tests',
    description: 'Writing unit and integration tests for the tldraw SDK with Vitest.',
    longDescription: 'Explains test locations per workspace, TestEditor vs Editor usage, common helper methods, pointer/keyboard simulations, and setup patterns.',
    author: 'tldraw',
    downloads: '2.6k',
    stars: 44585,
    roles: [Role.FRONTEND],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add write-unit-tests',
    yamlConfig: 'tools:\n  - name: write-unit-tests\n    framework: vitest\n    coverage: 80',
    lastUpdated: '2026.1.6',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'tldraw',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/tldraw/tldraw/tree/main/.claude/skills/write-unit-tests',
    triggers: [
      'Create unit or integration tests in packages/editor or packages/tldraw',
      'Choose between TestEditor and Editor harnesses',
      'Simulate pointer/keyboard interactions or shape assertions'
    ],
    features: [
      'Maps test locations for primitives, shapes, and commands',
      'Demonstrates TestEditor lifecycle and helper methods',
      'Outlines pointer and keyboard simulation options with setup patterns'
    ],
    bestFor: [
      'tldraw SDK contributors',
      'Engineers adding regression coverage',
      'Reviewers checking test completeness'
    ],
    tags: ['Vitest', 'tldraw', 'Unit Tests', 'Integration', 'Editor']
  },
  {
    id: '92',
    name: 'write-docs',
    description: 'Writing SDK documentation for tldraw with a confident, code-first voice.',
    longDescription: 'Defines the tldraw voice, avoids AI tells, and covers mechanics like sentence case, contractions, frontmatter, MDX components, and code-heavy examples.',
    author: 'tldraw',
    downloads: '2.9k',
    stars: 44585,
    roles: [Role.PRODUCT],
    isTrending: false,
    isCowork: true,
    setupCommand: 'claude mcp add write-docs',
    yamlConfig: 'tools:\n  - name: write-docs\n    style: tldraw\n    examples: true',
    lastUpdated: '2026.1.7',
    type: 'Agent Skill',
    compatibility: [
      'Claude App',
      'Codex CLI',
      'Claude Code CLI',
      'tldraw',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/tldraw/tldraw/tree/main/.claude/skills/write-docs',
    triggers: [
      'Author or update docs in apps/docs/content',
      'Need tone guidance and examples for API links or MDX components',
      'Ensure headings, frontmatter, and examples match tldraw style'
    ],
    features: [
      'Describes the tldraw voice and patterns to emulate or avoid',
      'Lists mechanics: sentence case, active voice, contractions',
      'Provides frontmatter template and MDX component usage (FocusLines, Image, tables)'
    ],
    bestFor: [
      'tldraw doc writers',
      'Developers documenting SDK examples',
      'Reviewers polishing doc tone'
    ],
    tags: ['Docs', 'tldraw', 'Writing', 'MDX', 'Style']
  },
  {
    id: '93',
    name: 'write-pr',
    description: 'Writing PR titles and descriptions for the tldraw repository.',
    longDescription: 'Sets Conventional Commit title format and a PR body template with change type, test plan, release notes, API changes, and related issue links.',
    author: 'tldraw',
    downloads: '2.5k',
    stars: 44585,
    roles: [Role.PRODUCT],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add write-pr',
    yamlConfig: 'tools:\n  - name: write-pr\n    platform: github\n    checklist: true',
    lastUpdated: '2026.1.6',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'tldraw',
      'GitHub',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/tldraw/tldraw/tree/main/.claude/skills/write-pr',
    triggers: [
      'Create or update a PR for tldraw/tldraw',
      'Need Conventional Commit title and PR template',
      'Document test plan and release notes for changes'
    ],
    features: [
      'Lists allowed types/scopes and example titles',
      'Provides PR body template with checkboxes, test plan, and release notes',
      'Covers API changes section and rules like sentence case and no generated text'
    ],
    bestFor: [
      'tldraw contributors preparing PRs',
      'Maintainers standardizing PR descriptions',
      'Teams automating /pr output'
    ],
    tags: ['PR', 'tldraw', 'Docs', 'Screenshots', 'Checklists']
  },
  {
    id: '94',
    name: 'write-example',
    description: 'Writing SDK examples for tldraw apps/examples.',
    longDescription: 'Covers folder structure, README frontmatter, naming conventions, component layout, styles, control panels, and comment formatting for examples.',
    author: 'tldraw',
    downloads: '2.4k',
    stars: 44585,
    roles: [Role.FRONTEND],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add write-example',
    yamlConfig: 'tools:\n  - name: write-example\n    format: tsx\n    comments: concise',
    lastUpdated: '2026.1.7',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'tldraw',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/tldraw/tldraw/tree/main/.claude/skills/write-example',
    triggers: [
      'Create a new example folder under apps/examples/src/examples',
      'Define README frontmatter and example component naming',
      'Add styles or control panels for examples'
    ],
    features: [
      'Specifies folder/file naming plus frontmatter fields',
      'Details example component structure and layout helpers',
      'Provides guidance for styles, TopPanel controls, and comment format'
    ],
    bestFor: [
      'tldraw example authors',
      'Educators showcasing SDK features',
      'Reviewers aligning examples to site embeds'
    ],
    tags: ['Examples', 'tldraw', 'Docs', 'React', 'SDK']
  },
  {
    id: '95',
    name: 'write-issue',
    description: 'Writing and maintaining GitHub issues for the tldraw repository.',
    longDescription: 'Sets title standards, issue types and labels, body expectations for bugs/features/examples, and triage workflows for new or stale issues.',
    author: 'tldraw',
    downloads: '2.2k',
    stars: 44585,
    roles: [Role.PRODUCT],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add write-issue',
    yamlConfig: 'tools:\n  - name: write-issue\n    platform: github\n    assets: optional',
    lastUpdated: '2026.1.6',
    type: 'Agent Skill',
    compatibility: [
      'Claude App',
      'Codex CLI',
      'Claude Code CLI',
      'tldraw',
      'GitHub',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/tldraw/tldraw/tree/main/.claude/skills/write-issue',
    triggers: [
      'Create or edit issues in tldraw/tldraw',
      'Clean up titles, types, or labels for triage',
      'Document reproduction steps or feature requests'
    ],
    features: [
      'Defines title rules and issue types/labels',
      'Provides bug/feature/example body expectations',
      'Covers triage workflow for new or stale issues'
    ],
    bestFor: [
      'tldraw maintainers triaging backlog',
      'Contributors filing clear issues',
      'Community managers cleaning metadata'
    ],
    tags: ['Issues', 'GitHub', 'tldraw', 'Triage', 'Docs']
  },
  {
    id: '96',
    name: 'concept-workflow',
    description: 'End-to-end workflow for creating complete JavaScript concept documentation, orchestrating all skills from research to final review.',
    longDescription: 'Runs resource-curator, write-concept, test-writer, fact-check, and seo-review in sequence to ship a complete concept page.',
    author: 'leonardomso',
    downloads: '3.0k',
    stars: 66133,
    roles: [Role.PRODUCT, Role.MARKETING],
    isTrending: true,
    isCowork: false,
    setupCommand: 'claude mcp add concept-workflow',
    yamlConfig: 'tools:\n  - name: concept-workflow\n    format: markdown\n    examples: true',
    lastUpdated: '2026.1.6',
    type: 'Agent Skill',
    compatibility: [
      'Claude App',
      'Codex CLI',
      'Claude Code CLI',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/leonardomso/33-js-concepts/tree/master/.opencode/skill/concept-workflow',
    triggers: [
      'Create a new 33-js-concepts page from scratch',
      'Rewrite an existing concept end-to-end',
      'Need a full workflow across resources, writing, tests, accuracy, and SEO'
    ],
    features: [
      'Outlines five phases from research to optimization',
      'Explains when to branch into specialized skills',
      'Provides workflow deliverables and checkpoints'
    ],
    bestFor: [
      '33-js-concepts maintainers',
      'Contributors wanting a structured doc workflow',
      'Editors coordinating multi-skill updates'
    ],
    tags: ['Workflow', 'JavaScript', 'Docs', 'SEO', 'Testing']
  },
  {
    id: '97',
    name: 'fact-check',
    description: 'Verify technical accuracy of JavaScript concept pages, code examples, and resources.',
    longDescription: 'Provides a fact-checking methodology across code verification, MDN/spec alignment, resource auditing, and common pitfalls.',
    author: 'leonardomso',
    downloads: '2.7k',
    stars: 66133,
    roles: [Role.PRODUCT],
    isTrending: true,
    isCowork: false,
    setupCommand: 'claude mcp add fact-check',
    yamlConfig: 'tools:\n  - name: fact-check\n    citations: required\n    output: diff',
    lastUpdated: '2026.1.6',
    type: 'Agent Skill',
    compatibility: [
      'Claude App',
      'Codex CLI',
      'Claude Code CLI',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/leonardomso/33-js-concepts/tree/master/.opencode/skill/fact-check',
    triggers: [
      'Check code examples before publishing',
      'Audit concept pages for outdated or misleading info',
      'Validate external resource links and outputs'
    ],
    features: [
      'Step-by-step phases for code example verification with tests',
      'Guidelines for spotting misinformation and common mistakes',
      'Covers resource/link verification and spec alignment'
    ],
    bestFor: [
      'Docs reviewers ensuring accuracy',
      'Contributors auditing community content',
      'QA checking JavaScript education materials'
    ],
    tags: ['Fact-Checking', 'JavaScript', 'Docs', 'Testing', 'Accuracy']
  },
  {
    id: '98',
    name: 'write-concept',
    description: 'Write or review JavaScript concept documentation for 33-js-concepts with strict structure and quality guidelines.',
    longDescription: 'Sets voice and tone expectations, target audience, anti-AI language rules, and section patterns for concept pages.',
    author: 'leonardomso',
    downloads: '3.1k',
    stars: 66133,
    roles: [Role.PRODUCT],
    isTrending: true,
    isCowork: false,
    setupCommand: 'claude mcp add write-concept',
    yamlConfig: 'tools:\n  - name: write-concept\n    format: markdown\n    examples: true',
    lastUpdated: '2026.1.6',
    type: 'Agent Skill',
    compatibility: [
      'Claude App',
      'Codex CLI',
      'Claude Code CLI',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/leonardomso/33-js-concepts/tree/master/.opencode/skill/write-concept',
    triggers: [
      'Create or improve concept docs under docs/concepts',
      'Ensure tone and wording follow human, conversational style',
      'Structure sections, hooks, examples, and takeaways'
    ],
    features: [
      'Defines target audience and empathetic writing style',
      'Lists forbidden AI tells and preferred phrasing',
      'Provides structural guidance for hooks, examples, and definitions'
    ],
    bestFor: [
      'Docs authors for 33-js-concepts',
      'Editors rewriting AI-sounding copy',
      'Reviewers enforcing structure and tone'
    ],
    tags: ['Docs', 'JavaScript', 'Writing', 'Style', 'Guidelines']
  },
  {
    id: '99',
    name: 'seo-review',
    description: 'Perform focused SEO audits on JavaScript concept pages for search visibility.',
    longDescription: 'Covers keyword cluster selection, on-page audit items, featured snippet optimization, internal linking checks, and reporting.',
    author: 'leonardomso',
    downloads: '2.3k',
    stars: 66133,
    roles: [Role.PRODUCT, Role.MARKETING],
    isTrending: true,
    isCowork: false,
    setupCommand: 'claude mcp add seo-review',
    yamlConfig: 'tools:\n  - name: seo-review\n    checks: [keywords, links]\n    output: diff',
    lastUpdated: '2026.1.6',
    type: 'Agent Skill',
    compatibility: [
      'Claude App',
      'Codex CLI',
      'Claude Code CLI',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/leonardomso/33-js-concepts/tree/master/.opencode/skill/seo-review',
    triggers: [
      'Optimize concept pages for search',
      'Prepare new pages to target key queries',
      'Run periodic audits after content updates'
    ],
    features: [
      'Provides keyword cluster templates per concept',
      'Outlines on-page, featured snippet, and internal link checks',
      'Defines report structure for SEO findings'
    ],
    bestFor: [
      'Docs editors focused on SEO',
      'Content strategists improving discoverability',
      'Maintainers auditing underperforming pages'
    ],
    tags: ['SEO', 'JavaScript', 'Docs', 'Optimization', 'Keywords']
  },
  {
    id: '100',
    name: 'test-writer',
    description: 'Generate comprehensive Vitest tests for code examples in concept docs.',
    longDescription: 'Describes phases for extracting examples, structuring tests, handling special cases, and project conventions for filenames and headers.',
    author: 'leonardomso',
    downloads: '2.5k',
    stars: 66133,
    roles: [Role.DEVOPS],
    isTrending: true,
    isCowork: false,
    setupCommand: 'claude mcp add test-writer',
    yamlConfig: 'tools:\n  - name: test-writer\n    framework: vitest\n    mode: examples',
    lastUpdated: '2026.1.6',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'Claude App',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/leonardomso/33-js-concepts/tree/master/.opencode/skill/test-writer',
    triggers: [
      'Add tests for code examples in concept pages',
      'Update examples and need coverage',
      'Check DOM-specific or async error examples'
    ],
    features: [
      'Categorizes examples and identifies test file naming/locations',
      'Guides conversion of code blocks to Vitest assertions',
      'Covers handling DOM/browser cases, timing, and side effects'
    ],
    bestFor: [
      'Maintainers verifying docs examples',
      'Contributors writing Vitest coverage for docs',
      'Reviewers ensuring tests align with documentation'
    ],
    tags: ['Testing', 'Vitest', 'JavaScript', 'Docs', 'Examples']
  },
  {
    id: '101',
    name: 'resource-curator',
    description: 'Find, evaluate, and maintain high-quality external resources for JavaScript concept docs.',
    longDescription: 'Includes auditing existing links, target counts per resource type, search queries for articles and videos, description formulas, and trusted sources.',
    author: 'leonardomso',
    downloads: '2.2k',
    stars: 66133,
    roles: [Role.PRODUCT],
    isTrending: true,
    isCowork: false,
    setupCommand: 'claude mcp add resource-curator',
    yamlConfig: 'tools:\n  - name: resource-curator\n    tags: difficulty,format\n    output: list',
    lastUpdated: '2026.1.6',
    type: 'Agent Skill',
    compatibility: [
      'Claude App',
      'Codex CLI',
      'Claude Code CLI',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/leonardomso/33-js-concepts/tree/master/.opencode/skill/resource-curator',
    triggers: [
      'Add or refresh resources on a concept page',
      'Audit links for accuracy and freshness',
      'Curate resource lists with descriptions and icons'
    ],
    features: [
      'Provides audit checklist for status, accuracy, and dates',
      'Defines target counts for references, articles, videos, courses, books',
      'Supplies search queries, trusted sources, and description formulas'
    ],
    bestFor: [
      'Docs maintainers curating external links',
      'Community editors vetting contributions',
      'SEO/content strategists balancing beginner and advanced resources'
    ],
    tags: ['Resources', 'Curation', 'JavaScript', 'Docs', 'Links']
  },
  {
    id: '102',
    name: 'create-pr',
    description: 'Creates GitHub pull requests with titles that satisfy n8n check-pr-title validation.',
    longDescription: 'Explains the title pattern with types/scopes, gh workflow with template body, and checklist expectations for summary, related links, and labels.',
    author: 'n8n-io',
    downloads: '2.9k',
    stars: 169295,
    roles: [Role.PRODUCT],
    isTrending: true,
    isCowork: false,
    setupCommand: 'claude mcp add create-pr',
    yamlConfig: 'tools:\n  - name: create-pr\n    platform: n8n\n    checklist: true',
    lastUpdated: '2026.1.14',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'n8n',
      'GitHub',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/n8n-io/n8n/tree/master/.claude/skills/create-pr',
    triggers: [
      'User requests /pr or wants to create an n8n PR',
      'Need to craft compliant titles and summaries',
      'Prepare PR body with template and checklist'
    ],
    features: [
      'Defines title regex with allowed types, scopes, and breaking markers',
      'Outlines gh pr create steps using the repository template',
      'Lists checklist items for docs, tests, and release/backport labels'
    ],
    bestFor: [
      'n8n contributors',
      'Teams standardizing PR quality',
      'Maintainers speeding up reviews'
    ],
    tags: ['PR', 'n8n', 'GitHub', 'Templates', 'Changelog']
  },
  {
    id: '104',
    name: 'plugin-settings',
    description: 'Store Claude Code plugin configuration in .claude/plugin-name.local.md files with YAML frontmatter.',
    longDescription: 'Documents the plugin settings pattern, showing how to read/write .local.md files for per-project configuration, parse YAML frontmatter, and wire settings into hooks, commands, or agents.',
    author: 'Anthropic',
    downloads: '2.4k',
    stars: 56950,
    roles: [Role.DEVOPS],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add plugin-settings',
    yamlConfig: 'tools:\n  - name: plugin-settings\n    storage: .local.md\n    format: yaml+markdown',
    lastUpdated: '2026.1.6',
    type: 'Agent Skill / Plugin Dev',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'Claude App',
      'Gemini CLI'
    ],
        files: ['SKILL.md', 'examples/', 'references/', 'scripts/'],
    repoUrl: 'https://github.com/anthropics/claude-plugins-official/tree/main/plugins/plugin-dev/skills/plugin-settings',
    triggers: [
      'Add configurable settings or state to a Claude Code plugin',
      'Parse YAML frontmatter from .claude/plugin-name.local.md',
      'Wire plugin configuration into hooks, commands, or agents'
    ],
    features: [
      'Defines .claude/plugin-name.local.md structure with YAML frontmatter',
      'Shows parsing patterns and example scripts for hooks/commands',
      'Outlines lifecycle, gitignore guidance, and usage across plugin surfaces'
    ],
    bestFor: [
      'Plugin developers adding user-configurable settings',
      'Teams storing per-project plugin state',
      'Maintainers standardizing configuration patterns'
    ],
    tags: ['Plugins', 'Settings', 'YAML', 'Configuration', 'State']
  },
  {
    id: '105',
    name: 'skill-creator-kimi',
    description: 'Guide for creating effective skills in Kimi CLI with concise, structured content.',
    longDescription: 'Covers skill anatomy, degrees of freedom, progressive disclosure, and when to add scripts, references, or assets so Kimi skills stay focused and token-efficient.',
    author: 'MoonshotAI',
    downloads: '2.6k',
    stars: 3855,
    roles: [Role.DEVOPS],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add skill-creator-kimi',
    yamlConfig: 'tools:\n  - name: skill-creator\n    platform: kimi-cli\n    resources: optional',
    lastUpdated: '2026.1.6',
    type: 'Agent Skill',
    compatibility: [
      'Kimi CLI',
      'Claude Code CLI',
      'Codex CLI',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/MoonshotAI/kimi-cli/tree/main/src/kimi_cli/skills/skill-creator',
    triggers: [
      'Create or update a Kimi CLI skill',
      'Decide what to include in SKILL.md vs scripts/references/assets',
      'Need principles for concise, high-impact skill content'
    ],
    features: [
      'Explains skill anatomy and required metadata',
      'Guides degree-of-freedom choices (text, pseudocode, scripts)',
      'Uses progressive disclosure to manage context size'
    ],
    bestFor: [
      'Kimi CLI contributors authoring skills',
      'Teams packaging workflows for Kimi',
      'Maintainers enforcing consistent skill structure'
    ],
    tags: ['Kimi', 'Skills', 'CLI', 'Docs', 'Structure']
  },
  {
    id: '141',
    name: 'skill-development-official',
    description: 'Official Claude Code plugin skill development guide from claude-plugins-official.',
    longDescription: 'Covers skill anatomy, metadata quality, progressive disclosure, and when to include scripts, references, or assets so plugin skills stay focused.',
    author: 'Anthropic',
    downloads: '2.6k',
    stars: 56950,
    roles: [Role.FRONTEND],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add skill-development',
    yamlConfig: 'tools:\n  - name: skill-development\n    platform: claude-code\n    resources: optional',
    lastUpdated: '2026.1.6',
    type: 'Agent Skill / Plugin Dev',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'Claude App',
      'Gemini CLI'
    ],
        files: ['SKILL.md', 'references/'],
    repoUrl: 'https://github.com/anthropics/claude-plugins-official/tree/main/plugins/plugin-dev/skills/skill-development',
    triggers: [
      'Create or update a Claude Code plugin skill',
      'Decide on metadata, scripts, references, or assets',
      'Apply progressive disclosure to keep SKILL.md concise'
    ],
    features: [
      'Defines required SKILL.md metadata and tone',
      'Explains when to add scripts, references, assets',
      'Uses progressive disclosure to manage context budget'
    ],
    bestFor: [
      'Plugin authors in claude-plugins-official',
      'Maintainers enforcing skill structure',
      'Contributors polishing skill content'
    ],
    tags: ['Skills', 'Plugin Dev', 'Claude Code', 'Docs', 'Structure']
  },
  {
    id: '107',
    name: 'kimi-cli-help',
    description: 'Answer Kimi CLI usage, configuration, and troubleshooting questions.',
    longDescription: 'Points to official docs, source navigation, and topic maps (install, config, providers, env vars, slash commands, shortcuts, MCP, agents) to resolve Kimi CLI issues quickly.',
    author: 'MoonshotAI',
    downloads: '2.4k',
    stars: 3855,
    roles: [Role.PRODUCT],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add kimi-cli-help',
    yamlConfig: 'tools:\n  - name: kimi-cli-help\n    docs: https://moonshotai.github.io/kimi-cli\n    source: https://github.com/MoonshotAI/kimi-cli',
    lastUpdated: '2026.1.9',
    type: 'Agent Skill',
    compatibility: [
      'Kimi CLI',
      'Claude Code CLI',
      'Codex CLI',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/MoonshotAI/kimi-cli/tree/main/src/kimi_cli/skills/kimi-cli-help',
    triggers: [
      'Answer questions about Kimi CLI installation or configuration',
      'User asks about slash commands, shortcuts, providers, or env vars',
      'Need to reference Kimi CLI docs or source for troubleshooting'
    ],
    features: [
      'Links documentation index and topic-specific pages (config, providers, commands)',
      'Outlines when to read local/source vs docs',
      'Includes guidance on MCP, agents, and internal architecture queries'
    ],
    bestFor: [
      'Kimi CLI users needing help',
      'Contributors debugging Kimi CLI behavior',
      'Support teams answering configuration questions'
    ],
    tags: ['Kimi', 'CLI', 'Docs', 'Support', 'Troubleshooting']
  },
  {
    id: '108',
    name: 'rust-errors',
    description: 'Rust to TypeScript error handling patterns for Tauri apps.',
    longDescription: 'Covers internally tagged enums, serde serialization, and TS discriminated unions to pass Rust errors cleanly into TypeScript with arktype validation.',
    author: 'EpicenterHQ',
    downloads: '2.1k',
    stars: 3902,
    roles: [Role.BACKEND],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add rust-errors',
    yamlConfig: 'tools:\n  - name: rust-errors\n    bridge: tauri\n    schema: serde',
    lastUpdated: '2025.12.19',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'Rust',
      'TypeScript',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/EpicenterHQ/epicenter/tree/main/skills/rust-errors',
    triggers: [
      'Define Rust errors that flow to TypeScript',
      'Handle Tauri command errors with discriminated unions',
      'Add arktype validation for Rust error payloads'
    ],
    features: [
      'Uses internally tagged enums with serde',
      'Shows TS runtime validation and exhaustive switches',
      'Provides serialization formats and anti-patterns to avoid'
    ],
    bestFor: [
      'Tauri app developers',
      'Rust engineers exporting errors to TS',
      'Teams standardizing cross-language error shapes'
    ],
    tags: ['Rust', 'TypeScript', 'Errors', 'Tauri', 'Serde']
  },
  {
    id: '109',
    name: 'social-media',
    description: 'Social media post guidelines for LinkedIn, Reddit, and Twitter/X.',
    longDescription: 'Keeps posts concise, technical, and free of marketing fluff, with platform-specific brevity rules and good/bad examples.',
    author: 'EpicenterHQ',
    downloads: '2.0k',
    stars: 3902,
    roles: [Role.PRODUCT, Role.MARKETING],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add social-media',
    yamlConfig: 'tools:\n  - name: social-media\n    platforms: [linkedin, reddit, x]',
    lastUpdated: '2025.12.19',
    type: 'Agent Skill',
    compatibility: [
      'Claude App',
      'Codex CLI',
      'Claude Code CLI',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/EpicenterHQ/epicenter/tree/main/skills/social-media',
    triggers: [
      'Draft a LinkedIn or X announcement',
      'Write a Reddit technical post',
      'Remove marketing fluff from a social post'
    ],
    features: [
      'Platform-specific brevity and content rules',
      'Lists removals (hashtags, CTAs, hype) and adds (technical detail, disclaimers)',
      'Provides human-written good/bad examples'
    ],
    bestFor: [
      'Engineers sharing releases',
      'Community managers writing technical posts',
      'Teams avoiding AI-sounding social content'
    ],
    tags: ['Social', 'Writing', 'Guidelines', 'Posts', 'Product']
  },
  {
    id: '110',
    name: 'styling',
    description: 'CSS and Tailwind styling guidelines for Epicenter UI.',
    longDescription: 'Promotes minimal wrappers, Tailwind best practices, and utility composition for clean layouts.',
    author: 'EpicenterHQ',
    downloads: '1.9k',
    stars: 3902,
    roles: [Role.FRONTEND],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add styling',
    yamlConfig: 'tools:\n  - name: styling\n    framework: tailwind\n    utils: cn',
    lastUpdated: '2025.12.19',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'Tailwind',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/EpicenterHQ/epicenter/tree/main/skills/styling',
    triggers: [
      'Review or write Tailwind/CSS for components',
      'Reduce wrapper divs in layouts',
      'Apply Epicenter UI styling conventions'
    ],
    features: [
      'Advocates direct class application over nested wrappers',
      'Uses cn() and tailwind-variants',
      'Encourages CSS variables and background/foreground palette'
    ],
    bestFor: [
      'Frontend engineers using Tailwind',
      'Reviewers enforcing style consistency',
      'Teams reducing CSS bloat'
    ],
    tags: ['Tailwind', 'CSS', 'Styling', 'Frontend', 'UI']
  },
  {
    id: '111',
    name: 'svelte',
    description: 'Svelte 5 patterns with TanStack Query mutations and shadcn-svelte components.',
    longDescription: 'Details mutation patterns, success/error handling, and component composition for Svelte apps using TanStack Query and shadcn-svelte UI.',
    author: 'EpicenterHQ',
    downloads: '2.2k',
    stars: 3902,
    roles: [Role.FRONTEND],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add svelte',
    yamlConfig: 'tools:\n  - name: svelte\n    query: tanstack\n    ui: shadcn',
    lastUpdated: '2025.12.19',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'Svelte',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/EpicenterHQ/epicenter/tree/main/skills/svelte',
    triggers: [
      'Implement Svelte mutations with TanStack Query',
      'Use shadcn-svelte components',
      'Handle success/error state in Svelte components'
    ],
    features: [
      'Prefers createMutation with inline callbacks',
      'Shows loading/error UX patterns',
      'Explains execute usage in TS utilities'
    ],
    bestFor: [
      'Svelte app developers',
      'Teams adopting TanStack Query in Svelte',
      'Reviewers standardizing mutation patterns'
    ],
    tags: ['Svelte', 'TanStack Query', 'Mutations', 'Frontend', 'UI']
  },
  {
    id: '112',
    name: 'typescript',
    description: 'TypeScript style, type co-location, naming, and arktype patterns for Epicenter.',
    longDescription: 'Covers preferencing `type`, co-location rules, array filters, import conventions, and constant naming with arktype schemas.',
    author: 'EpicenterHQ',
    downloads: '2.3k',
    stars: 3902,
    roles: [Role.FRONTEND],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add typescript',
    yamlConfig: 'tools:\n  - name: typescript\n    types: arktype\n    style: epicenter',
    lastUpdated: '2026.1.1',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'TypeScript',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/EpicenterHQ/epicenter/tree/main/skills/typescript',
    triggers: [
      'Write or review TypeScript code',
      'Co-locate types with services or components',
      'Apply Epicenter naming and arktype patterns'
    ],
    features: [
      'Prefers type aliases over interfaces',
      'Defines co-location rules by scope',
      'Covers import, predicate, and naming conventions'
    ],
    bestFor: [
      'TS contributors in Epicenter',
      'Reviewers enforcing style',
      'Teams organizing type definitions'
    ],
    tags: ['TypeScript', 'Arktype', 'Style', 'Frontend', 'Patterns']
  },
  {
    id: '113',
    name: 'workflow',
    description: 'Standard workflow for planning and implementing features with specs and check-ins.',
    longDescription: 'Defines spec placement, timestamped plan files, simple task breakdowns, and review sections to keep implementation small and traceable.',
    author: 'EpicenterHQ',
    downloads: '2.0k',
    stars: 3902,
    roles: [Role.PRODUCT],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add workflow',
    yamlConfig: 'tools:\n  - name: workflow\n    specs: required\n    review: summary',
    lastUpdated: '2025.12.19',
    type: 'Agent Skill',
    compatibility: [
      'Claude App',
      'Codex CLI',
      'Claude Code CLI',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/EpicenterHQ/epicenter/tree/main/skills/workflow',
    triggers: [
      'Start a new feature and need a plan',
      'Place specs and todo checklists',
      'Summarize changes in a review section'
    ],
    features: [
      'Guides spec naming and locations',
      'Promotes simple, small changes',
      'Requires progress updates and final reviews'
    ],
    bestFor: [
      'Engineers planning features',
      'Teams standardizing specs',
      'Reviewers tracking implementation steps'
    ],
    tags: ['Workflow', 'Planning', 'Specs', 'Docs', 'Process']
  },
  {
    id: '114',
    name: 'single-or-array-pattern',
    description: 'Pattern for functions that accept a single item or an array and normalize internally.',
    longDescription: 'Shows overloads vs union implementations, normalization to arrays, and structuring public APIs with internal array-only logic.',
    author: 'EpicenterHQ',
    downloads: '1.8k',
    stars: 3902,
    roles: [Role.BACKEND],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add single-or-array-pattern',
    yamlConfig: 'tools:\n  - name: single-or-array-pattern\n    api: overload\n    normalize: array',
    lastUpdated: '2026.1.3',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'TypeScript',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/EpicenterHQ/epicenter/tree/main/skills/single-or-array-pattern',
    triggers: [
      'Design APIs that accept single or multiple items',
      'Refactor functions to normalize arrays',
      'Document overloads vs union approaches'
    ],
    features: [
      'Provides overload and union examples',
      'Explains normalization and internal handling',
      'Highlights consistent return typing'
    ],
    bestFor: [
      'API designers',
      'Backend engineers handling batch operations',
      'Reviewers standardizing function signatures'
    ],
    tags: ['TypeScript', 'API Design', 'Patterns', 'Backend', 'Functions']
  },
  {
    id: '115',
    name: 'readme-writing',
    description: 'Guidelines for writing folder README files that explain purpose and organization.',
    longDescription: 'Focuses on the “why” of a directory, providing mental models and avoiding redundant file listings.',
    author: 'EpicenterHQ',
    downloads: '1.7k',
    stars: 3902,
    roles: [Role.PRODUCT],
    isTrending: false,
    isCowork: true,
    setupCommand: 'claude mcp add readme-writing',
    yamlConfig: 'tools:\n  - name: readme-writing\n    scope: folder\n    focus: purpose',
    lastUpdated: '2026.1.3',
    type: 'Agent Skill',
    compatibility: [
      'Claude App',
      'Codex CLI',
      'Claude Code CLI',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/EpicenterHQ/epicenter/tree/main/skills/readme-writing',
    triggers: [
      'Write a README for a directory',
      'Explain folder purpose and organization',
      'Avoid redundant listings in README'
    ],
    features: [
      'Centers on purpose and mental model',
      'Provides good vs bad README examples',
      'Encourages concise context over file lists'
    ],
    bestFor: [
      'Maintainers documenting folders',
      'Contributors adding new directories',
      'Teams aligning on project structure'
    ],
    tags: ['Docs', 'README', 'Structure', 'Writing', 'Guidelines']
  },
  {
    id: '116',
    name: 'patterns',
    description: 'Design patterns for the Langroid multi-agent framework with indexed references.',
    longDescription: 'Provides a categorized index of Langroid patterns across agent/task basics, tool handlers, and task control with links to detailed references.',
    author: 'langroid',
    downloads: '1.9k',
    stars: 3842,
    roles: [Role.DEVOPS],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add langroid-patterns',
    yamlConfig: 'tools:\n  - name: patterns\n    platform: langroid\n    references: indexed',
    lastUpdated: '2026.1.5',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'Langroid',
      'Gemini CLI'
    ],
        files: ['SKILL.md', 'agent-handler-validation-with-state.md', 'agent-tool-handler-with-state.md', 'done-sequences-specific-tool.md', 'mcp-tool-integration.md', 'quiet-mode.md', 'run-batch-tasks.md', 'task-return-tool.md'],
    repoUrl: 'https://github.com/langroid/langroid/tree/main/plugins/langroid/skills/patterns',
    triggers: [
      'Find a Langroid design pattern for an agent/task',
      'Need references for tool handlers or task control',
      'Browse pattern index for implementation ideas'
    ],
    features: [
      'Organizes patterns by category with references',
      'Covers agent/task basics and tool handler designs',
      'Includes task control and batch processing examples'
    ],
    bestFor: [
      'Langroid developers',
      'Teams reusing multi-agent patterns',
      'Reviewers standardizing Langroid tasks'
    ],
    tags: ['Langroid', 'Patterns', 'Agents', 'Tasks', 'References']
  },
  {
    id: '117',
    name: 'add-pattern',
    description: 'Record new Langroid design patterns and link them into the shared index.',
    longDescription: 'Explains how to append patterns to the patterns/SKILL.md index and create detailed reference documents with problem/solution/examples.',
    author: 'langroid',
    downloads: '1.6k',
    stars: 3842,
    roles: [Role.DEVOPS],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add add-pattern',
    yamlConfig: 'tools:\n  - name: add-pattern\n    platform: langroid\n    docs: required',
    lastUpdated: '2026.1.5',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'Langroid',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/langroid/langroid/tree/main/plugins/langroid/skills/add-pattern',
    triggers: [
      'Document a new Langroid pattern you learned',
      'Add a reference doc under patterns/',
      'Update the pattern index with description and link'
    ],
    features: [
      'Defines pattern entry format and references',
      'Requires clear descriptions for future matching',
      'Guides structure of problem/solution/example docs'
    ],
    bestFor: [
      'Langroid contributors',
      'Teams curating multi-agent patterns',
      'Reviewers keeping pattern docs consistent'
    ],
    tags: ['Langroid', 'Patterns', 'Docs', 'Index', 'Agents']
  },
  {
    id: '118',
    name: 'g2-translation-guidelines',
    description: 'Guidelines for translating AntV G2 documentation with consistent terminology and links.',
    longDescription: 'Covers glossary terms, hyperlink adjustments, anchor handling, and placement of .en.md/.zh.md files for multilingual docs.',
    author: 'antvis',
    downloads: '2.2k',
    stars: 12508,
    roles: [Role.PRODUCT],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add g2-translation-guidelines',
    yamlConfig: 'tools:\n  - name: g2-translation\n    docs: multilingual\n    glossary: provided',
    lastUpdated: '2025.12.31',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'G2 Docs',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/antvis/G2/tree/v5/.claude/skills/g2-translation',
    triggers: [
      'Translate G2 docs between English and Chinese',
      'Adjust internal links and anchors for language versions',
      'Apply consistent glossary terms in translations'
    ],
    features: [
      'Provides glossary of core visualization terms',
      'Details link prefix rules for en/zh docs',
      'Explains file naming (.en.md/.zh.md) and placement'
    ],
    bestFor: [
      'G2 doc translators',
      'Maintainers ensuring terminology consistency',
      'Reviewers checking bilingual docs'
    ],
    tags: ['G2', 'Docs', 'Translation', 'Glossary', 'Links']
  },
  {
    id: '119',
    name: 'g2-unit-testing-skills',
    description: 'Guidelines and best practices for writing unit tests in the AntV G2 visualization library.',
    longDescription: 'Explains test directory structure, Jest patterns, and organization for unit vs integration plots across APIs, animation, interaction, and more.',
    author: 'antvis',
    downloads: '2.0k',
    stars: 12508,
    roles: [Role.DEVOPS],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add g2-unit-testing-skills',
    yamlConfig: 'tools:\n  - name: g2-testing\n    framework: jest\n    scope: unit+plots',
    lastUpdated: '2025.12.31',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'G2',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/antvis/G2/tree/v5/.claude/skills/g2-testing',
    triggers: [
      'Write unit tests for G2 modules',
      'Organize plot integration tests',
      'Set up Jest cases for API/animation/interaction'
    ],
    features: [
      'Defines unit vs integration directories',
      'Provides testing structure examples',
      'Lists focus areas for rendering and behavior coverage'
    ],
    bestFor: [
      'G2 contributors writing tests',
      'QA adding visualization coverage',
      'Reviewers enforcing test structure'
    ],
    tags: ['G2', 'Testing', 'Jest', 'Visualization', 'Coverage']
  },
  {
    id: '120',
    name: 'g2-legend-expert',
    description: 'Expert guidance for G2 legend rendering, layout, and interaction.',
    longDescription: 'Covers legend inference, component creation, layout sizing, marker processing, and interaction handling for legendCategory and legendContinuous.',
    author: 'antvis',
    downloads: '1.8k',
    stars: 12508,
    roles: [Role.FRONTEND],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add g2-legend-expert',
    yamlConfig: 'tools:\n  - name: g2-legend-expert\n    components: legendCategory,legendContinuous\n    layout: computePadding',
    lastUpdated: '2025.12.31',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'G2',
      'Gemini CLI'
    ],
        files: ['SKILL.md', 'knowledge/'],
    repoUrl: 'https://github.com/antvis/G2/tree/v5/.claude/skills/g2-legend-expert',
    triggers: [
      'Implement or debug legend rendering in G2',
      'Adjust legend layout or sizing',
      'Handle marker inference and scale analysis'
    ],
    features: [
      'Explains legend inference from scales and channels',
      'Details category vs continuous component behavior',
      'Describes layout sizing, padding, and rendering options'
    ],
    bestFor: [
      'G2 maintainers',
      'Engineers customizing legends',
      'Reviewers debugging legend behavior'
    ],
    tags: ['G2', 'Legends', 'Layout', 'Visualization', 'Frontend']
  },
  {
    id: '121',
    name: 'infographic-template-updater',
    description: 'Update AntV Infographic template catalogs and prompt lists when new templates are added.',
    longDescription: 'Guides collecting new template keys, updating template lists across SKILLs, playground prompts, and syntax references while preserving ordering.',
    author: 'antvis',
    downloads: '1.9k',
    stars: 3852,
    roles: [Role.PRODUCT],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add infographic-template-updater',
    yamlConfig: 'tools:\n  - name: infographic-template-updater\n    templates: src/templates\n    prompts: sync',
    lastUpdated: '2026.1.5',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'Infographic',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/antvis/Infographic/tree/main/.skills/infographic-template-updater',
    triggers: [
      'Add new infographic templates in src/templates',
      'Sync template lists across creator and syntax prompts',
      'Verify gallery mappings for new templates'
    ],
    features: [
      'Collects template keys including spread compositions',
      'Updates creator, playground, and syntax prompt lists',
      'Keeps ordering and performs ripgrep sanity checks'
    ],
    bestFor: [
      'Infographic maintainers',
      'Contributors adding templates',
      'Docs owners syncing template references'
    ],
    tags: ['Infographic', 'Templates', 'Docs', 'Sync', 'Lists']
  },
  {
    id: '122',
    name: 'infographic-item-creator',
    description: 'Generate or update infographic Item components in src/designs/items.',
    longDescription: 'Covers reading item prompts, layout props, registerItem composites, and self-checks against allowed components and indexes.',
    author: 'antvis',
    downloads: '1.8k',
    stars: 3852,
    roles: [Role.FRONTEND],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add infographic-item-creator',
    yamlConfig: 'tools:\n  - name: infographic-item-creator\n    language: typescript\n    refs: item-prompt',
    lastUpdated: '2026.1.4',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'Infographic',
      'Gemini CLI'
    ],
        files: ['SKILL.md', 'references/'],
    repoUrl: 'https://github.com/antvis/Infographic/tree/main/.skills/infographic-item-creator',
    triggers: [
      'Implement or modify infographic items',
      'Compute layout with getElementBounds and registerItem',
      'Check allowed components and composites'
    ],
    features: [
      'Points to item prompt references',
      'Details props, layout computation, and registration',
      'Includes self-checks for indexes and component rules'
    ],
    bestFor: [
      'Infographic component authors',
      'Teams extending item visuals',
      'Reviewers ensuring item constraints'
    ],
    tags: ['Infographic', 'Components', 'TypeScript', 'Layout', 'UI']
  },
  {
    id: '123',
    name: 'infographic-structure-creator',
    description: 'Generate or update infographic Structure components in src/designs/structures.',
    longDescription: 'Guides structure category selection, layout decisions, registerStructure setup, and checks against reference constraints.',
    author: 'antvis',
    downloads: '1.7k',
    stars: 3852,
    roles: [Role.FRONTEND],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add infographic-structure-creator',
    yamlConfig: 'tools:\n  - name: infographic-structure-creator\n    language: typescript\n    refs: structure-prompt',
    lastUpdated: '2026.1.16',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'Infographic',
      'Gemini CLI'
    ],
        files: ['SKILL.md', 'references/'],
    repoUrl: 'https://github.com/antvis/Infographic/tree/main/.skills/infographic-structure-creator',
    triggers: [
      'Design or update infographic structures',
      'Choose layout direction and hierarchy',
      'Register structures with composites and bounds'
    ],
    features: [
      'References structure prompt for rules',
      'Explains layout planning and decor elements',
      'Includes self-checks for indexes and empty states'
    ],
    bestFor: [
      'Infographic layout engineers',
      'Teams adding structure variants',
      'Reviewers validating structure constraints'
    ],
    tags: ['Infographic', 'Structures', 'TypeScript', 'Layout', 'UI']
  },
  {
    id: '124',
    name: 'infographic-creator',
    description: 'Create AntV infographics from text content using templates, data, and themes.',
    longDescription: 'Explains Infographic DSL basics, template selection, data structures, and theme definitions to render visual infographics.',
    author: 'antvis',
    downloads: '2.4k',
    stars: 3852,
    roles: [Role.PRODUCT],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add infographic-creator',
    yamlConfig: 'tools:\n  - name: infographic-creator\n    dsl: infographic\n    output: syntax',
    lastUpdated: '2026.1.16',
    type: 'Agent Skill',
    compatibility: [
      'Claude App',
      'Codex CLI',
      'Claude Code CLI',
      'Infographic',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/antvis/Infographic/tree/main/.skills/infographic-creator',
    triggers: [
      'Generate an infographic from text or data',
      'Choose templates and themes for infographic output',
      'Follow AntV infographic syntax for rendering'
    ],
    features: [
      'Defines Infographic DSL structure (template, data, theme)',
      'Provides examples and syntax formatting rules',
      'Emphasizes readable, mermaid-like outputs'
    ],
    bestFor: [
      'Content creators making infographics',
      'Developers integrating AntV Infographic',
      'Teams prototyping visual storytelling'
    ],
    tags: ['Infographic', 'DSL', 'Templates', 'Visualization', 'Design']
  },
  {
    id: '125',
    name: 'infographic-syntax-creator',
    description: 'Generate AntV Infographic syntax outputs from user content.',
    longDescription: 'Describes how to extract structure, select templates, and produce valid plain syntax with strict formatting and constraints.',
    author: 'antvis',
    downloads: '1.9k',
    stars: 3852,
    roles: [Role.PRODUCT],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add infographic-syntax-creator',
    yamlConfig: 'tools:\n  - name: infographic-syntax-creator\n    output: plain\n    prompt: references/prompt.md',
    lastUpdated: '2026.1.16',
    type: 'Agent Skill',
    compatibility: [
      'Claude App',
      'Codex CLI',
      'Claude Code CLI',
      'Infographic',
      'Gemini CLI'
    ],
        files: ['SKILL.md', 'references/'],
    repoUrl: 'https://github.com/antvis/Infographic/tree/main/.skills/infographic-syntax-creator',
    triggers: [
      'Turn content into AntV Infographic DSL',
      'Pick templates for sequences, lists, or comparisons',
      'Output infographic <template> syntax in a plain block'
    ],
    features: [
      'Enforces single plain code block with template line',
      'Specifies indentation, key/value, and array rules',
      'Lists constraints for compare templates and formatting'
    ],
    bestFor: [
      'Developers generating infographic syntax',
      'Writers formatting content for AntV DSL',
      'Teams validating infographic outputs'
    ],
    tags: ['Infographic', 'DSL', 'Syntax', 'Templates', 'Formatting']
  },
  {
    id: '126',
    name: 'algorithmic-art-modelscope',
    description: 'Create algorithmic art in p5.js with seeded randomness and interactive controls.',
    longDescription: 'Combines algorithmic philosophy writing with p5.js implementations using flow fields, particles, and parameter sliders for generative art.',
    author: 'modelscope',
    downloads: '2.3k',
    stars: 3823,
    roles: [Role.FRONTEND],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add algorithmic-art-modelscope',
    yamlConfig: 'tools:\n  - name: algorithmic-art\n    runtime: p5.js\n    seeds: true',
    lastUpdated: '2025.11.7',
    type: 'Agent Skill',
    compatibility: [
      'Claude App',
      'Codex CLI',
      'Claude Code CLI',
      'p5.js',
      'Gemini CLI'
    ],
        files: ['LICENSE.txt', 'SKILL.md', 'templates/'],
    repoUrl: 'https://github.com/modelscope/ms-agent/tree/main/projects/agent_skills/skills/algorithmic-art',
    triggers: [
      'Write an algorithmic philosophy then render it in p5.js',
      'Create seeded generative art with flow fields or particles',
      'Export HTML/JS artifacts with parameter controls'
    ],
    features: [
      'Splits work into philosophy creation and p5.js expression',
      'Emphasizes seeded randomness and emergent systems',
      'Produces markdown + HTML + JS outputs with controls'
    ],
    bestFor: [
      'Generative artists coding in p5.js',
      'Hackathons needing interactive art exports',
      'Teams exploring algorithmic aesthetics'
    ],
    tags: ['Generative Art', 'p5.js', 'Seeds', 'Creative Coding', 'Interactive']
  },
  {
    id: '127',
    name: 'creating-financial-models-modelscope',
    description: 'Advanced financial modeling suite with DCF, sensitivity, Monte Carlo, and scenario planning.',
    longDescription: 'Guides inputs and workflows for valuation models, sensitivity tables, simulations, and best/base/worst scenario analysis.',
    author: 'modelscope',
    downloads: '2.1k',
    stars: 3823,
    roles: [Role.DATA],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add creating-financial-models-modelscope',
    yamlConfig: 'tools:\n  - name: creating-financial-models\n    analyses: [DCF, sensitivity, MonteCarlo, scenarios]',
    lastUpdated: '2025.11.7',
    type: 'Agent Skill',
    compatibility: [
      'Claude App',
      'Codex CLI',
      'Claude Code CLI',
      'Gemini CLI'
    ],
        files: ['SKILL.md', 'dcf_model.py', 'sensitivity_analysis.py'],
    repoUrl: 'https://github.com/modelscope/ms-agent/tree/main/projects/agent_skills/skills/creating-financial-models',
    triggers: [
      'Build a DCF model with growth scenarios',
      'Run sensitivity or Monte Carlo analysis',
      'Plan best/base/worst financial scenarios'
    ],
    features: [
      'Lists inputs for DCF, sensitivity, Monte Carlo, scenarios',
      'Covers WACC, terminal value, and uncertainty modeling',
      'Includes scenario planning and KPI tracking'
    ],
    bestFor: [
      'Financial analysts',
      'Investors running valuations',
      'Teams modeling risk and scenarios'
    ],
    tags: ['Finance', 'DCF', 'Monte Carlo', 'Sensitivity', 'Modeling']
  },
  {
    id: '128',
    name: 'model-debugging',
    description: 'Investigate and debug models in Pollinations with structured troubleshooting steps.',
    longDescription: 'Guides hypothesis creation, log analysis, and test runs to isolate issues in Pollinations models.',
    author: 'pollinations',
    downloads: '1.9k',
    stars: 3775,
    roles: [Role.DEVOPS],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add model-debugging',
    yamlConfig: 'tools:\n  - name: model-debugging\n    platform: pollinations\n    logs: required',
    lastUpdated: '2025.12.22',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'Pollinations',
      'Gemini CLI'
    ],
        files: ['SKILL.md', 'scripts/'],
    repoUrl: 'https://github.com/pollinations/pollinations/tree/main/.claude/skills/model-debugging',
    triggers: [
      'Debug Pollinations model failures',
      'Form hypotheses and run targeted tests',
      'Collect logs and metrics for model issues'
    ],
    features: [
      'Structured troubleshooting workflow',
      'Emphasizes hypotheses and evidence gathering',
      'Points to logs and test strategies'
    ],
    bestFor: [
      'Pollinations engineers',
      'ML ops teams',
      'Contributors triaging model issues'
    ],
    tags: ['ML', 'Debugging', 'Pollinations', 'Logs', 'Testing']
  },
  {
    id: '129',
    name: 'voting-status',
    description: 'Track and report voting status within Pollinations workflows.',
    longDescription: 'Explains how to gather, summarize, and communicate vote results and statuses.',
    author: 'pollinations',
    downloads: '1.7k',
    stars: 3775,
    roles: [Role.PRODUCT],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add voting-status',
    yamlConfig: 'tools:\n  - name: voting-status\n    platform: pollinations\n    output: summary',
    lastUpdated: '2025.12.2',
    type: 'Agent Skill',
    compatibility: [
      'Claude App',
      'Codex CLI',
      'Claude Code CLI',
      'Pollinations',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/pollinations/pollinations/tree/main/.claude/skills/voting-status',
    triggers: [
      'Summarize current voting results',
      'Report on vote counts and outcomes',
      'Provide status updates for voting tasks'
    ],
    features: [
      'Defines vote data collection steps',
      'Summarizes outcomes and statuses',
      'Communicates updates clearly'
    ],
    bestFor: [
      'Pollinations product teams',
      'Managers tracking votes',
      'Contributors reporting status'
    ],
    tags: ['Voting', 'Status', 'Pollinations', 'Reporting', 'Product']
  },
  {
    id: '130',
    name: 'issue-maker',
    description: 'Create Pollinations issues with clear context, repro steps, and expected behavior.',
    longDescription: 'Outlines information to capture for issues, including logs, environment, repro, and expected vs actual results.',
    author: 'pollinations',
    downloads: '1.8k',
    stars: 3775,
    roles: [Role.PRODUCT],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add issue-maker',
    yamlConfig: 'tools:\n  - name: issue-maker\n    platform: pollinations\n    template: required',
    lastUpdated: '2025.12.2',
    type: 'Agent Skill',
    compatibility: [
      'Claude App',
      'Codex CLI',
      'Claude Code CLI',
      'Pollinations',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/pollinations/pollinations/tree/main/.claude/skills/issue-maker',
    triggers: [
      'File an issue in Pollinations',
      'Gather repro steps and logs',
      'Document expected vs actual behavior'
    ],
    features: [
      'Defines issue templates and required fields',
      'Captures environment and logs',
      'Clarifies expected outcomes'
    ],
    bestFor: [
      'Pollinations contributors',
      'QA filing bugs',
      'Teams standardizing issue quality'
    ],
    tags: ['Issues', 'Bug Reports', 'Pollinations', 'Docs', 'QA']
  },
  {
    id: '131',
    name: 'r2-glacier-migration',
    description: 'Plan and execute R2 to Glacier migrations within Pollinations.',
    longDescription: 'Provides steps for migrating data, validating transfers, and handling storage specifics for R2 and Glacier.',
    author: 'pollinations',
    downloads: '1.5k',
    stars: 3775,
    roles: [Role.DEVOPS],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add r2-glacier-migration',
    yamlConfig: 'tools:\n  - name: r2-glacier-migration\n    storage: r2+glacier\n    validate: checksums',
    lastUpdated: '2025.12.10',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'Pollinations',
      'S3 APIs',
      'Gemini CLI'
    ],
        files: ['SKILL.md', 'scripts/'],
    repoUrl: 'https://github.com/pollinations/pollinations/tree/main/.claude/skills/r2-glacier-migration',
    triggers: [
      'Migrate data from R2 to Glacier',
      'Plan validation and checksums',
      'Handle storage class specifics during migration'
    ],
    features: [
      'Outlines migration steps and validation',
      'Notes storage considerations for R2/Glacier',
      'Emphasizes checksums and verification'
    ],
    bestFor: [
      'Infra engineers',
      'Pollinations ops teams',
      'SREs handling storage migrations'
    ],
    tags: ['Migration', 'Storage', 'R2', 'Glacier', 'DevOps']
  },
  {
    id: '132',
    name: 'candidate-evaluation',
    description: 'Evaluate candidates with structured criteria and scoring within Pollinations processes.',
    longDescription: 'Provides prompts and categories to assess candidates, capture evidence, and summarize decisions.',
    author: 'pollinations',
    downloads: '1.6k',
    stars: 3775,
    roles: [Role.PRODUCT],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add candidate-evaluation',
    yamlConfig: 'tools:\n  - name: candidate-evaluation\n    framework: pollinations\n    output: rubric',
    lastUpdated: '2026.1.9',
    type: 'Agent Skill',
    compatibility: [
      'Claude App',
      'Codex CLI',
      'Claude Code CLI',
      'Pollinations',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/pollinations/pollinations/tree/main/.claude/skills/candidate-evaluation',
    triggers: [
      'Evaluate a candidate profile',
      'Create scoring rubrics and evidence notes',
      'Summarize hiring recommendations'
    ],
    features: [
      'Defines evaluation categories and prompts',
      'Captures evidence and structured scores',
      'Summarizes outcomes with recommendations'
    ],
    bestFor: [
      'Hiring teams',
      'Interviewers documenting feedback',
      'Pollinations ops evaluating applicants'
    ],
    tags: ['Hiring', 'Evaluation', 'Pollinations', 'Rubrics', 'Feedback']
  },
  {
    id: '133',
    name: 'tier-management',
    description: 'Manage tiers and entitlements within Pollinations services.',
    longDescription: 'Details how to adjust tiers, entitlements, and communication around tier changes.',
    author: 'pollinations',
    downloads: '1.5k',
    stars: 3775,
    roles: [Role.PRODUCT],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add tier-management',
    yamlConfig: 'tools:\n  - name: tier-management\n    platform: pollinations\n    comms: required',
    lastUpdated: '2026.1.15',
    type: 'Agent Skill',
    compatibility: [
      'Claude App',
      'Codex CLI',
      'Claude Code CLI',
      'Pollinations',
      'Gemini CLI'
    ],
        files: ['.gitignore', 'SKILL.md', 'scripts/'],
    repoUrl: 'https://github.com/pollinations/pollinations/tree/main/.claude/skills/tier-management',
    triggers: [
      'Adjust user tiers or entitlements',
      'Communicate tier changes',
      'Audit tier settings in Pollinations'
    ],
    features: [
      'Outlines tier change steps',
      'Includes communication guidance',
      'Covers auditing and verification'
    ],
    bestFor: [
      'Product/support teams',
      'Billing/entitlement managers',
      'Pollinations operators'
    ],
    tags: ['Tiers', 'Product', 'Pollinations', 'Entitlements', 'Support']
  },
  {
    id: '134',
    name: 'enter-services',
    description: 'Handle service entry and onboarding flows in Pollinations.',
    longDescription: 'Provides steps to set up services, configure requirements, and communicate onboarding details.',
    author: 'pollinations',
    downloads: '1.4k',
    stars: 3775,
    roles: [Role.PRODUCT],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add enter-services',
    yamlConfig: 'tools:\n  - name: enter-services\n    platform: pollinations\n    onboarding: true',
    lastUpdated: '2026.1.7',
    type: 'Agent Skill',
    compatibility: [
      'Claude App',
      'Codex CLI',
      'Claude Code CLI',
      'Pollinations',
      'Gemini CLI'
    ],
        files: ['.gitignore', 'SKILL.md'],
    repoUrl: 'https://github.com/pollinations/pollinations/tree/main/.claude/skills/enter-services',
    triggers: [
      'Onboard a new Pollinations service',
      'Configure service requirements',
      'Communicate onboarding steps'
    ],
    features: [
      'Lists service setup steps',
      'Covers requirement checks and configuration',
      'Provides onboarding communication pointers'
    ],
    bestFor: [
      'Ops teams onboarding services',
      'Product owners adding offerings',
      'Support handling service setup'
    ],
    tags: ['Onboarding', 'Services', 'Pollinations', 'Product', 'Ops']
  },
  {
    id: '135',
    name: 'app-review',
    description: 'Review apps in Pollinations with structured criteria and feedback.',
    longDescription: 'Guides app evaluation, notes, and recommendations for Pollinations app submissions.',
    author: 'pollinations',
    downloads: '1.8k',
    stars: 3775,
    roles: [Role.PRODUCT],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add app-review',
    yamlConfig: 'tools:\n  - name: app-review\n    platform: pollinations\n    output: review',
    lastUpdated: '2026.1.13',
    type: 'Agent Skill',
    compatibility: [
      'Claude App',
      'Codex CLI',
      'Claude Code CLI',
      'Pollinations',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/pollinations/pollinations/tree/main/.claude/skills/app-review',
    triggers: [
      'Evaluate a Pollinations app submission',
      'Record feedback and recommendations',
      'Check app readiness against criteria'
    ],
    features: [
      'Defines evaluation criteria',
      'Captures notes and decisions',
      'Structures recommendations and next steps'
    ],
    bestFor: [
      'Pollinations reviewers',
      'Product teams vetting apps',
      'Contributors seeking structured feedback'
    ],
    tags: ['Apps', 'Review', 'Pollinations', 'Product', 'Feedback']
  },
  {
    id: '136',
    name: 'monitor-experiment',
    description: 'Monitor experiments for AllenAI open-instruct with logs and metrics.',
    longDescription: 'Provides steps to track experiment progress, collect logs, and summarize outcomes for open-instruct projects.',
    author: 'allenai',
    downloads: '1.6k',
    stars: 3523,
    roles: [Role.DATA],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add monitor-experiment',
    yamlConfig: 'tools:\n  - name: monitor-experiment\n    project: open-instruct\n    logs: required',
    lastUpdated: '2026.1.15',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'open-instruct',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/allenai/open-instruct/tree/main/.claude/skills/monitor-experiment',
    triggers: [
      'Track open-instruct experiment status',
      'Collect and review experiment logs',
      'Summarize experiment outcomes'
    ],
    features: [
      'Defines monitoring steps and signals',
      'Emphasizes log collection and analysis',
      'Guides reporting of results'
    ],
    bestFor: [
      'Research engineers',
      'Experiment owners',
      'QA tracking training runs'
    ],
    tags: ['Experiments', 'Monitoring', 'Logs', 'AI', 'Research']
  },
  {
    id: '137',
    name: 'tempo-codegen',
    description: 'Generate TypeScript code for viem tempo skills with safe patterns.',
    longDescription: 'Provides guidance for codegen in the viem tempo agent skills, covering typing, safety, and integration.',
    author: 'wevm',
    downloads: '1.7k',
    stars: 3370,
    roles: [Role.BACKEND],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add tempo-codegen',
    yamlConfig: 'tools:\n  - name: tempo-codegen\n    language: typescript\n    target: viem',
    lastUpdated: '2026.1.8',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'viem',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/wevm/viem/tree/main/.agents/skills/tempo-codegen',
    triggers: [
      'Write codegen for viem tempo skills',
      'Ensure typings and safety for generated code',
      'Integrate codegen into viem agent flows'
    ],
    features: [
      'Covers TypeScript patterns for viem',
      'Emphasizes safety and integration steps',
      'Provides guidance for generated outputs'
    ],
    bestFor: [
      'Viem contributors',
      'Developers automating tempo codegen',
      'Teams enforcing TS safety in agents'
    ],
    tags: ['TypeScript', 'Codegen', 'viem', 'Agents', 'Backend']
  },
  {
    id: '138',
    name: 'create-unit-test-ask',
    description: 'Create unit tests for AnySoftKeyboard with proper coverage and structure.',
    longDescription: 'Guides writing unit tests in AnySoftKeyboard, focusing on coverage, structure, and adherence to project conventions.',
    author: 'AnySoftKeyboard',
    downloads: '1.5k',
    stars: 3212,
    roles: [Role.DEVOPS],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add create-unit-test-ask',
    yamlConfig: 'tools:\n  - name: create-unit-test\n    framework: junit\n    platform: android',
    lastUpdated: '2025.12.26',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'AnySoftKeyboard',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/AnySoftKeyboard/AnySoftKeyboard/tree/main/.claude/skills/create-unit-test',
    triggers: [
      'Write unit tests for AnySoftKeyboard',
      'Improve test coverage in the project',
      'Follow project testing conventions'
    ],
    features: [
      'Outlines test structure and coverage goals',
      'Aligns with AnySoftKeyboard conventions',
      'Supports Android/JUnit setups'
    ],
    bestFor: [
      'AnySoftKeyboard contributors',
      'QA increasing coverage',
      'Maintainers enforcing test quality'
    ],
    tags: ['Testing', 'Android', 'JUnit', 'Keyboard', 'QA']
  },
  {
    id: '139',
    name: 'gerrit-storj',
    description: 'Work with Storj Gerrit workflows for patch review and submission.',
    longDescription: 'Explains how to submit, review, and manage Gerrit changes in the Storj project.',
    author: 'storj',
    downloads: '1.4k',
    stars: 3208,
    roles: [Role.DEVOPS],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add gerrit-storj',
    yamlConfig: 'tools:\n  - name: gerrit\n    platform: storj\n    review: required',
    lastUpdated: '2025.11.21',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'Storj',
      'Gerrit',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/storj/storj/tree/main/.claude/skills/gerrit',
    triggers: [
      'Submit or review Gerrit patches for Storj',
      'Need Gerrit workflow steps',
      'Handle patchsets and approvals'
    ],
    features: [
      'Details Gerrit submission/review flow',
      'Covers patchset updates and approvals',
      'Aligns with Storj contribution practices'
    ],
    bestFor: [
      'Storj contributors',
      'Reviewers handling Gerrit patches',
      'Teams standardizing review flow'
    ],
    tags: ['Gerrit', 'Review', 'Storj', 'Patches', 'Workflow']
  },
  {
    id: '140',
    name: 'test-with-spanner',
    description: 'Test Storj integrations with Spanner using recommended patterns.',
    longDescription: 'Provides guidance on setting up and running Spanner-related tests in the Storj codebase.',
    author: 'storj',
    downloads: '1.3k',
    stars: 3208,
    roles: [Role.DEVOPS],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add test-with-spanner',
    yamlConfig: 'tools:\n  - name: test-with-spanner\n    db: spanner\n    mode: integration',
    lastUpdated: '2025.11.6',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'Storj',
      'Spanner',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/storj/storj/tree/main/.claude/skills/test-with-spanner',
    triggers: [
      'Write or run Spanner integration tests in Storj',
      'Set up Spanner test environments',
      'Follow patterns for Storj DB testing'
    ],
    features: [
      'Describes Spanner test setup and execution',
      'Aligns with Storj DB testing practices',
      'Provides tips for integration stability'
    ],
    bestFor: [
      'Storj backend engineers',
      'QA running DB integrations',
      'Maintainers ensuring Spanner coverage'
    ],
    tags: ['Spanner', 'Testing', 'Storj', 'Database', 'Integration']
  },
  {
    id: '141',
    name: 'artifacts-builder',
    description: 'Builds polished artifacts from prompts with structure, assets, and export-ready layouts.',
    longDescription: 'Turns rough ideas into shippable artifacts by assembling layout structure, asset requirements, and formatting rules. It favors repeatable templates and export-ready outputs for fast iteration.',
    author: 'Prathit-tech',
    downloads: '6.8k',
    stars: 21251,
    roles: [Role.FRONTEND],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add artifacts-builder',
    yamlConfig: 'tools:\n  - name: artifacts-builder\n    format: multi\n    export: ready',
    lastUpdated: '2025.10.22',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'Claude App',
      'Gemini CLI'
    ],
        files: ['LICENSE.txt', 'SKILL.md'],
    repoUrl: 'https://github.com/ComposioHQ/awesome-claude-skills/tree/master/artifacts-builder',
    triggers: [
      'Turn this idea into a polished artifact',
      'Generate a structured artifact with assets',
      'Export a clean layout ready for delivery'
    ],
    features: [
      'Defines layout and asset requirements up front',
      'Produces consistent, export-ready outputs',
      'Supports iterative refinement with templates'
    ],
    bestFor: [
      'Teams shipping visual artifacts fast',
      'Founders validating ideas with mock assets',
      'Designers needing structured scaffolds'
    ],
    tags: ['Artifacts', 'Templates', 'Layout', 'Export', 'Workflow']
  },
  {
    id: '144',
    name: 'changelog-generator',
    description: 'Generates structured changelogs from commit history and issues.',
    longDescription: 'Transforms commits, PR titles, and issue metadata into release-ready changelogs with sections, version tags, and highlights.',
    author: 'Prathit-tech',
    downloads: '6.8k',
    stars: 21251,
    roles: [Role.DEVOPS],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add changelog-generator',
    yamlConfig: 'tools:\n  - name: changelog-generator\n    format: keepachangelog\n    include: fixes,features',
    lastUpdated: '2025.10.17',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'GitHub',
      'Gemini CLI'
    ],
        files: ['LICENSE.txt', 'SKILL.md'],
    repoUrl: 'https://github.com/ComposioHQ/awesome-claude-skills/tree/master/changelog-generator',
    triggers: [
      'Draft a changelog for the next release',
      'Summarize these PRs into a release note',
      'Create a versioned changelog from commits'
    ],
    features: [
      'Groups changes into Features/Fixes/Chore sections',
      'Supports semantic version headings',
      'Highlights breaking changes and notes'
    ],
    bestFor: [
      'Release managers shipping updates',
      'Open-source maintainers writing release notes',
      'Teams standardizing changelog formats'
    ],
    tags: ['Changelog', 'Releases', 'Git', 'Docs', 'Automation']
  },
  {
    id: '145',
    name: 'competitive-ads-extractor',
    description: 'Extracts competitor ad copy and positioning for analysis.',
    longDescription: 'Collects and structures competitive ad creatives, headlines, and calls-to-action into a comparison matrix for marketing research.',
    author: 'Prathit-tech',
    downloads: '6.8k',
    stars: 21251,
    roles: [Role.DATA, Role.MARKETING],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add competitive-ads-extractor',
    yamlConfig: 'tools:\n  - name: competitive-ads-extractor\n    sources: ads\n    output: table',
    lastUpdated: '2025.10.17',
    type: 'Agent Skill',
    compatibility: [
      'Claude App',
      'Codex CLI',
      'Claude Code CLI',
      'Gemini CLI'
    ],
        files: ['LICENSE.txt', 'SKILL.md'],
    repoUrl: 'https://github.com/ComposioHQ/awesome-claude-skills/tree/master/competitive-ads-extractor',
    triggers: [
      'Analyze competitor ads for this category',
      'Extract ad copy from these URLs',
      'Compare messaging across competing brands'
    ],
    features: [
      'Pulls headlines, body copy, and CTAs into a structured table',
      'Tags themes and positioning angles',
      'Summarizes differentiators and gaps'
    ],
    bestFor: [
      'Marketing teams benchmarking competitors',
      'Growth teams planning ad tests',
      'Analysts building ad research decks'
    ],
    tags: ['Marketing', 'Ads', 'Competitive', 'Research', 'Analysis']
  },
  {
    id: '146',
    name: 'connect',
    description: 'Connects external apps and services with unified auth flows.',
    longDescription: 'Provides a guided flow to connect third-party apps, configure credentials, and validate access so automations can run reliably.',
    author: 'sujayjayjay',
    downloads: '6.8k',
    stars: 21251,
    roles: [Role.DEVOPS],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add connect',
    yamlConfig: 'tools:\n  - name: connect\n    auth: oauth\n    validate: true',
    lastUpdated: '2026.1.11',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'Claude App',
      'Gemini CLI'
    ],
        files: ['LICENSE.txt', 'SKILL.md'],
    repoUrl: 'https://github.com/ComposioHQ/awesome-claude-skills/tree/master/connect',
    triggers: [
      'Connect this app and validate access',
      'Set up OAuth for a new service',
      'Verify integration credentials for a workflow'
    ],
    features: [
      'Guided auth setup with validation steps',
      'Credential storage and verification hints',
      'Connection health checks for workflows'
    ],
    bestFor: [
      'Teams wiring external integrations',
      'Ops engineers configuring automations',
      'Builders validating app connections'
    ],
    tags: ['Integrations', 'OAuth', 'Credentials', 'Automation', 'DevOps']
  },
  {
    id: '147',
    name: 'connect-apps',
    description: 'Links multiple apps into a single workflow-ready setup.',
    longDescription: 'Configures multiple app connections, checks permissions, and documents required scopes for cross-app automations.',
    author: 'Prathit',
    downloads: '6.8k',
    stars: 21251,
    roles: [Role.DEVOPS],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add connect-apps',
    yamlConfig: 'tools:\n  - name: connect-apps\n    apps: multi\n    scopes: required',
    lastUpdated: '2026.1.12',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'Claude App',
      'Gemini CLI'
    ],
        files: ['LICENSE.txt', 'SKILL.md'],
    repoUrl: 'https://github.com/ComposioHQ/awesome-claude-skills/tree/master/connect-apps',
    triggers: [
      'Connect Slack, Notion, and Drive for this workflow',
      'Set up multi-app auth for an automation',
      'List required scopes for these app connections'
    ],
    features: [
      'Multi-app connection checklist with scope validation',
      'Documents required permissions per app',
      'Verifies connections before workflow runs'
    ],
    bestFor: [
      'Automation builders',
      'Ops teams managing multiple integrations',
      'Product teams wiring cross-app flows'
    ],
    tags: ['Integrations', 'Multi-App', 'Scopes', 'Automation', 'Setup']
  },
  {
    id: '148',
    name: 'connect-apps-plugin',
    description: 'Builds a plugin wrapper for connecting apps with shared auth.',
    longDescription: 'Scaffolds a plugin-style connector that manages app auth, exposes reusable actions, and documents setup steps.',
    author: 'Prathit',
    downloads: '6.8k',
    stars: 21251,
    roles: [Role.DEVOPS],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add connect-apps-plugin',
    yamlConfig: 'tools:\n  - name: connect-apps-plugin\n    plugin: true\n    auth: shared',
    lastUpdated: '2026.1.12',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'Claude App',
      'Gemini CLI'
    ],
        files: ['LICENSE.txt', 'SKILL.md', 'templates/'],
    repoUrl: 'https://github.com/ComposioHQ/awesome-claude-skills/tree/master/connect-apps-plugin',
    triggers: [
      'Scaffold a plugin for app connections',
      'Generate auth wiring for this plugin',
      'Document setup steps for a connector plugin'
    ],
    features: [
      'Plugin scaffolding with shared auth helpers',
      'Reusable actions for connected apps',
      'Setup docs and validation checks'
    ],
    bestFor: [
      'Plugin developers building integrations',
      'Teams standardizing connection flows',
      'Maintainers shipping reusable connectors'
    ],
    tags: ['Plugins', 'Integrations', 'Auth', 'Scaffolding', 'DevOps']
  },
  {
    id: '149',
    name: 'content-research-writer',
    description: 'Researches topics and drafts content with sources and outlines.',
    longDescription: 'Combines source gathering, outline generation, and draft writing into a repeatable content pipeline with citations and style guidance.',
    author: 'Prathit-tech',
    downloads: '6.8k',
    stars: 21251,
    roles: [Role.PRODUCT, Role.MARKETING],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add content-research-writer',
    yamlConfig: 'tools:\n  - name: content-research-writer\n    citations: true\n    outline: true',
    lastUpdated: '2025.10.17',
    type: 'Agent Skill',
    compatibility: [
      'Claude App',
      'Codex CLI',
      'Claude Code CLI',
      'Gemini CLI'
    ],
        files: ['LICENSE.txt', 'SKILL.md'],
    repoUrl: 'https://github.com/ComposioHQ/awesome-claude-skills/tree/master/content-research-writer',
    triggers: [
      'Research and draft a blog post on this topic',
      'Create an outline with sources for this article',
      'Write a content brief with citations'
    ],
    features: [
      'Builds structured outlines before drafting',
      'Includes citations and source summaries',
      'Adapts tone for audience and channel'
    ],
    bestFor: [
      'Content marketers shipping research pieces',
      'PMs writing thought leadership',
      'Writers needing rapid source synthesis'
    ],
    tags: ['Content', 'Research', 'Writing', 'Citations', 'Marketing']
  },
  {
    id: '150',
    name: 'developer-growth-analysis',
    description: 'Analyzes developer growth metrics and funnel performance.',
    longDescription: 'Calculates activation, retention, and conversion trends from developer adoption data, highlighting growth drivers and drop-offs.',
    author: 'Prathit-tech',
    downloads: '6.8k',
    stars: 21251,
    roles: [Role.DATA],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add developer-growth-analysis',
    yamlConfig: 'tools:\n  - name: developer-growth-analysis\n    metrics: activation,retention\n    output: report',
    lastUpdated: '2025.11.10',
    type: 'Agent Skill',
    compatibility: [
      'Claude App',
      'Codex CLI',
      'Claude Code CLI',
      'Gemini CLI'
    ],
        files: ['LICENSE.txt', 'SKILL.md'],
    repoUrl: 'https://github.com/ComposioHQ/awesome-claude-skills/tree/master/developer-growth-analysis',
    triggers: [
      'Analyze developer adoption over the last quarter',
      'Find drop-offs in the developer onboarding funnel',
      'Summarize growth trends for our API'
    ],
    features: [
      'Computes activation and retention metrics',
      'Surfaces funnel drop-offs and cohort trends',
      'Packages findings into a concise report'
    ],
    bestFor: [
      'Developer relations teams',
      'Growth analysts',
      'Product leaders tracking adoption'
    ],
    tags: ['Growth', 'Analytics', 'Developers', 'Funnels', 'Retention']
  },
  {
    id: '151',
    name: 'document-skills',
    description: 'Documents skills with clear usage guidance and metadata.',
    longDescription: 'Standardizes skill documentation by generating SKILL.md drafts, usage examples, and metadata summaries for consistent registry entries.',
    author: 'Prathit-tech',
    downloads: '6.8k',
    stars: 21251,
    roles: [Role.PRODUCT],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add document-skills',
    yamlConfig: 'tools:\n  - name: document-skills\n    templates: true\n    examples: true',
    lastUpdated: '2025.10.22',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'Claude App',
      'Gemini CLI'
    ],
        files: ['LICENSE.txt', 'SKILL.md'],
    repoUrl: 'https://github.com/ComposioHQ/awesome-claude-skills/tree/master/document-skills',
    triggers: [
      'Document this skill with SKILL.md and examples',
      'Generate usage notes for a new skill',
      'Create metadata summaries for a skill entry'
    ],
    features: [
      'Produces SKILL.md templates with sections filled',
      'Adds usage examples and trigger prompts',
      'Summarizes metadata for registry listings'
    ],
    bestFor: [
      'Maintainers publishing skills',
      'Contributors writing documentation',
      'Teams standardizing registry entries'
    ],
    tags: ['Documentation', 'Skills', 'Templates', 'Metadata', 'Writing']
  },
  {
    id: '152',
    name: 'domain-name-brainstormer',
    description: 'Generates domain name ideas with category and style filters.',
    longDescription: 'Produces curated domain name lists using themes, keywords, and style constraints, plus quick availability heuristics.',
    author: 'Prathit-tech',
    downloads: '6.8k',
    stars: 21251,
    roles: [Role.PRODUCT, Role.MARKETING],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add domain-name-brainstormer',
    yamlConfig: 'tools:\n  - name: domain-name-brainstormer\n    styles: brandable\n    tlds: .com,.io',
    lastUpdated: '2025.10.17',
    type: 'Agent Skill',
    compatibility: [
      'Claude App',
      'Codex CLI',
      'Claude Code CLI',
      'Gemini CLI'
    ],
        files: ['LICENSE.txt', 'SKILL.md'],
    repoUrl: 'https://github.com/ComposioHQ/awesome-claude-skills/tree/master/domain-name-brainstormer',
    triggers: [
      'Brainstorm domain names for this startup',
      'Generate brandable domains around these keywords',
      'List short .com/.io ideas for this product'
    ],
    features: [
      'Creates themed and keyword-driven domain lists',
      'Suggests variations and synonyms',
      'Flags quick availability heuristics'
    ],
    bestFor: [
      'Founders naming new products',
      'Brand teams exploring naming options',
      'Marketers validating naming directions'
    ],
    tags: ['Domains', 'Naming', 'Branding', 'Ideation', 'Marketing']
  },
  {
    id: '153',
    name: 'file-organizer',
    description: 'Organizes files into clean folder structures with naming rules.',
    longDescription: 'Audits messy directories and proposes a structured folder plan with consistent naming, deduping, and archival rules.',
    author: 'Prathit-tech',
    downloads: '6.8k',
    stars: 21251,
    roles: [Role.DEVOPS],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add file-organizer',
    yamlConfig: 'tools:\n  - name: file-organizer\n    rules: naming\n    mode: organize',
    lastUpdated: '2025.10.17',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'Claude App',
      'Gemini CLI'
    ],
        files: ['LICENSE.txt', 'SKILL.md'],
    repoUrl: 'https://github.com/ComposioHQ/awesome-claude-skills/tree/master/file-organizer',
    triggers: [
      'Organize this folder into a clean structure',
      'Rename and sort these files by type',
      'Create an archive plan for old files'
    ],
    features: [
      'Generates folder structures and naming conventions',
      'Identifies duplicates and stale assets',
      'Produces a safe move plan before changes'
    ],
    bestFor: [
      'Ops teams cleaning shared drives',
      'Designers managing asset libraries',
      'Anyone tidying large folders'
    ],
    tags: ['Files', 'Organization', 'Cleanup', 'Automation', 'Ops']
  },
  {
    id: '154',
    name: 'image-enhancer',
    description: 'Enhances images with cleanup, upscaling, and color correction guidance.',
    longDescription: 'Improves image quality by suggesting cleanup steps, resolution targets, and color adjustments for consistent presentation.',
    author: 'Prathit-tech',
    downloads: '6.8k',
    stars: 21251,
    roles: [Role.FRONTEND],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add image-enhancer',
    yamlConfig: 'tools:\n  - name: image-enhancer\n    upscale: true\n    cleanup: true',
    lastUpdated: '2025.10.17',
    type: 'Agent Skill',
    compatibility: [
      'Claude App',
      'Codex CLI',
      'Claude Code CLI',
      'Gemini CLI'
    ],
        files: ['LICENSE.txt', 'SKILL.md'],
    repoUrl: 'https://github.com/ComposioHQ/awesome-claude-skills/tree/master/image-enhancer',
    triggers: [
      'Enhance this image for web use',
      'Upscale and clean this photo',
      'Normalize colors across these assets'
    ],
    features: [
      'Suggests upscaling and sharpening settings',
      'Recommends color correction and contrast tuning',
      'Outputs guidelines for consistent asset quality'
    ],
    bestFor: [
      'Designers preparing marketing assets',
      'Teams polishing screenshots',
      'Creators improving image clarity'
    ],
    tags: ['Images', 'Enhancement', 'Quality', 'Design', 'Assets']
  },
  {
    id: '156',
    name: 'invoice-organizer',
    description: 'Extracts and organizes invoice data for tracking and reporting.',
    longDescription: 'Parses invoice details, normalizes vendor data, and outputs structured summaries for finance tracking.',
    author: 'Prathit-tech',
    downloads: '6.8k',
    stars: 21251,
    roles: [Role.DATA],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add invoice-organizer',
    yamlConfig: 'tools:\n  - name: invoice-organizer\n    extract: line_items\n    output: csv',
    lastUpdated: '2025.10.17',
    type: 'Agent Skill',
    compatibility: [
      'Claude App',
      'Codex CLI',
      'Claude Code CLI',
      'Gemini CLI'
    ],
        files: ['LICENSE.txt', 'SKILL.md'],
    repoUrl: 'https://github.com/ComposioHQ/awesome-claude-skills/tree/master/invoice-organizer',
    triggers: [
      'Extract data from these invoices',
      'Organize vendor invoices into a sheet',
      'Summarize invoice totals and due dates'
    ],
    features: [
      'Extracts totals, dates, and vendor metadata',
      'Normalizes line items for reporting',
      'Outputs clean CSV summaries'
    ],
    bestFor: [
      'Finance teams tracking invoices',
      'Ops teams managing vendor spend',
      'Analysts compiling billing data'
    ],
    tags: ['Invoices', 'Finance', 'Extraction', 'CSV', 'Operations']
  },
  {
    id: '157',
    name: 'langsmith-fetch',
    description: 'Fetches LangSmith runs and datasets for analysis.',
    longDescription: 'Connects to LangSmith to retrieve runs, traces, and dataset metadata, then packages them for review or reporting.',
    author: 'Ahmad Othman Ammar Adi.',
    downloads: '6.8k',
    stars: 21251,
    roles: [Role.DATA],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add langsmith-fetch',
    yamlConfig: 'tools:\n  - name: langsmith-fetch\n    resources: runs,datasets\n    output: json',
    lastUpdated: '2026.1.11',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'LangSmith',
      'Gemini CLI'
    ],
        files: ['LICENSE.txt', 'SKILL.md'],
    repoUrl: 'https://github.com/ComposioHQ/awesome-claude-skills/tree/master/langsmith-fetch',
    triggers: [
      'Fetch LangSmith runs for this project',
      'Export datasets from LangSmith',
      'Summarize trace results from LangSmith'
    ],
    features: [
      'Retrieves runs, traces, and dataset metadata',
      'Outputs structured JSON for analysis',
      'Supports filters by project or tag'
    ],
    bestFor: [
      'ML teams reviewing evaluations',
      'Engineers debugging prompt runs',
      'Analysts building LLM reports'
    ],
    tags: ['LangSmith', 'LLM', 'Tracing', 'Data', 'Analysis']
  },
  {
    id: '158',
    name: 'lead-research-assistant',
    description: 'Researches leads and builds concise prospect profiles.',
    longDescription: 'Gathers company and contact context, summarizing key details, pain points, and outreach angles in a structured profile.',
    author: 'Prathit-tech',
    downloads: '6.8k',
    stars: 21251,
    roles: [Role.PRODUCT],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add lead-research-assistant',
    yamlConfig: 'tools:\n  - name: lead-research-assistant\n    output: profile\n    depth: standard',
    lastUpdated: '2025.10.17',
    type: 'Agent Skill',
    compatibility: [
      'Claude App',
      'Codex CLI',
      'Claude Code CLI',
      'Gemini CLI'
    ],
        files: ['LICENSE.txt', 'SKILL.md'],
    repoUrl: 'https://github.com/ComposioHQ/awesome-claude-skills/tree/master/lead-research-assistant',
    triggers: [
      'Research this company for sales outreach',
      'Build a lead profile for this prospect',
      'Summarize key info for this target account'
    ],
    features: [
      'Creates structured lead profiles with key facts',
      'Highlights pain points and outreach hooks',
      'Produces quick summaries for sales teams'
    ],
    bestFor: [
      'Sales reps preparing outreach',
      'BD teams building target lists',
      'Founders doing customer research'
    ],
    tags: ['Leads', 'Sales', 'Research', 'Prospecting', 'Profiles']
  },
  {
    id: '160',
    name: 'meeting-insights-analyzer',
    description: 'Summarizes meetings with decisions, risks, and action items.',
    longDescription: 'Transforms meeting notes or transcripts into structured summaries with decisions, owners, and next steps.',
    author: 'Prathit-tech',
    downloads: '6.8k',
    stars: 21251,
    roles: [Role.PRODUCT],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add meeting-insights-analyzer',
    yamlConfig: 'tools:\n  - name: meeting-insights-analyzer\n    output: summary\n    include: actions,decisions',
    lastUpdated: '2025.10.17',
    type: 'Agent Skill',
    compatibility: [
      'Claude App',
      'Codex CLI',
      'Claude Code CLI',
      'Gemini CLI'
    ],
        files: ['LICENSE.txt', 'SKILL.md'],
    repoUrl: 'https://github.com/ComposioHQ/awesome-claude-skills/tree/master/meeting-insights-analyzer',
    triggers: [
      'Summarize this meeting transcript',
      'Extract action items and owners from notes',
      'Create a decision log from this meeting'
    ],
    features: [
      'Captures decisions, risks, and action items',
      'Assigns owners and due dates when available',
      'Outputs concise recap formats'
    ],
    bestFor: [
      'PMs and team leads',
      'Operations teams capturing follow-ups',
      'Remote teams sharing meeting notes'
    ],
    tags: ['Meetings', 'Summaries', 'Actions', 'Notes', 'Productivity']
  },
  {
    id: '161',
    name: 'raffle-winner-picker',
    description: 'Selects raffle winners fairly with reproducible randomness.',
    longDescription: 'Runs a transparent raffle draw with seedable randomness, tie-break rules, and audit-friendly output.',
    author: 'Prathit-tech',
    downloads: '6.8k',
    stars: 21251,
    roles: [Role.PRODUCT],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add raffle-winner-picker',
    yamlConfig: 'tools:\n  - name: raffle-winner-picker\n    seed: required\n    winners: 1',
    lastUpdated: '2025.10.17',
    type: 'Agent Skill',
    compatibility: [
      'Claude App',
      'Codex CLI',
      'Claude Code CLI',
      'Gemini CLI'
    ],
        files: ['LICENSE.txt', 'SKILL.md'],
    repoUrl: 'https://github.com/ComposioHQ/awesome-claude-skills/tree/master/raffle-winner-picker',
    triggers: [
      'Pick a random winner from this list',
      'Run a raffle with a fixed seed',
      'Select multiple winners and alternates'
    ],
    features: [
      'Uses seedable randomness for auditability',
      'Supports multiple winners and alternates',
      'Outputs a clear draw log'
    ],
    bestFor: [
      'Community giveaways',
      'Event organizers',
      'Teams running internal raffles'
    ],
    tags: ['Raffle', 'Random', 'Fairness', 'Events', 'Utilities']
  },
  {
    id: '163',
    name: 'skill-share',
    description: 'Packages skills for sharing with metadata and distribution notes.',
    longDescription: 'Prepares skills for distribution by generating shareable summaries, version notes, and installation guidance.',
    author: 'Prathit-tech',
    downloads: '6.8k',
    stars: 21251,
    roles: [Role.PRODUCT],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add skill-share',
    yamlConfig: 'tools:\n  - name: skill-share\n    include: readme,install\n    versioning: true',
    lastUpdated: '2025.11.7',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'Claude App',
      'Gemini CLI'
    ],
        files: ['LICENSE.txt', 'SKILL.md'],
    repoUrl: 'https://github.com/ComposioHQ/awesome-claude-skills/tree/master/skill-share',
    triggers: [
      'Prepare this skill for sharing',
      'Write a distribution README for this skill',
      'Generate installation notes and version info'
    ],
    features: [
      'Creates shareable skill summaries',
      'Adds versioning and release notes',
      'Outputs installation and usage guidance'
    ],
    bestFor: [
      'Teams publishing internal skills',
      'Open-source contributors',
      'Maintainers distributing skill updates'
    ],
    tags: ['Sharing', 'Skills', 'Release', 'Docs', 'Distribution']
  },
  {
    id: '165',
    name: 'tailored-resume-generator',
    description: 'Tailors resumes to job descriptions with targeted bullets.',
    longDescription: 'Rewrites and prioritizes resume content based on a job description, emphasizing relevant skills and outcomes.',
    author: 'Danielle',
    downloads: '6.8k',
    stars: 21251,
    roles: [Role.PRODUCT],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add tailored-resume-generator',
    yamlConfig: 'tools:\n  - name: tailored-resume-generator\n    format: resume\n    optimize: ats',
    lastUpdated: '2026.1.11',
    type: 'Agent Skill',
    compatibility: [
      'Claude App',
      'Codex CLI',
      'Claude Code CLI',
      'Gemini CLI'
    ],
        files: ['LICENSE.txt', 'SKILL.md'],
    repoUrl: 'https://github.com/ComposioHQ/awesome-claude-skills/tree/master/tailored-resume-generator',
    triggers: [
      'Tailor my resume to this job description',
      'Rewrite these bullets to match the role',
      'Create a resume summary for this position'
    ],
    features: [
      'Highlights relevant skills and impact metrics',
      'Rewrites bullets for role alignment',
      'Produces ATS-friendly formatting guidance'
    ],
    bestFor: [
      'Job seekers applying to targeted roles',
      'Career coaches and resume writers',
      'Candidates optimizing ATS matching'
    ],
    tags: ['Resume', 'Career', 'Writing', 'ATS', 'Hiring']
  },
  {
    id: '166',
    name: 'template-skill',
    description: 'Provides a starter template for building new skills.',
    longDescription: 'Offers a minimal skill scaffold with SKILL.md, metadata placeholders, and example triggers to speed up authoring.',
    author: 'Prathit-tech',
    downloads: '6.8k',
    stars: 21251,
    roles: [Role.PRODUCT],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add template-skill',
    yamlConfig: 'tools:\n  - name: template-skill\n    template: base\n    files: starter',
    lastUpdated: '2025.10.22',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'Claude App',
      'Gemini CLI'
    ],
        files: ['LICENSE.txt', 'SKILL.md'],
    repoUrl: 'https://github.com/ComposioHQ/awesome-claude-skills/tree/master/template-skill',
    triggers: [
      'Scaffold a new skill from the template',
      'Show the default skill structure',
      'Generate a starter SKILL.md'
    ],
    features: [
      'Includes a minimal file structure and placeholders',
      'Provides example triggers and metadata',
      'Keeps scaffolding lightweight and editable'
    ],
    bestFor: [
      'First-time skill authors',
      'Workshops teaching skill setup',
      'Teams standardizing new skill creation'
    ],
    tags: ['Template', 'Skills', 'Starter', 'Scaffold', 'Docs']
  },
  {
    id: '168',
    name: 'video-downloader',
    description: 'Downloads videos with format, quality, and metadata options.',
    longDescription: 'Handles video download workflows by choosing formats, resolutions, and metadata outputs for archival or analysis.',
    author: 'Prathit',
    downloads: '6.8k',
    stars: 21251,
    roles: [Role.DEVOPS],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add video-downloader',
    yamlConfig: 'tools:\n  - name: video-downloader\n    formats: mp4,webm\n    metadata: true',
    lastUpdated: '2025.12.29',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'Claude App',
      'Gemini CLI'
    ],
        files: ['LICENSE.txt', 'SKILL.md'],
    repoUrl: 'https://github.com/ComposioHQ/awesome-claude-skills/tree/master/video-downloader',
    triggers: [
      'Download this video in MP4 format',
      'Fetch a video with metadata and captions',
      'Choose the best resolution for this URL'
    ],
    features: [
      'Selects formats and resolutions based on requirements',
      'Captures metadata and optional captions',
      'Outputs a clear download plan'
    ],
    bestFor: [
      'Teams archiving video assets',
      'Analysts collecting media samples',
      'Ops users automating media retrieval'
    ],
    tags: ['Video', 'Download', 'Media', 'Automation', 'Utilities']
  },
  {
    id: '169',
    name: 'react-best-practices',
    description: 'Reviews React codebases for best practices, performance, and maintainability.',
    longDescription: 'A Vercel-backed skill that audits React apps for hooks correctness, component structure, and performance pitfalls. It produces actionable fixes and consistency checks for production-grade UI code.',
    author: 'Vercel',
    downloads: '4.6k',
    stars: 12675,
    roles: [Role.DEVOPS],
    isTrending: true,
    isCowork: false,
    setupCommand: 'claude mcp add react-best-practices',
    yamlConfig: 'tools:\n  - name: react-best-practices\n    framework: react\n    mode: review',
    lastUpdated: '2026.1.18',
    type: 'Agent Skill',
    compatibility: [
      'Claude Code CLI',
      'Codex CLI',
      'Claude App',
      'React 18+',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/vercel-labs/agent-skills/tree/main/skills/react-best-practices',
    triggers: [
      'Review this React component for best practices',
      'Find hooks and state management issues in this code',
      'Improve performance in this React page'
    ],
    features: [
      'Flags hooks misuse and stale dependency risks',
      'Suggests component structure and state cleanup',
      'Highlights performance and rendering bottlenecks'
    ],
    bestFor: [
      'Frontend teams maintaining React apps',
      'Engineers reviewing PRs for best practices',
      'Projects hardening performance and code quality'
    ],
    tags: ['React', 'Best Practices', 'Performance', 'Code Review', 'Frontend']
  },
  {
    id: '170',
    name: 'data-storytelling',
    description: 'Turns analytics outputs into clear narratives with charts, takeaways, and stakeholder-ready framing.',
    longDescription: 'A business-analytics skill that structures metrics into a story arc, pairs insights with visuals, and produces executive-friendly summaries.',
    author: 'wshobson',
    downloads: '6.4k',
    stars: 25910,
    roles: [Role.DATA, Role.MARKETING],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add data-storytelling',
    yamlConfig: 'tools:\n  - name: data-storytelling\n    structure: narrative\n    visuals: true',
    lastUpdated: '2026.1.15',
    type: 'Agent Skill',
    compatibility: [
      'Claude App',
      'Codex CLI',
      'Claude Code CLI',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/wshobson/agents/tree/main/plugins/business-analytics/skills/data-storytelling',
    triggers: [
      'Turn this metrics report into a narrative brief',
      'Create a data story with key takeaways for leadership',
      'Pair insights with chart recommendations'
    ],
    features: [
      'Defines a beginning-middle-end story arc for metrics',
      'Suggests chart types that match each insight',
      'Produces executive summaries with clear takeaways'
    ],
    bestFor: [
      'Analysts presenting to exec teams',
      'Growth teams reporting weekly outcomes',
      'Operators packaging KPI narratives'
    ],
    tags: ['Analytics', 'Storytelling', 'Reports', 'Charts', 'Business']
  },
  {
    id: '171',
    name: 'competitive-landscape',
    description: 'Analyzes competitors to map positioning, pricing, and differentiation.',
    longDescription: 'A startup analyst skill that builds competitive matrices, highlights gaps, and summarizes market positioning for strategy reviews.',
    author: 'wshobson',
    downloads: '6.4k',
    stars: 25910,
    roles: [Role.PRODUCT, Role.MARKETING],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add competitive-landscape',
    yamlConfig: 'tools:\n  - name: competitive-landscape\n    format: matrix\n    depth: standard',
    lastUpdated: '2026.1.14',
    type: 'Agent Skill',
    compatibility: [
      'Claude App',
      'Codex CLI',
      'Claude Code CLI',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/wshobson/agents/tree/main/plugins/startup-business-analyst/skills/competitive-landscape',
    triggers: [
      'Build a competitive landscape for this market',
      'Summarize how competitors position themselves',
      'Identify whitespace and differentiation angles'
    ],
    features: [
      'Creates a competitor comparison matrix',
      'Summarizes pricing, positioning, and messaging',
      'Highlights gaps and opportunities'
    ],
    bestFor: [
      'Founders preparing strategy memos',
      'Product marketing teams',
      'Analysts doing market research'
    ],
    tags: ['Competitive', 'Strategy', 'Research', 'Positioning', 'Market']
  },
  {
    id: '172',
    name: 'kpi-dashboard-design',
    description: 'Designs KPI dashboards with metric hierarchy, layout guidance, and visualization choices.',
    longDescription: 'A business-analytics skill that defines KPI tiers, recommends chart types, and outlines dashboard sections for different audiences.',
    author: 'wshobson',
    downloads: '6.4k',
    stars: 25910,
    roles: [Role.DATA, Role.PRODUCT],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add kpi-dashboard-design',
    yamlConfig: 'tools:\n  - name: kpi-dashboard-design\n    outputs: wireframe\n    metrics: kpi',
    lastUpdated: '2026.1.15',
    type: 'Agent Skill',
    compatibility: [
      'Claude App',
      'Codex CLI',
      'Claude Code CLI',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/wshobson/agents/tree/main/plugins/business-analytics/skills/kpi-dashboard-design',
    triggers: [
      'Outline a KPI dashboard for this team',
      'Choose charts and layout for these metrics',
      'Design an exec vs operator dashboard view'
    ],
    features: [
      'Defines KPI hierarchy and grouping',
      'Recommends chart types per metric',
      'Outlines layout blocks and section order'
    ],
    bestFor: [
      'Analytics teams building dashboards',
      'Product leaders tracking KPIs',
      'Operators reporting weekly performance'
    ],
    tags: ['KPIs', 'Dashboards', 'Analytics', 'Visualization', 'Design']
  },
  {
    id: '173',
    name: 'postmortem-writing',
    description: 'Creates incident postmortems with timelines, impact summaries, and action items.',
    longDescription: 'An incident-response skill that structures postmortems around root cause, contributing factors, and clear follow-ups.',
    author: 'wshobson',
    downloads: '6.4k',
    stars: 25910,
    roles: [Role.DEVOPS],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add postmortem-writing',
    yamlConfig: 'tools:\n  - name: postmortem-writing\n    sections: timeline,impact,actions',
    lastUpdated: '2025.12.16',
    type: 'Agent Skill',
    compatibility: [
      'Claude App',
      'Codex CLI',
      'Claude Code CLI',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/wshobson/agents/tree/main/plugins/incident-response/skills/postmortem-writing',
    triggers: [
      'Write a postmortem for this outage',
      'Summarize impact and timeline for stakeholders',
      'Draft follow-up actions and owners'
    ],
    features: [
      'Creates a structured incident timeline',
      'Summarizes impact and root cause',
      'Defines action items with ownership'
    ],
    bestFor: [
      'SRE and incident response teams',
      'Engineering leaders reporting incidents',
      'Ops teams standardizing postmortems'
    ],
    tags: ['Incident', 'Postmortem', 'Reliability', 'SRE', 'Operations']
  },
  {
    id: '174',
    name: 'product-strategist',
    description: 'Builds product strategy briefs with market fit, positioning, and go-to-market framing.',
    longDescription: 'A business-marketing skill that turns inputs into strategy narratives, target segments, and launch hypotheses.',
    author: 'davila7',
    downloads: '4.3k',
    stars: 17266,
    roles: [Role.PRODUCT, Role.MARKETING],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add product-strategist',
    yamlConfig: 'tools:\n  - name: product-strategist\n    framework: positioning\n    output: brief',
    lastUpdated: '2025.12.20',
    type: 'Agent Skill',
    compatibility: [
      'Claude App',
      'Codex CLI',
      'Claude Code CLI',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/davila7/claude-code-templates/tree/main/cli-tool/components/skills/business-marketing/product-strategist',
    triggers: [
      'Draft a product strategy brief for this market',
      'Define positioning and target segments',
      'Outline launch hypotheses and risks'
    ],
    features: [
      'Frames positioning and differentiation',
      'Defines target segments and use cases',
      'Surfaces risks and strategic assumptions'
    ],
    bestFor: [
      'Product strategy teams',
      'Product marketing leaders',
      'Founders preparing GTM plans'
    ],
    tags: ['Product', 'Strategy', 'Positioning', 'Go-To-Market', 'Marketing']
  },
  {
    id: '175',
    name: 'content-creator',
    description: 'Generates content plans and drafts tailored to channel goals and audience needs.',
    longDescription: 'A marketing skill that outlines content calendars, defines messaging, and drafts copy aligned with brand voice.',
    author: 'davila7',
    downloads: '4.3k',
    stars: 17266,
    roles: [Role.MARKETING],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add content-creator',
    yamlConfig: 'tools:\n  - name: content-creator\n    channels: blog,newsletter,social\n    tone: brand',
    lastUpdated: '2025.12.20',
    type: 'Agent Skill',
    compatibility: [
      'Claude App',
      'Codex CLI',
      'Claude Code CLI',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/davila7/claude-code-templates/tree/main/cli-tool/components/skills/business-marketing/content-creator',
    triggers: [
      'Create a content plan for this launch',
      'Draft a blog post outline with key messages',
      'Write social copy in our brand voice'
    ],
    features: [
      'Builds channel-specific content plans',
      'Defines messaging pillars and tone',
      'Drafts copy with clear CTAs'
    ],
    bestFor: [
      'Content marketing teams',
      'Founders planning launch comms',
      'Growth teams running campaigns'
    ],
    tags: ['Content', 'Copywriting', 'Campaigns', 'Editorial', 'Marketing']
  },
  {
    id: '176',
    name: 'product-prd',
    description: 'Writes structured PRDs with goals, scope, requirements, and success metrics.',
    longDescription: 'A product skill that turns discovery notes into clear PRDs with milestones, risks, and launch criteria.',
    author: 'baptisteArno',
    downloads: '2.4k',
    stars: 9579,
    roles: [Role.PRODUCT],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add product-prd',
    yamlConfig: 'tools:\n  - name: product-prd\n    sections: goals,scope,requirements',
    lastUpdated: '2026.1.15',
    type: 'Agent Skill',
    compatibility: [
      'Claude App',
      'Codex CLI',
      'Claude Code CLI',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/baptisteArno/typebot.io/tree/main/.claude/skills/product-prd',
    triggers: [
      'Write a PRD for this feature',
      'Turn these notes into a structured PRD',
      'Define scope and success metrics'
    ],
    features: [
      'Structures goals, scope, and requirements',
      'Highlights risks, dependencies, and milestones',
      'Defines success metrics and launch criteria'
    ],
    bestFor: [
      'Product managers shipping features',
      'Teams standardizing PRDs',
      'Founders organizing discovery notes'
    ],
    tags: ['PRD', 'Product', 'Requirements', 'Planning', 'Docs']
  },
  {
    id: '177',
    name: 'content-prd',
    description: 'Creates content PRDs with objectives, audience, and distribution plans.',
    longDescription: 'A content-focused PRD skill that captures messaging, deliverables, and channel requirements for marketing assets.',
    author: 'baptisteArno',
    downloads: '2.4k',
    stars: 9579,
    roles: [Role.PRODUCT, Role.MARKETING],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add content-prd',
    yamlConfig: 'tools:\n  - name: content-prd\n    sections: goals,audience,channels',
    lastUpdated: '2026.1.15',
    type: 'Agent Skill',
    compatibility: [
      'Claude App',
      'Codex CLI',
      'Claude Code CLI',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/baptisteArno/typebot.io/tree/main/.claude/skills/content-prd',
    triggers: [
      'Write a content PRD for this campaign',
      'Define audience, messaging, and channels',
      'Outline deliverables for the content team'
    ],
    features: [
      'Defines goals, audience, and messaging',
      'Lists deliverables and distribution channels',
      'Captures approvals and dependencies'
    ],
    bestFor: [
      'Content marketing teams',
      'Product marketers planning campaigns',
      'Teams managing creative workflows'
    ],
    tags: ['Content', 'PRD', 'Marketing', 'Planning', 'Briefs']
  },
  {
    id: '178',
    name: 'create-plan',
    description: 'Generates structured implementation plans with milestones, tasks, and risks.',
    longDescription: 'A planning skill that breaks work into phases, owners, and dependencies for reliable execution.',
    author: 'antinomyhq',
    downloads: '1.1k',
    stars: 4570,
    roles: [Role.PRODUCT],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add create-plan',
    yamlConfig: 'tools:\n  - name: create-plan\n    format: milestones\n    owners: true',
    lastUpdated: '2025.12.11',
    type: 'Agent Skill',
    compatibility: [
      'Claude App',
      'Codex CLI',
      'Claude Code CLI',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/antinomyhq/forge/tree/main/.forge/skills/create-plan',
    triggers: [
      'Create an execution plan for this project',
      'Break this work into milestones and owners',
      'List risks and dependencies for this plan'
    ],
    features: [
      'Creates phase-based milestones',
      'Assigns owners and dependencies',
      'Highlights risks and assumptions'
    ],
    bestFor: [
      'Product leads planning delivery',
      'Teams coordinating cross-functional work',
      'Operators tracking execution'
    ],
    tags: ['Planning', 'Roadmap', 'Milestones', 'Execution', 'Product']
  },
  {
    id: '179',
    name: 'ask-questions-if-underspecified',
    description: 'Identifies missing requirements and asks clarifying questions before execution.',
    longDescription: 'A safety-focused skill that detects ambiguity, requests context, and prevents brittle assumptions in task execution.',
    author: 'trailofbits',
    downloads: '1.3k',
    stars: 1338,
    roles: [Role.PRODUCT],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add ask-questions-if-underspecified',
    yamlConfig: 'tools:\n  - name: ask-questions-if-underspecified\n    mode: strict\n    retries: 2',
    lastUpdated: '2026.1.14',
    type: 'Agent Skill',
    compatibility: [
      'Claude App',
      'Codex CLI',
      'Claude Code CLI',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/trailofbits/skills/tree/main/plugins/ask-questions-if-underspecified/skills/ask-questions-if-underspecified',
    triggers: [
      'Check whether these requirements are complete',
      'Ask clarifying questions before starting',
      'Identify missing constraints in this request'
    ],
    features: [
      'Flags ambiguity and missing inputs',
      'Produces targeted clarification questions',
      'Prevents assumptions before execution'
    ],
    bestFor: [
      'Teams running high-stakes workflows',
      'Engineers refining requirements',
      'Ops teams avoiding risky assumptions'
    ],
    tags: ['Clarification', 'Safety', 'Requirements', 'Review', 'Quality']
  },
  {
    id: '180',
    name: 'campaign-planner',
    description: 'Plans influencer marketing campaigns with goals, creator tiers, and delivery timelines.',
    longDescription: 'An influencer marketing planning skill that turns campaign briefs into structured plans with objectives, creator tiers, budgets, timelines, and KPIs.',
    author: 'aaron-he-zhu',
    downloads: '1.2k',
    stars: 14,
    roles: [Role.MARKETING],
    isTrending: false,
    isCowork: false,
    setupCommand: 'claude mcp add campaign-planner',
    yamlConfig: 'tools:\n  - name: campaign-planner\n    platforms: instagram,tiktok,youtube\n    kpis: true',
    lastUpdated: '2025.12.18',
    type: 'Agent Skill',
    compatibility: [
      'Claude App',
      'Codex CLI',
      'Claude Code CLI',
      'Gemini CLI'
    ],
        files: ['SKILL.md'],
    repoUrl: 'https://github.com/aaron-he-zhu/influencer-marketing-claude-skills/tree/main/plan/campaign-planner',
    triggers: [
      'Plan an influencer marketing campaign for a product launch',
      'Define creator tiers, deliverables, and budget',
      'Create a campaign timeline with milestones and KPIs'
    ],
    features: [
      'Structures objectives, audience, and messaging',
      'Maps creator tiers to deliverables and timelines',
      'Defines KPIs, reporting cadence, and risks'
    ],
    bestFor: [
      'Influencer marketing teams',
      'Growth teams running creator campaigns',
      'Founders launching creator-led products'
    ],
    tags: ['Influencer', 'Marketing', 'Campaigns', 'Planning', 'Creators']
  }
];
