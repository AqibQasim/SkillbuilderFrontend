import InstructorIntro from "./InstructorIntro";
import LayoutWidth from "./LayoutWidth";



function EnrolledCourseDetailsHero({ videolink }) {
  console.log("############", videolink);
  return (
    <div className="w-full bg-white py-4">
      <LayoutWidth>
        <div className="video-wrapper">
          <InstructorIntro video={videolink} />
          {/* <VideoElement video={videolink} /> */}

        </div>
      </LayoutWidth>
    </div>
  );
}
function VideoElement({ video }) {
  return (
    <>
      {video ? (
        <video
          controls
          // className="h-video-h w-video-w rounded-3xl sm:h-video-h-sm md:h-video-h-md xl:w-video-w-xl"
          className="h-video-h w-full rounded-3xl sm:h-video-h-sm md:h-video-h-md"
        >
          <source src={video} type="video/mp4" />
          <source src={video} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <p>Video Not Found</p>
      )}
    </>
  );
}

export default EnrolledCourseDetailsHero;
