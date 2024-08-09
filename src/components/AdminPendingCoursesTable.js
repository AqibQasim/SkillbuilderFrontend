import { useRouter } from "next/router";
import AdminPendingCourseRow from "./AdminPendingCourseRow";
import Table from "./Table";

function AdminPendingCourseTable({ pendingCourses }) {
  const router = useRouter();
  if (!pendingCourses?.length)
    return (
      <div className="flex size-full flex-col items-center justify-center gap-4 text-center">
        <h2 className="text-2xl font-medium">No Pending Courses</h2>
        <p>
          There are currently no pending courses to review. Please check back
          later.
        </p>
      </div>
    );

  return (
    <>
      <div className="component-header flex items-center justify-between">
        <h2 className="text-xl font-semibold capitalize">Pending courses</h2>
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
          data={pendingCourses}
          render={(course, i) => (
            <AdminPendingCourseRow course={course} key={i} />
          )}
        />
      </Table>
    </>
  );
}

export default AdminPendingCourseTable;
