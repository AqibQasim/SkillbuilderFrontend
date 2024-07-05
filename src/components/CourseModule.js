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

export default function CourseModules({ course }) {
  return (
    <LayoutWidth>
      {/* <div className="container mt-12"> */}
      <div className="mt-12">
        <h1 className="text-2xl mb-12 font-semibold max-sm:mt-[1rem]  max-sm:text-center max-sm:text-xl max-sm:w-[100%] max-sm:mb-[1rem]">
          Course outline
        </h1>
        <div className="w-full ">
          {
            course?.modules?.map((module) => {
              return (
                <>
                  <ModuleAccordion
                    title={module?.title}
                    lectures={`${module?.content?.length} Lectures`}
                    duration="24 mins"
                  >
                    <div className="space-y-1">
                      {module?.content?.map((content) => {
                        return (
                          <>
                            <div className="flex justify-between items-center">
                              <span className="flex items-center">
                                <Image
                                  src="/Play.svg"
                                  width={30}
                                  height={30}
                                  className="relative -ml-1"
                                />
                                <span className="ml-2">{content?.title}</span>
                              </span>
                              <span className="text-blue-500">Preview 06:00</span>
                            </div>
                          </>
                        )
                      })}
                    </div>
                  </ModuleAccordion>
                </>
              )
            })
          }
        </div>
          
      </div>
    </LayoutWidth>
  );
}
