import React, { useEffect } from "react";
import Image from "next/image";
import "../styles/footer.css";
import LayoutWidth from "./LayoutWidth";
// import logo from "../../../assets/logo.png";
// import trustpilot from "../../../assets/trustpilot.png";
// import facebook from "../../../assets/facebook1.png";
// import twitter from "../../../assets/twitter.png";
// import insta from "../../../assets/insta.png";
// import Linkedin from "../../../assets/Linkedin.png";
const Footer = () => {
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
    // <footer className="w-[100%] bg-white text-white p-4 mt-12 max-sm:mt-[-4rem]">
    <footer className="mt-12 w-[100%] bg-white p-4 text-white">
      <LayoutWidth>
        <div className="footer-inner">
          <div className="flex flex-col flex-wrap items-start justify-between space-y-4 lg:flex-row lg:items-center lg:space-y-0">
            {/* Left column */}
            {/* <div className="w-[50%] max-sm:flex max-sm:flex-col max-sm:items-center  md:w-1/3 mb-4 md:mb-0 max-sm:w-[100%]"> */}
            <div className="mb-4 w-full md:mb-0 lg:w-auto max-sm:flex max-sm:flex-col max-sm:items-center">
              <Image src="/logo.svg" className="img" width={50} height={50} />
              <p className="mt-4 text-black max-sm:w-[100%]">
                Venture your Educational dreams.{" "}
              </p>
              <div className="mt-4 flex justify-between gap-0 lg:justify-start lg:gap-6 max-sm:gap-7">
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

                {/* <Image src='/glassdoor.svg' width={150} height={100} /> */}
              </div>
            </div>
            {/* <div className="flex w-[60%] max-sm:w-[100%] items-center justify-center "> */}
            <div className="flex items-center justify-center">
              {/* <div className='w-[100%] flex justify-between '> */}
              {/* Right columns */}
              {/* <div className="w-[100%]  md:w-1/2 flex justify-between  max-sm:justify-center gap-10"> */}
              <div className="flex justify-between gap-24 max-sm:justify-center">
                {/* First column in the right side */}
                {/* <div className="w-full md:w-1/2 mb-4 md:mb-0 text-black"> */}
                <div className="mb-4 w-full text-black md:mb-0">
                  <h3 className="mb-2 text-lg font-semibold">Company</h3>
                  <ul className="p-2 text-sm text-gray_footer_text">
                    <li className="mb-4">Home</li>
                    <li className="mb-4">Courses</li>
                    <li className="mb-4">About Us</li>
                  </ul>
                </div>
                {/* Second column in the right side */}
                {/* <div className="w-[100%] md:w-1/2 "> */}
                <div className="">
                  <h3 className="mb-4 text-lg font-semibold text-black">
                    Contact Us
                  </h3>
                  <p className="mt-4 flex w-[14rem] items-center gap-3 text-sm text-gray_footer_text max-sm:w-[10rem] max-sm:gap-2 max-sm:text-xs">
                    <Image src="/phone.svg" width={22} height={22} />
                    +92 3327533903
                  </p>
                  <p className="mt-4 flex w-[14rem] items-center gap-3 text-sm text-gray_footer_text max-sm:w-[8rem] max-sm:gap-2 max-sm:text-xs">
                    <Image src="/globe.svg" width={22} height={22} />
                    info@skillbuilder.online
                  </p>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <hr className="my-4 w-[90%] border-t-2 border-bottom_border_gray" />
            <div className="flex w-[90%] items-center justify-between max-sm:flex-col">
              <span className="text-gray_footer_text">
                © 2023 Skill Builder All rights reserved.
              </span>
              <span className="flex items-center gap-2 max-sm:pt-4">
                <Image
                  src="/twitter.svg"
                  className="cursor-pointer"
                  width={40}
                  height={40}
                />
                <Image
                  src="/linkedin.svg"
                  className="cursor-pointer"
                  width={40}
                  height={40}
                />
                <Image
                  src="/facebook.svg"
                  className="cursor-pointer"
                  width={40}
                  height={40}
                />
                <Image
                  src="/instagram.svg"
                  className="cursor-pointer"
                  width={40}
                  height={40}
                />
              </span>
            </div>
          </div>
        </div>
      </LayoutWidth>
    </footer>
  );
};
export default Footer;
