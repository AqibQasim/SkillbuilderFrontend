import Link from "next/link";
import MenuSvg from "./MenuSvg";
import CourseSvg from "./CourseSvg";
import PersonSvg from "./PersonSvg";
import ClipboardSvg from "./ClipboardSvg";
import WalletSvg from "./WalletSvg";
import { useRouter } from "next/router";
import Image from "next/image";

const links = [
  { href: "/dashboard", icon: <MenuSvg />, name: "Overview" },
  {
    href: "/dashboard/instructor-courses",
    icon: <CourseSvg />,
    name: "Courses",
  },
  { href: "/dashboard/students", icon: <PersonSvg />, name: "Students" },
  { href: "/dashboard/assignment", icon: <ClipboardSvg />, name: "Assignment" },
  { href: "/dashboard/payments", icon: <WalletSvg />, name: "Payments" },
  
];

const isActiveLink = (pathname, linkHref) => {
  if (linkHref === "/dashboard/instructor-courses") {
    return pathname.startsWith(linkHref);
  }
  return pathname === linkHref;
};

const DashboardSidebar = () => {
  const router = useRouter();
  const { pathname } = router;
  return (
    <aside className="row-[1/-1] border border-r-dashboard-border">
      <div className="logo flex h-[74.5px] items-center justify-start border-b border-dashboard-border p-5 lg:justify-center">
        <Image
          src="/logo.svg"
          className="mr-2 hidden lg:block"
          width={160}
          height={160}
          alt="Skillbuilder Logo"
        />
        <Image
          src="/skillbuilder-logo-icon.svg"
          className="ml-3 block lg:hidden"
          width={21}
          height={21}
          alt="Skillbuilder Logo"
        />
      </div>
      <nav className="px-3 py-5 lg:p-5">
        <ul className="space-y-1">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                className={`text-red text-gray-shade-1 flex w-full cursor-pointer items-center justify-start gap-3 rounded-lg px-4 py-3 transition-colors duration-300 hover:bg-dashboard-sidenav-bg hover:text-black lg:px-5 lg:py-3 ${
                  isActiveLink(pathname, link.href)
                    ? "bg-dashboard-sidenav-bg text-black"
                    : ""
                }`}
                href={link.href}
              >
                {link.icon}
                <span className="hidden lg:block">{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default DashboardSidebar;
