import AdminDashboardLayout from "@/components/AdminDashboardLayout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLiveCourses } from "../../../../redux/thunks/allLiveCoursesThunk";
import AdminCoursesTable from "@/components/AdminCoursesTable";
import withAuth from "@/components/WithAuth";
import WithAdminAuth from "@/components/WithAdminAuth";
import AdminLiveCoursesTable from "@/components/AdminLiveCoursesTable";

const pending = () => {
  const dispatch = useDispatch();
  const { courses, pendingCourses, status, error } = useSelector(
    (state) => state.liveCourses,
  );

  console.log("status", status);
  console.log(`Error ${error}`);

  useEffect(function () {
    if (courses.length > 0) return;
    dispatch(fetchLiveCourses());
  }, []);

  console.log(pendingCourses);

  return (
    <AdminDashboardLayout>
      <AdminLiveCoursesTable courses={pendingCourses} courseStatus="pending" />
    </AdminDashboardLayout>
  );
};
export default WithAdminAuth(pending);
