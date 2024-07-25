import DashboardLayout from "@/components/DashboardLayout";
import InstructorCourseTable from "@/components/InstructorCourseTable";
import withAuth from "@/components/WithAuth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoursesByInstructorId } from "../../../../redux/thunks/instructorCoursesThunk";

function Courses() {
  const dispatch = useDispatch();
  const instructorId = useSelector((state) => state.profile.id);
  const {
    courses: instructorCourses,
    isLoading,
    error,
  } = useSelector((state) => state.instructorCourses);

  console.log("instructor Courses", instructorCourses);
  console.log("instructor Courses length", instructorCourses.length);

  useEffect(() => {
    if (instructorId) {
      dispatch(fetchCoursesByInstructorId(instructorId));
    }
  }, [dispatch, instructorId]);

  return (
    <DashboardLayout>
      <InstructorCourseTable />
    </DashboardLayout>
  );
}

export default withAuth(Courses);
