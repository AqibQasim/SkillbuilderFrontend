import React from "react";
import ProgressBar from "./ProgressBar";

const ReviewRow = ({ number, barwidth }) => {
  return (
    <div className="flex justify-center space-x-5 mt-5">
      <input
        id="default-checkbox"
        type="checkbox"
        value=""
        class="w-7 h-7 text-blue bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 self-center"
      ></input>
      <div className="self-center min-w-fit">{number} star</div>
      <ProgressBar centerBar="self-center" barwidth={barwidth} />
      <div className="self-center">{barwidth}</div>
    </div>
  );
};

export default ReviewRow;
