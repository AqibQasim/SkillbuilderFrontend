import ButtonCircle from "@/components/ButtonCircle";
import DashboardLayout from "@/components/DashboardLayout";
import H2 from "@/components/H2";
import Loader from "@/components/Loader";
import StudentEnrolledCourses from "@/components/StudentEnrolledCourses";
import StudentProfile from "@/components/StudentProfile";
import withAuth from "@/components/WithAuth";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FaChevronLeft, FaGraduationCap } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneUser } from "../../../../redux/thunks/userInfoThunk";

const StudentsDetail = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const studentId = router.query.id;
  const userId = useSelector((state) => state.singleUser.userData.id);
  const userLoading = useSelector((state) => state.singleUser.loading);
  const userError = useSelector((state) => state.singleUser.error);

  useEffect(() => {
    if (!studentId || userId) return;
    dispatch(fetchOneUser(studentId));
  }, [studentId, userId]);

  function handleBack() {
    router.back();
  }

  if (userLoading)
    return (
      <DashboardLayout>
        <Loader />
      </DashboardLayout>
    );

  // Todo Error isnt Showing yet
  if (userError)
    return (
      <DashboardLayout>
        <p>Could not load user</p>
      </DashboardLayout>
    );

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <ButtonCircle onClick={handleBack}>
          <FaChevronLeft />
        </ButtonCircle>
        <StudentProfile />
        {/* not available for students, only for instructors */}
        {/* <StudentEducation /> */}
        <StudentEnrolledCourses href="/dashboard/instructor-courses" />
      </div>
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
