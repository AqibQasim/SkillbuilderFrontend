import React, { useEffect, useState } from "react";
import Banner from "@/components/Banner";
import BootcampHero from "@/components/bootcampHero";
import HomePageNavbar from "@/components/HomePageNavbar";
import { useRouter } from "next/router";
import HomepageFooter from "@/components/HomepageFooter";
import Image from "next/image";

const Page = () => {
  const router = useRouter();

  return (
    <div className="home-container mx-auto max-w-[120em] space-y-12 font-satoshi">
      <Banner />
      <HomePageNavbar />
      <BootcampHero
        title={"Introduce SkillBuilder and the range of courses available."}
        subtitle={
          "Explore top-rated courses designed to help you master in-demand skills and achieve your goals."
        }
        tagline={"Courses"}
      />
      <div className="max-w-7xl mx-auto px-4 ">
        <div className=" p-6 md:p-12 ">
          <div className="inline-block border-solid border-2 border-black-shade-1 text-sm font-medium rounded-full px-4 py-1 mb-4">
            Career Counseling
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Career Counselling and Guidance
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Choosing a career is one of the most important decisions in a
            student’s life. With the world becoming increasingly competitive,
            making the right career choice can seem challenging. This is where
            career counseling comes in to guide students by assessing their
            strengths and interests towards suitable career paths aligned with
            their personality and goals.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our career counseling services are designed to provide personalized
            support to students throughout their journey of career exploration,
            planning, and development.
          </p>
        </div>
        <BootcampHero
        title={"Empower Your Career with Expert Guidance!"}
        subtitle={
          "Discover the career path that aligns with your skills and aspirations. Our experts are here to help you unlock your full potential."
        }
        tagline={"Skillbuilder"}
      />
      </div>

 <div className=" pt5">
  <div className="max-w-7xl mx-auto px-6">
    {/* Section Header */}
    <div className="text-center mb-10">
      <span className="inline-block text-blue-700 border-solid border-2 border-blue-700 text-sm font-medium rounded-full px-4 py-1">
        Career Counseling
      </span>
      <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
        Process of Career Counselling and Guidance
      </h2>
    </div>

    {/* Steps Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Step Component */}
      {[
        {
          step: "01",
          title: "Career Counseling",
          description:
            "Discover the career path that aligns with your skills and aspirations. Our experts are here to help you unlock your full potential!",
          icon: "/cape1.png",
        },
        {
          step: "02",
          title: "Payment",
          description:
            "Choose your preferred payment method and confirm your booking in a few simple steps.",
          icon: "/cape2.png",
        },
        {
          step: "03",
          title: "Career Insight",
          description:
            "Based on our analysis, here are your tailored recommendations to achieve your career goals.",
          icon: "/cape3.png",
        },
        {
          step: "04",
          title: "Calendly (Schedule Your Session)",
          description:
            "Select a date and time that works best for you. Our experts are ready to guide you.",
          icon: "/cape4.png",
        },
      ].map((item, index) => (
        <div
          key={index}
          className=" shadow-lg  bg-gray-shade-4 rounded-lg p-6"
        >
          <div className="flex justify-between border-solid border-[1px] p-1 px-2 mb-10 border-neutral-700  rounded-2xl ">
            <div className="text-sm font-medium ">
              Step
            </div>
            <div className="text-sm ">{item.step}</div>
          </div>
          <div className="mb-4">
             <Image
                            src={item.icon}
                            alt="dropdown-Image"
                            width={40}
                            height={40}
                            className=""
                          />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            {item.title}
          </h3>
          <p className="text-sm text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
</div>

<div class=" pt-5">
  <div class="max-w-6xl mx-auto px-6">
    <div class=" mb-8">
      <span class="inline-block border-solid border-2 border-black-shade-1 text-sm font-medium rounded-full px-4 py-1">
        Career Counseling
      </span>
      <h2 class="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
        Why Choose 1 to 1 Education Consultancy?
      </h2>
    </div>
    <div class="space-y-6">

      <div>
        <h3 class="text-xl font-semibold text-gray-900">
          Individualized Attention:
        </h3>
        <p class="mt-2 text-sm text-gray-600">
          We believe in quality over quantity. As a boutique consultancy, we offer individualized attention to each student, ensuring that their goals and dreams take center stage in our guidance.
        </p>
      </div>

      
      <div>
        <h3 class="text-xl font-semibold text-gray-900">
          Customized Solutions:
        </h3>
        <p class="mt-2 text-sm text-gray-600">
          Your educational path is unlike anyone else’s. Our consultancy crafts personalized solutions, be it in course selection, university choices, or career planning, to align perfectly with your aspirations.
        </p>
      </div>

     
      <div>
        <h3 class="text-xl font-semibold text-gray-900">
          Experienced Advisors:
        </h3>
        <p class="mt-2 text-sm text-gray-600">
          Our team of experienced educational advisors brings a wealth of knowledge and insights. Benefit from their extensive experience in academia and industry as they guide you toward making informed decisions.
        </p>
      </div>

      <div>
        <h3 class="text-xl font-semibold text-gray-900">
          End-to-End Support:
        </h3>
        <p class="mt-2 text-sm text-gray-600">
          From the initial consultation to post-graduation advice, we provide end-to-end support. Our commitment doesn’t end with enrollment; it extends to your ongoing success in academia and beyond.
        </p>
      </div>
    </div>
  </div>
</div>
<div class="bg-white pt-5">
  <div class="max-w-[90%] mx-auto px-6">
    <div class="bg-gray-50 shadow-lg rounded-lg flex flex-col md:flex-row items-center md:items-start">
      {/* <!-- Text Content --> */}
      <div class="w-full md:w-1/2 p-8">
        <span class="inline-block border-solid border-2 border-black-shade-1  text-sm font-medium rounded-full px-4 py-1">
          Career Counseling
        </span>
        <h2 class="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
          1 to 1 Education Consultancy
        </h2>
        <p class="mt-4 text-gray-600 text-sm md:text-base">
          Our career counseling services are designed to provide personalized support to students throughout their journey of career exploration, planning, and development.
        </p>
        <a
          href="#"
          class="mt-6 inline-flex items-center px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-full shadow hover:bg-blue-700 transition"
        >
          Book Now
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </div>

      {/* <!-- Image Content --> */}
      <div class="w-full md:w-1/2 flex justify-end p-2">
      <Image
                            src="/carrer.png"
                             alt="1 to 1 Education Consultancy"
                            width={450}
                            height={400}
                            className="rounded-lg  "
                          />
        
      </div>
    </div>
  </div>
</div>


      <HomepageFooter />
    </div>
  );
};

export default Page;
