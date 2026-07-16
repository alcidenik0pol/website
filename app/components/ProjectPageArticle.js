"use client";

import { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";
import projectsPageData from "@/app/data/ProjectsPageData";
import demoData from "@/app/data/DemoData";
import { getEmbedUrl } from "@/app/utils/embedUrl";

// Resolve the hero media from data (DemoData primary, local webm fallback).
// Returns null when no video is available.
function renderHeroVideo(entry) {
  if (!entry) return null;

  if (entry.demoSlug) {
    const demo = demoData.find((d) => d.slug === entry.demoSlug);
    if (demo) {
      const embedUrl = getEmbedUrl(demo.demoUrl, demo.demoType);
      if (embedUrl) {
        if (demo.demoType === "video") {
          return (
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <video
                src={embedUrl}
                controls
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full rounded bg-black object-contain"
              />
            </div>
          );
        }
        return (
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src={embedUrl}
              className="absolute inset-0 w-full h-full rounded"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        );
      }
    }
  }

  if (entry.video) {
    return (
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        <video
          src={entry.video}
          controls
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full rounded bg-black object-contain"
        />
      </div>
    );
  }

  return null;
}

// Scoped typography. Inline `code` here is for identifiers/filenames in prose
// (e.g. `mcp_tools.py`), NOT stack tags. Stack tags render as chips separately.
const mdOverrides = {
  h3: ({ children }) => (
    <h3 className="mt-7 mb-1.5 text-lg font-semibold text-foreground">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="mb-4 leading-relaxed text-foreground/80">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="my-4 space-y-2 list-disc list-inside text-foreground/80">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="my-4 space-y-2 list-decimal list-inside text-foreground/80">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  strong: ({ children }) => (
    <strong className="font-semibold text-foreground">{children}</strong>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-blue-400 underline underline-offset-2 decoration-blue-400/50 hover:text-blue-300 hover:decoration-blue-300 transition-colors"
    >
      {children}
    </a>
  ),
  code: ({ children }) => (
    <code className="px-1.5 py-0.5 rounded bg-muted font-mono text-[0.85em] text-foreground/80">
      {children}
    </code>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-border pl-4 my-4 italic text-foreground/70">
      {children}
    </blockquote>
  ),
};

// Split the markdown body into top-level (##) sections so the Stack section
// can render as a chip cloud while other inline code stays inline-mono.
function splitSections(body) {
  const parts = body.split(/^## /m);
  const sections = [];
  for (let i = 1; i < parts.length; i++) {
    const nl = parts[i].indexOf("\n");
    const title = (nl >= 0 ? parts[i].slice(0, nl) : parts[i]).trim();
    const content = nl >= 0 ? parts[i].slice(nl + 1).trim() : "";
    sections.push({ title, content });
  }
  return sections;
}

function SectionTitle({ children }) {
  return (
    <h2 className="mt-10 mb-3 pb-2 border-b border-border text-2xl font-bold tracking-tight text-foreground">
      {children}
    </h2>
  );
}

function StackCloud({ content }) {
  const chips = [...content.matchAll(/`([^`]+)`/g)].map((m) => m[1]);
  if (chips.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-2 my-4">
      {chips.map((c) => (
        <span
          key={c}
          className="bg-secondary text-foreground/90 rounded-full px-3 py-1 text-xs font-medium border border-border"
        >
          {c}
        </span>
      ))}
    </div>
  );
}

function MetaRow({ label, children }) {
  if (!children) return null;
  return (
    <div className="flex gap-3">
      <dt className="w-20 shrink-0 pt-0.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </dt>
      <dd className="flex-1 text-sm text-foreground/80">{children}</dd>
    </div>
  );
}

export default function ProjectPageArticle({ slug }) {
  const entry = projectsPageData.find((p) => p.slug === slug);
  const [hero, setHero] = useState(null);
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const response = await fetch(`/projects/${slug}.md`);
        const text = await response.text();

        const titleMatch = text.match(/^#\s+(.+)$/m);
        const field = (key) => {
          const m = text.match(new RegExp(`\\*\\*${key}:\\*\\*\\s*(.+)$`, "m"));
          return m ? m[1].trim() : "";
        };

        setHero({
          title: titleMatch ? titleMatch[1].trim() : entry?.title ?? "",
          tagline: field("Tagline"),
          date: field("Date"),
          goal: field("Goal"),
          delivery: field("Delivery"),
        });

        const gistIdx = text.indexOf("## The Gist");
        setBody(gistIdx >= 0 ? text.slice(gistIdx) : text);
      } catch (error) {
        console.error("Error loading project markdown:", error);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [slug, entry?.title]);

  if (loading) {
    return <div className="text-muted-foreground">Loading...</div>;
  }

  const heroVideo = renderHeroVideo(entry);
  const sections = splitSections(body);

  return (
    <article className="max-w-none">
      {hero && (
        <header className="mb-8 pb-8 border-b border-border">
          <h1 className="mb-3 text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            {hero.title}
          </h1>
          {hero.tagline && (
            <p className="mb-6 text-lg text-foreground/70">{hero.tagline}</p>
          )}
          {(hero.date || hero.goal || hero.delivery) && (
            <dl className="space-y-2.5">
              <MetaRow label="Date">{hero.date}</MetaRow>
              <MetaRow label="Goal">{hero.goal}</MetaRow>
              <MetaRow label="Delivery">{hero.delivery}</MetaRow>
            </dl>
          )}
        </header>
      )}

      {heroVideo && <div className="mb-8">{heroVideo}</div>}

      {entry?.architecture && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={entry.architecture}
          alt={`${hero?.title ?? slug} architecture`}
          className="w-full rounded-lg border border-border mb-8"
        />
      )}

      {sections.map((section) => (
        <section key={section.title}>
          <SectionTitle>{section.title}</SectionTitle>
          {section.title.toLowerCase() === "stack" ? (
            <StackCloud content={section.content} />
          ) : (
            <Markdown options={{ overrides: mdOverrides }}>
              {section.content}
            </Markdown>
          )}
        </section>
      ))}
    </article>
  );
}
