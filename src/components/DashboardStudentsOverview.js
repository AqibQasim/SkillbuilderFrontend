import { useRouter } from "next/router";
import ViewAll from "./ViewAll";
import { dummyStudents } from "@/pages/dashboard/students";

function DashboardStudentsOverview() {
  const isLoading = false;
  const router = useRouter();

  const handleViewAllClick = () => {
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
        {!isLoading && !dummyStudents?.length ? (
          <p>No students enrolled for the current course.</p>
        ) : null}
        {!isLoading && dummyStudents?.length
          ? dummyStudents.map((student, index) => (
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
      <img
        src={student.image}
        alt={student.name}
        className="h-20 w-20 rounded-full object-cover"
      />
      <p className="mt-2 text-nowrap text-center capitalize">{student.name}</p>
    </div>
  );
}
