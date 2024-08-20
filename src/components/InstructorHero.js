import Image from "next/image";
import LayoutPadding from "./LayoutPadding";

const icon = (iconName) => `/${iconName.replace(/\s+/g, "").toLowerCase()}.svg`;

function InstructorHero({ instructor }) {
  return (
    <div className="bg-white py-14 lg:py-16">
      <div className="mx-auto flex w-[90%] max-w-screen-2xl flex-col items-center justify-center gap-2 text-center xl:flex-row xl:items-start xl:justify-start xl:gap-9 xl:text-left">
        <div className="image">
          <Image
            className="rounded-full"
            src="/instructor-avatar.png"
            height={190}
            width={190}
            alt={`${instructor.user?.first_name}'s avatar photo`}
          />
        </div>
        <div className="content relative mb-8 mt-4 space-y-2">
          <h1 className="text-2xl font-semibold">
            {instructor.user?.first_name} {instructor.user?.last_name}
          </h1>
          <p className="xl:text-md text-black text-sm font-normal">
            Email:
            <span className="text-md xl:text-md text-span">
              &nbsp; {instructor.user?.email}
            </span>
          </p>
          <p className="xl:text-md text-black mt-2 inline-flex items-center justify-center text-sm font-normal">
            Location:{" "}
            <span className="text-md xl:text-md text-span">
              &nbsp; {instructor.user?.location}
            </span>
            <span className="mb-1 ml-3">
              <Image
                src="/location.svg"
                className="h-[1.4375rem] w-[1.4375rem]"
                height={10}
                width={10}
                alt="location icon"
              />
            </span>
          </p>
          <div className="skills">
            <p className="text-md text-black mt-2 font-normal xl:text-lg">
              Super Skills:
            </p>
            <ul className="ml-0 mt-4 inline-flex flex-wrap items-center justify-center gap-3 xl:ml-6">
              {instructor.skills.map((skill, index) => (
                <li
                  key={index}
                  className="flex min-w-max items-center justify-center gap-4 text-nowrap rounded-lg bg-[#F0F2F9] px-5 py-3 text-sm font-normal text-blue">
                  <Image
                    height={15}
                    width={15}
                    className="h-[1.4375rem] w-[1.4375rem]"
                    src={icon(skill.title)}
                    // alt={skill.title}
                  />
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
