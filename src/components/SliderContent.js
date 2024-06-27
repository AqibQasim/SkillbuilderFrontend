import React from "react";
import Image from "next/image";

const SliderContent = (props) => {
  return (
    <div
      className="relative flex items-center  container lg:my-4 w-[90%] h-[40%]"
      id="Overview"
    >
      {/* Left Section */}
      <div className="relative max-sm:h-[100%]  max-sm:flex max-sm:flex-col max-sm:justify-between max-sm:items-centre z-10 w-full md:w-1/2 text-black sm:w-[1/1] text-left max-sm:pb-8  ">
        {/* Content */}
        <div>
          <h1 className="text-4xl font-semibold max-md:mt-4 mb-4 md:w-4/5 max-sm:text-center">
            {props.title} <span className="text-blue">{props.subtitle}</span>
          </h1>
          <p
            className={`mb-8 lg:mb-4 md:w-4/5 text-lg-normal leading-7 md:leading-6 max-sm:text-center md:text-left`}
          >
            {props.description}
          </p>
        </div>

        <button
          type="button"
          className=" text-white lg:mb-4 max-md:mb-10 max-sm:mb-8 bg-blue hover:bg-secondary-800 focus:ring-4 focus:outline-none  focus:ring-secondary-300 font-medium rounded-lg text-lg px-8 py-2 text-center dark:bg-secondary-600 dark:hover:bg-secondary-700 dark:focus:ring-secondary-800 hover:bg-primary hover:text-secondary transition-all duration-500"
        >
          {props.button}
        </button>
      </div>
      {/* Right Section (visible on all screens) */}
      <div className="relative z-10 w-full md:w-1/2 text-black hidden md:block">
        <div className="relative z-20 flex flex-col items-start">
          <Image
            src={props.src}
            className="w-4/5 ml-20"
            width={20}
            height={20}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default SliderContent;
