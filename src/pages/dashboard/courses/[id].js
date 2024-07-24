import ButtonCircle from "@/components/ButtonCircle";
import DashboardCourseCard from "@/components/DashboardCourseCard";
import DashboardLayout from "@/components/DashboardLayout";
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

      <DashboardCourseCard
        className="mt-5"
        course={course}
        createdBy={`${first_name} ${last_name}`}
      />
    </DashboardLayout>
  );
}

export default CourseDetail;
