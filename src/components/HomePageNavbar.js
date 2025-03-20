import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";
import logo from "../../public/hero-logo.png";
import SmallScreenButton from "./SmallScreenButton";
import SmallScreenMenu from "./SmallScreenMenu";
import SmallScreenSearch from "./SmallScreenSearch";
import User from "./User";

function HomePageNavbar({ className }) {
  const [menu, setMenu] = useState(false);
  const router = useRouter();
  const { pathname } = router;
  console.log("pathName", pathname);
  const links = [
    { href: "/", title: "Home" },
    { href: "/courses", title: "Courses" },
    { href: "/career-counseling", title: "Counselling" },
    { href: "/bootcamp", title: "Live Courses" },
    { href: "/about", title: "About" },
  ];

  console.log("Menu", menu);

  const cartItems = useSelector((state) => state.cart.items);

  const routeToShoppingCartHandler = () => {
    router.push("/shoppingcart");
  };

  return (
    <nav
      className={`${className} ${menu ? "" : "relative z-[1]"} navbar mt-4 grid grid-cols-[1fr_max-content] grid-rows-2 rounded-[3.125rem] bg-white py-[0.625rem] pl-6 pr-3 shadow-[inset_0_0_0_1px_#F2F2F2] xlg:grid-cols-[max-content_1fr_max-content] xlg:grid-rows-1`}
    >
      <div className="logo flex min-w-40 items-center justify-start">
        {/* <Image src="/logo.svg" width={160} height={160} alt="Logo" /> */}
        <div className="relative h-7 w-40">
          <Image
            className="absolute inset-0"
            quality={90}
            src={logo}
            alt="Logo"
          />
        </div>
      </div>
      <div className="links hidden xlg:flex xlg:items-center xlg:justify-center">
        {links.map((link, i) => (
          <Link
            className={`${pathname === link.href ? "text-[#012256]" : "text-[#969BA3]"} px-3 font-medium capitalize`}
            href={link.href}
            key={i}
          >
            {link.title}
          </Link>
        ))}
      </div>
      <div className="buttons hidden gap-[0.625rem] xlg:flex xlg:items-center xlg:justify-start">
        {/* button for search */}
        <div className="hidden lg:block">
          <User
            cartItemsLength={cartItems.length}
            cartClickHandler={routeToShoppingCartHandler}
          />
        </div>
        {/* <ButtonSecond className="text-nowrap">Sign in</ButtonSecond> */}
      </div>

      <SmallScreenButton className="z-[9999]" menu={menu} setMenu={setMenu} />
      {menu ? <SmallScreenMenu className="z-[9998]" /> : null}

      {/* <SmallScreenSearch className=" h-0  xlg:hidden" /> */}
    </nav>
  );
}

export default HomePageNavbar;
