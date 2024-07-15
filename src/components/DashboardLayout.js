import Image from "next/image";
import DashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "./DashboardSidebar";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <div className="grid h-screen grid-cols-[auto_1fr] grid-rows-[75px_1fr] md:grid-cols-[16rem_1fr]">
        <DashboardNavbar />
        <DashboardSidebar />
        <main className="p-5">{children}</main>
      </div>
    </>
  );
};

export default DashboardLayout;
