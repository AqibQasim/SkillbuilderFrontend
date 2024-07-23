import { dummyCourses } from "@/components/DashboardCourseTable";
import DashboardLayout from "@/components/DashboardLayout";
import { formatCurrency } from "@/utils/formatCurrency";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

function CourseDetail() {
  const router = useRouter();
  const { id } = router.query;

  const course = useSelector((state) =>
    state.instructorCourses.courses.find((cour) => Number(id) === cour.id),
  );
  const { first_name, last_name } = useSelector((state) => state.profile);

  if (!course) {
    return (
      <DashboardLayout>
        <>
          <div className="flex size-full flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-2xl font-medium">Course not found</h2>
          </div>
        </>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="course-detail">
        <h1 className="text-4xl font-semibold">{course.title}</h1>
        <p>
          Instructor: {first_name} {last_name}{" "}
        </p>
        <p>Price: {formatCurrency(Number(course.amount))}</p>
        <p>Skills: {course.skills}</p>
        <p>Status: {course.status}</p>
        <img src={course.image} alt={course.title} />
      </div>
    </DashboardLayout>
  );
}

export default CourseDetail;
