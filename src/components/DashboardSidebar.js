import Link from "next/link";
import MenuSvg from "./MenuSvg";
import CourseSvg from "./CourseSvg";
import PersonSvg from "./PersonSvg";
import ClipboardSvg from "./ClipboardSvg";
import { useRouter } from "next/router";

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
    <nav className="h-full">
      <ul className="space-y-1">
        {links.map((link) => (
          <li>
            <Link
              className={`hover:bg-dashboard-sidenav-bg flex w-full cursor-pointer items-center justify-start gap-3 rounded-lg px-5 py-3 text-bg_text_gray transition-colors duration-300 hover:text-black ${link.href === pathname ? "bg-dashboard-sidenav-bg text-black" : ""}`}
              href={link.href}
            >
              {link.icon}
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DashboardSidebar;
