import DashboardLayout from "@/components/DashboardLayout";
import InstructorsStudentsTable from "@/components/InstructorsStudentsTable";
import withAuth from "@/components/WithAuth";
import { filterRepeatedStudents } from "@/utils/filterRepeatedStudents";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudentsByInstructor } from "../../../../redux/thunks/fetchStudentsByInstructorthunk";

function Students() {
  const router = useRouter();
  const dispatch = useDispatch();
  const studentsByInstructor = useSelector(
    (state) => state.studentsByInstructor.students,
  );
  const studentsStatus = useSelector(
    (state) => state.studentsByInstructor.status,
  );
  const studentsError = useSelector(
    (state) => state.studentsByInstructor.error,
  );
  // const instructorId = useSelector((state) => state.singleInstructor.id);
  const instructorId = 4;
  const uniqueStudents = filterRepeatedStudents(studentsByInstructor);

  // ===Logs
  console.log("Students on dashboard", studentsByInstructor);

  useEffect(() => {
    if (!instructorId || studentsByInstructor?.length > 0) return;
    dispatch(fetchStudentsByInstructor(instructorId));
  }, [instructorId, studentsByInstructor?.length]);

  return (
    <DashboardLayout>
      <InstructorsStudentsTable students={uniqueStudents} />
    </DashboardLayout>
  );
}

export default withAuth(Students);
