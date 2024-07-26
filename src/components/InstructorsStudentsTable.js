import { useSelector } from "react-redux";
import { dummyStudents } from "./DashboardStudentsOverview";
import InstructorsStudentsRow from "./InstructorsStudentsRow";
import Table from "./Table";

function InstructorsStudentsTable() {
  const enrolledStudents = useSelector(
    (state) => state.singleCourse.data.enrolled_customers,
  );
  // enrolledStudents is a array get users based on that
  // createa a populated array with enrolled students based on users data

  return (
    <>
      <div className="component-header flex items-center justify-between">
        <h2 className="text-2xl font-medium capitalize">Students</h2>
      </div>
      <Table columns="grid-cols-[2.5rem_1.1fr_1.25fr_1fr_1fr_0.25fr]">
        <Table.Header>
          <div></div>
          <div>Name</div>
          <div>Email</div>
          <div className="text-center">Purchase Date</div>
          <div className="text-center">Course Progress</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={dummyStudents}
          render={(student, i) => (
            <InstructorsStudentsRow student={student} key={i} />
          )}
        />
      </Table>
    </>
  );
}

export default InstructorsStudentsTable;
