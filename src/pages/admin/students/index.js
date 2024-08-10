import withAuth from "@/components/WithAuth";
import DashboardLayout from "@/components/DashboardLayout";
import InstructorsStudentsTable from "@/components/InstructorsStudentsTable";
import AdminDashboardLayout from "@/components/AdminDashboardLayout";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllInstructors } from "../../../../redux/thunks/allInstructorsThunk";
import { fetchStudents } from "../../../../redux/thunks/allstudentsThunk";
import Loader from "@/components/Loader";
import { useEffect } from "react";
import { filterRepeatedStudents } from "@/utils/filterRepeatedStudents";

function Students() {
  const dispatch = useDispatch();
  const {
    students,
    status: studentsStatus,
    error: studentsError,
  } = useSelector((state) => state.students);

  useEffect(() => {
    if (students?.length > 0) return;
    dispatch(fetchStudents());
  }, [students]);

  const uniqueStudents =
    students.length > 0 ? filterRepeatedStudents(students) : students;

  if (studentsStatus === "loading")
    return (
      <AdminDashboardLayout>
        <div className="flex size-full items-center justify-center">
          <Loader />
        </div>
      </AdminDashboardLayout>
    );
  return (
    <AdminDashboardLayout>
      <InstructorsStudentsTable students={uniqueStudents} />
    </AdminDashboardLayout>
  );
}

export default withAuth(Students);
