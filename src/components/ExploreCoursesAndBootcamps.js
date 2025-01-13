import Image from "next/image";
import Link from "next/link";
import ExploreCoursesSlider from "./ExploreCoursesSlider";
import ImageCssBg from "./ImageCssBg";
import LayoutXPadding from "./LayoutXPadding";
import PointerDiv from "./PointerDiv";

function ExploreCoursesAndBootcamps() {
  return (
    <LayoutXPadding>
      <div className="explore-courses-and-bootcamps grid grid-cols-[40%_60%] grid-rows-1 items-center justify-start gap-4 overflow-x-hidden bg-[#F2F3FF] py-8 lg:py-10 xlg:py-16">
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
        <div className="cards row-span-2 size-full bg-[#F2F3FF]">
          <ExploreCoursesSlider />
        </div>
      </div>
    </LayoutXPadding>
  );
}

export default ExploreCoursesAndBootcamps;
