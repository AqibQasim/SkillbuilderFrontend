import React from "react";
import BlueStarIconSvg from "./BlueStarIconSvg";
import Reviewdropdown from "./Reviewdropdown";
import ProgressBar from "./ProgressBar";
import ReviewRow from "./ReviewRow";

const Reviews = ({ rating, total, counts }) => {
  return (
    <div className="h-auto my-10 max-sm:my-0 max-sm:h-auto max-sm:mt-10 w-[100%]  flex justify-center  items-center ">
      <div className="w-[100%] flex justify-between items-center bg-white max-sm:pt-10">
        <div className="w-[100%] pt-5 pb-10 px-10">
          <div className="flex justify-between max-sm:flex-col gap-3 w-[100%] ">
            <div className=" flex items-center max-sm:justify-center">
              <h1 className="text-4xl font-semibold max-sm:text-center me-3">
                Reviews
              </h1>
              <BlueStarIconSvg />
              <div className="text-xl font-medium max-md:text-center max-sm:text-center ms-3">
                {rating}
              </div>
            </div>
            <div>
              <Reviewdropdown text="Most Relevant" />
            </div>
          </div>

          <div className="text-base max-sm:mt-5">{total} Total</div>
          <div className="w-[100%]">
            <ReviewRow
              barwidth={`${(counts.five / total) * 100}% `}
              number={5}
            />
            <ReviewRow
              barwidth={`${(counts.four / total) * 100}% `}
              number={4}
            />
            <ReviewRow
              barwidth={`${(counts.three / total) * 100}% `}
              number={3}
            />
            <ReviewRow
              barwidth={`${(counts.two / total) * 100}% `}
              number={2}
            />
            <ReviewRow
              barwidth={`${(counts.one / total) * 100}% `}
              number={1}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
