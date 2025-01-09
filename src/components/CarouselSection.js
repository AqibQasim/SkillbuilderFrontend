import ButtonWithIcon from "./ButtonWithIcon";
import LayoutXPadding from "./LayoutXPadding";
import PointerDiv from "./PointerDiv";

function CarouselSection() {
  return (
    <LayoutXPadding>
      <div className="carousel-section bg-[#ECF7FF] pt-8 text-center lg:pt-10 xlg:pt-16">
        <div className="mx-auto mb-1.5 w-max rounded-[3.25rem] border border-[#4000FF] bg-white px-4 py-1 text-xs font-medium text-[#4000FF]">
          Why you need Skillbuilder
        </div>
        <h1 className="mx-auto mb-5 max-w-3xl font-satoshi text-4xl font-semibold text-[#00204D]">
          Courses or Bootcamp are available in Skillbuilder, Choose what you
          like
        </h1>
        <div className="relative mx-auto max-w-[59.5rem] font-medium text-[#5F646B]">
          <PointerDiv className="!absolute left-0 top-0 hidden -translate-x-[95%] -translate-y-[2.2rem] 2xl:!flex" />
          <PointerDiv
            cursorPosition="left"
            className="!absolute !bottom-0 !right-0 hidden translate-x-[45%] translate-y-[85%] 2xl:!flex"
          />
          <span>
            SkillBuilder offers a diverse range of flexible Courses and
            immersive Bootcamps, designed to cater to your unique learning
            preferences and career aspirations. Whether you prefer self-paced
            learning or an intensive, focused training experience, SkillBuilder
            empowers you to choose the path that aligns with your goals and
            schedule.
          </span>
        </div>
        {/* <ButtonWithIcon className="">Explore courses</ButtonWithIcon> */}
        <div className="my-14"></div>
      </div>
    </LayoutXPadding>
  );
}

export default CarouselSection;
