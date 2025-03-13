import AdminInstructorsRow from "./AdminInstructorsRow";
import Table from "./Table";

function AdminInstructorsTable({ isSpecific = false, instructors }) {

  if (!instructors.length)
    return (
      <div className="flex size-full flex-col items-center justify-center gap-4 text-center">
        <h2 className="text-2xl font-semibold">No Instructors Registered</h2>
        <p className="text-lg">
          It looks like no instructors have signed up yet. As soon as they do,
          you'll see them listed here.
        </p>
      </div>
    );

  const headerForOneInstructor = [
    "Name",
    "Email",
    "Purchase Date",
    "Course Progress",
  ];
  const headerForInstructors = [
    "Name",
    "Email",
    "Joining Date",
    "Course Rights",
    "Bootcamp Rights",
    "Career Counselling Rights",
  ];
  const headers = isSpecific ? headerForOneInstructor : headerForInstructors;

  return (
    <>
      <div className="component-header flex items-center justify-between">
        <h2 className="text-2xl font-medium capitalize">All Instructors</h2>
      </div>
      <Table columns="grid-cols-[2.5rem_0.5fr_0.6fr_0.3fr_0.3fr_0.3fr_0.25fr_0.11fr]">
        <Table.Header>
          <div></div>
          {headers.map((heading, index) => (
            <div
              key={index}
              className="flex items-center justify-center text-center"
            >
              {heading}
            </div>
          ))}
          <div></div>
        </Table.Header>
        <Table.Body
          data={instructors}
          render={(instructor, i) => (
            <AdminInstructorsRow
              isSpecific={isSpecific}
              instructor={instructor}
              key={i}
            />
          )}
        />
      </Table>
    </>
  );
}

export default AdminInstructorsTable;
