import { useRouter } from "next/router";
import Avatar from "./Avatar";
import ViewAll from "./ViewAll";

function AdminInstructorOverview({ instructors, href }) {
  const router = useRouter();
  console.log("instructors?", instructors);

  const handleViewAllClick = () => {
    if (href) router.push(href);
    router.push({
      pathname: router.pathname,
      query: { ...router.query, view: "instructors" },
    });
  };

  return (
    <div className="">
      <div className="header flex items-center justify-between">
        <h2 className="text-2xl font-medium">Instructors</h2>
        <ViewAll onClick={handleViewAllClick} />
      </div>
      <div className="scrollbar-custom mt-4 flex min-h-12 w-full space-x-4 overflow-x-scroll bg-white px-7 py-8">
        {!instructors?.length ? (
          <p>No instructors have uploaded any course yet.</p>
        ) : null}
        {instructors?.length
          ? instructors.map((instructor, index) => (
              <Instructor key={index} instructor={instructor} />
            ))
          : null}
      </div>
    </div>
  );
}

export default AdminInstructorOverview;

function Instructor({ instructor }) {
  console.log("One Instructor: ", instructor);
  const { first_name, last_name } = instructor.user;
  return (
    <div className="flex flex-col items-center">
      {/* <img
        src={student.image}
        alt={student.name}
        className="h-20 w-20 rounded-full object-cover"
      /> */}
      <Avatar name={first_name} className="!size-20" />
      <p className="mt-2 text-nowrap text-center capitalize">{`${first_name} ${last_name}`}</p>
    </div>
  );
}
