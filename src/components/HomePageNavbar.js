import Link from "next/link";
import ButtonSecond from "./ButtonSecond";
import ButtonWithIcon from "./ButtonWithIcon";
import { useRouter } from "next/router";
import Image from "next/image";

function HomePageNavbar() {
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
  return (
    <nav className="navbar flex items-center justify-between rounded-[3.125rem] bg-[rgba(255,255,255,0.5)] py-[0.625rem] pl-6 pr-3 shadow-[inset_0_0_0_1px_#F2F2F2]">
      <div className="logo">
        <Image src="/logo.svg" width={160} height={160} alt="Logo" />
      </div>
      <div className="links flex items-center justify-start">
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
      <div className="buttons flex items-center justify-center gap-[0.625rem]">
        {/* <ButtonSecond>search</ButtonSecond> */}
        <ButtonSecond>Sign in</ButtonSecond>
        <ButtonWithIcon />
      </div>
    </nav>
  );
}

export default HomePageNavbar;
