import VideoUpload from "@/components/VideoUpload";
import { useRouter } from "next/router";
import { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementIndex as instructorDecrementIndex,
  resetErrorAndLoader as resetErrorAndLoaderCreateInstructor,
} from "../../redux/slices/createInstructorSlice";
import { fetchInstructorByUserId } from "../../redux/thunks/InstructorByUserIdThunk";
import { createInstructorAndUploadIntroVideo } from "../../redux/thunks/instructorIntroVideoThunk";
import { createInstructor } from "../../redux/thunks/createInstructorthunk";
import ErrorMessage from "./ErrorMessage";
import { resetState as resetStateInstructorIntroVideo } from "../../redux/slices/instructorIntroVideoSlice";
import Button from "./Button";
import { IntroVideoContext } from "../../lib/IntroVideoContext";
import { updateInstructorDetails } from "../../redux/slices/createInstructorSlice";
import LoaderComponent from "./Loader";

const TakeIntro = ({ onPrev }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isLoading,setIsLoading]= useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.user);
  const instructorId = useSelector(
    (state) => state.instructorByUserId.instructorByUserId.id
  );
  const instructorDetails = useSelector(
    (state) => state.instructor.instructorDetails
  );
  const loadingCreateInstructor = useSelector(
    (state) => state.instructor.loading
  );
  const errorCreateInstructor = useSelector((state) => state.instructor.error);
  const successMessageCreateInstructor = useSelector(
    (state) => state.instructor.successMessage
  );
  const loadingInstructorIntroVideo = useSelector(
    (state) => state.instructorIntroVideo.loading
  );
  const errorInstructorIntroVideo = useSelector(
    (state) => state.instructorIntroVideo.error
  );
  const successMessageInstructorIntroVideo = useSelector(
    (state) => state.instructorIntroVideo.successMessage
  );

  const disableActions = loadingCreateInstructor || loadingInstructorIntroVideo;
  const { setVideoId } = useContext(IntroVideoContext);

  useEffect(() => {
    if (!userId || instructorId) return;
    dispatch(fetchInstructorByUserId(userId));
  }, [userId]);

  useEffect(() => {
    dispatch(resetStateInstructorIntroVideo());
    dispatch(resetErrorAndLoaderCreateInstructor());
  }, [dispatch]);

  const uploadVideoHandler = async () => {
  if (!selectedVideo) return;

  const formData = new FormData();
  formData.append("video", selectedVideo);
  setIsLoading(true);

  try {
    const response = await fetch("/api/upload-video", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      setIsLoading(false);
      const errorData = await response.json();
      throw new Error(errorData.error || "Unable to post video");
    }

    const data = await response.json();

    if (data.uri) {
      const videoId = data.uri.split("/").pop();

      setVideoId(videoId);

      // Update the video_url in the instructor details
      dispatch(updateInstructorDetails({ video_url: videoId }));

      dispatch(createInstructorAndUploadIntroVideo({ instructorId }));
      setIsLoading(false);
      router.push("/dashboard");

    } else {
      setIsLoading(false);
      throw new Error("Failed to get video URI from response");
    }
  } catch (error) {
    console.error("Failed to upload video:", error.message);
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
          onClick={uploadVideoHandler}
          className="!px-10 disabled:!bg-blue disabled:!text-white"
        >
          {
            isLoading?<LoaderComponent/>:'Continue'
          }
        </Button>
      </div>
    </>
  );
};

export default TakeIntro;
