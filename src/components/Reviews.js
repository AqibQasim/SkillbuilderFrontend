import React from "react";
import BlueStarIconSvg from "./BlueStarIconSvg";
import Reviewdropdown from "./Reviewdropdown";
import ProgressBar from "./ProgressBar";
import ReviewRow from "./ReviewRow";

const Reviews = ({ rating, total, counts }) => {

  if(!rating){
    rating = 0
  }
    return (
      <div className="my-10 flex h-auto w-[100%] items-center justify-center max-sm:my-0 max-sm:mt-10 max-sm:h-auto">
        <div className="flex w-[100%] items-center justify-between bg-white max-sm:pt-10">
          <div className="w-[100%] px-10 pb-10 pt-5">
            <div className="flex w-[100%] justify-between gap-3 max-sm:flex-col">
              <div className="flex items-center max-sm:justify-center">
                <h1 className="me-3 text-4xl font-semibold max-sm:text-center">
                  Reviews
                </h1>
                <BlueStarIconSvg />
                <div className="ms-3 text-xl font-medium max-sm:text-center max-md:text-center">
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
                barwidth={counts.five ? `${(counts.five / total) * 100}% ` : '0%'}
                number={5}
              />
              <ReviewRow
                barwidth={counts.four ? `${(counts.four / total) * 100}% ` : "0%"}
                number={4}
              />
              <ReviewRow
                barwidth={counts.three ? `${(counts.three / total) * 100}% ` : "0%"}
                number={3}
              />
              <ReviewRow
                barwidth={counts.two ? `${(counts.two / total) * 100}% `  : "0%"}
                number={2}
              />
              <ReviewRow
                barwidth={counts.one ? `${(counts.one / total) * 100}% ` : "0%"}
                number={1}
              />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Reviews;
