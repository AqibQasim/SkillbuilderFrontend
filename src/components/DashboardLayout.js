import DashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "./DashboardSidebar";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <header className="border-b-dashboard-border col-span-1 border lg:col-span-2">
        <DashboardNavbar />
      </header>
      <div className="grid h-full min-h-screen grid-cols-[16rem_1fr] gap-12">
        <aside className="border-r-dashboard-border border p-5">
          <DashboardSidebar />
        </aside>
        <main className="p-5">{children}</main>
      </div>
    </>
  );
};

export default DashboardLayout;

// import DashboardNavbar from "./DashboardNavbar";
// import DashboardSidebar from "./DashboardSidebar";

// const DashboardLayout = ({ children }) => {
//   return (
//     <div className="grid min-h-screen grid-cols-1 grid-rows-[auto,1fr] lg:grid-cols-[auto,1fr] lg:grid-rows-1">
//       <header className="col-span-1 lg:col-span-2">
//         <DashboardNavbar />
//       </header>
//       <aside className="row-span-1 lg:row-span-2">
//         <DashboardSidebar />
//       </aside>
//       <main className="p-4">{children}</main>
//     </div>
//   );
// };

// export default DashboardLayout;
