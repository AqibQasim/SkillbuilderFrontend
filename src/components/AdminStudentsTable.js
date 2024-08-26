// import { specificCourseStudentsDummydata } from "@/pages/dashboard/students";
import { useSelector } from "react-redux";
import AdminStudentsRow from "./AdminStudentsRow";
import Table from "./Table";

function AdminStudentsTable({ isSpecific = false, students }) {
  const enrolledStudents = useSelector(
    (state) => state.singleCourse.data.enrolled_customers,
  );

  if (!isSpecific && !students.length)
    return (
      <div className="flex size-full flex-col items-center justify-center gap-4 text-center">
        <h2 className="text-2xl font-medium">No Students enrolled yet...</h2>
        <p>
          {isSpecific
            ? "No students have enrolled in this course yet"
            : "No students have enrolled yet."}
        </p>
      </div>
    );

  // enrolledStudents is a array get users based on that
  // createa a populated array with enrolled students based on users data
  const headerForOneStudent = [
    "Name",
    "Email",
    "Purchase Date",
    "Course Progress",
  ];

  const headerForStudents = ["Name", "Email", "Joining Date"];

  const headers = isSpecific ? headerForOneStudent : headerForStudents;
  const data = isSpecific ? specificCourseStudentsDummydata : students;

  return (
    <>
      <div className="component-header flex items-center justify-between">
        <h2 className="text-2xl font-medium capitalize">All Students</h2>
      </div>
      <Table columns="grid-cols-[2.5rem_1.1fr_1.25fr_1fr_0.25fr]">
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
            <AdminStudentsRow
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

export default AdminStudentsTable;
