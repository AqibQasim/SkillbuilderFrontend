import React from 'react'
import Image from 'next/image'
import LayoutWidth from './LayoutWidth'
import HelpHeroImage from "../../public/help.png";

const HelpHero = () => {
  return (
    <>
        <div className="w-full bg-white">
        <LayoutWidth>
        <div
          className="relative mb-6 flex items-center py-6 lg:mb-20"
          id="Overview"
        >
          {/* Left Section */}
          <div className="flex-1 text-left text-black">
            <div className="mx-auto max-w-[27rem] text-center lg:mx-0 lg:max-w-none lg:pr-24 lg:text-left">
              {/* Content */}
              <h1 className="mb-4 text-5xl font-semibold">How May we Help You?</h1>
             
                 <div className="flex hidden w-full items-center justify-between gap-2 rounded-lg border-[1px] border-border_gray px-4 lg:flex lg:w-[60%]">
                    <Image
                        src="/searchIcon.svg"
                        width={20}
                        height={20}
                        alt="Search Icon"
                    />
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-[100%] py-2 outline-none"
                    />
                </div>
            </div>
          </div>
          {/* Right Section (visible on all screens) */}
          <div className="hidden flex-1 text-black lg:flex lg:items-center lg:justify-center">
            {/* <div className="relative h-[19.5rem] w-[30.5625rem] flex justify-center items-center">
          </div> */}
            <Image
              src={HelpHeroImage}
              alt="help hero image"
              placeholder="blur"
              quality={100}
              width={450}
              height={400}
            />
          </div>
        </div>
      </LayoutWidth>
    </div>
      
    </>
  )
}

export default HelpHero