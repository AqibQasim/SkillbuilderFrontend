import React from "react";
import Image from "next/image";

const BootcampHero = ({title, subtitle, tagline}) => {
  return (
    <div className="mx-auto w-[95%]">
      <div className="relative overflow-hidden rounded-xl">
        {/* Image */}
        <Image
          src="/bootcamp-heroimage.svg"
          alt="Bootcamp Hero"
          width={1920}
          height={1080}
          className="rounded-xl"
        />
        {/* Black Overlay */}
        <div className="bg-black absolute inset-0 z-10 opacity-50"></div>
        {/* Text */}
        <div className="absolute inset-0 z-20 flex w-[35%] flex-col items-start justify-center">
          <span className="mx-8 mb-1 rounded-full border border-white p-1 px-3 text-xs font-semibold text-white">
            { tagline || "Why you need SkillBuilder" }
          </span>
          <h1 className="px-8 text-start text-3xl font-bold text-white">
            {title ||
              "Explore SkillBuilder Courses and Bootcamps Tailored for You"}
          </h1>
          <p className="mt-3 px-8 text-start text-xs text-[#D0D6E0]">
            {subtitle ||
              "SkillBuilder offers flexible courses and immersive bootcamps tailored to your learning style, career goals, and schedule, ensuring a personalized and impactful experience."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BootcampHero;
