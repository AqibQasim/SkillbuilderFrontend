import AdminDashboardLayout from "@/components/AdminDashboardLayout";
import Loader from "@/components/Loader";
import StudentProfile from "@/components/StudentProfile";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneUser } from "../../../../redux/thunks/userInfoThunk";
import StrudentEnrollCourses from "@/components/StrudentEnrollCourses";
import withAuth from "@/components/WithAuth";
import StudentEnrolledCourses from "@/components/StudentEnrolledCourses";
import ButtonCircle from "@/components/ButtonCircle";
import { FaChevronLeft } from "react-icons/fa6";
import WithAdminAuth from "@/components/WithAdminAuth";

const StudentsDetail = () => {
  const router = useRouter();
  const studentId = router.query.id;
  // const dispatch = useDispatch();
  // const { loading: userLoading, error: userError } = useSelector(
  //   (state) => state.singleUser,
  // );
  // const enrolledCourses = useSelector(
  //   (state) => state.singleUser.userData.enrolled_courses_by_student,
  // );

  // const userData = useSelector(
  //   (state) => state.singleUser,
  // )

  const [enrolledCourses, setEnrolledCourses] = useState(null)
  const [student, setStudent] = useState(null)


  const getUser = ( async () => {
    try{
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user/${studentId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          // body: JSON.stringify({ token }),
        });
        const data = await response.json();

        return data;

    }catch(error){
      console.log("Error: ", error)
    }
  })

  useEffect(() => {
  const fetchStudent = async () => {
    if (studentId) {
      try {
        const student = await getUser();
        if (student) {
          console.log("RESPP", student?.message);
          setEnrolledCourses(student?.message?.enrolled_courses_by_student || []);
          setStudent(student?.message)
        }
      } catch (error) {
        console.error("Error fetching student:", error);
      }
    }
  };

  fetchStudent(); // Call the function
}, [studentId]);


  // useEffect(() => {
  //   console.log("The Enrolled courses are ", userData)
  // }, [userData])

  // console.log("Loading...", userLoading);
  // console.log("Error...", userError);

  function handleBack() {
    router.back();
  }

  // if (userLoading)
  //   return (
  //     <AdminDashboardLayout>
  //       <Loader />
  //     </AdminDashboardLayout>
  //   );

  // // Todo Error isnt Showing yet
  // if (userError)
  //   return (
  //     <AdminDashboardLayout>
  //       <p>Could not load user</p>
  //     </AdminDashboardLayout>
  //   );

  return (
    <AdminDashboardLayout>
      <ButtonCircle clasName="!mb-6" onClick={handleBack}>
        <FaChevronLeft />
      </ButtonCircle>
      {student && <StudentProfile studentData={student} />}
      <StudentEnrolledCourses
        className="mt-12"
        enrolledCourses={enrolledCourses}
      />
    </AdminDashboardLayout>
  );
};

export default WithAdminAuth(StudentsDetail);
