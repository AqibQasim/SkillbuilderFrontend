import React from "react";
import Image from "next/image";
import aboutHeroImage from "../../public/Abouthero.png";
import LayoutWidth from "./LayoutWidth";

const AboutHero = () => {
  return (
    <div className="mb-8 w-full bg-white xl:mb-11">
      {/* <div
        className="relative bg-white mb-[3%] pt-[5%] pb-[5%] mt-[3%] flex items-center container h-[50%] bg-white"
        id="Overview"
      > */}
      <LayoutWidth>
        <div className="relative flex items-center pb-9 pt-10" id="Overview">
          {/* Left Section */}
          {/* <div className="relative z-10 w-full md:w-1/2 text-black sm:w-[1/1] text-left "> */}
          <div className="flex-1 text-black">
            {/* <div className="p-4"> */}
            <div className="mx-auto max-w-[43rem] xl:mx-0 xl:max-w-none xl:pr-24">
              {/* Content */}
              <h1 className="mx-auto mb-4 text-center text-5xl font-semibold xl:mx-0 xl:text-left">
                Your success is our
                <br /> <span className="text-blue-600">Motivation</span>
              </h1>
              <p
                className={`text-md mb-8 text-center font-normal leading-7 text-gray-600 xl:text-left`}
              >
                At Skillbuilder your success is more than a goal; it's our
                constant inspiration. We're here to support, guide, and
                celebrate every step of your learning journey
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="p-4 text-center">
                <h2 className="text-3xl font-medium">10+</h2>
                <br />
                <p className="text-sm">Years Experience</p>
              </div>
              <div className="p-4 text-center">
                <h2 className="text-3xl font-medium">50+</h2>
                <br />
                <p className="text-sm">Running Courses</p>
              </div>
              <div className="p-4 text-center">
                <h2 className="text-3xl font-medium">19k</h2>
                <br />
                <p className="text-sm">Positive Reviews</p>
              </div>
              <div className="p-4 text-center">
                <h2 className="text-3xl font-medium">20k</h2>
                <br />
                <p className="text-sm">Trusted Students</p>
              </div>
            </div>
          </div>
          {/* Right Section (visible on all screens) */}
          {/* <div className="relative z-10 w-full md:w-1/2 text-black hidden md:block"> */}
          <div className="hidden flex-1 text-black md:w-1/2 xl:flex xl:items-center xl:justify-center">
            {/* <div className="relative z-20 flex flex-col items-start">
           
          </div> */}
            <Image
              src={aboutHeroImage}
              // width={549}
              // height={389}
              alt="Contact us hero image"
              placeholder="blur"
              quality={100}
            />
          </div>
        </div>
      </LayoutWidth>
    </div>
  );
};

export default AboutHero;
