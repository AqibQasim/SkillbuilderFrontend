import Image from "next/image";
import StarRating from "./StarRating";
import { useRouter } from "next/router";
import { SubHeading } from "@/pages/instructor/[id]";

function InstructorTopCourses({ courses }) {
  const router = useRouter();
  return (
    <div className="top-courser mx-auto mt-16 w-[90%] max-w-screen-2xl space-y-9">
      <SubHeading>Top Courses</SubHeading>
      <div
        className="grid h-auto grid-cols-1 place-items-center gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {courses?.map((course) => (
          <div
            key={course.id}
            className="img-container flex h-auto w-full max-w-sm transform flex-col items-start rounded-2xl border border-cards_gray bg-white px-2 pb-6 pt-2 transition transition-shadow duration-300 hover:border-[rgb(152,159,233)] hover:shadow-lg"
            onClick={() => router.push(`/courses/${course.id}`)}
            style={{ minHeight: "25rem", maxHeight: "25rem" }}
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
                Duration: {course.creation_duration_hours}
              </h3>
              <div className="mt-2 flex w-full items-center justify-start gap-3">
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
