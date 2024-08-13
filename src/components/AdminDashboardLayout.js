import DashboardHeader from "@/components/DashboardHeader";
import AdminDashboardSidebar from "./AdminDashboardSidebar";

function AdminDashboardLayout({ children }) {
  return (
    <div className="grid h-screen grid-cols-[auto_1fr] grid-rows-[75px_1fr] overflow-x-hidden bg-bg_gray lg:grid-cols-[16rem_1fr]">
      <DashboardHeader />
      <AdminDashboardSidebar />
      <main className="size-full overflow-x-hidden overflow-y-scroll p-5">
        {children}
      </main>
    </div>
  );
}

export default AdminDashboardLayout;
