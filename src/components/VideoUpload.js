import Image from "next/image";
import React from "react";
import { useState, useRef } from "react";
import Video from "./Video";

const VideoUpload = ({ setSelectedVideo }) => {
  const [videoFile, setVideoFile] = useState(null);
  const [showVideo, setshowVideo] = useState(null);
  const [videoUrl, setVideoUrl] = useState("");
  const fileInputRef = useRef(null);

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setVideoFile(file);
      setVideoUrl(URL.createObjectURL(file));
      setSelectedVideo(file);
    }
  };
  const handlePlayVideo = () => {
    setshowVideo(true);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setVideoFile(file);
      setVideoUrl(URL.createObjectURL(file));
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + " bytes";
    else if (bytes < 1048576) return (bytes / 1024).toFixed(2) + " KB";
    else if (bytes < 1073741824) return (bytes / 1048576).toFixed(2) + " MB";
    else return (bytes / 1073741824).toFixed(2) + " GB";
  };

  const handleRemoveVideo = () => {
    setVideoFile(null);
    setSelectedVideo(null);
    setshowVideo(false);
    setVideoUrl("");
    fileInputRef.current.value = null;
  };

  return (
    <div className="flex w-full flex-col items-center">
      <div
        className="flex w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-gray-300 p-4 py-10 text-center"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={handleClick}
      >
        <img src="/cloud.png" className="aspect-auto" />
        <p>
          <span className="text-blue">Drag</span> or{" "}
          <span className="text-blue">Browse</span> your File
        </p>
        <input
          type="file"
          accept="video/*"
          ref={fileInputRef}
          onChange={handleVideoUpload}
          className="hidden"
        />
      </div>
      {videoFile && (
        <div className="mt-4 flex h-fit w-full justify-between rounded-md border-2 border-[#BBBBBB] bg-bg_gray p-4">
          <div className="flex h-full w-fit gap-3">
            <div className="flex justify-center">
              <button className="rounded text-white" onClick={handlePlayVideo}>
                <Image alt="Play" height={40} width={40} src="/Play.png" />
              </button>
            </div>
            <div className="flex flex-col gap-2">
              <div>
                <p className="font-semibold">{videoFile.name}</p>
              </div>
              <div>
                <p className="text-sm text-[#7C7C7C]">
                  {formatFileSize(videoFile.size)}
                </p>
              </div>
            </div>
          </div>
          <div className="cancelUploadedVideo flex items-center">
            <button className="text-red-500" onClick={handleRemoveVideo}>
              <Image height={30} width={30} alt="cross" src="/Cross.png" />
            </button>
          </div>
        </div>
      )}
      {showVideo && videoFile && <Video src={videoUrl} type={videoFile.type}/>}
    </div>
  );
};

export default VideoUpload;