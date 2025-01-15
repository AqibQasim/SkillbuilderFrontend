import Image from "next/image";
import HomePageNavbar from "./HomePageNavbar";
import LayoutXPadding from "./LayoutXPadding";
import ImageCssBg from "./ImageCssBg";
import showcaseImage from "../../public/showcase-image.png";

function Showcase() {
  return (
    // add tmep height
    <LayoutXPadding>
      <div className="mx-3 !mt-0 min-h-[650px] rounded-[1.25rem] bg-[#F3F7FA] !px-4 !pt-4 sm:!px-[3.1rem] md:pt-11 xl:mx-5">
        <HomePageNavbar />
        <div className="content mb-8 mt-5 flex flex-col items-center justify-center text-center md:mb-11 lg:mt-10 2xl:mt-24">
          <div className="highlight relative w-max rounded-[2.2rem] border border-[#000DFF] bg-gradient-to-br from-[#E8E9FF] from-50% to-[rgba(193,197,255,0.5)] px-4 py-2 text-[0.9375rem] text-xs font-medium text-[#313131] md:px-5 xlg:mx-[unset]">
            Rate 5/4.9 from over 157+ review
          </div>

          <h1 className="mb-[1.125rem] mt-[1.125rem] max-w-[59rem] text-2xl font-bold text-[#00204D] md:text-3xl lg:text-5xl">
            Your Partner in Building Skill, Confidence, and Endless
            opportunities
          </h1>
          <p className="max-w-[56rem] font-medium text-[#4D5156] md:text-xl">
            SkillBuilder offers expert-led courses to help you master skills,
            achieve goals, and transform ambitions into success.
          </p>
        </div>
        {/* <div className="showcase-image">
          <Image
            src="/showcase-image.png"
            alt="Skillbuilder Showcase Picture"
            height={642}
            width={1380}
          />
        </div> */}

        <div className="shadow-inner-showcase-inner relative mx-auto h-[39rem] max-w-[1380px] overflow-hidden rounded-t-3xl shadow-[0_-36px_80px_0_rgba(148,184,255,0.1),0_-145px_145px_0_rgba(148,184,255,0.09),0_-327px_196px_0_rgba(148,184,255,0.05),0_-581px_232px_0_rgba(148,184,255,0.01)]">
          <ImageCssBg
            className="!object-cover !object-top"
            quality={99}
            src={showcaseImage}
          />
        </div>
      </div>
    </LayoutXPadding>
  );
}

export default Showcase;
