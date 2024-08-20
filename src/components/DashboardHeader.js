import Link from "next/link";
import Button from "./Button";
import User from "./User";
import Image from "next/image";
import MagnifierSvg from "./MagnifierSvg";
import { useRouter } from "next/router";

function DashboardHeader() {
  const router = useRouter();
  const isAdminRoute = router.pathname.includes("/admin");

  return (
    <header className="flex h-[75px] w-full items-center justify-end gap-6 border-b border-dashboard-border px-5">
      <Search />
      {!isAdminRoute && (
        <>
          <Button
            fill="unfill"
            onClick={() => {
              router.push(`/home`);
            }}
          >
            Student
          </Button>
          <Button className="hidden md:block" href="/course-upload">
            {" "}
            Upload course +
          </Button>
        </>
      )}
      <User />
    </header>
  );
}

export default DashboardHeader;

function Search() {
  return (
    <div className="group mr-auto hidden w-full rounded-lg border-[1px] border-bg_text_gray pl-4 focus-within:border-blue md:flex md:items-center md:justify-between md:gap-2 lg:flex lg:w-[25%]">
      <label
        htmlFor="search"
        className="group-focus-within:text-black flex cursor-pointer items-center text-bg_text_gray"
      >
        <MagnifierSvg />
      </label>
      <input
        id="search"
        type="text"
        placeholder="Search"
        className="w-full rounded-r-lg bg-transparent py-2 outline-none"
      />
    </div>
  );
}
