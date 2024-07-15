import Link from "next/link";
import MenuSvg from "./MenuSvg";
import CourseSvg from "./CourseSvg";
import PersonSvg from "./PersonSvg";
import ClipboardSvg from "./ClipboardSvg";
import { useRouter } from "next/router";
import Image from "next/image";

const links = [
  { href: "/dashboard", icon: <MenuSvg />, name: "Overview" },
  { href: "/dashboard/courses", icon: <CourseSvg />, name: "Courses" },
  { href: "/dashboard/assignment", icon: <ClipboardSvg />, name: "Assignment" },
  { href: "/dashboard/students", icon: <PersonSvg />, name: "Students" },
];

const DashboardSidebar = () => {
  const router = useRouter();
  const { pathname } = router;
  return (
    <aside className="border-r-dashboard-border row-[1/-1] border">
      <div className="logo border-dashboard-border flex h-[74px] items-center justify-start border-b p-3 md:justify-center md:p-5">
        <Image
          src="/logo.svg"
          className="mr-2 hidden md:block"
          width={160}
          height={160}
          alt="Skillbuilder Logo"
        />
        <Image
          src="/skillbuilder-logo-icon.svg"
          className="ml-3 block md:hidden"
          width={21}
          height={21}
          alt="Skillbuilder Logo"
        />
      </div>
      <nav className="p-3 md:p-5">
        <ul className="space-y-1">
          {links.map((link) => (
            <li>
              <Link
                className={`hover:bg-dashboard-sidenav-bg flex w-full cursor-pointer items-center justify-start gap-3 rounded-lg px-3 py-2 text-bg_text_gray transition-colors duration-300 hover:text-black md:px-5 md:py-3 ${link.href === pathname ? "bg-dashboard-sidenav-bg text-black" : ""}`}
                href={link.href}
              >
                {link.icon}
                <span className="hidden md:block">{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default DashboardSidebar;
