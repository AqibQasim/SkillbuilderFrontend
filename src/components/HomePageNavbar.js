import Link from "next/link";
import ButtonSecond from "./ButtonSecond";
import ButtonWithIcon from "./ButtonWithIcon";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import SmallScreenButton from "./SmallScreenButton";
import SmallScreenMenu from "./SmallScreenMenu";
import SmallScreenSearch from "./SmallScreenSearch";
import User from "./User";

function HomePageNavbar() {
  const [menu, setMenu] = useState(false);
  const router = useRouter();
  const { pathname } = router;
  console.log("pathName", pathname);
  const links = [
    { href: "/home", title: "Home" },
    { href: "courses", title: "Courses" },
    { href: "counseling", title: "Counseling" },
    { href: "career", title: "Career" },
    { href: "about", title: "About" },
  ];

  console.log("Menu", menu);

  const courses = useSelector((state) => state.cart.items);
  
  const routeToShoppingCartHandler = () => {
    router.push("/shoppingcart");
  };

  return (
    <nav className="navbar grid grid-cols-[1fr_max-content] grid-rows-2 rounded-[3.125rem] bg-white py-[0.625rem] pl-6 pr-3 shadow-[inset_0_0_0_1px_#F2F2F2] xlg:grid-cols-[max-content_1fr_max-content] xlg:grid-rows-1">
      <div className="logo flex min-w-40 items-center justify-start">
        <Image src="/logo.svg" width={160} height={160} alt="Logo" />
      </div>
      <div className="links hidden xlg:flex xlg:items-center xlg:justify-start">
        {links.map((link, i) => (
          <Link
            className={`${pathname === link.href ? "text-[#012256]" : "text-[#969BA3]"} px-6 text-[1.125rem] font-medium capitalize`}
            href={link.href}
            key={i}
          >
            {link.title}
          </Link>
        ))}
      </div>
      <div className="buttons hidden gap-[0.625rem] xlg:flex xlg:items-center xlg:justify-start">
        <ButtonSecond className="flex items-center justify-center text-nowrap">
          {" "}
          <svg
            className="block h-6"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.75 14.9922C12.4779 14.9922 15.5 11.9701 15.5 8.24219C15.5 4.51427 12.4779 1.49219 8.75 1.49219C5.02208 1.49219 2 4.51427 2 8.24219C2 11.9701 5.02208 14.9922 8.75 14.9922Z"
              stroke="#4E5052"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.6973 15.5166C15.0948 16.7166 16.0023 16.8366 16.6998 15.7866C17.3373 14.8266 16.9173 14.0391 15.7623 14.0391C14.9073 14.0316 14.4273 14.6991 14.6973 15.5166Z"
              stroke="#4E5052"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </ButtonSecond>
        <div className="hidden lg:block">
              <User
                cartItemsLength={courses.length}
                cartClickHandler={routeToShoppingCartHandler}
              />
            </div>
        {/* <ButtonSecond className="text-nowrap">Sign in</ButtonSecond> */}
   
      </div>

      {/* small Screen Button */}
      <SmallScreenButton className="z-[9999]" menu={menu} setMenu={setMenu} />
      {/* small screen menu */}
      {menu ? <SmallScreenMenu className="z-[9998]" /> : null}
      {/* Small screen search  */}
      <SmallScreenSearch className="col-start-1 col-end-3 xlg:hidden" />
    </nav>
  );
}

export default HomePageNavbar;
