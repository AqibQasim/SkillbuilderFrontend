// components/ModuleAccordion.js
import { useState } from "react";
import Image from "next/image";
import LayoutWidth from "./LayoutWidth";

function ModuleAccordion({ title, lectures, duration, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <div className="container mt-4">
    <div className="mt-4">
      <div className="border border-gray bg-white rounded-tl-3xl rounded-br-3xl">
        <div
          className="flex justify-between items-center w-full p-4 focus:outline-none cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>
            {isOpen ? "▼" : "▲"}
            <span className="font-semibold ml-4">{title} </span>
          </span>
          <span className="text-sm text-gray-500">
            {lectures} · {duration}
          </span>
        </div>
        {isOpen && <div className="pb-4 px-4">{children}</div>}
      </div>
    </div>
  );
}

export default function CourseModules() {
  return (
    <LayoutWidth>
      {/* <div className="container mt-12"> */}
      <div className="mt-12">
        <h1 className="text-2xl mb-12 font-semibold max-sm:mt-[1rem]  max-sm:text-center max-sm:text-xl max-sm:w-[100%] max-sm:mb-[1rem]">
          Course outline
        </h1>
        <div className="w-full ">
          <ModuleAccordion
            title="Module 1"
            lectures="4 Lectures"
            duration="24 mins"
          ></ModuleAccordion>
          <ModuleAccordion
            title="Module 2"
            lectures="3 Lectures"
            duration="20 mins"
          >
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <span className="flex items-center">
                  <Image
                    src="/Play.svg"
                    width={30}
                    height={30}
                    className="relative -ml-1"
                  />
                  <span className="ml-2">UI Design Principles</span>
                </span>
                <span className="text-blue-500">Preview 06:00</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="flex items-center">
                  <Image
                    src="/Play.svg"
                    width={30}
                    height={30}
                    className="relative -ml-1"
                  />
                  <span className="ml-2">Interaction Design</span>
                </span>
                <span className="text-lightgray">Lock 06:00</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="flex items-center">
                  <Image
                    src="/Play.svg"
                    width={30}
                    height={30}
                    className="relative -ml-1"
                  />
                  <span className="ml-2">Usability Testing</span>
                </span>
                <span className="text-lightgray">Lock 06:00</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="flex items-center">
                  <Image
                    src="/Play.svg"
                    width={30}
                    height={30}
                    className="relative -ml-1"
                  />
                  <span className="ml-2">Weekly Quiz</span>
                </span>
                <span className="text-lightgray">Lock 06:00</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="flex items-center">
                  <Image
                    src="/Play.svg"
                    width={30}
                    height={30}
                    className="relative -ml-1"
                  />
                  <span className="ml-2">Quiz Solution</span>
                </span>
                <span className="text-lightgray">Lock 06:00</span>
              </div>

              {/* <div className="flex items-center justify-between">
                
              <span>Interaction Design</span>
              <span>06:00</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Usability Testing</span>
              <span>06:00</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Weekly Quiz</span>
              <span>06:00</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Quiz Solution</span>
              <span>06:00</span>
            </div> */}
            </div>
          </ModuleAccordion>
          <ModuleAccordion
            title="Module 3"
            lectures="4 Lectures"
            duration="24 mins"
          ></ModuleAccordion>
          <ModuleAccordion
            title="Module 4"
            lectures="4 Lectures"
            duration="24 mins"
          ></ModuleAccordion>
        </div>
        {/* Repeat for other modules */}
      </div>
    </LayoutWidth>
  );
}
