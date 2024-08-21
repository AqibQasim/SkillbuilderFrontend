import VideoUpload from "@/components/VideoUpload";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementIndex as instructorDecrementIndex } from "../../redux/slices/createInstructorSlice";
import { fetchInstructorByUserId } from "../../redux/thunks/InstructorByUserIdThunk";
import { createInstructorAndUploadIntroVideo } from "../../redux/thunks/instructorIntroVideoThunk";
import Button from "./Button";
import { createInstructor } from "../../redux/thunks/createInstructorthunk";
import ErrorMessage from "./ErrorMessage";

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
  const loadingCreateCourse = useSelector(
    (state) => state.createCourse.loading,
  );
  const errorCreateCourse = useSelector((state) => state.createCourse.error);
  const successMessageCreateCourse = useSelector(
    (state) => state.createCourse.successMessage,
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

  useEffect(() => {
    if (!userId || instructorId) return;
    dispatch(fetchInstructorByUserId(userId));
  }, [userId]);

  // Logs
  console.log("Instructor Details: ", instructorDetails);
  console.log("Instructor Id: ", instructorId);

  function uploadvideoHandler() {
    if (!selectedVideo) return;
    const file = selectedVideo;
    // dispatch(createInstructorAndUploadIntroVideo({ instructorId, file }));
    if (instructorId) return router.push("/dashboard");
    try {
      dispatch(createInstructor(instructorDetails));
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
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
          onClick={() => dispatch(instructorDecrementIndex())}
        >
          Previous
        </Button>

        <Button
          type="button"
          disabled={!selectedVideo}
          onClick={uploadvideoHandler}
          className="!px-10"
        >
          Continue
        </Button>
      </div>

      {/* popup temp */}
      {/* {success && (
        <div className="absolute flex min-h-screen min-w-full items-center justify-center">
          <p>Video uploaded successfully!</p>
        </div>
      )} */}
    </>
  );
};

export default TakeIntro;
