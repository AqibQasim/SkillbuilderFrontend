import AdminDashboardLayout from "@/components/AdminDashboardLayout";
import AdminInstructorOverview from "@/components/AdminInstructorOverview";
import AdminPendingCourseTable from "@/components/AdminPendingCoursesTable";
import AdminRevenueStatistics from "@/components/AdminRevenueStatistics";
import DashboardStudentsOverview from "@/components/DashboardStudentsOverview";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../../../redux/thunks/allCoursesThunk";

const admin = () => {
  const dispatch = useDispatch();
  const { pendingCourses, status, error } = useSelector(
    (state) => state.courses,
  );

  useEffect(function () {
    dispatch(fetchCourses());
  }, []);

  return (
    <AdminDashboardLayout>
      <AdminRevenueStatistics />
      <br />
      <br />
      <AdminPendingCourseTable pendingCourses={pendingCourses} />
      <br /> <br />
      <DashboardStudentsOverview />
      <br /> <br />
      <AdminInstructorOverview />
    </AdminDashboardLayout>
  );
};

export default admin;
