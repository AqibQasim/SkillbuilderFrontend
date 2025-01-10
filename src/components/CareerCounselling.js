import React from "react";
import Image from "next/image";
import ButtonWithIcon from "./ButtonWithIcon";
import PointerDiv from "./PointerDiv";

const CareerCounselling = () => {
  return (
    <section className="relative bg-gray-50 px-4 py-16 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <span className="rounded-full border border-purple-500 p-2 px-4 text-sm font-semibold text-purple-500">
            Career Counseling
          </span>
          <h2 className="mx-auto mt-4 max-w-[70%] text-3xl font-bold text-gray-900 lg:text-5xl">
            1-on-1 sessions with certified career coaches.
          </h2>
          <p className="mx-auto mt-4 text-gray-400">
            Struggling to understand where to focus? A personalized career
            counseling session can provide clear guidance tailored to your
            profile.
          </p>
        </div>
        <div className="relative mx-auto max-w-2xl">
          <div className="relative overflow-hidden rounded-lg border border-gray-200 shadow-lg">
            <Image
              src="/Career.png"
              alt="Career Counseling Session"
              width={400}
              height={225}
              className="h-auto w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 lg:text-2xl">
                Career Counseling
              </h3>
              <p className="mt-2 text-gray-600">
                Offer professional career guidance to help the candidate
                navigate challenges and strategize for improvement.
              </p>
              <div className="mt-4">
                <ButtonWithIcon text="Book a career counseling" />
              </div>
            </div>
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
