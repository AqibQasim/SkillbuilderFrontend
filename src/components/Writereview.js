import React from "react";
import Image from "next/image";

const Writereview = () => {
  return (
    <div className="flex justify-center p-10">
      <div className="w-[75%] max-md:w-[100%] h-[6rem] rounded-md bg-white flex justify-between">
        <div className="m-5 pr-3 pl-5 flex items-center">
          <Image
            className=""
            src="/profile.png"
            alt=""
            width={60}
            height={60}
          />
          <div class="font-medium dark:text-bg_text_gray text-sm">
            <p className="text-black ml-4">Usman Kareem</p>
          </div>
        </div>
        <div className="flex max-md:w-[50%] max-md:text-xs items-center m-5 pr-5 ">
          <button className="py-2 px-3  max-md:py-2 max-md:px-2 lg:flex justify-between items-center w-full lg:w-auto bg-blue text-white rounded-lg text-sm">
            Write a Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default Writereview;
