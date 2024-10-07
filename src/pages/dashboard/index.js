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
import InstructorPendingCourseTable from "@/components/InstructorPendingCourseTable";
import Loader from "@/components/Loader";
import { IntroVideoContext } from "../../../lib/IntroVideoContext";
import { useContext } from "react";
import { useState } from "react";



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
  const pendingCourses = useSelector(
    (state) => state.instructorCourses.pendingCourses,
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
  console.log("pending Courses on dashboard", pendingCourses);

  useEffect(() => {
    if (!userId || instructorId) return;
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

  // if (coursesLoading || studentsStatus === "loading")
  //   return (
  //     <DashboardLayout>
  //       <div className="flex size-full items-center justify-center">
  //         <Loader />
  //       </div>
  //     </DashboardLayout>
  //   );

  return (
    <DashboardLayout>
      <div className="flex size-full flex-col">
        {/* <InstructorCourseTable courses={courses} courseStatus="pending" /> */}
        <div className="pending-courses">
          <InstructorPendingCourseTable
            emptyStateClasses="!size-[unset] !block"
            courses={pendingCourses}
            courseStatus="pending"
          />
        </div>
        <div className="mt-auto">
          <DashboardStudentsOverview
            students={uniqueStudents}
            href="dashboard/students"
          />
        </div>
      </div>
    </DashboardLayout>
  );
}

export default withAuth(Dashboard);