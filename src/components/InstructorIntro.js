import { useEffect, useState, useContext, useRef } from "react";
import { IntroVideoContext } from "../../lib/IntroVideoContext";
import Player from "@vimeo/player";
import { useSelector } from "react-redux";

function InstructorIntro({ video, introFor = "instructor", course_content_id }) {
  console.log("video_url:", video);
  const subHeading = introFor === "instructor" ? "Instructor" : "Course";
  const { videoId } = useContext(IntroVideoContext);
  const { user } = useSelector((store) => store.auth);
  const [embedHtml, setEmbedHtml] = useState('');
  const playerRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const injectStyles = (html) => {
    const style = `
      <style>
        body { 
          align-items: left;
        }
      </style>
    `;
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
          throw new Error("Failed to fetch video");
        }

        const data = await response.json();
        if (data) {
          const styledHtml = injectStyles(data.embed.html);
          setEmbedHtml(styledHtml);
        }
      } catch (error) {
        console.error("Error fetching video:", error);
      }
    };

    fetchVimeoVideo();
  }, [video]);

  useEffect(() => {
    if (embedHtml) {
      const iframe = document.querySelector(`iframe[src*="${video}"]`);
      if (iframe && !playerRef.current) {
        playerRef.current = new Player(iframe);

        playerRef.current.on("timeupdate", (event) => {
          const currentProgress = (event.seconds / event.duration) * 100;
          setProgress(currentProgress);
          console.log(`Video progress: ${Math.round(currentProgress)}%`);
        });
      }
    }

    // Cleanup player instance on unmount
    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [embedHtml, video]);

  // Trigger API call when progress reaches 80% and isCompleted is false
  useEffect(() => {
    if (progress >= 80 && !isCompleted) {
      const updateCompletionStatus = async () => {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/save-progress`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              course_content_id,
              user_id : user,
              is_completed: true,
            }),
          });

          if (response.ok) {
            setIsCompleted(true); // Mark as completed after successful API call
            console.log("Completion status updated successfully.");
          } else {
            console.error("Failed to update completion status.");
          }
        } catch (error) {
          console.error("Error in completion status API call:", error);
        }
      };

      updateCompletionStatus();
    }
  }, [progress, isCompleted, course_content_id, user]);

  return (
    <div className="mx-auto mt-8 w-[90%] max-w-screen-2xl">
      <div className="mt-10 flex w-full items-center justify-center">
        <div dangerouslySetInnerHTML={{ __html: embedHtml }} />
      </div>

      <div className="mt-4">
        <p>Progress: {Math.round(progress)}%</p>
      </div>
    </div>
  );
}

export default InstructorIntro;
