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

const H2 = ({ children }) => (
  <h2 className="text-2xl font-semibold mb-4 mt-6">{children}</h2>
);
const H3 = ({ children }) => (
  <h3 className="font-light mb-4 mt-6">{children}</h3>
);
const P = ({ children }) => <p className="mb-4">{children}</p>; // Tailwind CSS for margin between paragraphs
const Img = ({ src, alt }) => (
  <img src={src} alt={alt} className="mx-auto block p-4" />
);

// Markdown Importer Component
const MarkdownImporter = ({ slug }) => {
  const post = getPostContent(slug);

  const options = {
    overrides: {
      // Map markdown elements to custom styled components
      h2: {
        component: H2,
      },
      h3: {
        component: H3, // Include the custom H3 component with styling
      },
      p: {
        component: P,
      },
      img: {
        component: Img, // Override image component for centering
      },
    },
  };

  return (
    <div className="text-white text-justify markdown">
      <article>
        <Markdown options={options}>{post.content}</Markdown>
      </article>
    </div>
  );
};

export default MarkdownImporter;
