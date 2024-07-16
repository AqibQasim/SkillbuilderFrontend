import React from "react";

const InstructorVideos = ({ onNext }) => {
  return (
    <div>
      <h1>Content of videos</h1>
      <div className="mt-4 flex justify-end">
        <button
          type="button"
          className="rounded-md bg-blue px-10 py-2 font-normal text-white hover:bg-blue-600 max-lsm:w-full"
          onClick={onNext}
        >
          Continue
        </button>
      </div>
    </div>
  );
};
export default InstructorVideos;
