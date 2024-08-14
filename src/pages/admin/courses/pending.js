import AdminDashboardLayout from "@/components/AdminDashboardLayout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../../../../redux/thunks/allCoursesThunk";
import AdminCoursesTable from "@/components/AdminCoursesTable";

const pending = () => {
  const dispatch = useDispatch();
  const { courses, pendingCourses, status, error } = useSelector(
    (state) => state.courses,
  );

  console.log("status", status);
  console.log(`Error ${error}`);

  useEffect(function () {
    if (courses.length > 0) return;
    dispatch(fetchCourses());
  }, []);

  console.log(pendingCourses);

  return (
    <AdminDashboardLayout>
      <AdminCoursesTable courses={pendingCourses} courseStatus="pending" />
    </AdminDashboardLayout>
  );
};
export default pending;
