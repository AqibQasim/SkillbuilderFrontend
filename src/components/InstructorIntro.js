import { SubHeading } from "@/pages/instructor/[id]";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function InstructorIntro({ video }) {

  console.log("video_url:", video);

  return (
    <div className="mx-auto mt-8 w-[90%] max-w-screen-2xl">
      <SubHeading>Instructor introduction</SubHeading>
      <div className="mt-10 flex w-full items-center justify-center">
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
