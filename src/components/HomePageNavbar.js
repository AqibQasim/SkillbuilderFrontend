import Link from "next/link";
import ButtonSecond from "./ButtonSecond";
import ButtonWithIcon from "./ButtonWithIcon";

function HomePageNavbar() {
  const links = [
    { href: "/", title: "Home" },
    { href: "courses", title: "Courses" },
    { href: "counseling", title: "Counseling" },
    { href: "career", title: "Career" },
    { href: "about", title: "About" },
  ];
  return (
    <nav className="navbar flex items-center justify-between rounded-[3.125rem] bg-[rgba(255,255,255,0.5)] py-[0.625rem] pl-6 pr-3 shadow-[inset_0_0_0_1px_#F2F2F2]">
      <div className="logo">LOGO</div>
      <div className="links flex items-center justify-start">
        {links.map((link, i) => (
          <Link
            className="px-6 text-[1.125rem] font-medium text-[#969BA3]"
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
