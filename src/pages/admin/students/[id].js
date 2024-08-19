import AdminDashboardLayout from "@/components/AdminDashboardLayout";
import Loader from "@/components/Loader";
import StudentProfile from "@/components/StudentProfile";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneUser } from "../../../../redux/thunks/userInfoThunk";
import StrudentEnrollCourses from "@/components/StrudentEnrollCourses";
import withAuth from "@/components/WithAuth";
import StudentEnrolledCourses from "@/components/StudentEnrolledCourses";
import ButtonCircle from "@/components/ButtonCircle";
import { FaChevronLeft } from "react-icons/fa6";

const StudentsDetail = () => {
  const router = useRouter();
  const studentId = router.query.id;
  const dispatch = useDispatch();
  const { loading: userLoading, error: userError } = useSelector(
    (state) => state.singleUser,
  );
  const enrolledCourses = useSelector(
    (state) => state.singleUser.userData.enrolled_courses_by_student,
  );

  useEffect(() => {
    if (studentId) {
      dispatch(fetchOneUser(studentId));
    }
  }, [studentId]);
  console.log("Loading...", userLoading);
  console.log("Error...", userError);

  function handleBack() {
    router.back();
  }

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
      <ButtonCircle clasName="!mb-6" onClick={handleBack}>
        <FaChevronLeft />
      </ButtonCircle>
      <StudentProfile />
      <StudentEnrolledCourses
        className="mt-12"
        enrolledCourses={enrolledCourses}
      />
    </AdminDashboardLayout>
  );
};

export default withAuth(StudentsDetail);
