import Image from "next/image";
import HomePageNavbar from "./HomePageNavbar";
import LayoutXPadding from "./LayoutXPadding";
import showcaseImage from "../../public/showcase-image.png";

function Showcase() {
  return (
    <LayoutXPadding>
      <div className="mx-3 !mt-0 rounded-[1.25rem] bg-[#F3F7FA] !px-4 !pt-4 sm:!px-[3.1rem] md:pt-11 xl:mx-5">
        <HomePageNavbar className="z-[2] !mt-0" />
        <div className="content mb-8 mt-5 flex flex-col items-center justify-center text-center md:mb-11 lg:mt-10 2xl:mt-24">
          <div className="highlight relative z-[1] w-max rounded-[2.2rem] border border-[#000DFF] bg-gradient-to-br from-[#E8E9FF] from-50% to-[rgba(193,197,255,0.5)] px-4 py-2 text-[0.9375rem] text-xs font-medium text-[#313131] md:px-5 xlg:mx-[unset]">
            Rate 4.9/5 from over 157+ reviews
          </div>

          <h1 className="z-[1] mb-2 mt-[1.125rem] max-w-[59rem] text-2xl font-bold text-[#00204D] md:text-3xl lg:mb-[1.125rem] lg:text-4xl">
            Your Partner in Building Skill, Confidence, and Endless Opportunities
          </h1>

          <p className="z-[1] max-w-[56rem] text-sm font-medium text-[#4D5156] md:text-lg">
            SkillBuilder offers expert-led courses to help you master skills,
            achieve goals, and transform ambitions into success.
          </p>
        </div>

        <div className="showcase-image relative mx-auto h-auto sm:max-w-[96%] lg:max-w-[90%] 2xl:max-w-[86.25rem]">
          {/* Shape 1 */}
          <div className="border-shape absolute -top-48 left-0 size-12 bg-[#2A6ED4] mix-blend-overlay hidden md:block md:-top-52 lg:-top-60 xl:size-16 2xl:-top-64"></div>
          
          {/* Shape 2 */}
          <div className="shape-2 absolute -left-[5.6rem] -top-[4.1rem] bg-[#F3F7FA]">
            <div className="sector !size-52"></div>
            <div className="bg-[rgba(255, 255, 255, 0.5)] absolute inset-[2.3rem] size-60 rounded-full backdrop-blur-[7px]"></div>
          </div>
          
          {/* Shape 3 */}
          <div className="shape-2 absolute -top-[12rem] hidden md:flex right-0 size-64 items-start justify-end bg-[#F3F7FA]">
            <div className="border-shape-2 size-36 bg-[#2A6ED4]"></div>
            <Image
              className="absolute -right-4 -top-16"
              src="/shape-try.png"
              height={477}
              width={268}
              alt="shape"
            />
          </div>

          {/* Video Container */}
          <div className="relative h-full w-full rounded-t-[2rem] overflow-hidden">
            <video
              className="h-full w-full rounded-t-[2rem] object-cover"
              src="/video/skillbuilder.mp4"
              poster="/showcase-image.png"
              controlsList="nodownload"
              controls
              autoPlay
              muted
              loop
            />
          </div>
        </div>
      </div>
    </LayoutXPadding>
  );
}

export default Showcase;