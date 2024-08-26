import AdminDashboardLayout from "@/components/AdminDashboardLayout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../../../../redux/thunks/allCoursesThunk";
import AdminCoursesTable from "@/components/AdminCoursesTable";
import withAuth from "@/components/WithAuth";

const approved = () => {
  const dispatch = useDispatch();
  const { courses, approvedCourses, status, error } = useSelector(
    (state) => state.courses,
  );

  console.log("status", status);
  console.log(`Error ${error}`);

  useEffect(function () {
    if (courses.length > 0) return;
    dispatch(fetchCourses());
  }, []);

  console.log(approvedCourses);

  return (
    <AdminDashboardLayout>
      <AdminCoursesTable courses={approvedCourses} courseStatus={"approved"} />
    </AdminDashboardLayout>
  );
};
export default withAuth(approved);
