import { SubHeading } from "@/pages/instructor/[id]";

function InstructorIntro({ video }) {
  console.log(video);
  return (
    <div className="mx-auto mt-8 w-[90%] max-w-screen-2xl">
      <SubHeading>Instructor introduction</SubHeading>
      {/* video */}
      <div className="mt-10 flex w-full items-center justify-center">
        <video
          controls
          className="h-video-h w-video-w rounded-3xl sm:h-video-h-sm md:h-video-h-md xl:w-video-w-xl"
        >
          <source src="/path/to/video.mp4" type="video/mp4" />
          <source src="/path/to/video.ogv" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default InstructorIntro;
