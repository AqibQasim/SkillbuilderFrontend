import { useRouter } from "next/router";
import ViewAll from "./ViewAll";
import Avatar from "./Avatar";
import InstructorsStudentsTable from "./InstructorsStudentsTable";

function DashboardStudentsOverview({ students, isLoading, status, error }) {
  console.log("students in overview", students);
  const router = useRouter();
  const { id, view } = router.query;
  const overview = view || "overview";

  const handleViewAllClick = () => {
    if (status !== "loading" && status !== "failed") {
      console.log("going to thisss normal");
      router.push({
        pathname: router.pathname,
        query: { ...router.query, view: "students" },
      });
    }
  };

  return (
    <div className="">
      <div className="header flex items-center justify-between">
        <h2 className="text-2xl font-medium">Students</h2>
        <ViewAll onClick={handleViewAllClick} />
      </div>
      <div className="scrollbar-custom mt-4 flex min-h-12 w-full space-x-4 overflow-x-scroll bg-white px-7 py-8">
        {isLoading && <p>Loading...</p>}
        {!isLoading && !students?.length ? (
          <p>No students enrolled for the current course.</p>
        ) : null}

        {overview === "overview" ? (
          <>
            {!isLoading && students?.length
              ? students.map((student, index) => (
                  <Student key={index} student={student} />
                ))
              : null}
          </>
        ) : (
          <InstructorsStudentsTable isSpecific students={students} />
        )}
      </div>
      {status === "failed" && <div>Error: {error}</div>}
    </div>
  );
}

export default DashboardStudentsOverview;

function Student({ student }) {
  return (
    <div className="flex flex-col items-center">
      <Avatar name={student.first_name} />
      <p className="mt-2 text-nowrap text-center capitalize">
        {student.first_name} {student.last_name}
      </p>
    </div>
  );
}
