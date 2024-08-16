import { useSelector } from "react-redux";
import InstructorsCourseStudentsRow from "./InstructorsCourseStudentsRow";
import Table from "./Table";

function InstructorsCourseStudentsTable({ students }) {
  const enrolledStudents = useSelector(
    (state) => state.singleCourse.data.enrolled_customers,
  );
  console.log("enrolled students", enrolledStudents);

  if (!students.length)
    return (
      <div className="flex size-full flex-col items-center justify-center gap-4 text-center">
        <h2 className="text-2xl font-medium">No Students enrolled yet...</h2>
        <p>No students have enrolled yet.</p>
      </div>
    );

  return (
    <>
      <div className="component-header mb-2 flex items-center justify-between">
        <h2 className="text-2xl font-medium capitalize">Students:</h2>
      </div>
      <Table columns="grid-cols-[2.5rem_1.1fr_1.25fr_1fr_1fr_0.25fr]">
        <Table.Header>
          <div></div>
          <div className="name">Name</div>
          <div className="email">Email</div>
          <div className="purchase-date">Purchase date</div>
          {/* <div className="course-progress">course progress</div> */}
          <div className="joining-date">Joining date</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={students}
          render={(student, i) => (
            <InstructorsCourseStudentsRow student={student} key={i} />
          )}
        />
      </Table>
    </>
  );
}

export default InstructorsCourseStudentsTable;
