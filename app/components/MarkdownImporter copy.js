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

// Markdown Importer Component
const MarkdownImporter = ({ slug }) => {
  const post = getPostContent(slug);

  return (
    <div className="text-white text-justify">
      <article>
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
};

export default MarkdownImporter;
