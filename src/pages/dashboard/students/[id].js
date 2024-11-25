import ButtonCircle from "@/components/ButtonCircle";
import DashboardLayout from "@/components/DashboardLayout";
import H2 from "@/components/H2";
import Loader from "@/components/Loader";
import StudentEnrolledCourses from "@/components/StudentEnrolledCourses";
import StudentProfile from "@/components/StudentProfile";
import withAuth from "@/components/WithAuth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaGraduationCap } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneUser } from "../../../../redux/thunks/userInfoThunk";
import { studentEnrolledCoursesForOneInstructor } from "../../../../redux/thunks/studentEnrolledCoursesForOneInstructorThunk";
import { fetchInstructorByUserId } from "../../../../redux/thunks/InstructorByUserIdThunk";

const StudentsDetail = () => {
  const router = useRouter();
  // const dispatch = useDispatch();
  const studentId = router.query.id;
  const [enrolledCourses, setEnrolledCourses] = useState(null)
  const [student, setStudent] = useState(null)
  // const userId = useSelector((state) => state.singleUser.userData.id);
  // const instructorId = useSelector(
  //   (state) => state.instructorByUserId.instructorByUserId.id,
  // );
  // const userLoading = useSelector((state) => state.singleUser.loading);
  // const userError = useSelector((state) => state.singleUser.error);
  // const studentEnrolledCoursesForThisInstructor = useSelector(
  //   (state) => state.studentEnrolledCoursesForOneInstructor.courses,
  // );
  // const loadingStudentEnrolledCourses = useSelector(
  //   (state) => state.studentEnrolledCoursesForOneInstructor.loading,
  // );
  // useEffect(() => {
  //   if (!studentId || userId) return;
  //   dispatch(fetchOneUser(studentId));
  // }, [studentId, userId]);

  // useEffect(() => {
  //   if (!userId || instructorId) return;
  //   dispatch(fetchInstructorByUserId(userId));
  // }, [userId]);

  // useEffect(() => {
  //   if (!instructorId || !studentId) return;
  //   dispatch(
  //     studentEnrolledCoursesForOneInstructor({
  //       instructorId,
  //       studentId,
  //     }),
  //   );
  // }, [instructorId, studentId]);

  function handleBack() {
    router.back();
  }

 


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


  // console.log("courses: ", studentEnrolledCoursesForThisInstructor);
  // console.log("instructorId: ", instructorId);
  // console.log("studentId: ", studentId);

  // if (userLoading)
  //   return (
  //     <DashboardLayout>
  //       <Loader />
  //     </DashboardLayout>
  //   );

  // // Todo Error isnt Showing yet
  // if (userError)
  //   return (
  //     <DashboardLayout>
  //       <p>Could not load user</p>
  //     </DashboardLayout>
  //   );

  return (
    <DashboardLayout>
      <ButtonCircle clasName="!mb-6" onClick={handleBack}>
        <FaChevronLeft />
      </ButtonCircle>
      {student && <StudentProfile studentData={student} />}
      <StudentEnrolledCourses
        className="mt-12"
        href="/dashboard/instructor-courses"
        enrolledCourses={enrolledCourses}
      />
    </DashboardLayout>
  );
};

export default withAuth(StudentsDetail);

function StudentEducation() {
  const { userData: studentUser } = useSelector((state) => state.singleUser);
  // const education = studentUser.education;
  const education = [
    { degree: "B.S. in CS" },
    { degree: "B.S. in SE" },
    { degree: "B.E. in IT" },
  ];
  console.log("Student user", studentUser);

  return (
    <div className="">
      <H2> Education </H2>
      <ul className="mt-2 flex flex-wrap items-center justify-center gap-3">
        {education.length > 0 ? (
          education?.map((edu) => (
            <li className="flex min-w-max flex-1 flex-col items-center justify-center rounded-lg border border-blue-300 bg-white p-5 uppercase">
              {" "}
              <FaGraduationCap className="size-12 text-blue" />{" "}
              <span className="font-medium">{edu.degree} </span>
            </li>
          ))
        ) : (
          <p className="mr-auto">No education data available</p>
        )}
      </ul>
    </div>
  );
}
