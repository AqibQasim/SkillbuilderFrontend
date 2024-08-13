import AdminDashboardLayout from "@/components/AdminDashboardLayout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../../../../redux/thunks/allCoursesThunk";
import AdminCoursesTable from "@/components/AdminCoursesTable";

const approved = () => {
  const dispatch = useDispatch();
  const { courses, status, error } = useSelector((state) => state.courses);

  console.log("status", status);
  console.log(`Error ${error}`);

  useEffect(function () {
    if (courses.length > 0) return;
    dispatch(fetchCourses());
  }, []);

  console.log(courses);

  return (
    <AdminDashboardLayout>
      <AdminCoursesTable courses={courses} courseStatus={"all"} />
    </AdminDashboardLayout>
  );
};
export default approved;
