import Table from "./Table";
import AdminCounsellingStudentsRow from "./AdminCounsellingStudentsRow";

function AdminCounsellingTable({
  students,
  courseStatus,
  emptyStateClasses = "",
}) {
  const heading = courseStatus !== "all" ? courseStatus : null;
  console.log(heading);
  console.log(`Courses`, students);
  if (!students?.length)
    return (
      <div
        className={`${emptyStateClasses} text-center" flex size-full flex-col items-center justify-center gap-4`}
      >
        <h2 className="text-2xl font-medium capitalize">
          No Students Found
        </h2>
        <p>
          There are currently no Students Enrolled . Please check back later.
        </p>
      </div>
    );

  return (
    <>
      <Table className="mb-7" columns="grid-cols-[2.5rem_1.1fr_1.25fr_1fr]">
        <Table.Header>
          <div></div>
          <div>Name</div>
          <div>Email</div>
          <div>Joining Data</div>
        </Table.Header>
        <Table.Body
          data={students}
          render={(student, i) => (
            <AdminCounsellingStudentsRow student={student} key={i} />
          )}
        />
      </Table>
      <div className="h-32"></div>
    </>
  );
}

export default AdminCounsellingTable;
