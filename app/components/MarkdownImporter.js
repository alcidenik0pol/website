// MarkdownImporter.js
import React from "react";
import Markdown from "markdown-to-jsx";
import fs from "fs";
import matter from "gray-matter";

// Utility function to read markdown content from a file
function getPostContent(slug) {
  const folder = "posts/";
  const file = folder + `${slug}.md`;
  const content = fs.readFileSync(file, "utf8");

  const matterResult = matter(content);
  return matterResult;
}

// Custom components for Markdown elements
const H2 = ({ children }) => <h2 className="text-2xl mb-4 mt-6">{children}</h2>; // Tailwind CSS for larger text and margin
const P = ({ children }) => <p className="mb-4">{children}</p>; // Tailwind CSS for margin between paragraphs

// Markdown Importer Component
const MarkdownImporter = ({ slug }) => {
  const post = getPostContent(slug);

  const options = {
    overrides: {
      // Map markdown elements to custom styled components
      h2: {
        component: H2,
      },
      p: {
        component: P,
      },
    },
  };

  return (
    <div className="text-white text-justify">
      <article>
        <Markdown options={options}>{post.content}</Markdown>
      </article>
    </div>
  );
};

export default MarkdownImporter;
