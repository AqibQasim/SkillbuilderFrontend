// import InstructorTab from "@/components/InstructorTab";
// import InstructorTop from "@/components/InstructorTop";
import VideoUpload from "@/components/VideoUpload";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Button from "./Button";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { uploadVideo } from "../../redux/thunks/instructorvideothunk";

const TakeIntro = ({ onPrev }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const router = useRouter();
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.videoUpload);

  // const continueHandler = () => {
  //   router.push("/congratulations");
  // };

  const uploadvideoHandler = () => {
    if (selectedVideo) {
      dispatch(uploadVideo(selectedVideo));
    }
  };

  return (
    <>
      <div className="flex h-[60vh] w-full flex-col p-6">
        {/* <div className='w-[20%] h-[3em] justify-center items-center'>
                <InstructorTop/>
            </div> */}
        {/* <InstructorTab
            Tab1="Basic Info"
            Tab2="Videos"/> */}
        <div className="flex h-fit w-full flex-col justify-center py-6">
          {/* <div className='w-full h-full items-center'> */}
          {/* <InstructorTab/> */}
          {/* </div> */}
          <div className="h-fit w-full">
            {/* <div className='w-full flex flex-col gap-2'>
                        <h3 className='font-semibold'>Upload an introduction video of yours</h3>
                        <div className='rounded-md border-2 border-blue flex flex-col items-center gap-2 justify-center w-full h-fit py-20'>
                            <img src="/cloud.png" className='aspect-auto'/>
                            <p><button className='text-blue'>Browse</button> your File</p>

                        </div>
                    </div> */}
            <p className="py-2 font-semibold">
              Upload An Introduction Video Of Yours
            </p>
            <VideoUpload setSelectedVideo={setSelectedVideo} />
          </div>
        </div>
        <div className="flex h-[0em] w-full flex-wrap items-center justify-center gap-4 self-end p-4 sm:flex-nowrap sm:justify-center md:flex-nowrap md:items-end md:justify-end lg:flex-nowrap lg:items-end lg:justify-end">
          {/* <div className='bg-[#E3E3EC] rounded-lg w-full flex justify-center h-fit
                            md:w-fit lg:w-fit'>
                    <button className=''>
                        <p className='px-8 py-3 self-center text-[#0000FF'>
                            Go To Dashboard
                        </p>
                    </button>
                </div>
                <div className='bg-blue rounded-lg w-full flex justify-center h-fit
                                md:w-fit lg:w-fit'>
                    <button className=''>
                        <p className='px-8 py-3 self-center text-white'>
                            Go To Dashboard
                        </p>
                    </button>
                </div>     */}
        </div>
      </div>
      <br /> <br />
      <div className="mt-4 flex justify-end gap-4">
        {/* <div className="grid grid-cols-1 md:grid-cols-2">
        </div> */}
        <Button variant="secondary" onClick={onPrev}>
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
        {loading && <p>Uploading...</p>}
        {success && <p>Video uploaded successfully!</p>}
        {error && <p>Error: {error}</p>}
      </div>
      {/* <VideoUpload/> */}
    </>
  );
};

export default TakeIntro;
