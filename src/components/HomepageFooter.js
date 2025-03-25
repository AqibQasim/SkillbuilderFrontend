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
        // className={`${className} divide-y divide-[#EBEBEB]`}
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
      <ul className="space-y-4 text-sm mb-10 font-light text-[#4A525D]">
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
