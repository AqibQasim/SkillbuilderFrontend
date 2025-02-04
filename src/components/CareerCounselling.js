import React, { useEffect, useState } from "react";
import Image from "next/image";
import ButtonWithIcon from "./ButtonWithIcon";
import PointerDiv from "./PointerDiv";
import { useRouter } from "next/router";

const CareerCounselling = () => {
  const [studentProfile, setStudentProfile] = useState(null);

  useEffect(() => {
    setStudentProfile(JSON.parse(localStorage.getItem("profile")));
  }, []);

  const router = useRouter();

  return (
    <section className="relative bg-gray-50 px-4 py-16 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <span className="rounded-full border border-purple-500 p-2 px-4 text-sm font-semibold text-purple-500">
            Career Counseling
          </span>
          <h2 className="mx-auto mt-4 max-w-[70%] text-3xl font-bold text-gray-900 lg:text-4xl">
            1-on-1 sessions with certified career coaches.
          </h2>
          <p className="mx-auto mt-4 max-w-[85%] text-sm text-gray-400 lg:text-[unset]">
            Struggling to understand where to focus? A personalized career
            counseling session can provide clear guidance tailored to your
            profile.
          </p>
        </div>
        <div className="relative mx-auto max-w-[40rem] px-12">
          <div className="relative overflow-hidden rounded-xl border border-gray-200 p-4 shadow-lg">
            <Image
              src="/Career.png"
              alt="Career Counseling Session"
              width={400}
              height={225}
              className="h-auto w-full object-cover"
            />
            <h3 className="mt-4 text-center text-xl font-bold text-gray-900 lg:text-2xl">
              Career Counselling
            </h3>
            <p className="text-center">
              Offer professional career guidance to help the candidate navigate
              challenges and strategize for improvement.
            </p>
            <br />
            {/* <form
              className="mx-layout-lg mb-3 w-full"
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
              /> */}
            <ButtonWithIcon
              onClick={() => {
                router.push("/career-counseling");
              }}
              text="Book a career counselling"
              className="mx-auto"
            />
            {/* </form> */}
          </div>

          <div className="absolute left-0 top-3/4 -translate-x-full -translate-y-1/2 transform max-lg:hidden">
            <PointerDiv />
          </div>
          <div className="absolute right-0 top-1/4 -translate-y-1/2 translate-x-full transform max-lg:hidden">
            <PointerDiv cursorPosition="left" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerCounselling;
