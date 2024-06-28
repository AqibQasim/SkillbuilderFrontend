import React from "react";
import Image from "next/image";
import contactUsHeroImage from "../../public/contact-us.png";
function ContactHero() {
  return (
    <div className="w-full bg-white">
      <div
        className="relative mx-auto mb-16 flex w-[90%] max-w-screen-2xl items-center py-16 lg:mb-20"
        id="Overview"
      >
        {/* Left Section */}
        <div className="flex-1 text-left text-black">
          <div className="max-w-[27rem] text-center lg:text-left mx-auto lg:mx-0  lg:max-w-none lg:pr-24">
            {/* Content */}
            <h1 className="mb-4 text-5xl font-semibold">Contact Us</h1>
            <p
              className={`text-md mb-8 font-normal leading-7 text-center lg:text-left text-gray-600 `}
            >
              Connecting with us is easy! For any questions, concerns, or
              suggestions, feel free to reach out to our dedicated support team
            </p>
          </div>
        </div>
        {/* Right Section (visible on all screens) */}
        <div className="hidden flex-1 text-black lg:flex lg:items-center lg:justify-center">
          {/* <div className="relative h-[19.5rem] w-[30.5625rem] flex justify-center items-center">
          </div> */}
          <Image
            src={contactUsHeroImage}
            alt="Contact us hero image"
            placeholder="blur"
            quality={100}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactHero;
