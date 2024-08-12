import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import LayoutWidth from "./LayoutWidth";

const CourseInstructor = ({ course, user, instructor }) => {
  const router = useRouter();
  const experienceArray = [];

  // console.log("THE INSTRUCTOR ID IS: ", instructor.id)

  if (instructor?.experience) {
    try {
      // Replace curly braces with square brackets and convert to a valid JSON array
      const formattedExperience = instructor.experience
        .replace(/{/g, "[")
        .replace(/}/g, "]");
      experienceArray.push(...JSON.parse(formattedExperience));
    } catch (error) {
      console.error("Error parsing experience JSON:", error);
    }
  }

  console.log(`user first name is: ${user.first_name}`)
  return (
    <LayoutWidth>
      <div className="path-wrapper">
        <h1 className="mb-[-0.5rem] text-2xl font-semibold max-sm:mb-[1rem] max-sm:mt-[1rem] max-sm:w-[100%] max-sm:text-center max-sm:text-xl">
          Course Instructor
        </h1>
        <div className="mv mt-8 w-full max-w-sm rounded-bl-3xl rounded-tr-3xl border border-gray-200 bg-white shadow max-sm:mx-auto">
          <div
            className="flex flex-col items-center pb-10 pt-5 cursor-pointer"
            onClick={() => {

              router.push(`/instructor/${course?.instructor_id}`)   

            }
            }
              
          >
            <Image
              src="/instructor-avatar.png"
              width={182}
              height={183}
              alt="Instructor Avatar"
            />
            <h5 className="mb-1 pt-5 text-xl font-semibold text-gray-900">
              {user && `${user?.first_name} ${user?.last_name}`}
            </h5>
            <span className="w-[100%] text-center text-sm text-gray-500 dark:text-darkgray">
              {instructor && (
                <div className="flex w-[100%] justify-center gap-3 text-center">
                  {experienceArray.map((exp, index) => (
                    <span className="flex" key={index}>
                      {exp}
                    </span>
                  ))}
                </div>
              )}
            </span>
          </div>
        </div>
      </div>
    </LayoutWidth>
  );
};

export default CourseInstructor;
