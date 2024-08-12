function VideoElement() {
  return (
    <video
      controls
      // className="h-video-h w-video-w rounded-3xl sm:h-video-h-sm md:h-video-h-md xl:w-video-w-xl"
      className="h-video-h w-full rounded-3xl sm:h-video-h-sm md:h-video-h-md"
    >
      <source src="/path/to/video.mp4" type="video/mp4" />
      <source src="/path/to/video.ogv" type="video/ogg" />
      Your browser does not support the video tag.
    </video>
  );
}

export default VideoElement;
