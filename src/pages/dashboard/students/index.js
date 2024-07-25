import withAuth from "@/components/WithAuth";
import DashboardLayout from "@/components/DashboardLayout";

const dummyStudents = [];

function Students() {
  return (
    <DashboardLayout>
      {!dummyStudents || dummyStudents.length === 0 ? (
        <p>No students have enrolled in your courses yet.</p>
      ) : (
        <>
          <h1 className="text-2xl font-bold">Students</h1>
          <p>This is the Students page.</p>
        </>
      )}
    </DashboardLayout>
  );
}

export default withAuth(Students);
