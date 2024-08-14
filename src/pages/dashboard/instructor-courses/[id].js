import ButtonCircle from "@/components/ButtonCircle";
import CourseModules from "@/components/CourseModule";
import DashboardCourseSkills from "@/components/DashboardCourseSkills";
import DashboardLayout from "@/components/DashboardLayout";
import DashboardStudentsOverview from "@/components/DashboardStudentsOverview";
import InstructorCourseCard from "@/components/InstructorCourseCard";
import InstructorsCourseStudentsTable from "@/components/InstructorsCourseStudentsTable";
import Loader from "@/components/Loader";
import withAuth from "@/components/WithAuth";
import { filterRepeatedStudents } from "@/utils/filterRepeatedStudents";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from "../../../../redux/thunks/allstudentsThunk";
import { fetchOneCourse } from "../../../../redux/thunks/coursesThunks";

function CourseDetail() {
  const { first_name, last_name } = useSelector((state) => state.profile);
  const {
    data: singleCourse,
    isLoading: isSingleCourseLoading,
    error: singleCourseError,
  } = useSelector((state) => state.singleCourse);
  const { students } = useSelector((state) => state.students);
  const router = useRouter();
  const { id, view } = router.query;
  const dispatch = useDispatch();

  useEffect(() => {
    if (students?.length > 0) return;
    dispatch(fetchStudents());
  }, [students]);

  console.log("single course", singleCourse);

  useEffect(() => {
    if (id) {
      dispatch(fetchOneCourse(id));
    }
  }, [id]);

  const uniqueStudents = filterRepeatedStudents(students);

  const overview = view || "overview";

  function handleBack() {
    router.back();
  }

  if (isSingleCourseLoading) {
    return (
      <DashboardLayout>
        <Loader />
      </DashboardLayout>
    );
  }

  if (singleCourseError) {
    return (
      <DashboardLayout>
        <div className="flex size-full flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-2xl font-medium">
            {singleCourseError || "Course not found"}
          </h2>
          <p>Please check the course ID or try again later.</p>
          <ButtonCircle onClick={handleBack}>
            <FaChevronLeft />
          </ButtonCircle>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <ButtonCircle onClick={handleBack}>
          <FaChevronLeft />
        </ButtonCircle>

        <InstructorCourseCard
          course={singleCourse}
          createdBy={`${first_name} ${last_name}`}
        />

        {overview === "overview" ? (
          <>
            <DashboardCourseSkills course={singleCourse} />
            {/* Course Modules */}
            {isSingleCourseLoading && <Loader />}
            {!isSingleCourseLoading && !singleCourse?.modules?.length ? (
              <p>You haven't posted any modules.</p>
            ) : null}
            {!isSingleCourseLoading && singleCourse?.modules?.length ? (
              <CourseModules course={singleCourse} />
            ) : null}
            <DashboardStudentsOverview students={uniqueStudents} />
          </>
        ) : (
          <InstructorsCourseStudentsTable students={uniqueStudents} />
        )}
      </div>
    </DashboardLayout>
  );
}

export default withAuth(CourseDetail);
