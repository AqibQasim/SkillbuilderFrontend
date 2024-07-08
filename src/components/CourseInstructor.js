import React from "react";
import Image from "next/image";
import courses from "@/data/courses";
import { useRouter } from "next/router";
import LayoutWidth from "./LayoutWidth";

const CourseInstructor = ({ user, instructor }) => {
  // console.log("User in course instructor:", user);
  // console.log("instructor in course instructor:", instructor.experience);
  const router = useRouter();
  const { id } = router.query;
  const course = courses.find((course) => course.id === parseInt(id));


  // const instructor = user;
  let experienceArray = [];
  if (instructor?.experience) {
    try {
      // Replace curly braces with square brackets and convert to a valid JSON array
      const formattedExperience = instructor.experience.replace(/{/g, "[").replace(/}/g, "]");
      experienceArray = JSON.parse(formattedExperience);
    } catch (error) {
      console.error("Error parsing experience JSON:", error);
    }
  }


  return (
    <>
      {/* <div className="container"> */}
      <LayoutWidth>
        <div className="path-wrapper">
          <h1 className="text-2xl mb-[-0.5rem] font-semibold max-sm:mt-[1rem]  max-sm:text-center max-sm:text-xl max-sm:w-[100%] max-sm:mb-[1rem]">
            Course Instructor
          </h1>
          <div class="w-full mt-8 max-w-sm bg-white border border-gray-200 rounded-tr-3xl rounded-bl-3xl shadow mv max-sm:mx-auto">
            <div class="flex flex-col items-center pb-10 pt-5">
              <Image src='/instructor-avatar.png' width={182} height={183} />
              {/* <img
              class="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="/docs/images/people/profile-picture-3.jpg"
              alt="Bonnie image"
            /> */}
              <h5 class="mb-1 text-xl font-semibold text-gray-900 pt-5">
                {user && (
                  <>
                    {`${user?.first_name} ${user?.last_name}`}
                  </>
                )}
              </h5>
              <span class="text-sm w-[100%] text-center text-gray-500 dark:text-darkgray">
                {instructor && (
                  <div className="w-[100%] flex gap-3 justify-center text-center " >
                    {experienceArray.map((exp, index) => (
                      <span className="flex" key={index}>{exp}</span>
                    ))}
                  </div>
                )}
              </span>
            </div>
          </div>
        </div>
      </LayoutWidth>
    </>
  );
};
export default CourseInstructor;
