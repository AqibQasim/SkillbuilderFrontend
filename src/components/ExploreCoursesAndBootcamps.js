import { useEffect } from "react";
import ExploreCoursesSlider from "./ExploreCoursesSlider";
import LayoutXPadding from "./LayoutXPadding";
import PointerDiv from "./PointerDiv";
import { useDispatch, useSelector } from "react-redux";
import { getAllLiveSessionCourses } from "../../redux/thunks/liveSessionCoursesThunk";

function ExploreCoursesAndBootcamps() {
  const dispatch = useDispatch();

  const liveSessionCourses = useSelector(
    (state) => state.liveSessionCourses.liveSessionCourses,
  );

  useEffect(() => {
    dispatch(getAllLiveSessionCourses());
  }, []);

  return (
    <LayoutXPadding>
      <div className="explore-courses-and-bootcamps grid grid-cols-1 grid-rows-[1fr_23rem] items-center justify-start gap-4 overflow-x-hidden bg-[#F2F3FF] py-8 lg:py-10 xlg:grid-cols-[40%_60%] xlg:grid-rows-1 xlg:py-16">
        <div className="content text-center xlg:text-left">
          {/* <div className="mx-auto mb-1.5 w-max rounded-[3.25rem] border border-[#4000FF] bg-white px-4 py-1 text-xs font-medium text-[#4000FF] xlg:mx-[unset]"> */}
          <div className="mx-auto mb-1.5 w-max rounded-[3.25rem] border border-[#4000FF] bg-inherit px-4 py-1 text-xs font-medium text-[#4000FF] xlg:mx-[unset]">
            Why you need Skillbuilder
          </div>
          <h1 className="mx-auto mb-5 max-w-3xl font-satoshi text-4xl font-semibold text-[#00204D] xlg:mx-[unset]">
            Explore SkillBuilder Courses and Bootcamps Tailored for You
          </h1>
          <p className="mx-auto max-w-3xl text-lg font-medium text-[#5F646B] xlg:mx-[unset] xlg:max-w-[unset]">
            SkillBuilder offers flexible courses and immersive bootcamps
            tailored to your learning style, career goals, and schedule,
            ensuring a personalized and impactful experience.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap xlg:justify-start">
            <PointerDiv pointer={false} />
            <PointerDiv pointer={false} />
          </div>
        </div>
        {/* <div className="cards row-span-2 bg-yellow-300"> */}
        <div className="cards row-span-2 size-full bg-[#F2F3FF]">
          <ExploreCoursesSlider liveSessionCourses={liveSessionCourses} />
        </div>
      </div>
    </LayoutXPadding>
  );
}

export default ExploreCoursesAndBootcamps;
