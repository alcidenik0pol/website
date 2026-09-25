# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio + blog for Victor Tenneroni (researcher, investor, engineer). Next.js 13 (App Router), React 18, Tailwind CSS. Dark theme with shadcn-style tokens (`bg-background`, `text-foreground`, `text-muted-foreground`, `border-border`) — reuse tokens, do not invent colors.

## Development Commands

```bash
npm run dev     # start dev server
npm run build   # production build
npm start       # production server
npm run lint    # linter
```

## Architecture

### Routes (`app/`, App Router)
- `/` — homepage
- `/about`, `/engineering`, `/investments`, `/publications`, `/startup` — static section pages
- `/demo` + `/demo/[slug]` — legacy demo pages (being replaced by `/projects/[slug]`; both systems intentionally kept)
- `/projects/[slug]` — project pages. **No `/projects` index page exists** — only individual slugs render; visiting `/projects` directly 404s
- `/publications/[slug]` — publication articles
- `/stemopt` — STEM OPT employer requirements; standalone shareable page for HR
- `/sitemap` — human-browsable URL tree of the whole site. Walks `app/` with Node `fs` at build time and expands `[slug]` routes from data modules, so new pages appear automatically on rebuild

### Page pattern
Every page follows `app/about/page.js`: `ResearcherHeader` at top, `min-h-screen bg-background text-foreground` wrapper, `max-w-4xl mx-auto px-4 py-8 md:px-6` main, `text-3xl md:text-4xl font-light tracking-tight` h1, section headers `text-xs font-medium text-muted-foreground uppercase tracking-wider`, and an exported `metadata` object.

### Components (`app/components/`)
`ResearcherHeader.js` (site nav), `ProjectPageArticle.js`, `PublicationArticle.js`, `PublicationList.js`, `PublicationCard.js`, `DemoTile.js`, `DemoIcons.js`, `ui/` (`card.js`, `badge.js`, shadcn-style).

### Data (`app/data/`)
- `ProjectsPageData.js` — drives `/projects/[slug]` (10 projects)
- `DemoData.js` + `ProjectsData.js` — drive `/demo`; titles join on slug (see `app/demo/[slug]/page.js`)
- `PublicationsData.js`, `InvestmentsData.js` (investments page only — no child routes)
- `engineeringHref.js` — slug-to-link mapping helper

### Markdown articles (client-side fetch)
`ProjectPageArticle.js` fetches `/projects/<slug>.md`; `PublicationArticle.js` fetches `/posts/<slug>.md` (files live in `public/projects/` and `public/posts/`). Both render with `markdown-to-jsx` and are `"use client"` components.

### Styling
Tailwind CSS (`tailwind.config.js`), custom globals in `app/globals.css`. Dark mode via `.dark` class on `<html>` set in `app/layout.js` (Inter font). Icons: `lucide-react` and `@heroicons/react`.

### Notes
- `@/*` maps to project root (`jsconfig.json`)
- `resend` sits in dependencies but is unused inside `app/`
- `scripts/vercel-cleanup.sh` — deployment maintenance script, not app code
