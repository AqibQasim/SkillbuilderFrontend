import VideoUpload from "@/components/VideoUpload";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Button from "./Button";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { uploadVideo } from "../../redux/thunks/instructorvideothunk";
import { decrementIndex as instructorDecrementIndex } from "../../redux/slices/createInstructorSlice";
import { createInstructor } from "../../redux/thunks/createInstructorthunk";

const TakeIntro = ({ onPrev }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const router = useRouter();
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.videoUpload);

  const {
    instructorDetails,
    loading: createInstructorLoading,
    error: createInstructorError,
    successMessage: createInstructorSuccessMessage,
  } = useSelector((state) => state.instructor);

  // const continueHandler = () => {
  //   router.push("/congratulations");
  // };

  const uploadvideoHandler = () => {
    if (selectedVideo) {
      dispatch(createInstructor(instructorDetails));
      // dispatch(uploadVideo(selectedVideo));
    }
  };

  return (
    <>
      <div className="flex h-auto w-full flex-col p-6">
        <div className="flex flex-col justify-center py-6">
          <div className="w-full">
            <p className="py-2 font-semibold">
              Upload An Introduction Video Of Yours
            </p>
            <VideoUpload setSelectedVideo={setSelectedVideo} />
          </div>
        </div>
        {/* <div
          className={`flex w-full flex-wrap items-center justify-center gap-4 p-4 ${videoUploaded ? "mt-6" : "mt-0"}`}
        ></div> */}
      </div>
      <div className="mt-4 flex justify-end gap-4">
        {/* <Button variant="secondary" onClick={onPrev}> */}
        <Button
          variant="secondary"
          onClick={() => dispatch(instructorDecrementIndex())}
        >
          Previous
        </Button>

        <Button
          type="button"
          // href="/congratulations?source=detailsUpload"
          onClick={uploadvideoHandler}
          className="!px-10"
        >
          Continue
        </Button>

        {(createInstructorLoading || loading) && <p>Uploading...</p>}
        {createInstructorSuccessMessage && (
          <p>{createInstructorSuccessMessage}!</p>
        )}
        {success && <p>Video uploaded successfully!</p>}
        {(createInstructorError || error) && (
          <p>Error: {createInstructorError || error}</p>
        )}
      </div>
    </>
  );
};

export default TakeIntro;
