import "../styles/skills.css";
import Image from "next/image";
import React from "react";
import LayoutWidth from "./LayoutWidth";

const PromotionalList = () => {
  const imageSize = 1280;

  const skills = [
    { src: "/udacity.svg", alt: "Data Science", label: "Data Science" },
    {
      src: "/COURSERA.svg",
      alt: "Critical Thinking",
      label: "Critical Thinking",
    },
    { src: "/udemy.svg", alt: "Problem Solving", label: "Problem Solving" },
    { src: "/linked.svg", alt: "Test Automation", label: "Test Automation" },
  ];

  const repeatedSkills = [...Array(100)].flatMap(() => skills);

  return (
    <LayoutWidth>
      <div className="my-8 mt-[-1rem] max-sm:my-4 max-sm:mb-0 max-sm:mt-4 max-sm:h-[40vh]">
        <h1 className="mt-[3rem] text-2xl font-semibold max-sm:mt-0 max-sm:w-[100%] max-sm:text-center max-sm:text-lg">
          You Can Also Buy Our Course From
        </h1>
        <div className="container mx-auto mt-12 w-[100%] overflow-hidden rounded-tl-br border bg-white p-4 shadow-xl max-sm:mt-4 max-sm:h-[50%]">
          <div className="logos mx-auto h-[100%] w-[100%] max-sm:h-[100%]">
            <div className="logos-slide animate-scroll flex h-[100%] items-center gap-x-16">
              {repeatedSkills.map((skill, index) => (
                <Image
                  src={skill.src}
                  alt={skill.alt}
                  width={imageSize}
                  height={imageSize}
                  className="img2"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </LayoutWidth>
  );
};

export default PromotionalList;
