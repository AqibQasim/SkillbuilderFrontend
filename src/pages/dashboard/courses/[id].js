import { dummyCourses } from "@/components/DashboardCourseTable";
import DashboardLayout from "@/components/DashboardLayout";
import { useRouter } from "next/router";

function CourseDetail() {
  const router = useRouter();
  const { id } = router.query;

  const course = dummyCourses.find((course) => course.id.toString() === id);

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
        <p>Instructor: {course.instructor}</p>
        <p>Price: {course.price}</p>
        <p>Skills: {course.skills}</p>
        <p>Status: {course.status}</p>
        <img src={course.image} alt={course.title} />
      </div>
    </DashboardLayout>
  );
}

export default CourseDetail;
