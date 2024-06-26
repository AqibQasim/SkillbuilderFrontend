import "../styles/skills.css";
import Image from "next/image";
import React from "react";

const AboutTeam = () => {
  const imageSize = 127;

  const skills = [
    { src: "/team.png", alt: "Data Science", label: "Data Science" },
    {
      src: "/team.png",
      alt: "Critical Thinking",
      label: "Critical Thinking",
    },
    {
      src: "/team.png",
      alt: "Problem Solving",
      label: "Problem Solving",
    },
    {
      src: "/team.png",
      alt: "Test Automation",
      label: "Test Automation",
    },
  ];

  const repeatedSkills = [...Array(100)].flatMap(() => skills);

  return (
    <div className="my-10 w-[90%] mt-16">
      <h1 className="text-3xl font-semibold">Our Team Members</h1>
      <div className="container mx-auto border w-[100%] bg-white rounded-tl-br p-4 shadow-xl mt-12 overflow-hidden">
        <div className="logos mx-auto w-[100%]">
          <div className="logos-slide flex gap-x-64 animate-scroll">
            {repeatedSkills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col justify-between items-center"
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
  );
};

export default AboutTeam;
