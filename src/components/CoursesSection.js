import React from 'react'
import CourseCatagories from './CourseCatagories';
import CoursesNew from './CoursesNew';
import Image from 'next/image';


const CoursesSection = () => {
  return (
    <div className="container mx-auto mb-10 mt-2 h-screen">
      <div className="mx-auto w-[80%]">
        <div className="mx-auto w-fit rounded-full border-2 border-[#4000FF] px-2 py-1 text-center text-sm text-[#4000FF]">
          bootcamp
        </div>
        <h1 className="mt-4 text-center text-2xl md:text-4xl font-medium text-[#00204D]">
          Endless Possibilities Await When You’re Driven to Learn and Grow
        </h1>
        <CourseCatagories />
        <div className="mt-10">
          <CoursesNew />
        </div>
        <div className='text-md border-primary hover:bg-primary text-white" text-[#313131] mx-auto mb-4 mt-4 flex w-[25%] cursor-pointer justify-between gap-2 rounded-full  border border-[#F6EBEB] bg-gradient-to-r from-[#fff] to-[#CECECE] px-4 py-2 text-start drop-shadow-xl min-w-fit'>
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
    </div>
  );
}

export default CoursesSection