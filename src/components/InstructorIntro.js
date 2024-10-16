import { SubHeading } from "@/pages/instructor/[id]";
import { useEffect, useState, useContext } from "react";
import { IntroVideoContext } from "../../lib/IntroVideoContext";

function InstructorIntro({ video, introFor = "instructor" }) {
  console.log("video_url:", video);
  const subHeading = introFor === "instructor" ? "Instructor" : "Course";
  const { videoId } = useContext(IntroVideoContext);
  const [embedHtml, setEmbedHtml] = useState('');

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
        const response = await fetch(`https://api.vimeo.com/videos/1020228675`, {
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
  }, [videoId]);

  return (
    <div className="mx-auto mt-8 w-[90%] max-w-screen-2xl">
      <SubHeading> {subHeading} introduction </SubHeading>
      <div className=" mt-10 flex w-full items-center justify-center">
        <div className="" dangerouslySetInnerHTML={{ __html: embedHtml }} />
      </div>
    </div>
  );
}

export default InstructorIntro;
