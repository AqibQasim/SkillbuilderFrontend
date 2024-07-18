//in src/pages/
import Image from "next/image";
import React from "react";
import SkillBuilderSvg from "./SkillBuilderSvg";
import Button from "./Button";

const Congrats = ({ source }) => {
  return (
    <div className="flex h-[100vh] w-full flex-col bg-white p-4">
      <div className="h-[5em] w-[20%]">
        <div className="aspect-auto">
          <div></div>
          <SkillBuilderSvg />
        </div>
      </div>
      <div className="flex h-fit justify-center self-center">
        <div className="aspect-auto">
          <Image
            height={351}
            width={596}
            alt="Congratulations"
            quality={90}
            src={
              !source || source === "courseUpload"
                ? "/congrats.png"
                : // : "/happy-group-of-people-celebrating-together-1.png"
                  "/congrats.png"
            }
          />
          <h1 className="mt-4 text-center text-5xl font-medium max-lsm:text-2xl">
            Congralutions
          </h1>
          <p className="mt-4 text-center">
            {!source || source === "courseUpload"
              ? "Your course has been submitted for review kindly wait for approval"
              : "on achieving the milestone of becoming a professional tutor on our Skill Builder"}
          </p>
        </div>
      </div>
      <div className="flex h-[9em] w-full items-center justify-center self-end md:items-end md:justify-end lg:items-end lg:justify-end">
        {/* <div className="flex h-fit w-full justify-center rounded-lg bg-blue md:w-fit lg:w-fit">
          <button className="">
            <p className="self-center px-8 py-3 text-white">Go To Dashboard</p>
          </button>
        </div> */}
        <Button href="/dashboard">Go To Dashboard</Button>
      </div>
    </div>
  );
};

export default Congrats;
