import AdminDashboardLayout from "@/components/AdminDashboardLayout";
import InstructorCourseTable from "@/components/InstructorCourseTable";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoursesByInstructorId } from "../../../../redux/thunks/instructorCoursesThunk";

const approved = () => {
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
      <InstructorCourseTable />
    </AdminDashboardLayout>
  );
};
export default approved;
