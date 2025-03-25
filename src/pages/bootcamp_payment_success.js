import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import HomePageNavbar from "@/components/HomePageNavbar";
import LayoutWidth from "@/components/LayoutWidth";
import HomepageFooter from "@/components/HomepageFooter";
import Image from "next/image";
import ButtonWithIcon from "@/components/ButtonWithIcon";
import BackButton from "@/components/BackButton";
import Link from "next/link";

const BootcampPaymentSuccess = () => {
  const router = useRouter();
  const { student_id, course_id } = router?.query;
  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(true);

  async function addCounseling() {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/get-live-session-course-payment-of-student?student_id=${student_id}&course_id=${course_id}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        },
      );

      if (!res.ok) {
        throw new Error(`Error: ${res.status} - ${res.statusText}`);
      }

      const responseData = await res.json();
      console.log("API Response:", responseData);
      setData(responseData.data);
    } catch (error) {
      console.error("Error adding counseling:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (student_id && course_id) {
      addCounseling();
    }
  }, [router?.isReady, student_id, course_id]);
  console.log("apidata", data);

  if (loading) return <p className="my-10 text-center">Loading...</p>;

  return (
    <>
      <LayoutWidth>
        <HomePageNavbar />
      </LayoutWidth>

      <LayoutWidth>
        <div className="my-20">
          <div class="flex min-h-screen items-center justify-center bg-gray-100">
            <div class="flex w-full max-w-4xl flex-col items-center rounded-xl bg-white p-8 shadow-md md:flex-row">
              <div class="w-full py-6 text-center md:w-1/2 md:border-r-2 md:text-left">
                <div className="flex justify-center">
                  <Image
                    src="/letter.png"
                    alt="letter Logo"
                    width={120}
                    height={50}
                    className=""
                  />
                </div>

                <h2 class="mt-4 text-center text-xl font-bold">
                  Hi! {data?.student?.first_name}
                </h2>
                <div className="mt-1 flex justify-center">
                  <Image
                    src="/GoldenLine.png"
                    alt="letter Logo"
                    width={150}
                    height={10}
                    className=""
                  />
                </div>
                <h3 class="mt-4 text-center text-lg font-semibold">
                  Thank you for joining us!
                </h3>
                <p class="text-center text-gray-600">
                  Your live session journey is about to begin!
                </p>
                <div className="mt-8 flex flex-col place-items-center justify-center gap-[8px] sm:flex-row">
                  <BackButton>Back to home </BackButton>

                  <Link href="/bootcamp" passHref>
                    <ButtonWithIcon
                      text="View All Sessions"
                      className="text-nowrap max-sm:mt-3"
                    />
                  </Link>
                </div>

                <div class="mt-4 flex justify-center space-x-4 md:justify-start"></div>
              </div>

              <div class="mx-6 hidden h-full w-[1px] bg-gray-200 md:block"></div>

              <div class="w-full p-6 md:w-1/2">
                <h3 class="text-lg font-semibold">Course Overview</h3>
                <div class="mt-4 space-y-3 text-sm text-gray-700">
                  <div>
                    <p class="font-medium">Course Name</p>
                    <div class="rounded-md border border-gray-300 p-2">
                      {" "}
                      {data?.course?.title}
                    </div>
                  </div>
                  <div>
                    <p class="font-medium">Session Date & Time</p>
                    <div class="rounded-md border border-gray-300 p-2">
                      Starts: February 10, 2025, at 5:00 PM
                    </div>
                  </div>
                  <div>
                    <p class="font-medium">Course Duration</p>
                    <div class="rounded-md border border-gray-300 p-2">
                      2 Months
                    </div>
                  </div>
                </div>

                <div className="mt-4 space-y-4 text-sm text-gray-600">
                  <div className="flex items-start gap-3">
                    <Image
                      src="/tick-circle.png"
                      alt="Checkmark Icon"
                      width={40}
                      height={20}
                      className="h-[20px] w-[20px]"
                    />
                    <p className="text-xs">
                      You’ll receive access to exclusive materials, live Q&A,
                      and recorded sessions after the class.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Image
                      src="/message.png"
                      alt="Message Icon"
                      width={20}
                      height={20}
                      className="h-[20px] w-[20px]"
                    />
                    <p className="text-xs">
                      Our account manager will add you to the exclusive WhatsApp
                      group within 24 hours.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <Image
                      src="/message.png"
                      alt="Email Icon"
                      width={20}
                      height={20}
                      className="h-[20px] w-[20px]"
                    />
                    <p className="text-xs">
                      Check your email for additional details and access links.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutWidth>
      <HomepageFooter />
    </>
  );
};

export default BootcampPaymentSuccess;
