import { useSelector } from "react-redux";
import InstructorsStudentsRow from "./InstructorsStudentsRow";
import Table from "./Table";
import {
  courseStudentsdummyData,
  specificCourseStudentsDummydata,
} from "@/pages/dashboard/students";

function InstructorsStudentsTable({ isSpecific = false, students }) {
  const enrolledStudents = useSelector(
    (state) => state.singleCourse.data.enrolled_customers,
  );

  const isLoading = false;
  const error = false;

  if (isLoading) return <Loader />;
  if (
    (!isSpecific && !courseStudentsdummyData.length) ||
    (isSpecific && !specificCourseStudentsDummydata.length)
  )
    return (
      <div className="flex size-full flex-col items-center justify-center gap-4 text-center">
        <h2 className="text-2xl font-medium">No Students enrolled yet...</h2>
        <p>
          {isSpecific
            ? "No students have enrolled in this course yet"
            : "No students have enrolled yet."}
        </p>
        {/* <Button href="courseUpload" className="!px-14">
          Upload course +
        </Button> */}
      </div>
    );

  // enrolledStudents is a array get users based on that
  // createa a populated array with enrolled students based on users data

  const HeadersForOneCourse = [
    "Name",
    "Email",
    "Purchase Date",
    "Course Progress",
  ];

  const HeadersForCourses = [
    "Name",
    "Email",
    "Enrolled Courses",
    "Joining Date",
  ];

  const headers = isSpecific ? HeadersForOneCourse : HeadersForCourses;
  const data = isSpecific
    ? specificCourseStudentsDummydata
    : courseStudentsdummyData;

  return (
    <>
      {/* <div className="component-header flex items-center justify-between">
        <h2 className="text-2xl font-medium capitalize">All Students</h2>
      </div> */}
      <Table columns="grid-cols-[2.5rem_1.1fr_1.25fr_1fr_1fr_0.25fr]">
        <Table.Header>
          <div></div>
          {headers.map((heading, index) => (
            <div key={index}>{heading}</div>
          ))}
          <div></div>
        </Table.Header>
        <Table.Body
          data={data}
          render={(student, i) => (
            // For a specific course utilize enrolledStudents
            // for general students tab pass in general students array
            <InstructorsStudentsRow
              isSpecific={isSpecific}
              student={student}
              key={i}
            />
          )}
        />
      </Table>
    </>
  );
}

export default InstructorsStudentsTable;
