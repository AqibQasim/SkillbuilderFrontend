import "../styles/skills.css";
import Image from "next/image";
import React from "react";
import LayoutWidth from "./LayoutWidth";

const SkillsList = () => {
  const imageSize = 40;

  const skills = [
    { src: "/dataScience.svg", alt: "Data Science", label: "Data Science" },
    {
      src: "/criticalThinking.svg",
      alt: "Critical Thinking",
      label: "Critical Thinking",
    },
    {
      src: "/problemSolving.svg",
      alt: "Problem Solving",
      label: "Problem Solving",
    },
    {
      src: "/testAutomation.svg",
      alt: "Test Automation",
      label: "Test Automation",
    },
  ];

  const repeatedSkills = [...Array(100)].flatMap(() => skills);

  return (
    <LayoutWidth>
      <div className="my-10 mt-0 max-sm:my-4 max-sm:mb-0 max-sm:mt-4 max-sm:flex max-sm:h-[40vh] max-sm:flex-col max-sm:items-center">
        <h1 className="mb-[-0.5rem] text-2xl font-semibold max-sm:mb-[1rem] max-sm:mt-[1rem] max-sm:w-[100%] max-sm:text-center max-sm:text-xl">
          Our Top Skills At Your Disposal
        </h1>
        <div className="container mx-auto mt-12 w-[100%] overflow-hidden rounded-tl-br border bg-white p-4 shadow-xl max-sm:mx-0 max-sm:mt-4 max-sm:h-[50%] max-sm:w-[50rem]">
          <div className="logos mx-auto max-sm:h-[100%]">
            <div className="logos-slide animate-scroll flex gap-x-16">
              {repeatedSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-between gap-3"
                >
                  <Image
                    src={skill.src}
                    alt={skill.alt}
                    width={imageSize}
                    height={imageSize}
                    className="img"
                  />
                  <p className="font-semibold">{skill.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </LayoutWidth>
  );
};

export default SkillsList;
