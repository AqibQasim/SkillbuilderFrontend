import Image from "next/image";
import { useEffect } from "react";
import "../styles/footer.css";
import LayoutWidth from "./LayoutWidth";
import LayoutXPadding from "./LayoutXPadding";
import { useRouter } from "next/router";

const HomepageFooter = ({ className }) => {
  const router = useRouter();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.glassdoor.com/static/js/api/widget/v1.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <LayoutXPadding>
      <footer className={`${className} `}>
        <div className="top flex items-start justify-between max-sm:flex-wrap max-sm:gap-4">
          <div className="left">
            <Image src="/logo.svg" className="imba" width={180} height={35} />
          </div>
          <div className="right flex items-start justify-between gap-7">
            <div className="text-black">
              <h3 className="mb-2 text-xl font-bold text-[#012456]">Company</h3>
              <ul className="space-y-4 p-2 text-sm text-gray_footer_text">
                {[
                  { text: "Home", link: "/" },
                  { text: "Courses", link: "/courses" },
                  { text: "About Us", link: "/about" },
                ].map((item, index) => (
                  <li
                    key={index}
                    className="cursor-pointer text-lg font-medium text-[#9AA5B8]"
                    onClick={() => {
                      router.push(item.link);
                    }}
                  >
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
            {/* Second column in the right side */}
            <div className="">
              <h3 className="mb-2 text-xl font-bold text-[#012456]">Contact</h3>
              <ul className="space-y-4 p-2 text-sm text-[#9AA5B8]">
                {[
                  { type: "tel", value: "+92 304 3870323" },
                  { type: "mailto", value: "info@co-ventech.com" },
                ].map((item, index) => (
                  <li key={index} className="text-lg font-medium">
                    <a
                      href={`${item.type}:${item.value}`}
                      className="text-inherit hover:underline"
                    >
                      {item.value}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Bottom */}
        <div className="bottom flex flex-wrap justify-center gap-4 sm:flex-nowrap sm:items-end sm:justify-between">
          <div className="left sm-w-[unset] flex w-full items-center justify-around gap-6 sm:justify-start">
            <a
              className="gdWidget"
              href="https://www.glassdoor.com/api/api.htm?version=1&action=employer-review&t.s=w-l&t.a=c&format=300x250&employerId=9082484"
              target="_gd"
            >
              <Image src="/review.svg" width={150} height={100} />
            </a>
            <a
              className="gdWidget"
              href="https://www.glassdoor.com/api/api.htm?version=1&action=employer-review&t.s=w-l&t.a=c&format=300x250&employerId=9082484"
              target="_gd"
            >
              <Image src="/glassdoor.svg" width={250} height={100} />
            </a>
          </div>
          <div className="right links flex items-center justify-center gap-2 max-sm:pt-4">
            <Image
              src="/twitter (2).png"
              className="cursor-pointer"
              width={40}
              height={40}
            />
            <Image
              src="/linkedin (2).png"
              className="cursor-pointer"
              width={40}
              height={40}
            />
            <Image
              src="/facebook (2).png"
              className="cursor-pointer"
              width={40}
              height={40}
            />
            <Image
              src="/insta (2).png"
              className="cursor-pointer"
              width={40}
              height={40}
            />
          </div>
        </div>
        <div className="py-4 text-center">
          <span className="font-normal text-[#778193] 2xl:font-bold">
            &copy; {new Date().getFullYear()} Skill Builder. All Rights
            Reserved.
          </span>
        </div>
      </footer>
    </LayoutXPadding>
  );
};
export default HomepageFooter;
