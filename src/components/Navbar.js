import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { handleRouteChange, getCurrentTab } from "@/utils/currentTabMethods";
import { togglerMethod } from "@/utils/navMenuToggler";
import User from "@/components/User";

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
      <div className="flex h-[10vh] w-[100%] flex-row items-center justify-center bg-white">
        <div className="flex w-[90%] items-center justify-between">
          <Image src="/logo.svg" width={160} height={160} alt="Logo" />

          <div className="lg:hidden">
            <button
              className="text-bg_text_gray"
              onClick={() => {
                togglerMethod(setMenuOpen, menuOpen);
              }}
            >
              <svg
                className="h-8 w-8"
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

          <div className="flex hidden w-full items-center justify-center gap-4 text-bg_text_gray lg:flex lg:w-auto lg:text-sm">
            <Link
              className={
                currentTab === "home"
                  ? `rounded-lg bg-bg_gray px-[1.2rem] py-2 font-semibold text-blue lg:px-[0.8rem]`
                  : `px-[1.2rem] py-2 lg:px-[0.5rem]`
              }
              href="/home"
            >
              Home
            </Link>
            <Link
              className={
                currentTab === "courses"
                  ? `rounded-lg bg-bg_gray px-[1.2rem] py-2 font-semibold text-blue lg:px-[0.5rem] lg:px-[0.8rem]`
                  : `px-[1.2rem] py-2 lg:px-[0.5rem]`
              }
              href="/courses"
            >
              Courses
            </Link>
            <Link
              className={
                currentTab === "about"
                  ? `rounded-lg bg-bg_gray px-[1.2rem] py-2 font-semibold text-blue lg:px-[0.5rem] lg:px-[0.8rem]`
                  : `px-[1.2rem] py-2 lg:px-[0.5rem]`
              }
              href="/about"
            >
              About Us
            </Link>
            <Link
              className={
                currentTab === "contact"
                  ? `rounded-lg bg-bg_gray px-[1.2rem] py-2 font-semibold text-blue lg:px-[0.5rem] lg:px-[0.8rem]`
                  : `px-[1.2rem] py-2 lg:px-[0.5rem]`
              }
              href="/contact"
            >
              Contact Us
            </Link>
          </div>

          <div className="flex hidden w-full items-center justify-between gap-2 rounded-lg border-[1px] border-border_gray px-4 lg:flex lg:w-[25%]">
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

          {/* <button className="py-2 px-4 hidden lg:flex justify-between items-center w-full lg:w-auto bg-blue text-white rounded-lg">
            Get started
          </button> */}
          {/* USER */}
          <div className="hidden lg:block">
            <User />
          </div>
        </div>
      </div>

      {menuOpen && (
        <>
          <div className="absolute mb-10 flex w-[95%] justify-center">
            <div className="relative z-10 flex w-[100%] items-center justify-end">
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

          <div className="fixed inset-0 z-0 flex flex-col items-center justify-center bg-white lg:hidden">
            <div className="flex flex-col items-center gap-4">
              <Link
                className="rounded-lg px-[1.2rem] py-2 lg:px-[0.5rem]"
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

              {/* <button className="py-2 px-4 hidden lg:flex justify-between items-center w-full lg:w-auto bg-blue text-white rounded-lg">
                Get started
              </button> */}
              {/* USER */}
              <div className="block lg:hidden">
                <User />
              </div>
            </div>
          </div>
        </>
      )}

      {/* Mobile Search Bar */}
      <div className="flex w-full items-center justify-center bg-white py-2 lg:hidden">
        <div className="flex w-[90%] gap-2 rounded-md border-[1px] border-border_gray px-4">
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
