"use client";
import React, { useEffect, useState } from "react";
import Banner from "@/components/Banner";
import BootcampHero from "@/components/bootcampHero";
import HomePageNavbar from "@/components/HomePageNavbar";
import { useRouter } from "next/router";
import HomepageFooter from "@/components/HomepageFooter";
import Image from "next/image";
import LayoutXPadding from "@/components/LayoutXPadding";

const Page = () => {
  const [studentProfile, setStudentProfile] = useState(null);

  useEffect(() => {
    setStudentProfile(JSON.parse(localStorage.getItem("profile")));
  }, []);

  return (
    <div className="home-container  w-[100%] space-y-12 font-satoshi">
      <div className=" bg-gray-50" >
  <LayoutXPadding>
    <div className="absolute inset-0 z-20">
      <HomePageNavbar />
    </div>
  </LayoutXPadding>

  <div  className="overflow-hidden z-0 min-h-[440px] sm:min-h-[440px] md:min-h-[450px] lg:min-h-[520px] xl:min-h-[500px] " >
  <Image
    src={"/CareerBackRound.png"}
    alt="career-counsling Hero"
    width={1920}
    height={1080}
    className="h-full w-full object-contain hidden sm:block "
  />
  <div className="flex  flex-col items-center justify-center absolute inset-0 z-20 text-center sm:px-4">
    <div className="text-center relative top-16 max-xsm:w-[100%] max-sm:w-[85%] w-[80%] sm:w-[80%] md:w-[70%] lg:w-[64%] xl:w-[60%]">
      <h1 className="max-xsm:text-lg max-sm:text-2xl text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl text-center font-medium text-black">
        Unlock Your True Potential with
        <span className="text-blue-shade-1 font-semibold"> AI-Powered </span>
        Career Counseling!
      </h1>
      <div className="max-sm:[70%] flex justify-center px-10 text-center">
      <p className="text-gray-600 mt-4 text-center max-sm:text-xs  sm:text-base">
        Personalized career guidance with the power of AI & expert mentorship.
      </p>
      </div>
      <div className="flex justify-center mt-12 relative">
        <Image
          src={"/button.png"}
          alt="Button"
          width={90}
          height={90}
          className="hover:scale-105 "
        />
      </div>
  </div>
  </div>
</div>
    </div>  
      {/* three cards  */}
     <div className="min-w-[95%] h-auto flex justify-center items-center mx-auto text-center" >
        <div className=" w-[85%] md:w-[85%] lg:min-w-[90%] h-auto border rounded-xl flex flex-col-reverse md:flex-row items-center    lg:items-start p-6 lg:p-5 bg-gray-50">
      {/* Left Section */}
      <div className=" w-4/6 lg:w-2/5 space-y-4 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-semibold text-gray-900">1 to 1 Education Consultancy</h1>
        <p className="text-gray-700 text-sm mr-2px">
          Get expert career guidance personalized to your goals for just <span className="font-bold">$25 per session</span>. Book now to gain clarity and confidence in your career path!
        </p>
        <div className="space-y-3">
          <div className="flex items-start space-x-2">
            <span className="text-blue-600">➝</span>
            <div>
              <h2 className="font-semibold text-gray-900">Personalized Career Roadmap</h2>
              <p className="text-gray-600 text-sm">Get expert guidance tailored to your skills, interests, and goals to help you choose the right career path.</p>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-blue-600">➝</span>
            <div>
              <h2 className="font-semibold text-gray-900">Affordable & Actionable Insights</h2>
              <p className="text-gray-600 text-sm">For just $25 per session, receive practical advice and strategies to accelerate your career growth.</p>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-blue-600">➝</span>
            <div>
              <h2 className="font-semibold text-gray-900">Gain Clarity & Confidence</h2>
              <p className="text-gray-600 text-sm">Make informed career decisions with expert-backed insights, ensuring a successful and fulfilling future.</p>
            </div>
          </div>
        </div>
        <div className="mt-4 relative left-2">
        <Image
          src={"/carrer-button.png"}
          alt="button "
          width={200}
          height={200}
          className="  hover:scale-105 "
        />
        </div>
      </div>

      {/* Right Section for small screens with Images */}
      <div className="hidden lg:hidden w-2/6 h-auto md:flex bg-gray-100 justify-center ">
      {/* Background Card Placeholder */}
      <div className="  w-750 h-750 bg-gray-50 sm:block ">
      <Image
          src={"/AI-card.png"}
          alt="man "
          width={700}
          height={700}
          className="w-full h-full  transform rotate-[5deg] "
        />

        </div>
        
      </div>

      
    <div className=" hidden  relative right-12 w-full lg:w-3/5 lg:flex bg-gray-100 justify-center mt-8 md:mt-0">
      {/* Background Card Placeholder */}
      <div className="absolute top-12  w-150 h-150 bg-gray-50 hidden sm:block transform rotate-[-5deg]">
      <Image
          src={"/AI-card.png"}
          alt="man "
          width={400}
          height={400}
          className="w-full h-full "
        />

      </div>

      {/* Middle Card (Main Content) */}
      <div className="absolute  w-150 h-150 transform rotate-[-1deg]">
        <Image
          src={"/invest-card.png"} // Ensure this path is correct
          alt="Invest Card"
          width={920}
          height={980}
          className="w-full h-full"
        />
      </div>

      {/* Profile Card on Top */}
      <div className="absolute top-7 right-[-65px] h-150 w-150 ]">
        <Image
          src={"/man.png"} // Ensure this path is correct
          alt="Profile Image"
          width={500}
          height={500}
          className="w-full h-full"
        />
        
      </div>
    </div>



         </div>
     </div>

         {/* old code  */}
      <div className="mx-auto w-[90%]">
        <div className="mx-auto text-center">
          <div className="mb-4 inline-block rounded-full border-2 border-solid border-black-shade-1 px-4 py-1 text-sm font-medium">
            Career Counseling
          </div>
          <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-4xl">
            Career Counselling and Guidance
          </h2>
          </div>
          <div className="py-6 px-7 md:py-12 ">
          <p className="mb-4 leading-relaxed text-gray-600">
            Choosing a career is one of the most important decisions in a
            student’s life. With the world becoming increasingly competitive,
            making the right career choice can seem challenging. This is where
            career counseling comes in to guide students by assessing their
            strengths and interests towards suitable career paths aligned with
            their personality and goals.
          </p>
          <p className="leading-relaxed text-gray-600">
            Our career counseling services are designed to provide personalized
            support to students throughout their journey of career exploration,
            planning, and development.
          </p>
        </div>
        <BootcampHero
          src="/women.png"
          title={"Empower Your Career with Expert Guidance!"}
          subtitle={
            "Discover the career path that aligns with your skills and aspirations. Our experts are here to help you unlock your full potential."
          }
          tagline={"Skillbuilder"}
        />
      </div>

    
        <div className="mx-auto w-[95%] ">
          {/* Section Header */}
          <div className="mb-10 text-center">
            <h2 className="mt-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Career Counseling Process
            </h2>
            <p className="text-xs text-center mx-auto mt-5 w-[70%] text-gray-600 " >We assess your skills and interests using AI-driven insights, refined by expert mentors. In a one-on-one session, you’ll receive personalized guidance and a clear action plan to confidently navigate your career path.</p>
          </div>
         
        <div class="relative mx-auto flex justify-between items-center mb-5 w-[95%]">
            {/* <!-- Dotted Line --> */}
            <div class="absolute top-1/2 left-0 w-full border-t-2 border-dotted border-gray-300 transform -translate-y-1/2"></div>
            
            {/* <!-- Circles --> */}
            <div class="relative bg-white w-15 h-15  flex items-center justify-center  ">
               <Image
                src={"/circle.png"} // Ensure this path is correct
                alt="Profile Image"
                width={100}
                height={100}
                className="w-full h-full"
              />
        </div>
            <div class="relative bg-white w-15 h-15  flex items-center justify-center ">
            <Image
                src={"/circle.png"} // Ensure this path is correct
                alt="Profile Image"
                width={100}
                height={100}
                className="w-full h-full"
              />
            </div>
            <div class="relative bg-white w-15 h-15  flex items-center justify-center">
            <Image
                src={"/circle.png"} // Ensure this path is correct
                alt="Profile Image"
                width={100}
                height={100}
                className="w-full h-full"
              />
            </div>
            <div class="relative bg-white w-15 h-15  flex items-center justify-center ">
             <Image
                src={"/circle.png"} // Ensure this path is correct
                alt="Profile Image"
                width={100}
                height={100}
                className="w-full h-full"
              />
            </div>
            <div class="relative  w-3 h-3 rounded-full shadow-md flex items-center justify-center border border-gray-300 bg-gray-300"></div>
        </div>
       
          {/* Steps Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
          {/* <!-- Card 1 --> */}
        <div class="  rounded-2xl border  overflow-hidden p-2">
            <div class=" w-full h-56 rounded-xl mb-4"> 
            <Image
                src={"/1stcard.png"}
                alt="Profile Image"
                width={100}
                height={100}
                className="w-full h-full"
              />
            </div>
            <h3 class="text-xl font-bold">Payment</h3>
            <p class="text-gray-400">Start by securing your session with a simple payment process.</p>
        </div>
        
        {/* <!-- Card 2 --> */}
        <div class="  rounded-2xl border  overflow-hidden p-2">
            <div class="bg-white w-full h-56 rounded-xl mb-4"> 
            <Image
                src={"/2ndcard.png"} 
                alt="Profile Image"
                width={100}
                height={100}
                className="w-full h-full"
              />
            </div>
            <h3 class="text-xl font-bold">Career Profiling through AI</h3>
            <p class="text-gray-400">Take an AI-driven interview to help our experts understand your skills, strengths, and aspirations better.</p>
        </div>
        
        {/* <!-- Card 3 --> */}
        <div class="  rounded-2xl border  overflow-hidden p-2">
            <div class="bg-white w-full h-56 rounded-xl mb-4">
            <Image
                src={"/3rdcard.png"} 
                alt="Profile Image"
                width={100}
                height={100}
                className="w-full h-full"
              />

            </div>
            <h3 class="text-xl font-bold">Schedule Your 1-on-1 Session</h3>
            <p class="text-gray-400">Pick a convenient time for a personal counseling session with our expert.</p>
        </div>
        
        {/* <!-- Card 4 --> */}
        <div class="  rounded-2xl border overflow-hidden p-2">
            <div class="bg-white w-full h-56 rounded-xl mb-4">
            <Image
                src={"/4thcard.png"} 
                alt="Profile Image"
                width={100}
                height={100}
                className="w-full h-full"
              />
            </div>
            <h3 class="text-xl font-bold">Career Counseling</h3>
            <p class="text-gray-400">Engage in a deep, insightful session where our experts guide you toward the best career choices based on your profile and goals.</p>
        </div>
        </div>
        </div>
    

      {/* <div class="pt-5">
        <div class="mx-auto max-w-6xl px-6">
          <div class="mx-auto text-center">
            <span class="inline-block rounded-full border-2 border-solid border-black-shade-1 px-4 py-1 text-sm font-medium">
              Career Counseling
            </span>
            <h2 class="my-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Why Choose 1 to 1 Education Consultancy?
            </h2>
          </div>
          <div class="space-y-6 mt-2">
            <div>
              <h3 class="text-xl font-semibold text-gray-900 mt-4">
                Individualized Attention:
              </h3>
              <p class="mt-2 text-sm text-gray-600">
                We believe in quality over quantity. As a boutique consultancy,
                we offer individualized attention to each student, ensuring that
                their goals and dreams take center stage in our guidance.
              </p>
            </div>

            <div>
              <h3 class="text-xl font-semibold text-gray-900">
                Customized Solutions:
              </h3>
              <p class="mt-2 text-sm text-gray-600">
                Your educational path is unlike anyone else’s. Our consultancy
                crafts personalized solutions, be it in course selection,
                university choices, or career planning, to align perfectly with
                your aspirations.
              </p>
            </div>

            <div>
              <h3 class="text-xl font-semibold text-gray-900">
                Experienced Advisors:
              </h3>
              <p class="mt-2 text-sm text-gray-600">
                Our team of experienced educational advisors brings a wealth of
                knowledge and insights. Benefit from their extensive experience
                in academia and industry as they guide you toward making
                informed decisions.
              </p>
            </div>

            <div>
              <h3 class="text-xl font-semibold text-gray-900">
                End-to-End Support:
              </h3>
              <p class="mt-2 text-sm text-gray-600">
                From the initial consultation to post-graduation advice, we
                provide end-to-end support. Our commitment doesn’t end with
                enrollment; it extends to your ongoing success in academia and
                beyond.
              </p>
            </div>
          </div>
        </div>
      </div> */}
      
    <div class="bg-gray-50 border rounded-2xl mx-auto shadow-lg p-8 max-w-[95%] w-full flex flex-col md:flex-row items-center">
        {/* <!-- Left Content --> */}
        <div class="md:w-1/2 space-y-4">
            <h1 class="text-3xl font-bold">Plan Your Career with <br/> <span class="text-black">Expert Guidance</span></h1>
            <p class="text-gray-600">Choosing the right career is a pivotal decision for every undergraduate. Career counseling provides clarity, direction, and expert insights, helping students align their strengths with the right opportunities. It bridges the gap between education and the professional world, ensuring informed and confident career choices.</p>
            
            <div class="space-y-2">
                <div class="flex items-start space-x-2">
                    <span class="text-blue-600">&#9679;</span>
                    <div>
                        <h3 class="font-semibold">Find Your Perfect Career Fit</h3>
                        <p class="text-gray-500 text-sm">Discover career paths that align with your skills, interests, and long-term goals through expert guidance.</p>
                    </div>
                </div>
                
                <div class="flex items-start space-x-2">
                    <span class="text-blue-600">&#9679;</span>
                    <div>
                        <h3 class="font-semibold">Personalized Guidance for a Confident Future</h3>
                        <p class="text-gray-500 text-sm">Get tailored advice and actionable steps to navigate your career journey with clarity and confidence.</p>
                    </div>
                </div>
            </div>
            
            <Image
              src={"/bookNow.png"}
              alt="button "
              width={200}
              height={200}
              className="  hover:scale-105 "
            />
        </div>
        
        {/* <!-- Right Image Section --> */}
        <div class="md:w-1/2 mt-6 md:mt-0 relative flex justify-center">
            <div class="bg-white w-80 h-96 rounded-xl shadow-md">
            <Image
                src={"/SmilingYoungWoman.png"}
                alt="Profile Image"
                width={100}
                height={100}
                className="w-full h-full"
              />
              
              </div> 
            
            <div class="absolute top-4 right-4 bg-white  rounded-lg shadow-md w-56 text-sm">
            <Image
                src={"/national.png"}
                alt="Profile Image"
                width={100}
                height={100}
                className="w-full h-full"
              />
            </div>
            
            <div class="absolute bottom-12 left-8  rounded-lg shadow-md w-48 h-32   text-sm">
             
                <Image
                src={"/state.png"}
                alt="Profile Image"
                width={300}
                height={300}
                className="w-full h-full"
              />
                  
                 
         
         
            
        </div>
    </div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto w-full">
        <div class=  "relative  bg-white py-6 rounded-lg shadow-md flex flex-col space-y-3">
            <div class="bg-gray-200 w-16 h-16 rounded-lg"> 
                <Image
                src={"/icon1.png"}
                alt="Profile Image"
                width={100}
                height={100}
                className="w-full h-full"
              /></div> 
            <h3 class="font-bold text-lg">Guidance That Puts You First</h3>
            <p class="text-gray-600 ">Your career path should reflect your strengths, ambitions, and interests. We take the time to understand your goals and provide insights that help you move forward with confidence.</p>
            
            <div className="absolute bottom-0 right-0 mt-5 w-40 h-32 "> 
                <Image
                src={"/calender.png"}
                alt="Profile Image"
                width={100}
                height={100}
                className="w-full h-full"
              /></div> 
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md flex flex-col space-y-3">
            <div class="bg-gray-200 w-10 h-10 rounded-lg"></div> 
            <h3 class="font-bold text-lg">Structured and Practical Career Planning</h3>
            <p class="text-gray-600">We help you navigate key decisions, whether it's choosing the right course, university, or career path by providing a clear roadmap as per your aspirations.</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md flex flex-col space-y-3">
            <div class="bg-gray-200 w-10 h-10 rounded-lg"></div> 
            <h3 class="font-bold text-lg">Expert Advice from Industry Professionals</h3>
            <p class="text-gray-600">Our team brings years of experience in education and industry, offering valuable insights that go beyond standard career advice.</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md flex flex-col space-y-3">
            <div class="bg-gray-200 w-10 h-10 rounded-lg"></div> 
            <h3 class="font-bold text-lg">Continuous Support for Long-Term Success</h3>
            <p class="text-gray-600">Our commitment doesn’t end with a consultation. We ensure you have the right resources to succeed in your academic and professional journey.</p>
        </div>
    </div>



      <div class="bg-white pt-5">
        <div class="mx-auto w-[90%] px-6">
          <div class="flex flex-col items-center rounded-lg bg-gray-50 shadow-lg md:flex-row md:items-start">
            {/* <!-- Text Content --> */}
            <div class="w-full p-8 md:w-1/2">
              <span class="inline-block rounded-full border-2 border-solid border-black-shade-1 px-4 py-1 text-sm font-medium">
                Career Counseling
              </span>
              <h2 class="mt-4 text-3xl font-bold text-gray-900 md:text-4xl">
                1 to 1 Education Consultancy
              </h2>
              <p class="mt-4 text-sm text-gray-600 md:text-base">
                Our career counseling services are designed to provide
                personalized support to students throughout their journey of
                career exploration, planning, and development.
              </p>
              <form
                className="w-full"
                action={"/api/checkout_session_counseling"}
                method="POST"
              >
                <input
                  type="hidden"
                  name="studentId"
                  value={studentProfile?.id}
                />
                <input
                  type="hidden"
                  name="candidateEmail"
                  value={studentProfile?.email}
                />
                <input
                  type="hidden"
                  name="items"
                  value={JSON.stringify([
                    {
                      id: 21,
                      instructor_id: 4,
                      title: "Career Counselling By Zubair Alam",
                      description:
                        "You will get career counselling by Syed Muhammad Zubair Alam.",
                      creation_duration_hours: 0,
                      learning_outcomes: "hhfh",
                      category: "development",
                      modulesCount: 0,
                      amount: "25",
                      discount: "0",
                      charges: "0.6",
                      active: false,
                      status: "approved",
                      enrolled_customers: [],
                      image: "c4d72670-b0d7-40e3-9663-f93ca7436f0b.png",
                      rating: null,
                      created_at: "2025-01-08T15:13:39.147Z",
                      updated_at: null,
                      reason: null,
                      status_desc: null,
                      updated_by: null,
                      video_url: "1045027946",
                      skills: null,
                      instructor: {
                        id: 4,
                        user_id: 4,
                        experience: ["web"],
                        specialization: "eevveryyythingg",
                        video_url: "1044981421",
                        status: "pending",
                        created_at: "2025-01-08T12:46:39.537Z",
                        user: {
                          id: 4,
                          status: null,
                          status_desc: null,
                          profile: null,
                          first_name: "Sanjay",
                          last_name: "Kumar",
                          email: "sanjaybaghtwani@gmail.com",
                          password: null,
                          profession: null,
                          location: null,
                          facebook_profile: null,
                          twitter_profile: null,
                          linkedin_profile: null,
                          is_active: true,
                          role: "student",
                          source: "app",
                          created_at: "2025-01-08T12:45:38.225Z",
                          updated_at: "2025-01-08T07:45:38.232Z",
                        },
                      },
                    },
                  ])}
                />
                <button
                  href="#"
                  class="mt-6 inline-flex items-center rounded-full bg-blue-600 px-6 py-2 text-sm font-medium text-white shadow transition hover:bg-blue-700"
                >
                  Book Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="ml-2 h-4 w-4"
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
                </button>
              </form>
            </div>

            {/* <!-- Image Content --> */}
            <div class=" flex w-full justify-center p-2 md:w-1/2 md:justify-end md:pt-20 lg:pt-1">
              <Image
                src="/carrer.png"
                alt="1 to 1 Education Consultancy"
                width={450}
                height={400}
                className="rounded-lg"
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
