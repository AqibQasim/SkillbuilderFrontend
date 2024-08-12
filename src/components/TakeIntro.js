import VideoUpload from "@/components/VideoUpload";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementIndex as instructorDecrementIndex } from "../../redux/slices/createInstructorSlice";
import { createInstructor } from "../../redux/thunks/createInstructorthunk";
import { fetchOneInstructor } from "../../redux/thunks/instructorThunk";
import { uploadVideo } from "../../redux/thunks/instructorvideothunk";
import Button from "./Button";

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

  const instructorId = useSelector((state) => state.singleInstructor.id);

  useEffect(() => {
    if (instructorDetails.user_id) {
      dispatch(fetchOneInstructor(instructorDetails.user_id));
    }
  }, [dispatch, instructorDetails.user_id]);

  console.log("instructor Details :", instructorDetails);
  console.log("instructor Id :", instructorId);

  const uploadvideoHandler = async () => {
    if (!selectedVideo) return;

    try {
      if (instructorId) {
        dispatch(uploadVideo(selectedVideo));
      } else {
        await dispatch(createInstructor(instructorDetails)).unwrap();
        dispatch(uploadVideo(selectedVideo));
      }
    } catch (error) {
      console.error("Failed to create instructor or upload video:", error);
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

        {(createInstructorLoading || loading) && <p>Uploading...</p>}
        {createInstructorSuccessMessage && (
          <p>{createInstructorSuccessMessage}!</p>
        )}
        {success && <p>Video uploaded successfully!</p>}
        {(createInstructorError || error) && (
          <p>Error: {createInstructorError || error}</p>
        )}
      </div>

      {/* popup temp */}
      {success && (
        <div className="absolute flex min-h-screen min-w-full items-center justify-center">
          <p>Video uploaded successfully!</p>
        </div>
      )}
    </>
  );
};

export default TakeIntro;

// import VideoUpload from "@/components/VideoUpload";
// import { useRouter } from "next/router";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { decrementIndex as instructorDecrementIndex } from "../../redux/slices/createInstructorSlice";
// import { createInstructor } from "../../redux/thunks/createInstructorthunk";
// import { uploadVideo } from "../../redux/thunks/instructorvideothunk";
// import Button from "./Button";

// const TakeIntro = ({ onPrev }) => {
//   const [selectedVideo, setSelectedVideo] = useState(null);
//   const router = useRouter();
//   const dispatch = useDispatch();
//   const { loading, success, error } = useSelector((state) => state.videoUpload);

//   const {
//     instructorDetails,
//     loading: createInstructorLoading,
//     error: createInstructorError,
//     successMessage: createInstructorSuccessMessage,
//   } = useSelector((state) => state.instructor);

//   console.log("instructor Details :", instructorDetails);

//   const uploadvideoHandler = async () => {
//     if (!selectedVideo) return;
//     try {
//       await dispatch(createInstructor(instructorDetails)).unwrap();
//       dispatch(uploadVideo(selectedVideo));
//     } catch (error) {
//       console.error("Failed to create instructor:", error);
//     }
//   };

//   return (
//     <>
//       <div className="flex h-auto w-full flex-col p-6">
//         <div className="flex flex-col justify-center py-6">
//           <div className="w-full">
//             <p className="py-2 font-semibold">
//               Upload An Introduction Video Of Yours
//             </p>
//             <VideoUpload setSelectedVideo={setSelectedVideo} />
//           </div>
//         </div>
//       </div>
//       <div className="mt-4 flex justify-end gap-4">
//         <Button
//           variant="secondary"
//           onClick={() => dispatch(instructorDecrementIndex())}
//         >
//           Previous
//         </Button>

//         <Button
//           type="button"
//           disabled={!selectedVideo}
//           onClick={uploadvideoHandler}
//           className="!px-10"
//         >
//           Continue
//         </Button>

//         {(createInstructorLoading || loading) && <p>Uploading...</p>}
//         {createInstructorSuccessMessage && (
//           <p>{createInstructorSuccessMessage}!</p>
//         )}
//         {success && <p>Video uploaded successfully!</p>}
//         {(createInstructorError || error) && (
//           <p>Error: {createInstructorError || error}</p>
//         )}
//       </div>

//       {/* popup temp */}
//       {success && (
//         <div className="absolute flex min-h-screen min-w-full items-center justify-center">
//           <p>Video uploaded successfully!</p>
//         </div>
//       )}
//     </>
//   );
// };

// export default TakeIntro;
