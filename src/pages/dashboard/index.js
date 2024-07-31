import DashboardLayout from "@/components/DashboardLayout";
import withAuth from "@/components/WithAuth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoursesByInstructorId } from "../../../redux/thunks/instructorCoursesThunk";
import InstructorCourseTable from "@/components/InstructorCourseTable";
import DashboardStudentsOverview from "@/components/DashboardStudentsOverview";

function Dashboard() {
  // const dispatch = useDispatch();
  // const instructorId = useSelector((state) => state.profile.id);
  // const {
  //   courses: instructorCourses,
  //   isLoading,
  //   error,
  // } = useSelector((state) => state.instructorCourses);

  // console.log("instructor Courses", instructorCourses);
  // console.log("instructor Courses length", instructorCourses.length);

  // useEffect(() => {
  //   if (instructorId) {
  //     dispatch(fetchCoursesByInstructorId(instructorId));
  //   }
  // }, [dispatch, instructorId]);

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
      <InstructorCourseTable filter_courses="Pending Courses" />
      <div className="mt-16">
        <DashboardStudentsOverview />
      </div>
    </DashboardLayout>
  );
}

export default withAuth(Dashboard);
