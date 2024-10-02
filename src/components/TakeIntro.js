import VideoUpload from "@/components/VideoUpload";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementIndex as instructorDecrementIndex,
  resetErrorAndLoader as resetErrorAndLoaderCreateInstructor,
} from "../../redux/slices/createInstructorSlice";
import { fetchInstructorByUserId } from "../../redux/thunks/InstructorByUserIdThunk";
import { createInstructorAndUploadIntroVideo , uploadIntroVideo } from "../../redux/thunks/instructorIntroVideoThunk";

import { createInstructor } from "../../redux/thunks/createInstructorthunk";
import ErrorMessage from "./ErrorMessage";
import { resetState as resetStateInstructorIntroVideo } from "../../redux/slices/instructorIntroVideoSlice";
import Button from "./Button";

const TakeIntro = ({ onPrev }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const router = useRouter();
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.user);
  const instructorId = useSelector(
    (state) => state.instructorByUserId.instructorByUserId.id,
  );
  const instructorDetails = useSelector(
    (state) => state.instructor.instructorDetails,
  );
  const loadingCreateInstructor = useSelector(
    (state) => state.instructor.loading,
  );
  const errorCreateInstructor = useSelector((state) => state.instructor.error);
  const successMessageCreateInstructor = useSelector(
    (state) => state.instructor.successMessage,
  );
  const loadingInstructorIntroVideo = useSelector(
    (state) => state.instructorIntroVideo.loading,
  );
  const errorInstructorIntroVideo = useSelector(
    (state) => state.instructorIntroVideo.error,
  );
  const successMessageInstructorIntroVideo = useSelector(
    (state) => state.instructorIntroVideo.successMessage,
  );

  // temp log for instructor intro video slice
  const { error, successMessage, loading } = useSelector(
    (state) => state.instructorIntroVideo,
  );
  const disableActions = loadingCreateInstructor || loadingInstructorIntroVideo;

  console.log("loading Intro Video: ", loading);
  console.log("Error Intro Video: ", error);
  console.log("successMessage Intro Video: ", successMessage);

  useEffect(() => {
    if (!userId || instructorId) return;
    dispatch(fetchInstructorByUserId(userId));
  }, [userId]);

  useEffect(() => {
    dispatch(resetStateInstructorIntroVideo());
    dispatch(resetErrorAndLoaderCreateInstructor);
  }, []);

  // Logs
  console.log("Instructor Details: ", instructorDetails);
  console.log("Instructor Id: ", instructorId);
  console.log("Selected video: ", selectedVideo);

  async function uploadvideoHandler() {
  if (!selectedVideo) return;

  const formData = new FormData();
  formData.append('video', selectedVideo);

  try {
    const response = await fetch('/api/upload-video', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Unable to post video');
    }

    const data = await response.json();
    console.log('Upload successful:', data);

    if (data.uri) {
     dispatch( createInstructorAndUploadIntroVideo({instructorId}));
      // Perform any additional actions if needed
      router.push('/dashboard');
    } else {
      throw new Error('Failed to get video URI from response');
    }
  } catch (error) {
    console.error('Failed to upload video:', error.message);
  }
}

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
      </div>
      <div className="mt-4 flex justify-end gap-4">
        <Button
          variant="secondary"
          disabled={disableActions}
          onClick={() => dispatch(instructorDecrementIndex())}
        >
          Previous
        </Button>

        <Button
          type="button"
          disabled={!selectedVideo || disableActions}
          onClick={uploadvideoHandler}
          className="!px-10 disabled:!bg-blue disabled:!text-white"
        >
          Continue
        </Button>
      </div>
    </>
  );
};

export default TakeIntro;
