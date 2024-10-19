import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import VideoUpload from "./VideoUpload";
import { createCourse } from "../../redux/thunks/createCourseThunk";
import { uploadVideo } from "../../redux/thunks/courseVideoThunk";
import { useDispatch, useSelector } from "react-redux";
import { setVideoUrl } from "../../redux/slices/createCourseSlice";

const InstructorVideos = ({ onNext, onPrev }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [modules, setModules] = useState([{ title: "1", videos: [] }]);
  const [showVideos, setShowVideos] = useState({});
  const fileInputRef = useRef(null);
  const [currentModuleIndex, setCurrentModuleIndex] = useState(null);
  const userId = useSelector((state) => state.auth.user);
  const courseId = useSelector((state) => state.createCourse.courseId);
  const [videoId, setVideoId] = useState (null)
  const courseDetails = useSelector(
    (state) => state.createCourse.courseDetails,
  );
  const dispatch = useDispatch();

  const handleVideoUpload = async (event) => {
    const files = Array.from(event.target.files);
    console.log("Files uploaded: ", files);

    const newFiles = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));

    setModules((prevModules) =>
      prevModules.map((module, index) =>
        index === currentModuleIndex
          ? { ...module, videos: [...module.videos, ...newFiles] }
          : module,
      ),
    );

    for (const file of files) {
      try {
        await dispatch(uploadVideo({ courseId: currentModuleIndex, selectedVideo: file }));
      } catch (error) {
        console.error("Failed to upload video: ", error);
      }
    }
  };

  const handlePlayVideo = (moduleIndex, videoIndex) => {
    setShowVideos((prevShowVideos) => ({
      ...prevShowVideos,
      [`${moduleIndex}-${videoIndex}`]:
        !prevShowVideos[`${moduleIndex}-${videoIndex}`],
    }));
  };

  const handleClick = async (index) => {
  setCurrentModuleIndex(index);
  fileInputRef.current.click();
};


  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + " bytes";
    else if (bytes < 1048576) return (bytes / 1024).toFixed(2) + " KB";
    else if (bytes < 1073741824) return (bytes / 1048576).toFixed(2) + " MB";
    else return (bytes / 1073741824).toFixed(2) + " GB";
  };

  const handleRemoveVideo = (moduleIndex, videoIndex) => {
    setModules((prevModules) =>
      prevModules.map((module, index) =>
        index === moduleIndex
          ? {
              ...module,
              videos: module.videos.filter((_, i) => i !== videoIndex),
            }
          : module,
      ),
    );
    setShowVideos((prevShowVideos) => {
      const newShowVideos = { ...prevShowVideos };
      delete newShowVideos[`${moduleIndex}-${videoIndex}`];
      return newShowVideos;
    });
  };

  const [open, setOpen] = useState(null);

  const toggleAccordion = (index) => {
    setOpen(open === index ? null : index);
  };

  const addModule = () => {
    setModules((prevModules) => [
      ...prevModules,
      { title: (prevModules.length + 1).toString(), videos: [] },
    ]);
  };

  const uploadVideoHandler = async () => {
  if (!selectedVideo) return;

  const formData = new FormData();
  formData.append("video", selectedVideo);

  try {
    const response = await fetch("/api/upload-video", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Unable to post video");
    }

    const data = await response.json();

    if (data.uri) {
      const videoId = data.uri.split("/").pop();
      return videoId

    } else {
      throw new Error("Failed to get video URI from response");
    }
  } catch (error) {
    console.error("Failed to upload video:", error.message);
  }
};

  async function uploadCourseDetailsAndVideo() {
    if (!selectedVideo)
      return console.log("Please upload a video before you proceed");

    try {

      const videoId = await uploadVideoHandler()
      if(videoId){
        console.log("Video Id after uploading intro: ", videoId)
        
        dispatch(setVideoUrl(videoId));
        
        setVideoId(videoId)


        console.log("DETAILS I AM SENDING",courseDetails )

      // Details
      
    }

      // if (!createCourseResult?.status)
      //   throw new Error(
      //     createCourseResult?.message ||
      //       "Could not upload course details please try again later",
      //   );

      // Video
      // const courseId = createCourseResult?.courseId;
      if (!courseId)
        throw new Error("Course id is undefined for the Intro video");
      console.log(
        "send this course id as video upload payload course Id: ",
        courseId,
      );

      // const uploadCourseIntroVideoResult = await dispatch(
      //   uploadVideo({ courseId, selectedVideo }),
      // ).unwrap();

      // if (!uploadCourseIntroVideoResult?.uri) {
      //   throw new Error(
      //     uploadCourseIntroVideoResult?.message ||
      //       "Course details uploaded successfully, but the introduction video failed to upload.",
      //   );
      // }
      console.log("No Error?");
      console.log("Course details Status", createCourseResult);
      // console.log("Video upload Status", uploadCourseIntroVideoResult);
    } catch (error) {
      console.log("Error on create course fail", error);
    }
  }
  useEffect(() => {
  if (courseDetails && videoId) {

    const createCourseResult = dispatch(
        createCourse(courseDetails),
      ).unwrap();
      console.log("Create course result", createCourseResult);


    // Perform any necessary actions based on updated courseDetails
    console.log("Updated courseDetails: ", courseDetails);
  }
}, [courseDetails, videoId]);

  return (
    <div>
      <h3 className="mb-5 mt-10 text-lg font-medium">
        Upload an introduction video of Course
      </h3>
      <VideoUpload
        selectedVideo={selectedVideo}
        setSelectedVideo={setSelectedVideo}
      />
      <div className="accordion mt-8 overflow-hidden rounded-md border-2 border-[#BBBBBB] px-4 py-2">
        {modules.map((item, moduleIndex) => (
          <div key={moduleIndex}>
            <h2>
              <button
                type="button"
                className="text-black flex w-full items-center justify-between py-5 font-medium"
                onClick={() => toggleAccordion(moduleIndex)}
              >
                <span>Module {item.title}</span>
                <svg
                  className={`h-3 w-3 transition-transform ${
                    open === moduleIndex ? "rotate-0" : "rotate-180"
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div className="border-b-2 border-[#BBBBBB]"></div>
            <div
              className={` ${
                open === moduleIndex ? "block" : "max-h-0 overflow-hidden"
              }`}
            >
              <div className="border-[#BBBBBB] py-5">
                <div className="flex w-full flex-col items-center">
                  {item.videos.map((videoFile, videoIndex) => (
                    <React.Fragment key={videoIndex}>
                      <div className="mt-4 flex h-fit w-full flex-row justify-between rounded-md border-2 border-[#BBBBBB] bg-bg_gray p-4 max-md:flex-col">
                        <div className="flex h-full w-fit gap-3">
                          <div className="flex justify-center">
                            <button
                              className="rounded text-white"
                              onClick={() =>
                                handlePlayVideo(moduleIndex, videoIndex)
                              }
                            >
                              <Image
                                alt="Play"
                                height={40}
                                width={40}
                                src="/Play.png"
                              />
                            </button>
                          </div>
                          <div className="flex flex-col gap-2">
                            <div className="flex flex-wrap">
                              <p className="me-3 font-semibold">
                                {videoFile.file.name}
                              </p>

                              <svg
                                width="17"
                                height="16"
                                viewBox="0 0 17 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M1.19739 10.2752L0.588346 14.2352C0.544359 14.5401 0.64341 14.8479 0.859995 15.0793C1.07658 15.3108 1.38954 15.4433 1.71828 15.4427H1.88656L6.1178 14.8727C6.69134 14.7987 7.22326 14.5511 7.63239 14.1677L15.4377 6.85517C16.9562 5.38375 16.9345 3.04485 15.3889 1.59835C13.8433 0.151849 11.3442 0.131524 9.77204 1.55267L1.95067 8.85767C1.54101 9.24057 1.27646 9.73839 1.19739 10.2752ZM6.74286 13.3727C6.52122 13.5719 6.24304 13.7073 5.94149 13.7627L1.76636 14.2802L2.35136 10.4027C2.41056 10.1205 2.55521 9.86011 2.76807 9.65267L10.5814 2.34767C11.1079 1.84185 11.8304 1.55655 12.5849 1.55655C13.3393 1.55655 14.0618 1.84185 14.5883 2.34767C15.1163 2.83898 15.4132 3.50707 15.4132 4.20392C15.4132 4.90077 15.1163 5.56886 14.5883 6.06017L6.74286 13.3727Z"
                                  fill="#0038FF"
                                />
                                <path
                                  d="M12.2082 3.78017C12.445 3.57365 12.8141 3.57975 13.0429 3.79395C13.2718 4.00816 13.2783 4.35354 13.0577 4.57517L9.68389 7.73267C9.44924 7.95201 9.0691 7.95201 8.83444 7.73267C8.60008 7.51306 8.60008 7.15728 8.83444 6.93767L12.2082 3.78017Z"
                                  fill="#0038FF"
                                />
                              </svg>
                            </div>
                            <div>
                              <p className="text-sm text-[#7C7C7C]">
                                {formatFileSize(videoFile.file.size)}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="cancelUploadedVideo flex items-center">
                          <button className="rounded border-0 bg-transparent px-4 py-2 text-sm font-semibold text-blue">
                            Add Assignment
                          </button>
                          <button
                            className="text-red-500"
                            onClick={() =>
                              handleRemoveVideo(moduleIndex, videoIndex)
                            }
                          >
                            <Image
                              height={30}
                              width={30}
                              alt="cross"
                              src="/Cross.png"
                            />
                          </button>
                        </div>
                      </div>
                      {showVideos[`${moduleIndex}-${videoIndex}`] && (
                        <video className="mt-4 h-2/6 w-6/12" controls>
                          <source
                            src={videoFile.url}
                            type={videoFile.file.type}
                          />
                          Your browser does not support the video tag.
                        </video>
                      )}
                    </React.Fragment>
                  ))}
                </div>
                <div className="mt-4 flex justify-end">
                  <button
                    type="button"
                    className="rounded-lg bg-blue p-2 text-white hover:bg-blue-600"
                    onClick={() => handleClick(moduleIndex)}
                  >
                    Upload Videos
                  </button>
                  <input
                    type="file"
                    accept="video/*"
                    ref={fileInputRef}
                    onChange={handleVideoUpload}
                    className="hidden"
                    multiple
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mb-5 mt-5 flex justify-end">
        <button
          type="button"
          className="mt-5 rounded-md bg-blue px-10 py-2 font-normal text-white hover:bg-blue-600 max-lsm:mt-4 max-lsm:w-full"
          onClick={addModule}
        >
          Add Module
        </button>
      </div>
      <div className="mt-4 flex justify-end">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <button
              type="button"
              className="rounded-md bg-bg_gray px-10 py-2 font-normal text-blue max-lsm:w-full"
              onClick={onPrev}
            >
              Previous
            </button>
          </div>
          <div>
            <button
              type="button"
              className="rounded-md bg-blue px-10 py-2 font-normal text-white hover:bg-blue-600 max-lsm:mt-4 max-lsm:w-full"
              // onClick={onNext}
              onClick={uploadCourseDetailsAndVideo}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorVideos;
