import ButtonCircle from "@/components/ButtonCircle";
import CoursStatusIconSvg from "@/components/CoursStatusIconSvg";
import { statusClass } from "@/components/DashboardCourseRow";
import DashboardLayout from "@/components/DashboardLayout";
import { formatCurrency } from "@/utils/formatCurrency";
import { useRouter } from "next/router";
import { FaChevronLeft } from "react-icons/fa6";
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

  function handleBack() {
    router.back();
  }

  return (
    <DashboardLayout>
      <ButtonCircle onClick={handleBack} clasName="">
        <FaChevronLeft />
      </ButtonCircle>
      {/* Course-overview */}
      <div className="course-overview relative mt-2 flex items-center justify-start">
        <div className="image">
          <img src={course.image} alt={`${course.title}'s Image`} />
        </div>

        {/* course status */}
        <div
          className={`flex w-max items-center justify-center gap-3 rounded-md px-3 py-2 ${statusClass[course.status]}`}
        >
          <CoursStatusIconSvg
            className="h-5 w-5"
            status={course.status.toLowerCase()}
          />
          <span className="capitalize">{course.status}</span>
        </div>
        {/* course status */}
      </div>
      {/* Course-overview */}
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
