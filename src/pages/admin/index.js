import AdminCoursesTable from "@/components/AdminCoursesTable";
import AdminDashboardLayout from "@/components/AdminDashboardLayout";
import AdminInstructorOverview from "@/components/AdminInstructorOverview";
import AdminRevenueStatistics from "@/components/AdminRevenueStatistics";
import DashboardStudentsOverview from "@/components/DashboardStudentsOverview";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../../../redux/thunks/allCoursesThunk";
import { fetchStudents } from "../../../redux/thunks/allstudentsThunk";
import { filterRepeatedStudents } from "@/utils/filterRepeatedStudents";
import { fetchAllInstructors } from "../../../redux/thunks/allInstructorsThunk";

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

  const {
    instructors,
    status: instructorsStatus,
    error: instructorsError,
  } = useSelector((state) => state.allInstructors);

  useEffect(() => {
    console.log("running instructors Effect");
    if (instructors?.length > 0) return;
    dispatch(fetchAllInstructors());
  }, [instructors]);

  useEffect(() => {
    if (courses?.length > 0) return;
    dispatch(fetchCourses());
  }, [courses]);

  useEffect(() => {
    if (students?.length > 0) return;
    dispatch(fetchStudents());
  }, [students]);

  const uniqueStudents = filterRepeatedStudents(students);

  return (
    <AdminDashboardLayout>
      <AdminRevenueStatistics />
      <br />
      <br />
      <AdminCoursesTable
        emptyStateClasses="!size-[unset] !block"
        courses={pendingCourses}
        courseStatus="pending"
      />
      <br /> <br />
      {studentsStatus === "loading" ? (
        "Loading..."
      ) : (
        <DashboardStudentsOverview
          href="admin/students"
          students={uniqueStudents}
        />
      )}
      <br /> <br />
      {instructorsStatus === "loading" ? (
        "Loading..."
      ) : (
        <AdminInstructorOverview
          href="admin/instructors"
          instructors={instructors}
        />
      )}
    </AdminDashboardLayout>
  );
};

export default admin;
