import AdminLiveCourseRow from "./AdminLiveCourseRow";
import Table from "./Table";

function AdminLiveCoursesTable({ courses, courseStatus, emptyStateClasses = "" }) {
  const heading = courseStatus !== "all" ? courseStatus : null;
  console.log(heading);
  console.log(`Courses`, courses);
  if (!courses?.length)
    return (
      <div
        className={`${emptyStateClasses} text-center" flex size-full flex-col items-center justify-center gap-4`}
      >
        <h2 className="text-2xl font-medium capitalize">
          No {heading} Courses
        </h2>
        <p>
          There are currently no {heading} courses to review. Please check back
          later.
        </p>
      </div>
    );

  return (
    <>
      <Table
        className="mb-7"
        columns="grid-cols-[2.5rem_1.1fr_1.25fr_1fr_1fr]"
      >
        <Table.Header>
          <div></div>
          <div>Course</div>
          <div>Instructor</div>
          <div>Price</div>
          <div>Level</div>
        </Table.Header>
        <Table.Body
          data={courses}
          render={(course, i) => <AdminLiveCourseRow course={course} key={i} />}
        />
      </Table>
      <div className="h-32"></div>
    </>
  );
}

export default AdminLiveCoursesTable;
