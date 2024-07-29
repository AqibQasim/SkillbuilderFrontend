import { useSelector } from "react-redux";
import { dummyStudents as specificCourseStudents } from "./DashboardStudentsOverview";
import InstructorsStudentsRow from "./InstructorsStudentsRow";
import Table from "./Table";

const instructorsStudents = specificCourseStudents;

function InstructorsStudentsTable({ isFor = "general" }) {
  const enrolledStudents = useSelector(
    (state) => state.singleCourse.data.enrolled_customers,
  );
  // enrolledStudents is a array get users based on that
  // createa a populated array with enrolled students based on users data

  const HeadersForOneCourse = [
    "name",
    "email",
    "purchase date",
    "course progress",
  ];

  const HeadersForCourses = [
    "name",
    "enrolled courses",
    "email",
    "joining date",
  ];

  return (
    <>
      <div className="component-header flex items-center justify-between">
        <h2 className="text-2xl font-medium capitalize">Students</h2>
      </div>
      <Table columns="grid-cols-[2.5rem_1.1fr_1.25fr_1fr_1fr_0.25fr]">
        <Table.Header>
          <div></div>
          {isFor === "specific"
            ? HeadersForOneCourse.map((heading) => <div>{heading}</div>)
            : HeadersForCourses.map((heading) => <div> {heading} </div>)}
          <div></div>
        </Table.Header>
        <Table.Body
          data={
            isFor === "specific" ? specificCourseStudents : instructorsStudents
          }
          render={(student, i) => (
            // For a specific course utilize enrolledStudents
            // for general students tab pass in general students array
            <InstructorsStudentsRow isFor={isFor} student={student} key={i} />
          )}
        />
      </Table>
    </>
  );
}

export default InstructorsStudentsTable;
