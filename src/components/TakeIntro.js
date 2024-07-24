import VideoUpload from "@/components/VideoUpload";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Button from "./Button";

const TakeIntro = ({ onPrev }) => {
  const [videoUploaded, setVideoUploaded] = useState(false);
  const router = useRouter();
  const continueHandler = () => {
    router.push("/congratulations");
  };

  const handleVideoUpload = () => {
    setVideoUploaded(true);
  };

  return (
    <>
      <div className="flex flex-col h-auto w-full p-6">
        <div className="flex flex-col justify-center py-6">
          <div className="w-full">
            <p className="py-2 font-semibold">
              Upload An Introduction Video Of Yours
            </p>
            <VideoUpload onUpload={handleVideoUpload} />
          </div>
        </div>
        <div className={`flex w-full flex-wrap items-center justify-center gap-4 p-4 ${videoUploaded ? 'mt-6' : 'mt-0'}`}>
        </div>
      </div>
      <div className="mt-4 flex justify-end gap-4">
        <Button variant="secondary" onClick={onPrev}>
          Previous
        </Button>
        <Button type="button" href="/congratulations?source=detailsUpload" className="!px-10">
          Continue
        </Button>
      </div>
    </>
  );
};

export default TakeIntro;
