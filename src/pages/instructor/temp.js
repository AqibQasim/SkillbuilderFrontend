import React from 'react'
import Head from 'next/head';
import { useState, useRef } from 'react';

const VideoUpload = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [showVideo, setshowVideo] = useState(null);
  const [videoUrl, setVideoUrl] = useState('');
  const fileInputRef = useRef(null);

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setVideoFile(file);
      setVideoUrl(URL.createObjectURL(file));
    }
  };
  const handlePlayVideo = () => {
    // const videoElement = document.getElementById('uploadedVideo');
    // if (videoElement) {
    //   videoElement.play();
    // }
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

  return (
    <div className="flex flex-col items-center w-full">
      <div
        className="border-2 flex gap-2 flex-col items-center justify-center border-dashed border-gray-300 rounded-lg p-4 cursor-pointer w-full py-10 text-center"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={handleClick}>
        <img src="/cloud.png" className='aspect-auto'/>
        {/* {videoFile ? (
          <video className="w-full" controls>
            <source src={videoUrl} type={videoFile.type} />
            Your browser does not support the video tag.
          </video> */}
        {/* ) : ( */}
            <p><span className='text-blue'>Drag</span> or <span className='text-blue'>Browse</span> your File</p>
        {/* //   <p><span>Drag</span> and drop a video here or click to browse</p> */}
        {/* )} */}
        <input
          type="file"
          accept="video/*"
          ref={fileInputRef}
          onChange={handleVideoUpload}
          className="hidden"
        />
      </div>
      {videoFile && (
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handlePlayVideo}
        >
          Play
        </button>
      )}
      {showVideo && videoFile
      &&
      (
          <video className="w-full" controls>
            <source src={videoUrl} type={videoFile.type} />
            Your browser does not support the video tag.
          </video>
        )}
    </div>
  );
};

// export default VideoUpload;

// import VideoUpload from '../components/VideoUpload';

// export default function Home() {
//   return (
//     <div className="container mx-auto p-4">
//       <Head>
//         <title>Video Upload and Play</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className="flex justify-center items-center min-h-screen">
//         <VideoUpload />
//       </main>
//     </div>
//   );
// }

const temp = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Video Upload and Play</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex justify-center items-center min-h-screen">
        <VideoUpload />
      </main>
    </div>
  )
}

export default temp