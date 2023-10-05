"use client";
import Image from "next/image";
import { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Node.js</li>
        <li>Node.js</li>
        <li>Node.js</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Harvard</li>
        <li>Harvard</li>
        <li>Harvard</li>
        <li>Harvard</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Scrum</li>
        <li>Scrum</li>
        <li>Scrum</li>
        <li>Scrum</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500}></Image>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base md:text-lg text-justify mb-1">
            It all started in Japan.
          </p>
          <p className="text-base md:text-lg text-justify mb-1">
            My Japanese calligraphy teacher taught me the importance of
            creativity and attention to detail.
          </p>
          <p className="text-base md:text-lg text-justify mb-1">
            My stint at Keio University's Rowing Club taught me the importance
            of Community Building.
          </p>
          <p className="text-base md:text-lg text-justify mb-1">
            My passion for software engineering & technology started in
            Akihabara Electric Town where I would build computers out of spare
            parts.
          </p>
          <p className="text-base md:text-lg text-justify mb-1">
            Now I'm a Venture Capitalist in Singapore investing in AI and
            climate tech.
          </p>
          {/* <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}{" "}
          </div> */}
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
