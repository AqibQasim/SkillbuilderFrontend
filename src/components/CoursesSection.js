import React, { useState } from "react";
import CourseCatagories from "./CourseCatagories";
import CoursesNew from "./CoursesNew";
import Image from "next/image";
import LayoutXPadding from "./LayoutXPadding";
import ButtonSecond from "./ButtonSecond";
import { useRouter } from "next/router";

const CoursesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const router = useRouter();

  return (
    <LayoutXPadding>
      <div className="mx-auto">
        <div className="mx-auto w-fit rounded-full border-2 border-[#4000FF] px-2 py-1 text-center text-sm text-[#4000FF]">
        Popular Courses
        </div>
        <h1 className="mt-4  mx-auto text-center max-w-[70%] text-2xl font-medium text-[#00204D] md:text-4xl">
        There are no limits to what you can learn when you have the desire to grow.
        </h1>
        <CourseCatagories setSelectedCategory={setSelectedCategory} />
        <div className="mt-10">
          <CoursesNew selectedCategory={selectedCategory} />
        </div>
        <div
          className='text-md border-primary hover:bg-primary text-white" mx-auto mb-4 mt-4 flex w-[20%] min-w-fit cursor-pointer justify-between gap-1 rounded-full border border-[#F6EBEB] bg-gradient-to-r from-[#fff] from-50% to-[#ebe7e7] px-4 py-2 text-start text-[#313131] drop-shadow-xl'
          onClick={() => router.push("/courses")}
        >
          View all courses
          <Image
            src="/right_arrow.png"
            width={30}
            height={35}
            alt="Right Arrow"
            className="inline-block"
          />
        </div>
      </div>
    </LayoutXPadding>
  );
};

export default CoursesSection;
