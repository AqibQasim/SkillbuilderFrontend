import React from "react";
import Image from "next/image";
import myLearningHeroImage from "../../public/my-learning.png";
import LayoutWidth from "./LayoutWidth";

function MyLearningHero() {
  return (
    <div className="w-full bg-white">
      <LayoutWidth>
        <div
          className="relative mb-16 flex items-center py-16 lg:mb-20"
          id="Overview"
        >
          {/* Left Section */}
          <div className="text-black flex-1 text-left">
            <div className="mx-auto max-w-[27rem] text-center lg:mx-0 lg:max-w-none lg:pr-24 lg:text-left">
              {/* Content */}
              <h1 className="mb-4 text-5xl font-semibold capitalize">
                my learnings
              </h1>
              <p
                className={`text-md mb-8 text-center font-normal leading-7 text-gray-600 lg:text-left`}
              >
                Welcome to your personalized learning space. Explore the courses
                you've chosen, track your progress, and embark on a learning
                journey crafted to meet your unique goals.
              </p>
            </div>
          </div>
          {/* Right Section (visible on all screens) */}
          <div className="text-black hidden flex-1 lg:flex lg:items-center lg:justify-center">
            {/* <div className="relative h-[19.5rem] w-[30.5625rem] flex justify-center items-center">
          </div> */}
            <Image
              src={myLearningHeroImage}
              alt="Contact us hero image"
              placeholder="blur"
              quality={100}
            />
          </div>
        </div>
      </LayoutWidth>
    </div>
  );
}

export default MyLearningHero;
