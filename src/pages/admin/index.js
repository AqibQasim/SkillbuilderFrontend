import AdminCoursesTable from "@/components/AdminCoursesTable";
import AdminDashboardLayout from "@/components/AdminDashboardLayout";
import AdminInstructorOverview from "@/components/AdminInstructorOverview";
import AdminRevenueStatistics from "@/components/AdminRevenueStatistics";
import DashboardStudentsOverview from "@/components/DashboardStudentsOverview";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../../../redux/thunks/allCoursesThunk";
import { fetchStudents } from "../../../redux/thunks/allstudentsThunk";

const admin = () => {
  const dispatch = useDispatch();
  const { pendingCourses, courses, status, error } = useSelector(
    (state) => state.courses,
  );
  const {
    students,
    status: studentsStatus,
    error: studentsError,
  } = useSelector((state) => state.students);

  useEffect(() => {
    if (courses?.length > 0) return;
    dispatch(fetchCourses());
  }, [dispatch, courses]);

  useEffect(() => {
    if (students?.length > 0) return;
    dispatch(fetchStudents());
  }, [dispatch, students]);

  const uniqueStudents = students.reduce((acc, student) => {
    if (!acc.some((s) => s.studentId === student.studentId)) {
      acc.push(student);
    }
    return acc;
  }, []);

  return (
    <AdminDashboardLayout>
      <AdminRevenueStatistics />
      <br />
      <br />
      <AdminCoursesTable courses={pendingCourses} courseStatus="pending" />
      <br /> <br />
      <DashboardStudentsOverview
        students={uniqueStudents}
        href="admin/students"
      />
      <br /> <br />
      <AdminInstructorOverview />
    </AdminDashboardLayout>
  );
};

export default admin;
