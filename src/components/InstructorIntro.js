import { SubHeading } from "@/pages/instructor/[id]"; // Check the path and export

function InstructorIntro({ video }) {
  // Extract video ID function (place this function in a utility file or the same component)
  function extractVideoId(url) {
    const urlPatterns = [
      /youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/, // Standard URL
      /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/, // Embed URL
      /youtu\.be\/([a-zA-Z0-9_-]{11})/ // Shortened URL
    ];

    for (const pattern of urlPatterns) {
      const match = url.match(pattern);
      if (match) {
        return match[1]; // The video ID is captured in the first group
      }
    }

    return null; // Return null if no match is found
  }

  const videoId = extractVideoId(video);
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : '';

  return (
    <div className="mx-auto mt-8 w-[90%] max-w-screen-2xl">
      <SubHeading>Instructor Introduction</SubHeading>
      <div className="mt-10 flex w-full items-center justify-center">
        {videoId ? (
          <iframe
            width="670"
            height="377"
            src={embedUrl}
            title="Instructor Introduction"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        ) : (
          <p>Video not available.</p>
        )}
      </div>
    </div>
  );
}

export default InstructorIntro;
