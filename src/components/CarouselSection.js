import ButtonWithIcon from "./ButtonWithIcon";
import LayoutXPadding from "./LayoutXPadding";
import PointerDiv from "./PointerDiv";

function CarouselSection() {
  return (
    <LayoutXPadding>
      <div className="carousel-section bg-[#ECF7FF] !px-6 pt-8 text-center lg:pt-10 xlg:pt-16">
        <div className="mx-auto mb-1.5 w-max rounded-[3.25rem] border border-[#4000FF] bg-white px-4 py-1 text-xs font-medium text-[#4000FF]">
          Why you need Skillbuilder
        </div>
        <h1 className="mx-auto mb-5 max-w-3xl font-satoshi text-4xl font-semibold text-[#00204D]">
          Courses or Bootcamp are available in Skillbuilder, Choose what you
          like
        </h1>

        <div className="mx-auto mb-12 grid grid-cols-1 xlg:max-w-[95rem] xlg:grid-cols-[max-content_1fr_max-content]">
          <div className="one relative hidden xlg:block">
            <PointerDiv className="absolute -top-10 right-0" />
          </div>
          <div className="relative mx-auto max-w-[59.5rem] font-medium text-[#5F646B]">
            <p>
              SkillBuilder offers a diverse range of flexible Courses and
              immersive Bootcamps, designed to cater to your unique learning
              preferences and career aspirations. Whether you prefer self-paced
              learning or an intensive, focused training experience,
              SkillBuilder empowers you to choose the path that aligns with your
              goals and schedule.
            </p>
          </div>
          <div className="three relative hidden self-end xlg:block">
            <PointerDiv
              cursorPosition="left"
              className="absolute -bottom-[3.25rem] left-0"
            />
          </div>
        </div>
        <ButtonWithIcon className="mx-auto">Explore courses</ButtonWithIcon>
      </div>
    </LayoutXPadding>
  );
}

export default CarouselSection;
