import React from "react";

const InstructorVideos = ({ onNext, onPrev }) => {
  return (
    <div>
      <h1>Content of videos</h1>
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
              onClick={onNext}
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
