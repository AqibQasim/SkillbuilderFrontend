import { formatDateAndTime } from "@/utils/formatDateAndTime";
import DashboardCourseStatus from "./DashboardCourseStatus";
import { formatCurrency } from "@/utils/formatCurrency";

function DashboardCourseCard({ course, createdBy, className }) {
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
          [Description: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dignissimos sit voluptate dolore officiis sequi beatae obcaecati
          eveniet consectetur sed cupiditate quasi pariatur, quod officia nemo a
          amet dolorum! Nemo, eveniet?]
        </p>
        <div className="text-gray-shade-1 mt-2 text-sm">
          <p>
            Technology • {course?.creation_duration_hours} Hours • 8 Assignments
          </p>
          <p>
            Uploaded by:{" "}
            <span className="text-black-shade-1">
              {course?.updated_by || createdBy || "John Doe"}
            </span>{" "}
            • Date:{" "}
            <span className="text-black-shade-1 uppercase">
              {" "}
              {formatDateAndTime(course?.created_at) ||
                "24 July 2017 – 5:02pm"}{" "}
            </span>
          </p>
        </div>
      </div>
      <div className="status-icon status-icon">
        <DashboardCourseStatus status={course?.status} />
      </div>
    </div>
  );
}

export default DashboardCourseCard;
