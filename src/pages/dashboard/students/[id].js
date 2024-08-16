import ButtonCircle from "@/components/ButtonCircle";
import DashboardLayout from "@/components/DashboardLayout";
import H2 from "@/components/H2";
import Loader from "@/components/Loader";
import StarRating from "@/components/StarRating";
import StudentProfile from "@/components/StudentProfile";
import { formatCurrency } from "@/utils/formatCurrency";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FaChevronLeft, FaGraduationCap } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneUser } from "../../../../redux/thunks/userInfoThunk";
import withAuth from "@/components/WithAuth";

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
        <StudentEnrolledCourses />
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

function StudentEnrolledCourses() {
  const enrolledCourses = [
    {
      id: 1,
      title: "UI / UX Designing",
      rating: 4.9,
      learning_outcomes: "Equipping you with essential skills",
      amount: 250,
      image: "/courseImg.png",
    },
    {
      id: 2,
      title: "Web Development",
      rating: 4.9,
      learning_outcomes: "Equipping you with essential skills",
      amount: 250,
      image: "/courseImg.png",
    },
  ];

  return (
    <div>
      <H2 className="mb-3">Enrolled courses</H2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] justify-items-start gap-4">
        {enrolledCourses.map((course) => (
          <StudentEnrollCard course={course} key={course.id} />
        ))}
      </div>
    </div>
  );
}

function StudentEnrollCard({ course }) {
  const { id, title, rating, learning_outcomes, amount, image } = course;

  const router = useRouter();

  function handleClick() {
    router.push(`/dashboard/instructor-courses/${id}`);
  }

  return (
    <div
      onClick={handleClick}
      className="course-card img-container flex h-auto w-full max-w-sm transform cursor-pointer flex-col items-start space-y-2 rounded-bl-2xl rounded-tr-2xl border border-gray-shade-2 bg-white px-3 py-4 transition duration-300 hover:border-[rgb(152,159,233)] hover:shadow-lg"
    >
      <div className="image-wrapper relative max-h-36 w-full">
        <img
          className="!m-0 block size-full rounded-2xl object-cover"
          src={image}
          alt={`Image for ${title} course`}
        />
      </div>
      <div className="rating inline-flex items-center justify-center gap-2">
        <span>{rating}</span> <StarRating rating={rating} />
      </div>
      <h2 className="mt-2 text-xl font-semibold">{title}</h2>
      <p>{learning_outcomes}</p>
      <p className="ml-auto text-blue"> {formatCurrency(amount)} </p>
    </div>
  );
}
