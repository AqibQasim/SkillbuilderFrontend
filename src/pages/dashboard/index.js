import DashboardLayout from "@/components/DashboardLayout";
import DashboardStudentsOverview from "@/components/DashboardStudentsOverview";
import InstructorCourseTable from "@/components/InstructorCourseTable";
import withAuth from "@/components/WithAuth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudentsByInstructor } from "../../../redux/thunks/fetchStudentsByInstructorthunk";
import { fetchCoursesByInstructorId } from "../../../redux/thunks/instructorCoursesThunk";
import { fetchOneInstructor } from "../../../redux/thunks/instructorThunk";
import { useRouter } from "next/router";
// import students from "./students";
function Dashboard() {
  const router = useRouter();
  const userId = useSelector((state) => state.auth.user);
  const students = useSelector((state) => state.students.students);
  const studentsStatus = useSelector((state) => state.students.status);
  const studentsError = useSelector((state) => state.students.error);
  const instructorId = useSelector((state) => state.singleInstructor.id);
  // const state = useSelector((state) => state);
  // console.log("store", state);
  console.log("store students", students);
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

  useEffect(
    function () {
      console.log("inside effect");
      if (instructorId) {
        console.log("run this effect");
        dispatch(fetchStudentsByInstructor(instructorId));
        console.log("students are :", students);
      }
    },
    [instructorId],
  );

  return (
    <DashboardLayout>
      <InstructorCourseTable filter_courses="Pending Courses" />
      <div className="mt-16">
        <DashboardStudentsOverview
          students={students}
          error={studentsError}
          status={studentsStatus}
          isLoading={studentsStatus === "loading"}
        />
      </div>
    </DashboardLayout>
  );
}

export default withAuth(Dashboard);
