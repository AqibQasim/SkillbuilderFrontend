import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { handleRouteChange, getCurrentTab } from "@/utils/currentTabMethods";
import { togglerMethod } from "@/utils/navMenuToggler";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState("");
  const router = useRouter();

  useEffect(() => {
    getCurrentTab(setCurrentTab);
  }, []);

  useEffect(() => {
    const onRouteChange = (url) => handleRouteChange(url, setCurrentTab);
    router.events.on("routeChangeComplete", onRouteChange);
    return () => {
      router.events.off("routeChangeComplete", onRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <div className="h-[10vh] w-[100%] bg-white flex flex-row justify-center items-center">
        <div className="w-[90%] flex justify-between items-center">
          <Image src="/logo.svg" width={160} height={160} alt="Logo" />

          <div className="lg:hidden">
            <button
              className="text-bg_text_gray"
              onClick={() => {
                togglerMethod(setMenuOpen, menuOpen);
              }}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
                  }
                ></path>
              </svg>
            </button>
          </div>

          <div className="flex justify-center items-center gap-4 lg:text-sm text-bg_text_gray hidden lg:flex items-center w-full lg:w-auto">
            <Link
              className={
                currentTab === "home"
                  ? `px-[1.2rem] py-2 bg-bg_gray rounded-lg text-blue font-semibold lg:px-[0.8rem]`
                  : `px-[1.2rem] py-2 lg:px-[0.5rem]`
              }
              href="/home"
            >
              Home
            </Link>
            <Link
              className={
                currentTab === "courses"
                  ? `px-[1.2rem] py-2 bg-bg_gray lg:px-[0.5rem] rounded-lg text-blue font-semibold lg:px-[0.8rem]`
                  : `px-[1.2rem] py-2 lg:px-[0.5rem]`
              }
              href="/courses"
            >
              Courses
            </Link>
            <Link
              className={
                currentTab === "about"
                  ? `px-[1.2rem] py-2 bg-bg_gray lg:px-[0.5rem] rounded-lg text-blue font-semibold lg:px-[0.8rem]`
                  : `px-[1.2rem] py-2 lg:px-[0.5rem]`
              }
              href="/about"
            >
              About Us
            </Link>
            <Link
              className={
                currentTab === "contact"
                  ? `px-[1.2rem] py-2 bg-bg_gray lg:px-[0.5rem] rounded-lg text-blue font-semibold lg:px-[0.8rem]`
                  : `px-[1.2rem] py-2 lg:px-[0.5rem]`
              }
              href="/contact"
            >
              Contact Us
            </Link>
          </div>

          <div className="flex border-[1px] rounded-lg hidden lg:flex justify-between items-center w-full border-border_gray px-4 gap-2 lg:w-[25%]">
            <Image
              src="/searchIcon.svg"
              width={20}
              height={20}
              alt="Search Icon"
            />
            <input
              type="text"
              placeholder="Search"
              className="w-[100%] py-2 outline-none"
            />
          </div>

          <button className="py-2 px-4 hidden lg:flex justify-between items-center w-full lg:w-auto bg-blue text-white rounded-lg">
            Get started
          </button>
        </div>
      </div>

      {menuOpen && (
        <>
          <div className="absolute w-[95%] flex justify-center mb-10">
            <div className="w-[100%] flex justify-end items-center relative z-10">
              <button
                onClick={() => {
                  togglerMethod(setMenuOpen, menuOpen);
                }}
              >
                <Image
                  src="/Cross.png"
                  width={40}
                  height={40}
                  alt="Close Menu"
                />
              </button>
            </div>
          </div>

          <div className="lg:hidden fixed inset-0 bg-white flex flex-col justify-center items-center z-0">
            <div className="flex flex-col items-center gap-4">
              <Link
                className="px-[1.2rem] py-2 lg:px-[0.5rem] rounded-lg"
                href="/home"
              >
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
              <button className="py-2 px-4 bg-blue text-white rounded-lg mt-4">
                Get started
              </button>
            </div>
          </div>
        </>
      )}

      {/* Mobile Search Bar */}
      <div className="lg:hidden flex justify-center items-center w-full bg-white py-2">
        <div className="flex border-[1px] rounded-md border-border_gray px-4 gap-2 w-[90%]">
          <Image
            src="/searchIcon.svg"
            width={20}
            height={20}
            alt="Search Icon"
          />
          <input
            type="text"
            placeholder="Search"
            className="w-[100%] py-2 outline-none"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
