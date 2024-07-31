import DashboardLayout from "@/components/DashboardLayout";
import InstructorCourseTable from "@/components/InstructorCourseTable";
import withAuth from "@/components/WithAuth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoursesByInstructorId } from "../../../../redux/thunks/instructorCoursesThunk";
import { fetchOneInstructor } from "../../../../redux/thunks/instructorThunk";
import Loader from "@/components/Loader";

function Courses() {
  const userId = useSelector((state) => state.auth.user);
  const {
    id: instructorId,
    isInstLoading: instructorLoading,
    InstructorError: instructorError,
  } = useSelector((state) => state.singleInstructor);
  const {
    courses: instructorCourses,
    isLoading: coursesLoading,
    error: coursesError,
  } = useSelector((state) => state.instructorCourses);
  const dispatch = useDispatch();

  console.log("userID", userId);
  console.log("instructorId", instructorId);

  console.log("instructor Courses", instructorCourses);
  console.log("instructor Courses length", instructorCourses.length);

  useEffect(() => {
    if (instructorId) {
      console.log("fetch course by instructor id");
      dispatch(fetchCoursesByInstructorId(instructorId));
    }
  }, [dispatch, instructorId]);

  useEffect(
    function () {
      if (userId) {
        console.log("fetchOneInstructor");
        dispatch(fetchOneInstructor(userId));
      }
    },
    [userId],
  );

  if (instructorLoading || coursesLoading) {
    return (
      <DashboardLayout>
        <Loader />
      </DashboardLayout>
    );
  }

  if (instructorError) {
    return (
      <DashboardLayout>
        <h2>{instructorError || "Could not fetch the instructor details."}</h2>
      </DashboardLayout>
    );
  }

  if (coursesError) {
    return (
      <DashboardLayout>
        <h2>{coursesError || "Could not fetch the courses."}</h2>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <InstructorCourseTable
        courses={instructorCourses}
        filter_courses="All Courses"
      />
    </DashboardLayout>
  );
}

export default withAuth(Courses);
