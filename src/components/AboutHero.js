import React from "react";
import Image from "next/image";
const AboutHero = () =>{
    return(
        <div className="mt-[1%]">
    <div className="relative bg-white mb-[3%] pt-[5%] pb-[5%] mt-[3%] flex items-center container h-[50%] bg-white" id="Overview">
    {/* Left Section */}
    <div className="relative z-10 w-full md:w-1/2 text-black sm:w-[1/1] text-left ">
        {/* Content */}
        <h1 className="text-4xl font-bold mb-4 md:w-4/5">Your success is our<br /> <span className="text-blue-600">Motivation</span></h1>
            <p className={`mb-8 md:w-4/5 text-md font-normal text-gray-600 leading-7 md:text-left`}>
                At Skillbuilder your success is more than a goal; it's our constant inspiration. We're here to support, guide, and celebrate every step of your learning journey
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4">
                <h2 className="text-3xl font-bold">10+</h2>
                <p className="text-sm">Years Experience</p>
            </div>
            <div className="p-4">
                <h2 className="text-3xl font-bold">50+</h2>
                <p className="text-sm">Running Courses</p>
            </div>
            <div className="p-4">
                <h2 className="text-3xl font-bold">19k</h2>
                <p className="text-sm">Positive Reviews</p>
            </div>
            <div className="p-4">
                <h2 className="text-3xl font-bold">20k</h2>
                <p className="text-sm">Trusted Students</p>
            </div>
            </div>
        </div>
        {/* Right Section (visible on all screens) */}
        <div className="relative z-10 w-full md:w-1/2 text-black hidden md:block">
            <div className="relative z-20 flex flex-col items-start">
                <Image src="/Abouthero.png" width={549} height={389}/>
            </div>
        </div>
        </div>
        </div>
    )
};

export default AboutHero;