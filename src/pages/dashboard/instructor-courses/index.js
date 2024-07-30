import DashboardLayout from "@/components/DashboardLayout";
import InstructorCourseTable from "@/components/InstructorCourseTable";
import withAuth from "@/components/WithAuth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoursesByInstructorId } from "../../../../redux/thunks/instructorCoursesThunk";
import { fetchOneInstructor } from "../../../../redux/thunks/instructorThunk";

function Courses() {
  const userId = useSelector((state) => state.auth.user);
  const instructorId = useSelector((state) => state.singleInstructor.id);
  const {
    courses: instructorCourses,
    isLoading,
    error,
  } = useSelector((state) => state.instructorCourses);
  const dispatch = useDispatch();

  console.log("instructor Courses", instructorCourses);
  console.log("instructor Courses length", instructorCourses.length);

  useEffect(() => {
    if (!instructorId) {
      dispatch(fetchOneInstructor(userId));
    }
    if (instructorId) {
      dispatch(fetchCoursesByInstructorId(instructorId));
    }
  }, [dispatch, instructorId, userId]);

  return (
    <DashboardLayout>
      <InstructorCourseTable />
    </DashboardLayout>
  );
}

export default withAuth(Courses);
