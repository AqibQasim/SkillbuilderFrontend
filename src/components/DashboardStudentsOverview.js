import { useRouter } from "next/router";
import ViewAll from "./ViewAll";
import { dummyStudents } from "@/pages/dashboard/students";
import Avatar from "./Avatar";

function DashboardStudentsOverview({ studentsLoading, students, href }) {
  const isLoading = studentsLoading ? studentsLoading : false;
  const router = useRouter();
  console.log("students?", students);

  const tempStudents = students ? students : dummyStudents;

  const handleViewAllClick = () => {
    if (href) router.push(href);
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
      <div className="scrollbar-custom mt-4 flex min-h-12 w-full space-x-4 overflow-x-scroll bg-white px-7 py-8">
        {isLoading && <p>Loading...</p>}
        {!isLoading && !tempStudents?.length ? (
          <p>No students enrolled for the current course.</p>
        ) : null}
        {!isLoading && tempStudents?.length
          ? tempStudents.map((student, index) => (
              <Student key={index} student={student} />
            ))
          : null}
      </div>
    </div>
  );
}

export default DashboardStudentsOverview;

function Student({ student }) {
  return (
    <div className="flex flex-col items-center">
      {/* <img
        src={student.image}
        alt={student.name}
        className="h-20 w-20 rounded-full object-cover"
      /> */}
      <Avatar name={student.first_name} className="!size-20" />
      <p className="mt-2 text-nowrap text-center capitalize">{`${student.first_name} ${student.last_name}`}</p>
    </div>
  );
}
