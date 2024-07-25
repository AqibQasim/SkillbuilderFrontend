import DashboardLayout from "@/components/DashboardLayout";
import withAuth from "@/components/WithAuth";

function Students() {
  return (
    <DashboardLayout>
      <>
        <h1 className="text-2xl font-bold">Students</h1>
        <p>This is the Students page.</p>
      </>
    </DashboardLayout>
  );
}

export default Students;
