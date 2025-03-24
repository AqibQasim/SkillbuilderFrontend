import AdminLiveCourseRow from "./AdminLiveCourseRow";
import AdminLiveCourseStudentRow from "./AdminLiveCourseStudentRow";
import Table from "./Table";

function AdminLiveCoursesStudents({
  students,
  studentStatus,
  emptyStateClasses = "",
}) {
  const heading = studentStatus !== "all" ? studentStatus : null;
  console.log(heading);
  console.log(`students are :`, students);
  if (!students?.length)
    return (
      <div
        className={`${emptyStateClasses} text-center" flex size-full flex-col items-center justify-center gap-4`}
      >
        <h2 className="text-2xl font-medium capitalize">
          No Enrolled  Students
        </h2>
        {/* <p>
          There are currently no {heading} courses to review. Please check back
          later.
        </p> */}
      </div>
    );

  return (
    <>
      <Table className="mb-7" columns="grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr]">
        <Table.Header>
          <div>Name</div>
          <div>Email</div>
          <div>Course</div>
          <div>Instructor</div>
          <div>Purchase Date</div>
          <div>Purchase Time</div>
        </Table.Header>
        <Table.Body
          data={students}
          render={(student, i) => (
            <AdminLiveCourseStudentRow studentData={student} key={i} />
          )}
        />
      </Table>
      <div className="h-32"></div>
    </>
  );
}

export default AdminLiveCoursesStudents;
