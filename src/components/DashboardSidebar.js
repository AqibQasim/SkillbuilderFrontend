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
      <div className="logo border-dashboard-border flex h-[74.5px] items-center justify-start border-b p-5 lg:justify-center">
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
            <li>
              <Link
                className={`hover:bg-dashboard-sidenav-bg flex w-full cursor-pointer items-center justify-start gap-3 rounded-lg px-4 py-3 text-bg_text_gray transition-colors duration-300 hover:text-black lg:px-5 lg:py-3 ${link.href === pathname ? "bg-dashboard-sidenav-bg text-black" : ""}`}
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
