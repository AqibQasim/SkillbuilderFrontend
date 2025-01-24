// components/ModuleAccordion.js
import { useEffect, useState } from "react";
import Image from "next/image";
import LayoutWidth from "./LayoutWidth";
import InstructorIntro from "./InstructorIntro";
import { useSelector } from "react-redux";

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

export default function CourseModules({
  course,
  course_id,
  heading = "Course outline",
  through_instructor,
}) {
  const [isclick, setisclick] = useState(false);
  const userId = useSelector((state) => state.auth.user);
  const [courseLock, setCourseLock] = useState(true);

  const clickHandler = (index) => {
    setisclick(index);
  };

  async function getCourseStatus() {
    if (course_id && course && userId) {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/check-lock-status?course_id=${course_id}&user_id=${userId}`,
      );
      const data = await response.json();
      console.log("APU RES is ", data.lock);
      setCourseLock(data.lock);
    }
  }

  useEffect(() => {}, [course_id, userId]);

  useEffect(() => {
    console.log("#########", courseLock);
  }, [course]);

  useEffect(() => {
    const localData = localStorage.getItem("adminAuth");
    const data = JSON.parse(localData);
    console.log("Admin Auth iss", data);

    if (data) {
      const lock = data == true ? false : true;
      console.log("Lock iss ", lock);
      setCourseLock(lock);
    } else {
      getCourseStatus();
    }
  }, [course]);

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
                            { !through_instructor && <span className="text-blue-500">
                              {( courseLock )? "locked" : "unlocked"}{" "}
                              {content?.duration}
                            </span>}
                          </div>
                          {isclick === index && (!courseLock || through_instructor) ? (
                            <div>
                              <InstructorIntro
                                video={content?.content}
                                course_content_id={content?.id}
                              />
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
