import ButtonCircle from "@/components/ButtonCircle";
import CourseModules from "@/components/CourseModule";
import DashboardCourseSkills from "@/components/DashboardCourseSkills";
import DashboardLayout from "@/components/DashboardLayout";
import DashboardStudentsOverview from "@/components/DashboardStudentsOverview";
import InstructorCourseCard from "@/components/InstructorCourseCard";
import InstructorsStudentsTable from "@/components/InstructorsStudentsTable";
import Loader from "@/components/Loader";
import withAuth from "@/components/WithAuth";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneCourse } from "../../../../redux/thunks/coursesThunks";
import { fetchCoursesByInstructorId } from "../../../../redux/thunks/instructorCoursesThunk";

function CourseDetail() {
  const router = useRouter();
  const { id, view } = router.query;
  const course = useSelector((state) =>
    state.instructorCourses.courses.find((cour) => Number(id) === cour.id),
  );
  const { data: singleCourse, isLoading: isSingleCourseLoading } = useSelector(
    (state) => state.singleCourse || { data: {}, isLoading: true },
  );
  const { first_name, last_name } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  // const instructorId = useSelector((state) => state.profile.id);
  // const {
  //   courses: instructorCourses,
  //   isLoading,
  //   error,
  // } = useSelector((state) => state.instructorCourses);

  useEffect(() => {
    if (id) {
      dispatch(fetchOneCourse(id));
    }
  }, [dispatch, id]);

  // useEffect(() => {
  //   if (instructorId) {
  //     dispatch(fetchCoursesByInstructorId(instructorId));
  //   }
  // }, [dispatch, instructorId]);

  const overview = view || "overview";

  if (!course) {
    return (
      <DashboardLayout>
        <div className="flex size-full flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-2xl font-medium">Course not found</h2>
        </div>
      </DashboardLayout>
    );
  }

  function handleBack() {
    router.back();
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <ButtonCircle onClick={handleBack}>
          <FaChevronLeft />
        </ButtonCircle>

        <InstructorCourseCard
          course={course}
          createdBy={`${first_name} ${last_name}`}
        />

        {overview === "overview" ? (
          <>
            <DashboardCourseSkills course={course} />
            {/* Course Modules */}
            {isSingleCourseLoading && <Loader />}
            {!isSingleCourseLoading && !singleCourse?.modules?.length ? (
              <p>You haven't posted any modules.</p>
            ) : null}
            {!isSingleCourseLoading && singleCourse?.modules?.length ? (
              <CourseModules course={singleCourse} />
            ) : null}
            <DashboardStudentsOverview />
          </>
        ) : (
          <InstructorsStudentsTable />
        )}
      </div>
    </DashboardLayout>
  );
}

export default withAuth(CourseDetail);
