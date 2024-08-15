import Skill from "@/components/Skill";
import GalleryIconSvg from "@/components/GalleryIconSvg";

function DashboardCourseSkills({ className, course }) {
  const skills = [
    "interface design",
    "UX research",
    "interface design",
    "figma",
    "UX research",
  ];

  return (
    <div className={`skills ${className}`}>
      <h2 className="text-2xl font-medium capitalize">skills</h2>
      <div className="mt-4 flex flex-wrap items-center justify-start gap-4">
        {skills.map((skill) => (
          <Skill>
            <GalleryIconSvg className="size-7" /> {skill}{" "}
          </Skill>
        ))}
      </div>
    </div>
  );
}

export default DashboardCourseSkills;
