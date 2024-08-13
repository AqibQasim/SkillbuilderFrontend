import DashboardLayout from "@/components/DashboardLayout";
import DashboardStudentsOverview from "@/components/DashboardStudentsOverview";
import InstructorCourseTable from "@/components/InstructorCourseTable";
import withAuth from "@/components/WithAuth";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudentsByInstructor } from "../../../redux/thunks/fetchStudentsByInstructorthunk";
import { fetchCoursesByInstructorId } from "../../../redux/thunks/instructorCoursesThunk";
// import students from "./students";
function Dashboard() {
  const router = useRouter();
  const userId = useSelector((state) => state.auth.user);
  const students = useSelector((state) => state.students.students);
  const studentsStatus = useSelector((state) => state.students.status);
  const studentsError = useSelector((state) => state.students.error);
  // const instructorId = useSelector((state) => state.singleInstructor.id);
  const instructorId = 4;
  const courses = useSelector((state) => state.instructorCourses.courses);
  const coursesLoading = useSelector(
    (state) => state.instructorCourses.isLoading,
  );
  const coursesError = useSelector((state) => state.instructorCourses.error);

  // ===Logs
  const state = useSelector((state) => state);
  console.log("store", state);
  console.log("User Id on dashboard", userId);
  console.log("Students on dashboard", students);
  console.log("Courses on dashboard", courses);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (!userId) return;
  //   dispatch(fetchOneInstructor(userId));
  // }, [userId]);

  useEffect(() => {
    if (!instructorId || courses?.length > 0) return;
    dispatch(fetchCoursesByInstructorId(instructorId));
  }, [instructorId, courses?.length]);

  useEffect(() => {
    if (!instructorId || students.length > 0) return;
    dispatch(fetchStudentsByInstructor(instructorId));
  }, [instructorId, students?.length]);

  return (
    <DashboardLayout>
      <InstructorCourseTable courses={courses} courseStatus="pending" />
      <div className="mt-16">
        <DashboardStudentsOverview
          students={students}
          href="dashboard/students"
        />
      </div>
    </DashboardLayout>
  );
}

export default withAuth(Dashboard);
