"use client";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import projectsData from "../data/ProjectData";

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );
  return (
    <div id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4">
        My Work
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          name="All"
          isSelected={tag === "All"}
          onClick={handleTagChange}
        />
        <ProjectTag
          name="Engineering"
          isSelected={tag === "Engineering"}
          onClick={handleTagChange}
        />
        <ProjectTag
          name="Investment"
          isSelected={tag === "Investment"}
          onClick={handleTagChange}
        />
        <ProjectTag
          name="Community Building"
          isSelected={tag === "Community Building"}
          onClick={handleTagChange}
        />
        <ProjectTag
          name="Art"
          isSelected={tag === "Art"}
          onClick={handleTagChange}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            tags={project.tag}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
