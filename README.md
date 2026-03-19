# Agent Skills Registry

Agent Skills Registry is a frontend web app for discovering and exploring agent skills in a registry-style experience. It is designed to make skill discovery feel closer to browsing a curated product catalog: users can search, filter, compare, and open detailed views for each skill before deciding how to use or install it.

The current version of the project is focused on Claude-oriented skills and MCP-compatible workflows. It presents each skill with structured metadata such as role, description, compatibility, tags, install hints, and source links, so the registry feels useful both as a discovery surface and as a lightweight installation guide.

## Highlights

- Searchable registry of agent skills
- Role and tag based filtering
- Trending and full catalog views
- Detailed skill pages with setup context
- GitHub-backed skill bundle download flow
- Clean static frontend built with React and Vite

## Built with

- React
- TypeScript
- Vite
- JSZip

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

This repository is best understood as a polished registry UI for agent skills: a place to organize skill metadata, present it clearly, and help users move from discovery to installation with less friction.
