import { dummyStudents } from "@/pages/dashboard/students";
import { useRouter } from "next/router";
import Avatar from "./Avatar";
import ViewAll from "./ViewAll";

function DashboardStudentsOverview({ students, href, expand = true }) {
  const router = useRouter();
  console.log("students overview?", students);

  const handleViewAllClick = () => {
    if (href) return router.push(href);

    router.push({
      pathname: router.pathname,
      query: { ...router.query, view: "instructors" },
    });
  };

  return (
    <div className="">
      <div className="header flex items-center justify-between">
        <h2 className="text-2xl font-medium">Students</h2>
        {expand && <ViewAll onClick={handleViewAllClick} />}
      </div>
      <div className="scrollbar-custom mt-4 flex min-h-12 w-full space-x-4 overflow-x-scroll rounded-sm bg-white px-7 py-8">
        {!students?.length ? (
          <p>No students enrolled for the current course.</p>
        ) : null}
        {students?.length
          ? students.map((student, index) => (
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
      <Avatar
        firstName={student.first_name}
        lastName={student.last_name}
        className="!size-20"
      />
      <p className="mt-2 text-nowrap text-center capitalize">{`${student.first_name} ${student.last_name}`}</p>
    </div>
  );
}
