import withAuth from "@/components/WithAuth";
import DashboardLayout from "../../components/DashboardLayout";

function Assignment() {
  return (
    <DashboardLayout>
      <>
        <div className="text-center">
          <h1 className="text-2xl font-bold">Assignment</h1>
          <p>This is the Assignment page.</p>
        </div>
      </>
    </DashboardLayout>
  );
}

export default withAuth(Assignment);
