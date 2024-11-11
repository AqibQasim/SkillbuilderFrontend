import { SubHeading } from "@/pages/instructor/[id]";
import { useEffect, useState, useContext, useRef } from "react";
import { IntroVideoContext } from "../../lib/IntroVideoContext";
import Player from "@vimeo/player";


function InstructorIntro({ video, introFor = "instructor" }) {
  console.log("video_url:", video);
  const subHeading = introFor === "instructor" ? "Instructor" : "Course";
  const { videoId } = useContext(IntroVideoContext);
  const [embedHtml, setEmbedHtml] = useState('');
  const playerRef = useRef(null); // Ref to hold the Vimeo Player instance
  const [progress, setProgress] = useState(0);

  const injectStyles = (html) => {
    const style = `
      <style>
        body { 
          align-items: left;
        }
      </style>
    `;
    // Inject the style before the closing head tag
    return html.replace('</head>', `${style}</head>`);
  };

  useEffect(() => {
    const fetchVimeoVideo = async () => {
      try {
        const response = await fetch(`https://api.vimeo.com/videos/${video}`, {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_VIMEO_ACCESS_TOKEN}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch video');
        }

        const data = await response.json();

        if(data){
          const styledHtml = injectStyles(data.embed.html);
          setEmbedHtml(styledHtml);
        }
      } catch (error) {
        console.error('Error fetching video:', error);
      }
    };

    fetchVimeoVideo();
  }, [video]);

  // Initialize and track progress
  useEffect(() => {
    if (embedHtml && !playerRef.current) {
      const iframe = document.querySelector("iframe");
      if (iframe) {
        playerRef.current = new Player(iframe);

        playerRef.current.on("timeupdate", (event) => {
          const currentProgress = (event.seconds / event.duration) * 100;
          setProgress(currentProgress);

          // You can save progress to the backend here
          console.log(`User has watched ${Math.round(currentProgress)}% of the video.`);
        });
      }
    }
  }, [embedHtml]);

  return (
    <div className="mx-auto mt-8 w-[90%] max-w-screen-2xl">
      {/* <SubHeading> {subHeading} introduction </SubHeading> */}
      <div className=" mt-10 flex w-full items-center justify-center">
        <div className="" dangerouslySetInnerHTML={{ __html: embedHtml }} />
      </div>

      <div className="mt-4">
        <p>Progress: {Math.round(progress)}%</p>
      </div>
    </div>
  );
}

export default InstructorIntro;
