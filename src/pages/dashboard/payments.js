import withAuth from "@/components/WithAuth";
import DashboardLayout from "../../components/DashboardLayout";

function Assignment() {
  return (
    <DashboardLayout>
      <>
        <div className="text-center">
          <h1 className="text-2xl font-bold">Payments</h1>
          <p>This is the Payments page.</p>
        </div>
      </>
    </DashboardLayout>
  );
}

export default withAuth(Assignment);
