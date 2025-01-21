import Link from "next/link";

function SmallScreenMenu({ className }) {
  return (
    <div
      className={`${className} fixed right-0 top-0 z-[99] h-screen w-screen bg-[rgba(255,255,255,0.5)] bg-white backdrop-blur-sm xlg:hidden`}
    >
      <div className="flex size-full flex-col items-center justify-center gap-4">
        <Link className="rounded-lg px-[1.2rem] py-2 lg:px-[0.5rem]" href="/">
          Home
        </Link>
        <Link className="px-[1.2rem] py-2 lg:px-[0.5rem]" href="/courses">
          Courses
        </Link>
        <Link className="px-[1.2rem] py-2 lg:px-[0.5rem]" href="/about">
          About Us
        </Link>
        <Link className="px-[1.2rem] py-2 lg:px-[0.5rem]" href="/contact">
          Contact Us
        </Link>
        <Link className="px-[1.2rem] py-2 lg:px-[0.5rem]" href="/login">
          Login
        </Link>
      </div>
    </div>
  );
}

export default SmallScreenMenu;
