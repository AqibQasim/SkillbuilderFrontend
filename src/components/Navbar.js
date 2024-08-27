import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
// import { handleRouteChange, getCurrentTab } from "@/utils/currentTabMethods";
import User from "@/components/User";
import { togglerMethod } from "@/utils/navMenuToggler";
import LayoutWidth from "./LayoutWidth";

const Navbar = ({ cartItemsLength }) => {
  console.log("cart item length:", cartItemsLength);
  const [menuOpen, setMenuOpen] = useState(false);
  // const [currentTab, setCurrentTab] = useState("");
  const router = useRouter();
  const { pathname } = router;

  // useEffect(() => {
  //   getCurrentTab(setCurrentTab);
  // }, []);

  // useEffect(() => {
  //   const onRouteChange = (url) => handleRouteChange(url, setCurrentTab);
  //   router.events.on("routeChangeComplete", onRouteChange);
  //   return () => {
  //     router.events.off("routeChangeComplete", onRouteChange);
  //   };
  // }, [router.events]);

  const routeToShoppingCartHandler = () => {
    router.push("/shoppingcart");
  };

  return (
    <>
      <div className="flex h-[10vh] w-[100%] flex-row items-center justify-center bg-white">
        <LayoutWidth>
          <div className="flex w-[90%] items-center justify-between">
            <Image src="/logo.svg" width={160} height={160} alt="Logo" />

            <div className="ml-auto mr-4 block lg:hidden">
              <User cartClickHandler={routeToShoppingCartHandler} />
            </div>

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
                      menuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16m-7 6h7"
                    }
                  ></path>
                </svg>
              </button>
            </div>

            <div className="flex hidden w-full items-center justify-center gap-3 text-gray-shade-1 lg:flex lg:w-auto lg:text-sm">
              <Link
                // className={
                //   // currentTab === "home"
                //   pathname === "/home"
                //     ? `rounded-lg bg-bg_gray px-[1.2rem] py-2 font-semibold text-blue lg:px-[0.8rem]`
                //     : `px-[1.2rem] py-2 lg:px-[0.5rem]`
                // }
                className={`rounded-lg px-[1.2rem] py-2 font-semibold lg:px-[0.8rem] ${pathname === "/" ? `bg-bg_gray text-blue` : ""} `}
                href="/"
              >
                Home
              </Link>
              <Link
                // className={
                //   // currentTab === "courses"
                //   pathname === "/courses"
                //     ? `rounded-lg bg-bg_gray px-[1.2rem] py-2 font-semibold text-blue lg:px-[0.5rem] lg:px-[0.8rem]`
                //     : `px-[1.2rem] py-2 lg:px-[0.5rem]`
                // }
                className={`rounded-lg px-[1.2rem] py-2 font-semibold lg:px-[0.8rem] ${pathname === "/courses" ? `bg-bg_gray text-blue` : ""} `}
                href="/courses"
              >
                Courses
              </Link>
              <Link
                // className={
                //   // currentTab === "about"
                //   pathname === "/about"
                //     ? `rounded-lg bg-bg_gray px-[1.2rem] py-2 font-semibold text-blue lg:px-[0.5rem] lg:px-[0.8rem]`
                //     : `px-[1.2rem] py-2 lg:px-[0.5rem]`
                // }
                className={`rounded-lg px-[1.2rem] py-2 font-semibold lg:px-[0.8rem] ${pathname === "/about" ? `bg-bg_gray text-blue` : ""} `}
                href="/about"
              >
                About Us
              </Link>
              <Link
                // className={
                //   // currentTab === "contact"
                //   pathname === "/contact"
                //     ? `rounded-lg bg-bg_gray px-[1.2rem] py-2 font-semibold text-blue lg:px-[0.5rem] lg:px-[0.8rem]`
                //     : `px-[1.2rem] py-2 lg:px-[0.5rem]`
                // }
                className={`rounded-lg px-[1.2rem] py-2 font-semibold lg:px-[0.8rem] ${pathname === "/contact" ? `bg-bg_gray text-blue` : ""} `}
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

            <div className="hidden lg:block">
              <User
                cartItemsLength={cartItemsLength}
                cartClickHandler={routeToShoppingCartHandler}
              />
            </div>
          </div>
        </LayoutWidth>
      </div>

      {menuOpen && (
        <>
          <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[rgba(255,255,255,0.5)] bg-white backdrop-blur-sm lg:hidden">
            {/* Close button */}
            <div className="fixed right-4 top-2 md:right-9">
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
            {/* Links */}
            <div className="flex flex-col items-center gap-4">
              <Link
                className="rounded-lg px-[1.2rem] py-2 lg:px-[0.5rem]"
                href="/"
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
              <Link className="px-[1.2rem] py-2 lg:px-[0.5rem]" href="/login">
                Login
              </Link>

              {/* <button className="py-2 px-4 hidden lg:flex justify-between items-center w-full lg:w-auto bg-blue text-white rounded-lg">
                Get started
              </button> */}
              {/* USER */}
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
