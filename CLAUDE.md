# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Next.js 13 (App Router), React, and Tailwind CSS. It serves as both a portfolio showcasing projects and a blog for technical posts.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Architecture

### App Router Structure
- Uses Next.js 13 App Router (`app/` directory)
- Main page: `app/page.js` - composes Hero, About, Projects, Email, and Footer sections
- Dynamic blog routes: `app/posts/[slug]/page.js` - renders individual markdown posts

### Path Aliases
- `@/*` maps to the project root (configured in `jsconfig.json`)

### Component Organization
All UI components live in `app/components/`:
- `HeroSection.js`, `AboutSection.js`, `ProjectsSection.js`, `EmailSection.js` - main page sections
- `Navbar.js`, `Footer.js`, `MenuOverlay.js` - navigation and layout
- `ProjectCard.js`, `ProjectTag.js`, `ProjectPageComponent.js` - project display
- `MarkdownImporter.js`, `MarkdownArticle.js` - blog post rendering

### Blog/Post System
Blog posts are stored as markdown files in `public/posts/` with YAML frontmatter:

```yaml
---
title: "Post Title"
description: "Post description for previews"
---
```

**Two ways posts are rendered:**
1. **Client-side** (`MarkdownImporter.js`): Fetches markdown from public/, uses `markdown-to-jsx` for rendering with custom styled components
2. **Server-side** (`MarkdownArticle.js`): Uses Node.js `fs` to read files, `gray-matter` for parsing frontmatter - meant for static generation

**Important**: `MarkdownImporter.js` is currently used by `app/posts/[slug]/page.js` and requires `"use client"` directive.

### Utilities
- `utils/getPostMetadata.js` - Reads all markdown files in a directory and extracts frontmatter (title, description, prep_time, cook_time)

### Data
- `app/data/ProjectData.js` - Contains project metadata and information

## Styling
- Tailwind CSS with custom configuration in `tailwind.config.js`
- Dark theme (`bg-[#121212]` background)
- Custom global styles in `app/globals.css`
