import Image from "next/image";
import { useState } from "react";
import { HiMiniChevronDown } from "react-icons/hi2";

export default function DashboardCourseModules({ modules }) {
  console.log("######### tahta", modules);
  return (
    <div className="rounded-sm bg-white">
      {modules?.map((module) => {
        return (
          <ModuleAccordion
            title={module?.title}
            lectures={`Lectures`}
            duration="24 mins"
          >
            <div className="space-y-1">
              {module?.content?.map((content) => {
                return (
                  <>
                    <div className="flex items-center justify-between">
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
                  </>
                );
              })}
            </div>
          </ModuleAccordion>
        );
      })}
    </div>
  );
}

function ModuleAccordion({ title, lectures, duration, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <div
        className="flex w-full cursor-pointer items-center justify-start p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <HiMiniChevronDown
          className={`size-6 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />

        <span className="ml-4 font-semibold">{title} </span>
        <span className="ml-auto text-sm text-gray-500">
          {lectures} · {duration}
        </span>
      </div>
      {isOpen && <div className="px-4 pb-4">{children}</div>}
    </div>
  );
}
