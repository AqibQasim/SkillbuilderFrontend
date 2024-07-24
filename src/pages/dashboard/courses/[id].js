import ButtonCircle from "@/components/ButtonCircle";
import CourseModules from "@/components/CourseModule";
import DashboardCourseCard from "@/components/DashboardCourseCard";
import DashboardCourseSkills from "@/components/DashboardCourseSkills";
import DashboardLayout from "@/components/DashboardLayout";
import { useRouter } from "next/router";
import { FaChevronLeft } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneCourse } from "../../../../redux/thunks/coursesThunks";
import { useEffect } from "react";
import DashboardStudentsOverview from "@/components/DashboardStudentsOverview";
import Loader from "@/components/Loader";
import withAuth from "@/components/WithAuth";

function CourseDetail() {
  const router = useRouter();
  const { id } = router.query;
  const course = useSelector((state) =>
    state.instructorCourses.courses.find((cour) => Number(id) === cour.id),
  );
  const { data: singleCourse, isLoading: isSingleCourseLoading } = useSelector(
    (state) => state.singleCourse || { data: {}, isLoading: true },
  );
  const { first_name, last_name } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  console.log("Single course Ooooo", singleCourse);

  useEffect(() => {
    if (id) {
      dispatch(fetchOneCourse(id));
    }
  }, [dispatch, id]);

  if (!course) {
    return (
      <DashboardLayout>
        <>
          <div className="flex size-full flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-2xl font-medium">Course not found</h2>
          </div>
        </>
      </DashboardLayout>
    );
  }

  function handleBack() {
    router.back();
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <ButtonCircle onClick={handleBack} clasName="">
          <FaChevronLeft />
        </ButtonCircle>

        <DashboardCourseCard
          course={course}
          createdBy={`${first_name} ${last_name}`}
        />
        <DashboardCourseSkills course={course} />
        {/* Course Modules */}
        {isSingleCourseLoading && <Loader />}
        {!isSingleCourseLoading && !singleCourse?.modules?.length ? (
          <p>You haven't posted any modules.</p>
        ) : null}
        {!isSingleCourseLoading && singleCourse?.modules?.length ? (
          <CourseModules course={singleCourse} />
        ) : null}

        {/* Students for this course */}
        {/* <DashboardStudentsOverview /> */}
        <StudentsList />
      </div>
    </DashboardLayout>
  );
}

export default withAuth(CourseDetail);

function StudentsList() {
  const imageUrl1 =
    "https://img.freepik.com/premium-photo/cute-middle-school-teacher-3d-isolated-flat-color-background_1022901-80438.jpg?w=740";
  const imageUrl2 =
    "https://img.freepik.com/premium-photo/3d-cartoon-style-illustration-young-vietnamese-female-character-finance-educational-game_1283595-3459.jpg?w=740";
  const isLoading = false;
  // const students = [];
  const students = [
    { name: "Adriana Charlotte", image: imageUrl2 },
    { name: "Bella Catherine", image: imageUrl1 },
    { name: "Adriana Charlotte", image: imageUrl2 },
    { name: "Bella Catherine", image: imageUrl1 },
    { name: "Adriana Charlotte", image: imageUrl2 },
    { name: "Bella Catherine", image: imageUrl1 },
    { name: "Adriana Charlotte", image: imageUrl2 },
    { name: "Bella Catherine", image: imageUrl1 },
    { name: "Adriana Charlotte", image: imageUrl2 },
    { name: "Bella Catherine", image: imageUrl1 },
    { name: "Adriana Charlotte", image: imageUrl2 },
    { name: "Bella Catherine", image: imageUrl1 },
  ];
  return (
    <div className="">
      <h2 className="text-2xl font-medium">Students</h2>
      <div className="scrollbar-custom mt-4 flex min-h-12 w-full space-x-4 overflow-x-scroll bg-white px-7 py-8">
        {isLoading && <p>Loading...</p>}
        {!isLoading && !students?.length ? (
          <p>No students enrolled for the current course.</p>
        ) : null}
        {!isLoading && students?.length
          ? students.map((student, index) => (
              <Student key={index} student={student} />
            ))
          : null}
      </div>
    </div>
  );
}

function Student({ student }) {
  return (
    <div className="flex flex-col items-center">
      <img
        src={student.image}
        alt={student.name}
        className="h-20 w-20 rounded-full object-cover"
      />
      <p className="mt-2 text-nowrap text-center capitalize">{student.name}</p>
    </div>
  );
}
