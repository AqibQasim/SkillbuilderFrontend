import withAuth from "@/components/WithAuth";
import DashboardLayout from "@/components/DashboardLayout";
import InstructorsStudentsTable from "@/components/InstructorsStudentsTable";

const dummyStudents = [];

function Students() {
  return (
    <DashboardLayout>
      <InstructorsStudentsTable isFor="general" />
    </DashboardLayout>
  );
}

export default withAuth(Students);
