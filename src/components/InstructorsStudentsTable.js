import { useSelector } from "react-redux";
import InstructorsStudentsRow from "./InstructorsStudentsRow";
import Table from "./Table";

function InstructorsStudentsTable({ isSpecific = false, students }) {
  const enrolledStudents = useSelector(
    (state) => state.singleCourse.data.enrolled_customers,
  );
  console.log("enrolled students", enrolledStudents);

  const isLoading = false;

  if (isLoading) return <Loader />;
  if (!students.length)
    return (
      <div className="flex size-full flex-col items-center justify-center gap-4 text-center">
        <h2 className="text-2xl font-medium">No Students enrolled yet...</h2>
        <p>No students have enrolled yet.</p>
      </div>
    );

  const HeadersForOneStudent = [
    "Name",
    "Email",
    "Purchase Date",
    "Course Progress",
  ];

  return (
    <>
      <div className="component-header flex items-center justify-between">
        {/* <h2 className="text-2xl font-medium capitalize">Students:</h2> */}
        <h1 className="text-4xl font-semibold capitalize">All Students</h1>
      </div>
      <Table columns="grid-cols-[2.5rem_1.1fr_1.25fr_1fr_0.25fr]">
        <Table.Header>
          <div></div>
          <div className="name">Name</div>
          <div className="email">Email</div>
          {/* <div className="enrolled-courses">Enrolled courses</div> */}
          <div className="joining-date">Joining date</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={students}
          render={(student, i) => (
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
