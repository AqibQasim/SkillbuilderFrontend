import { useRouter } from "next/router";
import ViewAll from "./ViewAll";
// import students, { dummyStudents } from "@/pages/dashboard/students";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import fetchStudentsByInstructorSlice from "../../redux/slices/fetchStudentsByInstructorSlice";

function DashboardStudentsOverview() {
  const isLoading = false;
  const router = useRouter();
  const dispatch = useDispatch();
  const instructorId = useSelector((state) => state.singleInstructor.id);
  
  const status = useSelector((state) => state.students.status);
  const error = useSelector((state) => state.students.error);

  console.log("the id of this :", instructorId);

  const handleViewAllClick = () => {
    const instructorsId = 1;

    useEffect(() => {
      dispatch(fetchStudentsByInstructorSlice(instructorsId));
    }, [dispatch, instructorId]);

    if (status === "loading") {
      return <div>Loading...</div>;
    }

    if (status === "failed") {
      return <div>Error: {error}</div>;
    }

    router.push({
      pathname: router.pathname,
      query: { ...router.query, view: "students" },
    });
  };

  return (
    <div className="">
      <div className="header flex items-center justify-between">
        <h2 className="text-2xl font-medium">Students</h2>
        <ViewAll onClick={handleViewAllClick} />
      </div>
      {/* <div className="scrollbar-custom mt-4 flex min-h-12 w-full space-x-4 overflow-x-scroll bg-white px-7 py-8">
        {isLoading && <p>Loading...</p>}
        {!isLoading && !Students?.length ? (
          <p>No students enrolled for the current course.</p>
        ) : null}
        {!isLoading && Students?.length
          ? Students.map((student, index) => (
              <Student key={index} student={student} />
            ))
          : null}
      </div> */}
    </div>
  );
}

export default DashboardStudentsOverview;

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
