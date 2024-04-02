"use client";
import React, { useEffect, useState } from "react";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";

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

const MarkdownImporter = ({ slug }) => {
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchMarkdown = async () => {
      const response = await fetch(`/posts/${slug}.md`);
      const content = await response.text();
      const matterResult = matter(content);
      setPost(matterResult);
    };

    fetchMarkdown();
  }, [slug]);

  const options = {
    overrides: {
      h2: { component: H2 },
      h3: { component: H3 },
      p: { component: P },
      img: { component: Img },
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
