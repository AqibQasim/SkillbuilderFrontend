import { SubHeading } from "@/pages/instructor/[instructorId]";

function InstructorIntro({ video }) {
  console.log(video);
  return (
    <div className="w-[90%] max-w-screen-2xl mx-auto mt-8">
      <SubHeading>Instructor introduction</SubHeading>
      {/* video */}
      <div className="flex w-full justify-center items-center mt-10">
        {/* <video
          controls
          className="rounded-3xl w-video-w xl:w-video-w-xl h-video-h sm:h-video-h-sm md:h-video-h-md"
        >
          <source src="/path/to/video.mp4" type="video/mp4" />
          <source src="/path/to/video.ogv" type="video/ogg" />
          Your browser does not support the video tag.
        </video> */}
        <div className='w-full flex justify-center items-center rounded-lg'>
                <div className='w-full h-full aspect-w-16 flex justify-center items-center aspect-h-9 relative'>
                    <iframe
                        className='absolute top-0 left-0 w-[80%] h-[80%] rounded-3xl mx-auto mt-2'
                        src="https://www.youtube.com/embed/33o3s4Vs4Sw?si=1r4IHfy1c5By_XPy"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
            </div> 
      </div>
    </div>
  );
}

export default InstructorIntro;
