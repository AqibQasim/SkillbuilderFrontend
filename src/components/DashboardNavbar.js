import Link from "next/link";
import Button from "./Button";

function DashboardNavbar() {
  return (
    <header className="border-dashboard-border flex h-[75px] w-full items-center justify-between border-b px-5">
      <div className="ml-auto flex items-center">
        <Link href="/dashboard" className="mr-4">
          Student
        </Link>
        <Button href="courseUpload"> Upload course +</Button>
      </div>
    </header>
  );
}

export default DashboardNavbar;
