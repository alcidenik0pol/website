"use client";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

// const projectsData = [
//   {
//     id: 1,
//     title: "React Portfolio Website",
//     description: "Project 1 description",
//     image: "/images/projects/1.png",
//     tag: ["All", "Web"],
//     gitUrl: "/",
//     previewUrl: "/",
//   },
//   {
//     id: 2,
//     title: "Potography Portfolio Website",
//     description: "Project 2 description",
//     image: "/images/projects/2.png",
//     tag: ["All", "Web"],
//     gitUrl: "/",
//     previewUrl: "/",
//   },
//   {
//     id: 3,
//     title: "E-commerce Application",
//     description: "Project 3 description",
//     image: "/images/projects/3.png",
//     tag: ["All", "Web"],
//     gitUrl: "/",
//     previewUrl: "/",
//   },
//   {
//     id: 4,
//     title: "Food Ordering Application",
//     description: "Project 4 description",
//     image: "/images/projects/4.png",
//     tag: ["All", "Mobile"],
//     gitUrl: "/",
//     previewUrl: "/",
//   },
//   {
//     id: 5,
//     title: "React Firebase Template",
//     description: "Authentication and CRUD operations",
//     image: "/images/projects/5.png",
//     tag: ["All", "Web"],
//     gitUrl: "/",
//     previewUrl: "/",
//   },
//   {
//     id: 6,
//     title: "Full-stack Roadmap",
//     description: "Project 5 description",
//     image: "/images/projects/6.png",
//     tag: ["All", "Web"],
//     gitUrl: "/",
//     previewUrl: "/",
//   },
// ];

const projectsData = [
  {
    id: 1,
    title: "LLM to detect tumors faster",
    description: "",
    image: "/images/projects/hackathon2023.png",
    tag: ["Engineering", "All"],
    gitUrl: "https://github.com/Aniloid2/LLM_bio_hackathon/tree/master",
    previewUrl: "/engineering/hackathon-2023",
  },
  {
    id: 2,
    title: "Chat with I, Robot Villain VIKI",
    description: "",
    image: "/images/projects/viki.png",
    tag: ["Engineering", "All"],
    gitUrl: "https://github.com/vtennero/chatwithviki",
    previewUrl: "",
  },
  {
    id: 3,
    title: "Investment & Exit of AI Air Quality App Breezometer",
    description: "Exited to Google for US$250m",
    image: "/images/projects/breezometer.png",
    tag: ["Investment", "All"],
    gitUrl: "",
    previewUrl: "https://www.calcalistech.com/ctechnews/article/sycbrdpbi",
  },
  {
    id: 5,
    title: "Infura-powered Kickstarter",
    description:
      "Stack: Solidity, Infura, Web3.js, Next.js, Truffle, Ganache, Mocha.",
    image: "/images/projects/nftmarketplace.png",
    tag: ["Engineering", "All"],
    gitUrl: "https://github.com/vtennero/CrowdCoinStarter2",
    previewUrl: "",
  },
  {
    id: 6,
    title: "Full-Stack Ridehailing App for Autonomous Cab Navya",
    description:
      "Representend Navya (EPA:NAVYA) at the 2019 Consumer Electronics Show in Las Vegas",
    image: "/images/projects/navya.png",
    tag: ["Engineering", "All"],
    gitUrl: "",
    previewUrl: "https://www.youtube.com/watch?v=dFgFo5qkp5M",
  },
  // {
  //   id: 7,
  //   title: "Kawaguchiko",
  //   description: "Oil Painting",
  //   image: "/images/projects/kawaguchiko.png",
  //   tag: ["Art", "All"],
  //   gitUrl: "",
  //   previewUrl: "https://art-gallery-ext.vercel.app/",
  // },
  {
    id: 8,
    title: "Investment & Exit of AI Micro-Weather Forecasting Meteoswift",
    description: "Exited to Trailstone",
    image: "/images/projects/meteoswift.png",
    tag: ["Investment", "All"],
    gitUrl: "",
    previewUrl:
      "https://www.trailstonegroup.com/latest-news/Trailstone-acquires-meteo-swift-to-strengthen-AI-and-forecasting-capabilities",
  },
  {
    id: 12,
    title: "The Fishermen",
    description: "Oil Painting",
    image: "/images/projects/fishermen.png",
    tag: ["Art", "All"],
    gitUrl: "",
    previewUrl: "https://art-gallery-ext.vercel.app/",
  },
  {
    id: 10,
    title: "HEC Paris Alumni in Singapore",
    description: "Chapter President for 800+ alumni",
    image: "/images/projects/hec.png",
    tag: ["Community Building", "All"],
    gitUrl: "",
    previewUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7036967797494583296/",
  },
  {
    id: 11,
    title: "Series A Investment in Chinese Autonomous Driving Company WeRide",
    description:
      "With 600 vehicles deployed, WeRide is the world leader in autonomous driving on open roads",
    image: "/images/projects/weride.png",
    tag: ["Investment", "All"],
    gitUrl: "",
    previewUrl: "https://www.weride.ai/posts/22",
  },
  {
    id: 15,
    title: "Asean Tech Digest Newsletter",
    description: "800 Suscribers",
    image: "/images/projects/sea.png",
    tag: ["Community Building", "All"],
    gitUrl: "",
    previewUrl: "https://vtennero.substack.com/",
  },
  {
    id: 20,
    title: "Interactive Gamified Resume",
    description:
      "My first Web project in 2016: an online interactive, gamified resume using javascript parallax scrolling & hand-made pixel-art graphics",
    image: "/images/projects/2016website.png",
    tag: ["Engineering", "All"],
    gitUrl: "",
    previewUrl: "https://2016website.vercel.app/",
  },
  // {
  //   id: 21,
  //   title: "The Sea in Valencia",
  //   description: "Pastel",
  //   image: "/images/projects/sea-valencia.png",
  //   tag: ["Art", "All"],
  //   gitUrl: "",
  //   previewUrl: "https://art-gallery-ext.vercel.app/",
  // },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );
  return (
    <div>
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
