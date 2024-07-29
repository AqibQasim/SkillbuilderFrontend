import { formatDateAndTime } from "@/utils/formatDateAndTime";
import InstructorCourseStatus from "./InstructorCourseStatus";
import { formatCurrency } from "@/utils/formatCurrency";

function InstructorCourseCard({ course, createdBy, className }) {
  return (
    <div
      className={`grid grid-cols-[16.875rem_1fr_max-content] grid-rows-[12.5rem] gap-8 xlg:gap-14 ${className}`}
    >
      <div className="image-wrapper relative col-span-1 rounded-lg">
        <img
          src={course?.image}
          alt={`${course?.title}'s Image`}
          className="size-full rounded-lg object-cover"
        />
      </div>
      <div className="col-span-1">
        <h2 className="text-3xl font-medium capitalize"> {course?.title} </h2>
        <p className="text-lg font-semibold text-blue">
          {" "}
          {formatCurrency(Number(course?.amount))}
        </p>
        <p className="description mt-1 text-gray-700">
          {course.description || "No description provided for this course yet."}
        </p>

        <div className="mt-2 text-sm text-gray-shade-1">
          <p className="capitalize">
            Technology • {course?.creation_duration_hours} Hours •{" "}
            {course.modulesCount} Modules
          </p>
          <p>
            Uploaded by:{" "}
            <span className="text-black-shade-1">
              {course?.updated_by || createdBy || "John Doe"}
            </span>{" "}
            • Date:{" "}
            <span className="uppercase text-black-shade-1">
              {" "}
              {formatDateAndTime(course?.created_at) ||
                "24 July 2017 – 5:02pm"}{" "}
            </span>
          </p>
        </div>
      </div>
      <div className="status-icon status-icon">
        <InstructorCourseStatus status={course?.status} />
      </div>
    </div>
  );
}

export default InstructorCourseCard;
