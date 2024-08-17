import Image from "next/image";
import LayoutPadding from "./LayoutPadding";

const icon = (iconName) => `/${iconName.replace(/\s+/g, "").toLowerCase()}.svg`;

function InstructorHero({ instructor }) {
  return (
    <div className="bg-white py-14 lg:py-16">
      <div
        className="flex flex-col justify-center
        items-center gap-2 text-center w-[90%] max-w-screen-2xl mx-auto xl:flex-row xl:gap-9 xl:text-left xl:justify-start xl:items-start"
      >
        <div className="image">
          <Image
            className="rounded-full"
            src="/instructor-avatar.png"
            height={190}
            width={190}
            alt={`${instructor.user?.first_name}'s avatar photo`}
          />
        </div>
        <div className="content relative mt-4 space-y-2">
          <h1 className="font-semibold text-5xl">
            {instructor.user?.first_name} {instructor.user?.last_name}
          </h1>
          <p className="text-xl xl:text-2xl font-normal text-black">
            Email:
            <span className="text-[1.375rem] text-span">
              &nbsp; {instructor.user?.email}
            </span>
          </p>
          <p className="text-xl xl:text-2xl font-normal text-black inline-flex justify-center items-center">
            Location:{" "}
            <span className="text-[1.375rem] text-span">
              &nbsp; {instructor.user?.location}
            </span>
            <span className="ml-3 mb-1">
              <Image
                src="/location.svg"
                className="h-[1.4375rem] w-[1.4375rem]"
                height={23}
                width={23}
                alt="location icon"
              />
            </span>
          </p>
          <div className="skills">
            <p className="text-xl xl:text-2xl font-normal text-black">
              Super Skills:
            </p>
            <ul className="ml-0 mt-4 inline-flex flex-wrap justify-center items-center gap-3 xl:ml-6">
              {instructor.skills.map((skill, index) => (
                <li key={index} className="rounded-lg bg-[#F0F2F9] py-3 px-5 text-nowrap text-blue font-normal min-w-max flex justify-center items-center gap-4 text-xl">
                  <Image
                    height={23}
                    width={23}
                    className="h-[1.4375rem] w-[1.4375rem]"
                    src={icon(skill.title)}
                    alt={skill.title}
                  />{" "}
                  {skill.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstructorHero;
