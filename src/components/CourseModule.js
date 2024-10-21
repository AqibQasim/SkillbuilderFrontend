// components/ModuleAccordion.js
import { useEffect, useState } from "react";
import Image from "next/image";
import LayoutWidth from "./LayoutWidth";
import InstructorIntro from "./InstructorIntro";

function ModuleAccordion({ title, lectures, duration, children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    // <div className="container mt-4">
    <div className="mt-4">
      <div className="border-gray rounded-br-3xl rounded-tl-3xl border bg-white">
        <div
          className="flex w-full cursor-pointer items-center justify-between p-4 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>
            {isOpen ? "▼" : "▲"}
            <span className="ml-4 font-semibold">{title} </span>
          </span>
          <span className="text-sm text-gray-500">
            {lectures} · {duration}
          </span>
        </div>
        {isOpen && <div className="px-4 pb-4">{children}</div>}
      </div>
    </div>
  );
}

export default function CourseModules({ course, heading = "Course outline" }) {
  const [isclick, setisclick] = useState(false);

  const clickHandler = (index) => {
    setisclick(index);
  };

  useEffect(() => {
    console.log("######### tahta", course);
  }, []);

  return (
    <LayoutWidth>
      {/* <div className="container mt-12"> */}
      <div className="mt-12">
        <h1 className="mb-12 text-2xl font-semibold max-sm:mb-[1rem] max-sm:mt-[1rem] max-sm:w-[100%] max-sm:text-center max-sm:text-xl">
          {heading}
        </h1>
        <div className="w-full">
          {course?.map((module) => {
            return (
              <>
                <ModuleAccordion
                  title={module?.title}
                  lectures={`Lectures`}
                  duration={module?.content?.length}
                >
                  <div className="space-y-1">
                    {module?.content?.map((content, index) => {
                      return (
                        <>
                          <div
                            className="flex cursor-pointer items-center justify-between"
                            onClick={() => clickHandler(index)}
                          >
                            <span className="flex items-center">
                              <Image
                                src="/Play.svg"
                                width={30}
                                height={30}
                                className="relative -ml-1"
                              />
                              <span className="ml-2">{content?.title}</span>
                            </span>
                            <span className="text-blue-500">
                              {content?.lock_status} {content?.duration}
                            </span>
                          </div>
                          {isclick === index ? (
                            <div>
                              <InstructorIntro video={content?.content}/>
                            </div>
                          ) : null}
                        </>
                      );
                    })}
                  </div>
                </ModuleAccordion>
              </>
            );
          })}
        </div>
      </div>
    </LayoutWidth>
  );
}
