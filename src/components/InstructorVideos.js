import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import VideoUpload from "./VideoUpload";
import { createCourse } from "../../redux/thunks/createCourseThunk";
import { uploadVideo } from "../../redux/thunks/courseVideoThunk";
import { useDispatch, useSelector } from "react-redux";
import { setVideoUrl } from "../../redux/slices/createCourseSlice";
import { uploadCourseContent } from "../../redux/thunks/uploadCourseThunk";
import { useRouter } from "next/router";
import Loader from "./Loader";

const InstructorVideos = ({ onNext, onPrev }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [modules, setModules] = useState([{ title: "1", videos: [] }]);
  const [showVideos, setShowVideos] = useState({});
  const fileInputRef = useRef(null);
  const [currentModuleIndex, setCurrentModuleIndex] = useState(null);
  const userId = useSelector((state) => state.auth.user);
  const courseId = useSelector((state) => state.createCourse.courseId);
  const [videoId, setVideoId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [moduleVideoUploading, setModuleVideoUploading] = useState({
    module: currentModuleIndex,
    index: null,
    loading: false,
  });
  const [courseIntroLoader, setCourseIntroLoader] = useState(false);
  const [updateCount, setUpdateCount] = useState(0);
  const courseDetails = useSelector(
    (state) => state.createCourse.courseDetails,
  );
  const [updatedCourse, setUpdatedCourse] = useState(false);
  const [videoUploadFailed, setVideoUploadFailed] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  const handleVideoUpload = async (event) => {
    const files = Array.from(event.target.files);

    // Filter only video files
    const videoFiles = files.filter((file) => {
      if (!file.type.startsWith("video/")) {
        alert(`Invalid file type: ${file.name}. Only video files are allowed.`);
        return false;
      }
      return true;
    });

    if (videoFiles.length === 0) return;

    // Add the selected videos with `loading: true` initially
    const newFiles = videoFiles.map((file) => ({
      file,
      url: URL.createObjectURL(file),
      videoId: null,
      loading: true, // Initially set loader to true
      failed: false,
    }));

    setModules((prevModules) =>
      prevModules.map((module, index) =>
        index === currentModuleIndex
          ? { ...module, videos: [...module.videos, ...newFiles] }
          : module,
      ),
    );

    // Upload each video one by one
    for (const [index, file] of videoFiles.entries()) {
      try {
        const videoId = await uploadVideoHandler(file); // Call the API to upload video

        // Update the specific video's `videoId` and set `loading: false` after upload
        setModules((prevModules) =>
          prevModules.map((module, modIndex) =>
            modIndex === currentModuleIndex
              ? {
                  ...module,
                  videos: module.videos.map((video, vidIndex) =>
                    vidIndex ===
                    module.videos.length - videoFiles.length + index
                      ? { ...video, videoId, loading: false }
                      : video,
                  ),
                }
              : module,
          ),
        );
      } catch (error) {
        console.error("Failed to upload video:", error);
        setModuleVideoUploading((c) => ({
          ...c,
          loading: false,
          failed: true,
        }));

        // Ensure the loader is removed even if the upload fails
        setModules((prevModules) =>
          prevModules.map((module, modIndex) =>
            modIndex === currentModuleIndex
              ? {
                  ...module,
                  videos: module.videos.map((video, vidIndex) =>
                    vidIndex ===
                    module.videos.length - videoFiles.length + index
                      ? { ...video, loading: false, failed: true }
                      : video,
                  ),
                }
              : module,
          ),
        );
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
    const inputElement = document.getElementById(`input-file-ref-${index}`);
    // fileInputRef.current.click();
    inputElement.click();
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

  const removeModule = (moduleIndex) => {
    if (modules.length === 1) return;

    setModules((prevModules) =>
      prevModules.filter((_, index) => index !== moduleIndex),
    );
    if (currentModuleIndex === moduleIndex) {
      setCurrentModuleIndex(null);
    }
  };

  const uploadVideoHandler = async (selectedVideo) => {
    if (!selectedVideo) return;

    setModuleVideoUploading((prevState) => ({
      ...prevState,
      loading: true,
      failed: false,
    }));

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
        setModuleVideoUploading((prevState) => ({
          ...prevState,
          loading: false,
          failed: false,
        }));
        return videoId;
      } else {
        throw new Error("Failed to get video URI from response");
      }
    } catch (error) {
      setIsLoading(false);
      setModuleVideoUploading((prevState) => ({
        ...prevState,
        loading: false,
        failed: true,
      }));
      selectedVideo.failed = true;
      console.error("Failed to upload video vroo:", error.message);
    }
  };

  useEffect(() => {
    console.log("Updated course details:", courseDetails);

    setUpdatedCourse(true);
    console.log("UpdatedC details", courseDetails);
  }, [courseDetails]);

  const uploadCourseDetailsAndVideo = async () => {
    try {
      setCourseIntroLoader(true);
      console.log("IntroDuctory Video start uploadingh ");
      const intro = await uploadVideoHandler(selectedVideo);

      await dispatch(setVideoUrl(intro));

      setVideoId(intro);

      const updatedCourseDetails = { ...courseDetails, video_url: intro };

      console.log("updated course is: ", updatedCourse);

      // Step 1: Dispatch the createCourse action and wait for its result
      const createCourseResult = await dispatch(
        createCourse(updatedCourseDetails),
      ).unwrap();

      // Step 2: Check if createCourse was successful and if courseId exists
      const courseId = createCourseResult?.courseId;
      if (!courseId) {
        throw new Error("Failed to create course or missing courseId.");
      }

      // Step 3: After successfully creating the course, prepare the module data
      const moduleInfo = {
        modules: modules.map((module) => ({
          title: `Module ${module.title}`,
          content: module.videos.map((video, index) => ({
            title: video.file?.name.split(".")[0],
            content: video.videoId,
          })),
        })),
      };

      const payload = {
        course_id: courseId, // Use the courseId from createCourse result
        module_info: moduleInfo,
      };

      // Step 4: Dispatch the uploadCourseContent action with the course data
      dispatch(uploadCourseContent(payload));

      console.log("Course content uploaded:", payload);

      router.push("/dashboard");
      setCourseIntroLoader(false);
      console.log("IntroDuctory Video end uploading ");
    } catch (error) {
      // alert("Error during course upload:")
      console.log("Error during course creation or content upload:", error);
    }
  };

  useEffect(() => {
    console.log("modules are: ", modules);
  }, [modules]);
  console.log("videos are : ", modules.videos);

  return (
    <div>
      <h3 className="mb-5 mt-10 text-lg font-medium">
        Upload an introduction video of Course
      </h3>
      <VideoUpload
        selectedVideo={selectedVideo}
        setSelectedVideo={setSelectedVideo}
        courseIntroLoader={courseIntroLoader}
      />
      <p className="text-bold mt-8 text-xs">
        Note: The title of the module content is set by the name of your video
        file.{" "}
      </p>
      <div className="accordion mt-1 overflow-hidden rounded-md border-2 border-[#BBBBBB] px-4 py-2">
        {modules.map((item, moduleIndex) => (
          <div key={moduleIndex}>
            <h2 className="relative">
              {modules.length > 1 && (
                <button
                  className="absolute -right-1 top-1/2 z-[2] -translate-y-1/2"
                  onClick={() => removeModule(moduleIndex)}
                >
                  <Image height={20} width={20} alt="cross" src="/Cross.png" />
                </button>
              )}

              <button
                type="button"
                className="text-black flex w-full items-center justify-between py-5 font-medium"
                onClick={() => toggleAccordion(moduleIndex)}
              >
                <span>Module {item.title}</span>
                <svg
                  className={`relative right-6 h-3 w-3 transition-transform ${
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
                            </div>
                            <div>
                              <p className="text-sm text-[#7C7C7C]">
                                {formatFileSize(videoFile.file.size)}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="cancelUploadedVideo flex items-center">
                          {videoFile.loading ? (
                            <Loader />
                          ) : moduleVideoUploading.failed ? (
                            <div className="flex items-center gap-2 text-red-500">
                              <span>Upload failed</span>
                            </div>
                          ) : (
                            <button className="rounded border-0 bg-transparent px-4 py-2 text-sm font-semibold text-green-500">
                              Uploaded Successfully
                            </button>
                          )}
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
                    id={`input-file-ref-${moduleIndex}`}
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
              disabled={moduleVideoUploading.loading === true ? true : false}
              style={{
                cursor:
                  moduleVideoUploading.loading === true
                    ? "not-allowed"
                    : "pointer",
                color: moduleVideoUploading.loading === true ? "gray" : "white",
                backgroundColor:
                  moduleVideoUploading.loading === true ? "#BBBBBB" : "#2563EB",
              }}
            >
              {courseIntroLoader ? <Loader /> : "Continue"}
              {}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorVideos;
