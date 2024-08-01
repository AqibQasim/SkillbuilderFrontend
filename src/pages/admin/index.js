import AdminRevenueStatistics from "@/components/AdminRevenueStatistics";
import DashboardLayout from "@/components/DashboardLayout";
import InstructorCourseTable from "@/components/InstructorCourseTable";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCoursesByInstructorId } from "../../../redux/thunks/instructorCoursesThunk";
import DashboardStudentsOverview from "@/components/DashboardStudentsOverview";
import AdminInstructorOverview from "@/components/AdminInstructorOverview";
import AdminDashboardLayout from "@/components/AdminDashboardLayout";

const admin = () => {
  const dispatch = useDispatch();
  const instructorId = useSelector((state) => state.profile.id);
  const {
    courses: instructorCourses,
    isLoading,
    error,
  } = useSelector((state) => state.instructorCourses);

  console.log("instructor Courses", instructorCourses);
  console.log("instructor Courses length", instructorCourses.length);

  useEffect(() => {
    if (instructorId) {
      dispatch(fetchCoursesByInstructorId(instructorId));
    }
  }, [dispatch, instructorId]);
  return (
    <AdminDashboardLayout>
      <AdminRevenueStatistics />
      <br />
      <br />
      <InstructorCourseTable />
      <br /> <br />
      <DashboardStudentsOverview />
      <br /> <br />
      <AdminInstructorOverview />
    </AdminDashboardLayout>
  );
};

export default admin;
