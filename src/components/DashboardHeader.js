import Link from "next/link";
import Button from "./Button";
import User from "./User";
import Image from "next/image";
import MagnifierSvg from "./MagnifierSvg";

function DashboardHeader() {
  return (
    <header className="border-dashboard-border flex h-[75px] w-full items-center justify-end gap-6 border-b px-5">
      <Search />
      <Button fill="unfill">Student</Button>
      <Button href="courseUpload"> Upload course +</Button>
      <User />
    </header>
  );
}

export default DashboardHeader;

function Search() {
  return (
    <div className="group mr-auto flex w-full items-center justify-between gap-2 rounded-lg border-[1px] border-bg_text_gray px-4 focus-within:border-blue lg:flex lg:w-[25%]">
      <label
        htmlFor="search"
        className="flex cursor-pointer items-center text-bg_text_gray group-focus-within:text-black"
      >
        <MagnifierSvg />
      </label>
      <input
        id="search"
        type="text"
        placeholder="Search"
        className="w-full py-2 outline-none"
      />
    </div>
  );
}
