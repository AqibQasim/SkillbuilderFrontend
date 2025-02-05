import Image from "next/image";
import { useEffect } from "react";
import "../styles/footer.css";
import LayoutWidth from "./LayoutWidth";
import LayoutXPadding from "./LayoutXPadding";
import { useRouter } from "next/router";
import Link from "next/link";

const footerLinks = [
  {
    label: "Company",
    options: [
      { label: "about", href: "/" },
      { label: "courses", href: "/" },
      { label: "career counselling", href: "/" },
      { label: "live session", href: "/" },
      { label: "FAQ", href: "/" },
      { label: "Terms of Services", href: "/" },
    ],
  },
  {
    label: "Contact",
    options: [{ label: "+92 304 3870323" }, { label: "info@skillbuilder.com" }],
  },
  {
    label: "Community",
    options: [
      { label: "Instagram", href: "/" },
      { label: "Twitter", href: "/" },
      { label: "LinkedIn", href: "/" },
      { label: "facebook", href: "/" },
    ],
  },
];

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

  const onSocialClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <LayoutXPadding>
      <footer className={`${className} divide-y divide-[#EBEBEB]`}>
        <div className="top grid grid-rows-[minmax(0,1fr)_auto_auto] gap-4 lg:!grid-cols-[max-content_1fr_max-content] lg:!grid-rows-1 xs:grid-cols-2 xs:grid-rows-2">
          <div className="left justify-self-center xs:justify-self-start">
            {/* Glass */}
            <a
              className="gdWidget"
              href="https:www.glassdoor.com/api/api.htm?version=1&action=employer-review&t.s=w-l&t.a=c&format=300x250&employerId=9082484"
              target="_gd"
            >
              <Image src="/glassdoor.svg" width={250} height={100} />
            </a>

            {/* Trustpilot */}
            <a
              className="gdWidget"
              // href="https://www.glassdoor.com/api/api.htm?version=1&action=employer-review&t.s=w-l&t.a=c&format=300x250&employerId=9082484"
              href="https://www.trustpilot.com/review/skillbuilder.online"
              target="_gd"
            >
              <Image src="/review.svg" width={150} height={100} />
            </a>
          </div>
          <div className="center row-start-1 row-end-1 flex max-w-[715px] flex-wrap items-start justify-evenly gap-3 md:flex-nowrap lg:!col-span-1 lg:!col-start-2 xs:col-span-2 xs:mx-auto xs:w-full xs:justify-between">
            {footerLinks?.map((row, i) => (
              <FooterRow
                className={i === 1 ? "order-last xs:order-none" : ""}
                options={row}
              />
            ))}
          </div>
          <div className="right justify-self-center xs:justify-self-end">
            <a
              href="https://www.producthunt.com/products/skill-builder"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/product_review.svg?product_id=598081&theme=dark"
                alt="Recruitinn.ai - Revolutionize Your Hiring with us | Product Hunt"
                style={{ width: "250px", height: "54px" }}
                width="250"
                height="54"
              />
            </a>
          </div>
        </div>
        <div className="bot grid grid-rows-3 items-center justify-center gap-2 py-4 xs:grid-cols-[max-content_1fr_max-content] xs:grid-rows-1">
          <span className="row-start-3 row-end-3 mx-auto text-xs text-[#4A525D] xs:row-start-1 xs:row-end-1">
            &copy; {new Date().getFullYear()} Skillbuilder All rights reserved.
          </span>
          <Image
            alt=""
            src="/skillbuilder-logo-icon.svg"
            className="mx-auto"
            height={44}
            width={32}
          />
          <span className="mx-auto flex items-center gap-2">
            {/* <Image
              src="/twitter-icon-footer.svg"
              className="cursor-pointer"
              width={40}
              height={40}
              onClick={() => onSocialClick("https://instagram.com")}
            /> */}
            <Image
              src="/linkedin-icon-footer.svg"
              className="cursor-pointer"
              width={40}
              height={40}
              onClick={() =>
                onSocialClick(
                  "https://www.facebook.com/people/SkillBuilder/61557538478424/",
                )
              }
            />
            <Image
              src="/facebook-icon-footer.svg"
              className="cursor-pointer"
              width={40}
              height={40}
              onClick={() =>
                onSocialClick(
                  "https://www.linkedin.com/company/skill-builderss/ ",
                )
              }
            />
            {/* <Image
              src="/instagram-icon-footer.svg"
              className="cursor-pointer"
              width={40}
              height={40}
              onClick={() => onSocialClick("https://twitter.com")}
            /> */}
          </span>
        </div>
      </footer>
    </LayoutXPadding>
  );

  // return (
  //   <LayoutXPadding>
  //     <footer className={`${className} `}>
  //       <div className="top flex items-start justify-between max-sm:flex-wrap max-sm:gap-4 pt-6">
  //         <div className="left">
  //           <Image src="/logo.svg" className="imba" width={180} height={35} />
  //         </div>
  //         <div className="right flex items-start justify-between gap-7">
  //           <div className="text-black">
  //             <h3 className="mb-2 text-xl font-bold text-[#012456]">Company</h3>
  //             <ul className="space-y-4 p-2 text-sm text-gray_footer_text">
  //               {[
  //                 { text: "Home", link: "/" },
  //                 { text: "Courses", link: "/courses" },
  //                 { text: "About Us", link: "/about" },
  //               ].map((item, index) => (
  //                 <li
  //                   key={index}
  //                   className="cursor-pointer text-lg font-medium text-[#9AA5B8]"
  //                   onClick={() => {
  //                     router.push(item.link);
  //                   }}
  //                 >
  //                   {item.text}
  //                 </li>
  //               ))}
  //             </ul>
  //           </div>

  //           {/* Second column in the right side */}
  //           <div className="">
  //             <h3 className="mb-2 text-xl font-bold text-[#012456]">Contact</h3>
  //             <ul className="space-y-4 p-2 text-sm text-[#9AA5B8]">
  //               {[
  //                 { type: "tel", value: "+92 304 3870323" },
  //                 { type: "mailto", value: "info@co-ventech.com" },
  //               ].map((item, index) => (
  //                 <li key={index} className="text-lg font-medium">
  //                   <a
  //                     href={`${item.type}:${item.value}`}
  //                     className="text-inherit hover:underline"
  //                   >
  //                     {item.value}
  //                   </a>
  //                 </li>
  //               ))}
  //             </ul>

  //           </div>

  //         </div>
  //       </div>
  //       {/* Bottom */}
  //       <div className="bottom flex flex-wrap justify-center gap-4 sm:flex-nowrap sm:items-end sm:justify-between">
  //         <div className="left sm-w-[unset] flex w-full items-center justify-around gap-6 sm:justify-start">
  //           <a
  //             className="gdWidget"
  //             href="https://www.glassdoor.com/api/api.htm?version=1&action=employer-review&t.s=w-l&t.a=c&format=300x250&employerId=9082484"
  //             target="_gd"
  //           >
  //             <Image src="/review.svg" width={150} height={100} />
  //           </a>
  //           <a
  //             className="gdWidget"
  //             href="https://www.glassdoor.com/api/api.htm?version=1&action=employer-review&t.s=w-l&t.a=c&format=300x250&employerId=9082484"
  //             target="_gd"
  //           >
  //             <Image src="/glassdoor.svg" width={250} height={100} />
  //           </a>
  //         </div>
  //         <div className="right links flex items-center justify-center gap-2 max-sm:pt-4">
  //           <Image
  //             src="/twitter (2).png"
  //             className="cursor-pointer"
  //             width={40}
  //             height={40}
  //             onClick={() => onSocialClick("https://instagram.com")}
  //           />
  //           <Image
  //             src="/linkedin (2).png"
  //             className="cursor-pointer"
  //             width={40}
  //             height={40}
  //             onClick={() => onSocialClick("https://www.facebook.com/people/SkillBuilder/61557538478424/")}

  //           />
  //           <Image
  //             src="/facebook (2).png"
  //             className="cursor-pointer"
  //             width={40}
  //             height={40}
  //             onClick={() => onSocialClick("https://www.linkedin.com/company/skill-builderss/ ")}
  //           />
  //           <Image
  //             src="/insta (2).png"
  //             className="cursor-pointer"
  //             width={40}
  //             height={40}
  //             onClick={() => onSocialClick("https://twitter.com")}
  //           />
  //         </div>
  //       </div>

  //       <div className="py-4 text-center">
  //         <span className="font-normal text-[#778193] 2xl:font-bold">
  //           &copy; {new Date().getFullYear()} Skill Builder. All Rights
  //           Reserved.
  //         </span>
  //       </div>
  //     </footer>
  //   </LayoutXPadding>
  // );
};
export default HomepageFooter;

function FooterRow({
  className,
  options = { label: "Company", options: [{ label: "about", href: "/" }] },
}) {
  return (
    <div className={`${className} row`}>
      <h3 className="mb-2 text-xl font-bold text-[#170D23]">
        {" "}
        {options.label}
      </h3>
      <ul className="space-y-4 text-sm font-light text-[#4A525D]">
        {options?.options.map((option) => (
          <li>
            {option?.href ? (
              <Link
                href={option?.href}
                className="flex items-center justify-start gap-2 text-nowrap capitalize"
              >
                {option?.label}
                <Image
                  alt="icon"
                  height={16}
                  width={16}
                  src="/arrow-down-left.svg"
                />{" "}
              </Link>
            ) : (
              option.label
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
