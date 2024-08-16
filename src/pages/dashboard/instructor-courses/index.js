import DashboardLayout from "@/components/DashboardLayout";
import InstructorCourseTable from "@/components/InstructorCourseTable";
import withAuth from "@/components/WithAuth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoursesByInstructorId } from "../../../../redux/thunks/instructorCoursesThunk";
import { fetchOneInstructor } from "../../../../redux/thunks/instructorThunk";
import Loader from "@/components/Loader";
import { fetchInstructorByUserId } from "../../../../redux/thunks/InstructorByUserIdThunk";

function Courses() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.user);
  const instructorId = useSelector(
    (state) => state.instructorByUserId.instructorByUserId.id,
  );
  const instructorLoading = useSelector(
    (state) => state.instructorByUserId.loading,
  );
  const instructorError = useSelector(
    (state) => state.instructorByUserId.error,
  );
  const courses = useSelector((state) => state.instructorCourses.courses);
  console.log("instructor courses in instructor-courses page", courses);

  useEffect(() => {
    if (!userId || instructorId) return;
    dispatch(fetchInstructorByUserId(userId));
  }, [userId, instructorId]);

  useEffect(() => {
    if (!instructorId || courses?.length > 0) return;
    dispatch(fetchCoursesByInstructorId(instructorId));
  }, [instructorId, courses?.length]);

  if (instructorLoading) {
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

  // if (error) {
  //   return (
  //     <DashboardLayout>
  //       <h2>{coursesError || "Could not fetch the courses."}</h2>
  //     </DashboardLayout>
  //   );
  // }

  return (
    <DashboardLayout>
      <InstructorCourseTable courses={courses} />
    </DashboardLayout>
  );
}

export default withAuth(Courses);
