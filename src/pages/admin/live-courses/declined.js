import AdminDashboardLayout from "@/components/AdminDashboardLayout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLiveCourses } from "../../../../redux/thunks/allLiveCoursesThunk";
import AdminCoursesTable from "@/components/AdminCoursesTable";
import withAuth from "@/components/WithAuth";
import WithAdminAuth from "@/components/WithAdminAuth";
import AdminLiveCoursesTable from "@/components/AdminLiveCoursesTable";

const approved = () => {
  const dispatch = useDispatch();
  const { courses, declinedCourses, status, error } = useSelector(
    (state) => state.courses,
  );

  console.log("status", status);
  console.log(`Error ${error}`);

  useEffect(function () {
    if (courses.length > 0) return;
    dispatch(fetchLiveCourses());
  }, []);

  console.log("Declined courses dsad", declinedCourses);
  console.log("courses dsadsa", courses);

  return (
    <AdminDashboardLayout>
      <AdminLiveCoursesTable courses={declinedCourses} courseStatus={"declined"} />
    </AdminDashboardLayout>
  );
};
export default WithAdminAuth(approved);
