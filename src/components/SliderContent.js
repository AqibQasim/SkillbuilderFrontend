import React from "react";
import Image from "next/image";
import LayoutWidth from "./LayoutWidth";

const SliderContent = (props) => {
  return (
    <LayoutWidth>
      <div
        className="relative flex h-[40%] w-[90%] items-center lg:my-4"
        id="Overview"
      >
        {/* Left Section */}
        <div className="max-sm:items-centre relative z-10 w-full text-left text-black sm:w-[1/1] md:w-1/2 max-sm:flex max-sm:h-[100%] max-sm:flex-col max-sm:justify-between max-sm:pb-8">
          {/* Content */}
          <div>
            <h1 className="mb-4 text-4xl font-semibold md:w-4/5 max-sm:text-center max-md:mt-4">
              {props.title} <span className="text-blue">{props.subtitle}</span>
            </h1>
            <p
              className={`text-lg-normal mb-8 leading-7 md:w-4/5 md:text-left md:leading-6 lg:mb-4 max-sm:text-center`}
            >
              {props.description}
            </p>
          </div>

          <button
            type="button"
            className="hover:bg-secondary-800 focus:ring-secondary-300 dark:bg-secondary-600 dark:hover:bg-secondary-700 dark:focus:ring-secondary-800 hover:bg-primary hover:text-secondary rounded-lg bg-blue px-8 py-2 text-center text-lg font-medium text-white transition-all duration-500 focus:outline-none focus:ring-4 lg:mb-4 max-sm:mb-8 max-md:mb-10"
          >
            {props.button}
          </button>
        </div>
        {/* Right Section (visible on all screens) */}
        <div className="relative z-10 hidden w-full text-black md:block md:w-1/2">
          <div className="relative z-20 flex flex-col items-start">
            <Image
              src={props.src}
              className="ml-20 w-4/5"
              width={20}
              height={20}
              priority
            />
          </div>
        </div>
      </div>
    </LayoutWidth>
  );
};

export default SliderContent;
