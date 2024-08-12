import { useState } from "react";
import Link from "next/link";
import MenuSvg from "./MenuSvg";
import CourseSvg from "./CourseSvg";
import PersonSvg from "./PersonSvg";
import ClipboardSvg from "./ClipboardSvg";
import { useRouter } from "next/router";
import Image from "next/image";
import InstructorSvg from "./instructorSvg";

const links = [
  { href: "/admin", icon: <MenuSvg />, name: "Overview" },
  {
    href: "/admin/courses",
    icon: <CourseSvg />,
    name: "Courses",
    subLinks: [
      { href: "/admin/courses/pending", name: "Pending" },
      { href: "/admin/courses/approved", name: "Approved" },
      { href: "/admin/courses/decline", name: "Decline" },
    ],
  },
  { href: "/admin/students", icon: <PersonSvg />, name: "Students" },
  { href: "/admin/instructors", icon: <InstructorSvg />, name: "Instructors" },
  {
    href: "/admin/payments",
    icon: <ClipboardSvg />,
    name: "Payments",
    subLinks: [
      { href: "/admin/payments/students", name: "Students" },
      { href: "/admin/payments/instructors", name: "Instructors" },
    ],
  },
];

const isActiveLink = (pathname, linkHref) => {
  if (linkHref.startsWith("/admin/courses")) {
    return pathname.startsWith(linkHref);
  }
  return pathname === linkHref;
};

const DropdownArrowSvg = ({ isOpen }) => (
  <svg
    className={`h-4 w-4 transition-transform duration-300 ${
      isOpen ? "rotate-180 transform" : ""
    }`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

const AdminDashboardSidebar = () => {
  const router = useRouter();
  const { pathname } = router;

  const [dropdownOpen, setDropdownOpen] = useState({});

  const handleDropdownToggle = (href) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [href]: !prevState[href],
    }));
  };

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
            <li key={link.href} className="relative">
              <div
                className={`text-red hover:text-black flex w-full cursor-pointer items-center justify-between gap-3 rounded-lg px-4 py-3 text-gray-shade-1 transition-colors duration-300 hover:bg-dashboard-sidenav-bg lg:px-5 lg:py-3 ${
                  isActiveLink(pathname, link.href)
                    ? "text-black bg-dashboard-sidenav-bg"
                    : ""
                }`}
                onClick={() =>
                  link.subLinks
                    ? handleDropdownToggle(link.href)
                    : router.push(link.href)
                }
              >
                <div className="flex items-center gap-3">
                  {link.icon}
                  <span className="hidden lg:block">{link.name}</span>
                </div>
                {link.subLinks && (
                  <DropdownArrowSvg isOpen={dropdownOpen[link.href]} />
                )}
              </div>
              {link.subLinks && dropdownOpen[link.href] && (
                <ul className="ml-5 mt-2 space-y-1">
                  {link.subLinks.map((subLink) => (
                    <li key={subLink.href}>
                      <Link
                        className={`text-red hover:text-black flex w-full cursor-pointer items-center justify-start gap-3 rounded-lg px-4 py-3 text-gray-shade-1 transition-colors duration-300 hover:bg-dashboard-sidenav-bg lg:px-5 lg:py-3 ${
                          isActiveLink(pathname, subLink.href)
                            ? "text-black bg-dashboard-sidenav-bg"
                            : ""
                        }`}
                        href={subLink.href}
                      >
                        {subLink.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default AdminDashboardSidebar;
