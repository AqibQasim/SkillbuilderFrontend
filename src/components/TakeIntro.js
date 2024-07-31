import VideoUpload from "@/components/VideoUpload";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { decrementIndex as instructorDecrementIndex } from "../../redux/slices/createInstructorSlice";
import { createInstructorAndUploadVideo } from "../../redux/thunks/createInstructorthunk";
import Button from "./Button";

const TakeIntro = ({ onPrev }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const router = useRouter();
  const dispatch = useDispatch();

  const instructorDetails = useSelector(
    (state) => state.instructor.instructorDetails,
  );
  const instructorId = useSelector((state) => state.singleInstructor.id);

  const uploadvideoHandler = async () => {
    if (!selectedVideo) return;

    toast.promise(
      async () => {
        const result = await dispatch(
          createInstructorAndUploadVideo({
            instructorId,
            instructorDetails,
            video: selectedVideo,
          }),
        ).unwrap();
        return result.message;
      },
      {
        pending: "Uploading video...",
        success: {
          render({ data }) {
            return data.message;
          },
        },
        error: {
          render({ data }) {
            return `Error: ${data.message}`;
          },
        },
      },
    );
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
    </>
  );
};

export default TakeIntro;
