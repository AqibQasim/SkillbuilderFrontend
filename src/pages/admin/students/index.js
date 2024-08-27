import AdminDashboardLayout from "@/components/AdminDashboardLayout";
import InstructorsStudentsTable from "@/components/InstructorsStudentsTable";
import Loader from "@/components/Loader";
import withAuth from "@/components/WithAuth";
import { filterRepeatedStudents } from "@/utils/filterRepeatedStudents";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from "../../../../redux/thunks/allstudentsThunk";
import AdminStudentsTable from "@/components/AdminStudentsTable";

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
  }, [students?.length]);

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
      <AdminStudentsTable students={uniqueStudents} />
    </AdminDashboardLayout>
  );
}

export default withAuth(Students);
