import { scrollToSection } from "@/utils/scrollToSection";
import { useHash } from "@/utils/useHash";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import "../styles/footer.css";
import LayoutXPadding from "./LayoutXPadding";

const footerLinks = [
  {
    label: "Company",
    options: [
      { label: "about", href: "/about" },
      { label: "courses", href: "/courses" },
      { label: "career counselling", href: "/career-counseling" },
      { label: "live session", href: "/bootcamp" },
      { label: "FAQ", href: "/#faq" },
      { label: "Terms of Services", href: "/terms-&-conditions" },
    ],
  },
  {
    label: "Contact",
    options: [{ label: "+92 304 3870323" }, { label: "info@skillbuilder.com" }],
  },
  {
    label: "Community",
    options: [
      // { label: "Instagram", href: "/" },
      // { label: "Twitter", href: "/" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/skill-builderss/",
        target: "_blank",
      },
      {
        label: "facebook",
        href: "https://www.facebook.com/people/SkillBuilder/61557538478424/",
        target: "_blank",
      },
    ],
  },
];

const HomepageFooter = ({ className }) => {
  const router = useRouter();
  const hash = useHash();

  useEffect(() => {
    const section = hash.replace("#", "");
    if (section) scrollToSection(section);
  }, [hash]);

  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "https://www.glassdoor.com/static/js/api/widget/v1.js";
  //   script.async = true;
  //   document.body.appendChild(script);
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  const onSocialClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <LayoutXPadding>
      <footer
        className={`${className} divide-y divide-[#EBEBEB] bg-white pt-10`}
      >
        <div className="top grid grid-rows-[minmax(0,1fr)_auto_auto] gap-4 lg:!grid-cols-[max-content_1fr_max-content] lg:!grid-rows-1 xs:grid-cols-2 xs:grid-rows-2">
          <div className="left !space-y-5 justify-self-center xs:justify-self-start">
            {/* Glass */}
            <div className="w">
              <a
                className="gdWidget"
                href="https://www.glassdoor.com/Overview/Working-at-Skill-Builder-EI_IE9392144.11,24.htm"
                target="_gd"
              >
                <Image src="/glassdoor-review.png" width={250} height={100} />
              </a>
            </div>

            {/* Trustpilot */}
            <div className="w">
              <a
                className="gdWidget"
                href="https://www.trustpilot.com/review/skillbuilder.online"
                target="_gd"
              >
                <Image src="/trustpilot-review.png" width={272} height={100} />
              </a>
            </div>
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
                alt="Skillbuilder - Revolutionize Your Learning with us | Product Hunt"
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
                  "https://www.linkedin.com/company/skill-builderss/ ",
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
                  "https://www.facebook.com/people/SkillBuilder/61557538478424/",
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
                target={option?.target ? "_blank" : "_self"}
                rel={option?.target ? "noopener noreferrer" : undefined}
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

// import React, { useEffect } from "react";
// import Image from "next/image";
// import "../styles/footer.css";
// import LayoutWidth from "./LayoutWidth";
// import Link from "next/link";
// // import logo from "../../../assets/logo.png";
// // import trustpilot from "../../../assets/trustpilot.png";
// // import facebook from "../../../assets/facebook1.png";
// // import twitter from "../../../assets/twitter.png";
// // import insta from "../../../assets/insta.png";
// // import Linkedin from "../../../assets/Linkedin.png";
// const Footer = () => {
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://www.glassdoor.com/static/js/api/widget/v1.js";
//     script.async = true;
//     document.body.appendChild(script);
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   const onSocialClick = (url) => {
//     window.open(url, "_blank");
//   };

//   return (
//     // <footer className="w-[100%] bg-white text-white p-4 mt-12 max-sm:mt-[-4rem]">
//     <footer className="mt-12 w-full bg-white pt-12 text-white">
//       <LayoutWidth>
//         <div className="footer-inner">
//           <div className="flex flex-col flex-wrap items-start justify-between space-y-4 lg:flex-row lg:items-center lg:space-y-0">
//             {/* Left column */}
//             {/* <div className="w-[50%] max-sm:flex max-sm:flex-col max-sm:items-center  md:w-1/3 mb-4 md:mb-0 max-sm:w-[100%]"> */}
//             <div className="mb-4 w-full md:mb-0 lg:w-auto max-sm:flex max-sm:flex-col max-sm:items-center">
//               <div className="mb-8">
//                 <Image
//                   src="/logo.svg"
//                   className="imba"
//                   width={170}
//                   height={30}
//                 />
//               </div>
//               <p className="text-black mt-4 max-sm:w-[100%] max-sm:text-center">
//                 Venture your Educational dreams.{" "}
//               </p>
//               <div className="mt-4 flex justify-between gap-0 lg:justify-start lg:gap-6 max-sm:w-full max-sm:justify-center max-sm:gap-7">
//                 <a
//                   className="gdWidget"
//                   href="https://www.glassdoor.com/api/api.htm?version=1&action=employer-review&t.s=w-l&t.a=c&format=300x250&employerId=9082484"
//                   target="_gd"
//                 >
//                   <Image src="/review.svg" width={150} height={100} />
//                 </a>

//                 <a
//                   className="gdWidget"
//                   href="https://www.glassdoor.com/api/api.htm?version=1&action=employer-review&t.s=w-l&t.a=c&format=300x250&employerId=9082484"
//                   target="_gd"
//                 >
//                   <Image src="/glassdoor.svg" width={250} height={100} />
//                 </a>
//               </div>
//             </div>
//             <div className="flex w-full items-start justify-between lg:w-[unset] lg:justify-center lg:gap-28 max-sm:justify-center max-sm:gap-8">
//               {/* Right columns */}
//               {/* <div className="flex justify-between gap-24 max-sm:justify-center"> */}
//               {/* First column in the right side */}
//               <div className="text-black mb-4 md:mb-0">
//                 <h3 className="mb-2 text-lg font-semibold">Company</h3>
//                 <ul className="p-2 text-sm text-gray_footer_text">
//                   <li className="mb-4">Home</li>
//                   <li className="mb-4">Courses</li>
//                   <li className="mb-4">About Us</li>
//                 </ul>
//               </div>
//               {/* Second column in the right side */}
//               <div className="">
//                 <h3 className="text-black mb-4 text-lg font-semibold">
//                   Contact Us
//                 </h3>
//                 <p className="mt-4 flex items-center gap-3 text-sm text-gray_footer_text max-sm:gap-2 max-sm:text-xs">
//                   <Image src="/phone.svg" width={22} height={22} />
//                   +92 3327533903
//                 </p>
//                 <p className="mt-4 flex items-center gap-3 text-sm text-gray_footer_text max-sm:gap-2 max-sm:text-xs">
//                   <Image src="/globe.svg" width={22} height={22} />
//                   info@skillbuilder.online
//                 </p>
//               </div>
//               {/* </div> */}
//             </div>
//           </div>
//           <div className="mb-8 flex flex-col items-center">
//             <hr className="my-4 w-[100%] border-t-2 border-bottom_border_gray" />
//             <div className="flex w-[100%] items-center justify-between max-sm:flex-col max-sm:text-center">
//               <span className="text-gray_footer_text">
//                 © 2023 Skill Builder All rights reserved.
//               </span>
//               <span className="flex items-center gap-2 max-sm:pt-4">
//                 <Image
//                   src="/twitter (2).png"
//                   className="cursor-pointer"
//                   width={40}
//                   height={40}
//                   onClick={() => onSocialClick("https://instagram.com")}
//                 />
//                 <Image
//                   src="/linkedin (2).png"
//                   className="cursor-pointer"
//                   width={40}
//                   height={40}
//                   onClick={() =>
//                     onSocialClick(
//                       "https://www.facebook.com/people/SkillBuilder/61557538478424/",
//                     )
//                   }
//                 />
//                 <Image
//                   src="/facebook (2).png"
//                   className="cursor-pointer"
//                   width={40}
//                   height={40}
//                   onClick={() =>
//                     onSocialClick(
//                       "https://www.linkedin.com/company/skill-builderss/ ",
//                     )
//                   }
//                 />
//                 <Image
//                   src="/insta (2).png"
//                   className="cursor-pointer"
//                   width={40}
//                   height={40}
//                   onClick={() => onSocialClick("https://twitter.com")}
//                 />
//               </span>
//             </div>
//           </div>
//         </div>
//       </LayoutWidth>
//     </footer>
//   );
// };
// export default Footer;
