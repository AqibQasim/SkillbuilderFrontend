import Link from "next/link";

function DashboardNavbar() {
  return (
    <div className="flex w-full items-center justify-between p-4">
      <div className="text-lg font-bold">SkillBuilder</div>
      <div className="flex items-center">
        <Link href="/dashboard" className="mr-4">
          Student
        </Link>
        <button className="rounded bg-blue-500 px-4 py-2">
          Upload Course +
        </button>
      </div>
    </div>
  );
  //   return (
  //     <div className="flex w-full items-center justify-between bg-gray-800 p-4 text-white">
  //       <div className="text-lg font-bold">SkillBuilder</div>
  //       <div className="flex items-center">
  //         <button className="mr-4">Student</button>
  //         <button className="rounded bg-blue-500 px-4 py-2">
  //           Upload Course +
  //         </button>
  //       </div>
  //     </div>
  //   );
}

export default DashboardNavbar;
