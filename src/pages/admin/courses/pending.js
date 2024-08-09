import AdminDashboardLayout from "@/components/AdminDashboardLayout";
import AdminPendingCourseTable from "@/components/AdminPendingCoursesTable";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../../../../redux/thunks/allCoursesThunk";

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
      <AdminPendingCourseTable pendingCourses={pendingCourses} />
    </AdminDashboardLayout>
  );
};
export default pending;
