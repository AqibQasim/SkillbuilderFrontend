import React from "react";
import Image from "next/image";
import heroImage from "../../public/bootcamp-heroimage.png";

const BootcampHero = ({ title, subtitle, tagline, src }) => {
  return (
    // <div className="mx-auto w-[95%]">
    <div className="mx-auto !mt-0 w-[95%]">
      <div className="relative z-0 overflow-hidden rounded-xl">
        {/* Image */}
        <Image
          src={src || heroImage}
          alt="Bootcamp Hero"
          className="rounded-xl"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
          height={1080}
          width={1920}
          quality={90}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-10 bg-black-shade-1 opacity-55"></div>

        {/* Text */}
        <div className="absolute inset-0 z-20 flex flex-col items-start justify-center lg:w-[50%] xl:w-[35%] max-sm:w-[80%]">
          <span className="mx-8 mb-1 rounded-full border border-white p-1 px-3 text-xs font-semibold text-white lg:block max-sm:hidden">
            {tagline || "Why you need SkillBuilder"}
          </span>
          <h1 className="px-8 text-start font-bold text-white md:text-3xl max-sm:text-xl">
            {title ||
              "Explore SkillBuilder Courses and Bootcamps Tailored for You"}
          </h1>
          <p className="mt-3 px-8 text-start text-xs text-[#D0D6E0] lg:block max-sm:hidden">
            {subtitle ||
              "SkillBuilder offers flexible courses and immersive bootcamps tailored to your learning style, career goals, and schedule, ensuring a personalized and impactful experience."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BootcampHero;
