import DashboardLayout from "@/components/DashboardLayout";
import withAuth from "@/components/WithAuth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoursesByInstructorId } from "../../../redux/thunks/instructorCoursesThunk";
import { fetchOneInstructor } from "../../../redux/thunks/instructorThunk";
import InstructorCourseTable from "@/components/InstructorCourseTable";
import DashboardStudentsOverview from "@/components/DashboardStudentsOverview";
function Dashboard() {
  const userId = useSelector((state) => state.auth.user);
  const instructorId = useSelector((state) => state.singleInstructor.id);
  const {
    courses: instructorCourses,
    isLoading,
    error,
  } = useSelector((state) => state.instructorCourses);
  const dispatch = useDispatch();

  console.log("id for course payload", instructorId);

  console.log("instructor Courses", instructorCourses);
  console.log("instructor Courses length", instructorCourses.length);
  3;
  useEffect(() => {
    if (instructorId) {
      dispatch(fetchCoursesByInstructorId(instructorId));
    }
  }, [dispatch, instructorId]);

  useEffect(
    function () {
      if (userId) {
        dispatch(fetchOneInstructor(userId));
      }
    },
    [userId],
  );

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
