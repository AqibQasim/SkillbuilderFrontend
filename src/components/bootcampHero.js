import React from "react";
import Image from "next/image";

const BootcampHero = ({ title, subtitle, tagline, src }) => {
  return (
    <div className="mx-auto w-[95%]">
      <div className="relative overflow-hidden rounded-xl">
        {/* Image */}
        <Image
          src={src || "/bootcamp-heroimage.svg"}
          alt="Bootcamp Hero"
          width={1920}
          height={1080}
          className="rounded-xl"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-black-shade-1 opacity-55 z-10"></div>
        
        {/* Text */}
        <div className="absolute inset-0 z-20 flex max-sm:w-[80%] lg:w-[50%] xl:w-[35%] flex-col items-start justify-center">
          <span className="mx-8 mb-1 rounded-full border max-sm:hidden lg:block border-white p-1 px-3 text-xs font-semibold text-white">
            {tagline || "Why you need SkillBuilder"}
          </span>
          <h1 className="px-8 text-start max-sm:text-xl md:text-3xl font-bold text-white">
            {title || "Explore SkillBuilder Courses and Bootcamps Tailored for You"}
          </h1>
          <p className="mt-3 px-8 text-start text-xs max-sm:hidden lg:block text-[#D0D6E0]">
            {subtitle ||
              "SkillBuilder offers flexible courses and immersive bootcamps tailored to your learning style, career goals, and schedule, ensuring a personalized and impactful experience."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BootcampHero;
