import { SubHeading } from "@/pages/instructor/[instructorId]";

function InstructorIntro({ video }) {
  console.log(video);
  return (
    <div className="w-[90%] max-w-screen-2xl mx-auto mt-8">
      <SubHeading>Instructor introduction</SubHeading>
      {/* video */}
      <div className="flex w-full justify-center items-center mt-10">
        <video
          controls
          className="rounded-3xl w-video-w xl:w-video-w-xl h-video-h sm:h-video-h-sm md:h-video-h-md"
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
