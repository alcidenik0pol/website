"use client";

import { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";

export default function PublicationArticle({ slug }) {
  const [content, setContent] = useState("");
  const [metadata, setMetadata] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMarkdown() {
      try {
        const response = await fetch(`/posts/${slug}.md`);
        const text = await response.text();

        // Parse frontmatter
        const frontmatterMatch = text.match(/^---\n(.*?)\n---/s);
        if (frontmatterMatch) {
          const frontmatterText = frontmatterMatch[1];
          const metadataObj = {};
          frontmatterText.split("\n").forEach((line) => {
            const [key, ...valueParts] = line.split(":");
            if (key && valueParts.length > 0) {
              const value = valueParts.join(":").trim().replace(/^"|"$/g, "");
              metadataObj[key.trim()] = value;
            }
          });
          setMetadata(metadataObj);
          setContent(text.replace(frontmatterMatch[0], ""));
        } else {
          setContent(text);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error loading markdown:", error);
        setLoading(false);
      }
    }

    loadMarkdown();
  }, [slug]);

  if (loading) {
    return <div className="text-muted-foreground">Loading...</div>;
  }

  return (
    <article className="prose prose-invert max-w-none">
      {metadata && (
        <header className="mb-8 pb-8 border-b border-border">
          <h1 className="text-3xl font-semibold mb-4">{metadata.title}</h1>
          {metadata.description && (
            <p className="text-lg text-muted-foreground">
              {metadata.description}
            </p>
          )}
        </header>
      )}
      <div className="markdown space-y-6 text-foreground/90 leading-relaxed">
        <Markdown>{content}</Markdown>
      </div>
    </article>
  );
}
