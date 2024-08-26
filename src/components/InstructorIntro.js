import { SubHeading } from "@/pages/instructor/[id]";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function InstructorIntro({ video, introFor = "instructor" }) {
  console.log("video_url:", video);
  const subHeading = introFor === "instructor" ? "Instructor" : "Course";

  return (
    <div className="mx-auto mt-8 w-[90%] max-w-screen-2xl">
      <SubHeading> {subHeading} introduction </SubHeading>
      <div className="mt-10 flex w-full items-center justify-center">
        {/* <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/a_g2ja3emGI"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe> */}
        <iframe
          width="100%"
          height="auto"
          className="h-video-h w-video-w rounded-3xl sm:h-video-h-sm md:h-video-h-md xl:w-video-w-xl"
          src={video}
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Instructor Video"
        ></iframe>
      </div>
    </div>
  );
}

export default InstructorIntro;
