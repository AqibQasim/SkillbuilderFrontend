import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Button from "./Button";
import InstructorCourseRow from "./InstructorCourseRow";
import Filter from "./Filter";
import Loader from "./Loader";
import Table from "./Table";

const filterOptions = [
  { label: "All", value: "all" },
  { label: "Approved", value: "approved" },
  { label: "Pending", value: "pending" },
  { label: "Declined", value: "declined" },
];

function InstructorCourseTable() {
  const {
    courses: instructorCourses,
    isLoading,
    error,
  } = useSelector((state) => state.instructorCourses);
  const router = useRouter();
  const status = router.query.status || "all";

  if (isLoading) return <Loader />;
  if (!instructorCourses.length)
    return (
      <div className="flex size-full flex-col items-center justify-center gap-4 text-center">
        <h2 className="text-2xl font-medium">No Courses posted yet... </h2>
        <p>
          you haven’t posted any course yet, please click the button to get
          started
        </p>
        <Button href="courseUpload" className="!px-14">
          Upload course +
        </Button>
      </div>
    );

  let filteredinstructorCourses;
  if (status === "all") filteredinstructorCourses = instructorCourses;
  if (status === "approved")
    filteredinstructorCourses = instructorCourses.filter(
      (course) => course.status === "approved",
    );
  if (status === "pending")
    filteredinstructorCourses = instructorCourses.filter(
      (course) => course.status === "pending",
    );
  if (status === "declined")
    filteredinstructorCourses = instructorCourses.filter(
      (course) => course.status === "declined",
    );

  return (
    <>
      <div className="component-header flex items-center justify-between">
        <h1 className="text-4xl font-semibold">All Courses</h1>
        <Filter filterField="status" options={filterOptions} />
      </div>

      <Table columns="grid-cols-[2.5rem_1.1fr_1.25fr_1fr_1fr_1fr_0.25fr]">
        <Table.Header>
          <div></div>
          <div>Course</div>
          <div>Instructor</div>
          <div>Price</div>
          <div>Discount</div>
          <div>Status</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={filteredinstructorCourses}
          render={(course, i) => (
            <InstructorCourseRow course={course} key={i} />
          )}
        />
      </Table>
    </>
  );
}

export default InstructorCourseTable;
