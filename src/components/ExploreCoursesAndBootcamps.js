import Image from "next/image";
import LayoutXPadding from "./LayoutXPadding";
import PointerDiv from "./PointerDiv";
import ImageCssBg from "./ImageCssBg";

function ExploreCoursesAndBootcamps() {
  return (
    <LayoutXPadding>
      <div className="explore-courses-and-bootcamps grid grid-cols-[38.75rem_1fr] bg-[#F2F3FF] py-8 lg:py-10 xlg:py-16">
        <div className="content">
          <div className="mb-1.5 w-max rounded-[3.25rem] border border-[#4000FF] bg-white px-4 py-1 text-xs font-medium text-[#4000FF]">
            Why you need Skillbuilder
          </div>
          <h1 className="mb-5 max-w-3xl font-satoshi text-4xl font-semibold text-[#00204D]">
            Explore SkillBuilder Courses and Bootcamps Tailored for You
          </h1>
          <p className="text-lg font-medium text-[#5F646B]">
            SkillBuilder offers flexible courses and immersive bootcamps
            tailored to your learning style, career goals, and schedule,
            ensuring a personalized and impactful experience.
          </p>
          <div className="mt-7 flex items-center justify-start gap-4">
            <PointerDiv pointer={false} />
            <PointerDiv pointer={false} />
          </div>
        </div>
        {/* <div className="cards row-span-2 bg-yellow-300"> */}
        <div className="cards row-span-2">
          <ExploreCoursesCard />
        </div>
      </div>
    </LayoutXPadding>
  );
}

export default ExploreCoursesAndBootcamps;

function ExploreCoursesCard() {
  return (
    <div className="grid grid-cols-[25.25rem] grid-rows-[13.375rem_1fr] overflow-hidden rounded-[0.875rem]">
      <div className="explore-courses-card-image relative row-span-1 rounded-[0.875rem] bg-slate-400">
        <ImageCssBg className="rounded-t-[0.875rem]" src="/dummyImg.svg" />
      </div>
      <div className="explore-courses-card-content relative -top-4 h-[calc(100%+1rem)] rounded-[0.875rem] bg-[#B0B1F2] px-5 py-4">
        <h2 className="text-xl font-bold text-[#2C2C2C]">
          Master Interaction Design: Creating Seamless use...
        </h2>
        <p className="mb-2 text-[0.6rem] text-[#5C5C5C]">
          Unleash your creativity with courses in graphic design, UI/UX, video
          editing, animation, and photography. Whether...
        </p>
        <div className="text-xs">
          By:
          <span className="font-semibold text-[#2C2C2C]">Zubair Alam</span>
        </div>
        <div className="mt-1 flex justify-start text-xs">
          <div className="my-auto h-[9.6px] w-[11.6px]">
            <Image
              className="size-full"
              src={"/course_level.png"}
              width={11.6}
              height={9.6}
            />
          </div>
          <span className="ms-1 self-start text-[#2C2C2C]">
            <span className="text-[#929292]">Level: </span> Beginner
          </span>
        </div>
      </div>
    </div>
  );
}
