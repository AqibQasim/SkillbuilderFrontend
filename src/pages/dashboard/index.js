import DashboardLayout from "@/components/DashboardLayout";
import DashboardStudentsOverview from "@/components/DashboardStudentsOverview";
import InstructorCourseTable from "@/components/InstructorCourseTable";
import withAuth from "@/components/WithAuth";
import { filterRepeatedStudents } from "@/utils/filterRepeatedStudents";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudentsByInstructor } from "../../../redux/thunks/fetchStudentsByInstructorthunk";
import { fetchCoursesByInstructorId } from "../../../redux/thunks/instructorCoursesThunk";
import { fetchInstructorByUserId } from "../../../redux/thunks/InstructorByUserIdThunk";
// import students from "./students";
function Dashboard() {
  const router = useRouter();
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.user);
  const instructorId = useSelector(
    (state) => state.instructorByUserId.instructorByUserId.id,
  );
  console.log("current instructor ID", instructorId);
  const studentsByInstructor = useSelector(
    (state) => state.studentsByInstructor.students,
  );
  const studentsStatus = useSelector(
    (state) => state.studentsByInstructor.status,
  );
  const studentsError = useSelector(
    (state) => state.studentsByInstructor.error,
  );
  const courses = useSelector((state) => state.instructorCourses.courses);
  const coursesLoading = useSelector(
    (state) => state.instructorCourses.isLoading,
  );
  const coursesError = useSelector((state) => state.instructorCourses.error);
  const uniqueStudents = filterRepeatedStudents(studentsByInstructor);

  // ===Logs
  console.log("User Id on dashboard", userId);
  console.log("Students on dashboard", studentsByInstructor);
  console.log("Courses on dashboard", courses);

  useEffect(() => {
    if (!userId) return;
    dispatch(fetchInstructorByUserId(userId));
  }, [userId]);

  useEffect(() => {
    if (!instructorId || courses?.length > 0) return;
    dispatch(fetchCoursesByInstructorId(instructorId));
  }, [instructorId, courses?.length]);

  useEffect(() => {
    if (!instructorId || studentsByInstructor?.length > 0) return;
    dispatch(fetchStudentsByInstructor(instructorId));
  }, [instructorId, studentsByInstructor?.length]);

  return (
    <DashboardLayout>
      <InstructorCourseTable courses={courses} courseStatus="pending" />
      <div className="mt-16">
        <DashboardStudentsOverview
          students={uniqueStudents}
          href="dashboard/students"
        />
      </div>
    </DashboardLayout>
  );
}

export default withAuth(Dashboard);
