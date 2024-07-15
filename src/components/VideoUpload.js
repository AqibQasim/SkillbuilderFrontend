import Image from 'next/image';
import React from 'react'
import { useState, useRef } from 'react';

// const VideoUpload = () => {
//   const [videoFile, setVideoFile] = useState(null);
//   const [videoUrl, setVideoUrl] = useState('');

//   const handleVideoUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setVideoFile(file);
//       setVideoUrl(URL.createObjectURL(file));
//     }
//   };

//   const handlePlayVideo = () => {
//     const videoElement = document.getElementById('uploadedVideo');
//     if (videoElement) {
//       videoElement.play();
//     }
//   };

//   return (
//     <div className="video-upload-container">

//         {/****************************************/}
//         <div className='w-full flex flex-col gap-2'>
//             <h3 className='font-semibold'>Upload an introduction video of yours</h3>
//             <div className='rounded-md border-2 border-blue flex flex-col items-center gap-2 justify-center w-full h-fit py-20'>
//                 <img src="/cloud.png" className='aspect-auto'/>
//                 <p><input type="file" accept="video/*" placeholder='Browse' className='bg-white text-blue' onChange={handleVideoUpload} /> your File</p>

//             </div>
//         </div>
//         {/***************************************/}

//       <input type="file" accept="video/*" onChange={handleVideoUpload} />
//       {videoFile && (
//         <div className="video-preview">
//           <video id="uploadedVideo" width="600" controls>
//             <source src={videoUrl} type={videoFile.type} />
//             Your browser does not support the video tag.
//           </video>
//           <button onClick={handlePlayVideo}>Play</button>
//         </div>
//       )}
//     </div>
//   );
// };

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
        if (bytes < 1024) return bytes + ' bytes';
        else if (bytes < 1048576) return (bytes / 1024).toFixed(2) + ' KB';
        else if (bytes < 1073741824) return (bytes / 1048576).toFixed(2) + ' MB';
        else return (bytes / 1073741824).toFixed(2) + ' GB';
      };
  
      const handleRemoveVideo = () => {
        setVideoFile(null);
        setshowVideo(false);
        setVideoUrl('');
        fileInputRef.current.value = null;
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
            <div className='w-full h-fit flex justify-between mt-4 rounded-md border-2 border-[#BBBBBB] p-4 bg-bg_gray'>
                <div className='h-full w-fit flex gap-3'>
                    <div className='flex justify-center '>
                        <button
                        className="text-white rounded"
                        onClick={handlePlayVideo}>
                            <Image
                            alt="Play"
                            height={40}
                            width={40}
                            src="/Play.png"/>
                        </button>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div>
                            <p className='font-semibold'>{videoFile.name}</p>
                        </div>
                        <div>
                            <p className='text-[#7C7C7C] text-sm'>{formatFileSize(videoFile.size)}</p>
                        </div>
                    </div>
                </div>
                <div className='cancelUploadedVideo flex items-center'>
                  <button
                    className="text-red-500"
                    onClick={handleRemoveVideo}>
                    <Image
                    height={30}
                    width={30}
                    alt="cross"
                    src="/Cross.png"/>
                  </button>
                </div>
            </div>
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
  
  export default VideoUpload;
  

// export default VideoUpload;

// import React from 'react'
// import { useState, useRef } from 'react';

// const VideoUpload = () => {
//   const [videoFile, setVideoFile] = useState(null);
//   const [showVideo, setshowVideo] = useState(null);
//   const [videoUrl, setVideoUrl] = useState('');
//   const fileInputRef = useRef(null);

//   const handleVideoUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setVideoFile(file);
//       setVideoUrl(URL.createObjectURL(file));
//     }
//   };
//   const handlePlayVideo = () => {
//     // const videoElement = document.getElementById('uploadedVideo');
//     // if (videoElement) {
//     //   videoElement.play();
//     // }
//     setshowVideo(true);
//   };

//   const handleDrop = (event) => {
//     event.preventDefault();
//     const file = event.dataTransfer.files[0];
//     if (file) {
//       setVideoFile(file);
//       setVideoUrl(URL.createObjectURL(file));
//     }
//   };

//   const handleDragOver = (event) => {
//     event.preventDefault();
//   };

//   const handleClick = () => {
//     fileInputRef.current.click();
//   };

//   return (
//     <div className="flex flex-col items-center w-full">
//       <div
//         className="border-2 flex gap-2 flex-col items-center justify-center border-dashed border-gray-300 rounded-lg p-4 cursor-pointer w-full py-10 text-center"
//         onDrop={handleDrop}
//         onDragOver={handleDragOver}
//         onClick={handleClick}>
//         <img src="/cloud.png" className='aspect-auto'/>
//         {/* {videoFile ? (
//           <video className="w-full" controls>
//             <source src={videoUrl} type={videoFile.type} />
//             Your browser does not support the video tag.
//           </video> */}
//         {/* ) : ( */}
//             <p><span className='text-blue'>Drag</span> or <span className='text-blue'>Browse</span> your File</p>
//         {/* //   <p><span>Drag</span> and drop a video here or click to browse</p> */}
//         {/* )} */}
//         <input
//           type="file"
//           accept="video/*"
//           ref={fileInputRef}
//           onChange={handleVideoUpload}
//           className="hidden"
//         />
//       </div>
//       {videoFile && (
//         <button
//           className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
//           onClick={handlePlayVideo}
//         >
//           Play
//         </button>
//       )}
//       {showVideo && videoFile
//       &&
//       (
//           <video className="w-full" controls>
//             <source src={videoUrl} type={videoFile.type} />
//             Your browser does not support the video tag.
//           </video>
//         )}
//     </div>
//   );
// };

// export default VideoUpload