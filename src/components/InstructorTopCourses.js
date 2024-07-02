import Image from "next/image";
import StarRating from "./StarRating";
import { useRouter } from "next/router";
import { SubHeading } from "@/pages/instructor/[instructorId]";

function InstructorTopCourses({ courses }) {
  const router = useRouter();
  return (
    <div className="top-courser w-[90%] max-w-screen-2xl mx-auto mt-16 space-y-9">
      <SubHeading>Top Courses</SubHeading>
      <div className="h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center">
        {courses?.map((course) => (
          <div
            key={course.id}
            className="img-container border border-cards_gray h-auto w-full max-w-sm bg-white rounded-2xl pt-2 px-2 pb-6 flex flex-col items-start transform transition transition-shadow duration-300 hover:shadow-lg hover:border-[rgb(152,159,233)]"
            onClick={() => router.push(`/courses/${course.id}`)}
          >
            <Image
              className="w-[100%] pt-1"
              src={course.image}
              alt={course.title}
              width={280}
              height={260}
            />
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">{course.title}</h3>
              <h3 className="text-sm font-normal">
                Duration: {course.duration}
              </h3>
              <div className="w-full flex justify-start items-center gap-3 mt-2">
                <span className="text-sm">{course.rating}</span>
                <StarRating rating={Math.round(course.rating)} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default InstructorTopCourses;
