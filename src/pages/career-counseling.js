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
    <div className="home-container mx-auto w-[100%] space-y-12 font-satoshi">
      <div className=" bg-lightbrown" >
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
          className=""
        />
      </div>
  </div>
  </div>
</div>
</div>


      <div className="mx-auto w-[90%]">
        <div className="mx-auto text-center">
          <div className="mb-4 inline-block rounded-full border-2 border-solid border-black-shade-1 px-4 py-1 text-sm font-medium">
            Career Counseling
          </div>
          <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-4xl">
            Career Counselling and Guidance
          </h2>
        </div>
        <div className="px-7 py-6 md:py-12">
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

      <div className="pt5">
        <div className="mx-auto w-[90%] px-6">
          {/* Section Header */}
          <div className="mb-10 text-center">
            <span className="inline-block rounded-full border-2 border-solid border-blue-700 px-4 py-1 text-sm font-medium text-blue-700">
              Career Counseling
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Process of Career Counselling and Guidance
            </h2>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
                className="rounded-lg bg-gray-shade-4 p-6 shadow-lg"
              >
                <div className="mb-10 flex justify-between rounded-2xl border-[1px] border-solid border-neutral-700 p-1 px-2">
                  <div className="text-sm font-medium">Step</div>
                  <div className="text-sm">{item.step}</div>
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
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div class="pt-5">
        <div class="mx-auto max-w-6xl px-6">
          <div class="mx-auto text-center">
            <span class="inline-block rounded-full border-2 border-solid border-black-shade-1 px-4 py-1 text-sm font-medium">
              Career Counseling
            </span>
            <h2 class="my-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Why Choose 1 to 1 Education Consultancy?
            </h2>
          </div>
          <div class="mt-2 space-y-6">
            <div>
              <h3 class="mt-4 text-xl font-semibold text-gray-900">
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
            <div class="flex w-full justify-center p-2 md:w-1/2 md:justify-end md:pt-20 lg:pt-1">
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
