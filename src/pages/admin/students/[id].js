import AdminDashboardLayout from "@/components/AdminDashboardLayout";
import Loader from "@/components/Loader";
import StrudentEnrollCourses from "@/components/StrudentEnrollCourses";
import StudentProfile from "@/components/StudentProfile";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneUser } from "../../../../redux/thunks/userInfoThunk";

const StudentsDetail = () => {
  const router = useRouter();
  const studentId = router.query.id;
  const dispatch = useDispatch();
  const { loading: userLoading, error: userError } = useSelector(
    (state) => state.singleUser,
  );

  useEffect(() => {
    if (studentId) {
      dispatch(fetchOneUser(studentId));
    }
  }, [studentId]);
  console.log("Loading...", userLoading);
  console.log("Error...", userError);

  if (userLoading)
    return (
      <AdminDashboardLayout>
        <Loader />
      </AdminDashboardLayout>
    );

  // Todo Error isnt Showing yet
  if (userError)
    return (
      <AdminDashboardLayout>
        <p>Could not load user</p>
      </AdminDashboardLayout>
    );

  return (
    <AdminDashboardLayout>
      <StudentProfile />
      {/* <StudentEducation /> */}
      <StrudentEnrollCourses paddingTop="pt-10" heading="Enrolled Courses" />
      {/* <Courses paddingTop="pt-10" heading="Enrolled Courses" /> */}
    </AdminDashboardLayout>
  );
};

export default StudentsDetail;
