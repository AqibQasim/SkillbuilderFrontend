import DashboardHeader from "@/components/DashboardHeader";
import DashboardSidebar from "@/components/DashboardSidebar";

function DashboardLayout({ children }) {
  return (
    <div className="grid h-screen grid-cols-[auto_1fr] grid-rows-[75px_1fr] overflow-x-hidden lg:grid-cols-[16rem_1fr]">
      <DashboardHeader />
      <DashboardSidebar />
      <main className="scrollbar size-full overflow-y-scroll p-5">
        {children}
      </main>
    </div>
  );
}

export default DashboardLayout;
