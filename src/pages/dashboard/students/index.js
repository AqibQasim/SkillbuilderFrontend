import DashboardLayout from "@/components/DashboardLayout";
import InstructorsStudentsTable from "@/components/InstructorsStudentsTable";
import Loader from "@/components/Loader";
import withAuth from "@/components/WithAuth";
import { filterRepeatedStudents } from "@/utils/filterRepeatedStudents";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudentsByInstructor } from "../../../../redux/thunks/fetchStudentsByInstructorthunk";
import { fetchInstructorByUserId } from "../../../../redux/thunks/InstructorByUserIdThunk";

function Students() {
  const router = useRouter();
  const dispatch = useDispatch();
  const instructorId = useSelector(
    (state) => state.instructorByUserId.instructorByUserId.id,
  );
  const userId = useSelector((state) => state.auth.user);
  const studentsByInstructor = useSelector(
    (state) => state.studentsByInstructor.students,
  );
  const studentsStatus = useSelector(
    (state) => state.studentsByInstructor.status,
  );
  const studentsError = useSelector(
    (state) => state.studentsByInstructor.error,
  );

  const uniqueStudents = filterRepeatedStudents(studentsByInstructor);

  // ===Logs
  console.log("Students on dashboard", studentsByInstructor);

  useEffect(() => {
    if (!userId || instructorId) return;
    dispatch(fetchInstructorByUserId(userId));
  }, [userId, instructorId]);

  useEffect(() => {
    if (!instructorId || studentsByInstructor?.length > 0) return;
    dispatch(fetchStudentsByInstructor(instructorId));
  }, [instructorId, studentsByInstructor?.length]);

  if (studentsStatus === "loading")
    return (
      <DashboardLayout>
        <div className="flex size-full items-center justify-center">
          <Loader />
        </div>
      </DashboardLayout>
    );

  if (studentsStatus === "failed")
    return (
      <DashboardLayout>
        <div className="flex size-full items-center justify-center capitalize">
          <p>{studentsError} </p>
        </div>
      </DashboardLayout>
    );

  return (
    <DashboardLayout>
      <InstructorsStudentsTable students={uniqueStudents} />
    </DashboardLayout>
  );
}

export default withAuth(Students);
