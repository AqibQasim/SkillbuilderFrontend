import AdminDashboardLayout from "@/components/AdminDashboardLayout";
import ButtonCircle from "@/components/ButtonCircle";
import H2 from "@/components/H2";
import Loader from "@/components/Loader";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FaChevronLeft, FaGraduationCap } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneInstructor } from "../../../../redux/thunks/instructorThunk";
import { fetchCoursesByInstructorId } from "../../../../redux/thunks/instructorCoursesThunk";
import StarRating from "@/components/StarRating";

const InstructorDetails = () => {
  const router = useRouter();
  const instructorId = router.query.id;
  const dispatch = useDispatch();
  const {
    courses: instructorCourses,
    isInstLoading: instructorCoursesLoading,
    error: instructorCoursesError,
  } = useSelector((state) => state.instructorCourses);
  console.log("redux instructorCourses", instructorCourses);

  const {
    isInstLoading,
    InstructorError,
    id,
    first_name,
    last_name,
    email,
    location,
    skills,
    education,
    experience,
  } = useSelector((state) => state.singleInstructor);

  const instructor = {
    id,
    first_name,
    last_name,
    email,
    location,
    skills,
    education,
    experience,
  };

  useEffect(() => {
    if (instructorId) {
      dispatch(fetchOneInstructor(instructorId));
    }
  }, [instructorId]);

  useEffect(
    function () {
      if (!id && instructorCourses.length > 0) return;
      dispatch(fetchCoursesByInstructorId(id));
    },
    [id],
  );

  console.log("Loading...", isInstLoading);
  console.log("Error...", InstructorError);

  if (isInstLoading)
    return (
      <AdminDashboardLayout>
        <Loader />
      </AdminDashboardLayout>
    );

  // Todo Error isnt Showing yet
  if (InstructorError)
    return (
      <AdminDashboardLayout>
        <ButtonCircle>
          <FaChevronLeft />
        </ButtonCircle>
        <div className="flex size-full items-center justify-center">
          <p>Could not load Instructor</p>
          <p>{InstructorError}</p>
        </div>
      </AdminDashboardLayout>
    );

  return (
    <AdminDashboardLayout>
      <ButtonCircle>
        <FaChevronLeft />
      </ButtonCircle>
      <Hero instructor={instructor} />
      {/* <Experience experience={instructor.experience} /> */}
      <div className="mt-10 space-y-10">
        <Experience
          experience={instructor?.experience ? instructor?.experience : []}
        />

        <Education education={instructor.education} />
        <RunningCourses courses={instructorCourses} />
      </div>
    </AdminDashboardLayout>
  );
};

export default InstructorDetails;

function Hero({ instructor }) {
  const icon = (iconName) =>
    `/${iconName.replace(/\s+/g, "").toLowerCase()}.svg`;

  return (
    <div className="relative -ml-5 w-[calc(100%+2.5rem)] border-b border-b-dashboard-border px-5 py-4">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center justify-center gap-2 text-center xl:flex-row xl:items-start xl:justify-start xl:gap-9 xl:text-left">
        <div className="image">
          <Image
            className="rounded-full"
            src="/instructor-avatar.png"
            height={190}
            width={190}
            alt={`${instructor.image}'s avatar photo`}
          />
        </div>
        <div className="content relative mt-4 space-y-2">
          <h1 className="text-4xl font-semibold">{`${instructor.first_name} ${instructor.last_name}`}</h1>
          <p className="text-black text-lg font-normal">
            Email:
            <span className="text-span"> &nbsp; {instructor.email}</span>
          </p>
          <p className="text-black inline-flex items-center justify-center text-lg font-normal">
            Location:{" "}
            <span className="text-span">
              {" "}
              &nbsp; {instructor.location ? instructor.location : "Unavailable"}
            </span>
            <span className="mb-1 ml-3">
              {" "}
              <Image
                src="/location.svg"
                className="h-[1.4375rem] w-[1.4375rem]"
                height={23}
                width={23}
              />{" "}
            </span>
          </p>
          <div className="skills">
            {instructor.skills.length > 0 ? (
              <>
                <p className="text-black text-lg font-normal">Super Skills:</p>
                <ul className="ml-0 mt-4 inline-flex flex-wrap items-center justify-center gap-3 xl:ml-6">
                  {instructor.skills.map((skill) => (
                    <li className="flex min-w-max items-center justify-center gap-4 text-nowrap rounded-lg bg-[#F0F2F9] px-5 py-2 text-xl font-normal text-blue">
                      <GiSkills className="h-[1.4375rem] w-[1.4375rem]" />
                      {skill.title}{" "}
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

function Experience({ experience = [] }) {
  console.log("Experience", experience);
  return (
    <div className="">
      <H2> Experience </H2>
      {experience.length > 0 ? (
        <ul className="relative ml-4 mt-2 list-disc space-y-3">
          {experience?.map((exp) => (
            <li> {exp} </li>
          ))}
        </ul>
      ) : (
        <p>No experience data available</p>
      )}
    </div>
  );
}

function Education({ education = [] }) {
  console.log("Education", education);

  return (
    <div className="">
      <H2> Education </H2>
      <ul className="mt-2 flex flex-wrap items-center justify-center gap-3">
        {education.length > 0 ? (
          education?.map((edu) => (
            <li className="flex min-w-max flex-1 flex-col items-center justify-center rounded-lg border border-blue-300 bg-white p-5 uppercase">
              {" "}
              <FaGraduationCap className="size-12 text-blue" />{" "}
              <span className="font-medium">{edu.degree} </span>
            </li>
          ))
        ) : (
          <p>No education data available</p>
        )}
      </ul>
    </div>
  );
}

function RunningCourses({ courses }) {
  console.log("Courses in running courses", courses);
  return (
    <div className="running-courses">
      <H2>Running Courses</H2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(290px,1fr))] justify-items-center gap-4">
        {courses?.map((course) => (
          <CourseCardOnAdminDashboard course={course} />
        ))}
      </div>
    </div>
  );
}

function CourseCardOnAdminDashboard({ course }) {
  return (
    <div
      key={course?.id}
      className="img-container mb-4 flex h-auto w-full max-w-sm transform flex-col items-start rounded-2xl border border-cards_gray bg-white p-2 transition duration-300 hover:border-[rgb(152,159,233)] hover:shadow-lg"
      //   onClick={() => router.push(`/courses/${course?.id}`)}
    >
      <Image
        className="w-[100%] pt-1"
        src={course?.image}
        alt={course?.title}
        width={280}
        height={260}
      />
      <div className="w-[100%] p-2">
        <div className="mt-2 flex w-full items-center justify-between">
          <div>
            <span className="text-sm">{course?.rating}</span>
            <StarRating rating={Math.round(course?.rating)} />
          </div>
        </div>
        <h3 className="mt-4 text-lg font-semibold">{course?.title}</h3>
        <p className="mb-2 text-sm">{course?.learning_outcomes}</p>
        <span className="float-right font-semibold text-blue">
          ${course?.amount}
        </span>
      </div>
    </div>
  );
}
