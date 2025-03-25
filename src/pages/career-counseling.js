"use client";
import React, { useEffect, useState } from "react";
import Banner from "@/components/Banner";
import BootcampHero from "@/components/bootcampHero";
import HomePageNavbar from "@/components/HomePageNavbar";
import { useRouter } from "next/router";
import HomepageFooter from "@/components/HomepageFooter";
import Image from "next/image";
import LayoutXPadding from "@/components/LayoutXPadding";
import HomePageReviews from "@/components/HomePageReviews";
import CareerHero from "@/components/CarrerHero";
import Counseling from "@/components/Counseling";
import CounselingProcess from "@/components/CounselingProcess";
import CareerGuidance from "@/components/CarrerGuidance";
import Decision from "@/components/Decision";
import CareerReviews from "@/components/CareerReviews";

const Page = () => {
  const [studentProfile, setStudentProfile] = useState(null);

  useEffect(() => {
    setStudentProfile(JSON.parse(localStorage.getItem("profile")));
  }, []);

  return (
    <div className="home-container py-0 w-[100%] space-y-12 font-satoshi ">
    <div className="relative bottom-4 pt-10 ">
  <div className="absolute inset-0 -z-10">
    <Image
      src={"/CareerBackRound.png"}
      alt="career-counseling Hero"
      width={1920}
      height={1080}
      className="h-full w-full object-cover"
    />
  </div>

  <LayoutXPadding>
    <div className="relative">
      <HomePageNavbar />
    </div>
  </LayoutXPadding>

  <CareerHero />
</div>
 
     <Counseling/> 
     <CounselingProcess/>
    <CareerGuidance/>
    <Decision/>

          

      {/* <div class="bg-white pt-5">
        <div class="mx-auto w-[90%] px-6">
          <div class="flex flex-col items-center rounded-lg bg-gray-50 shadow-lg md:flex-row md:items-start">
            
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
      </div>  */}

      <CareerReviews/>

      <HomepageFooter />
    </div>
  );
};

export default Page;
