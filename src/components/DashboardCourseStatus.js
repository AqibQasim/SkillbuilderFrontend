import CoursStatusIconSvg from "./CoursStatusIconSvg";

export const statusClass = {
  approved: "bg-status-green-bg text-status-green",
  pending: "bg-status-orange-bg text-status-orange",
  declined: "bg-status-red-bg text-status-red",
};

function DashboardCourseStatus({ status }) {
  return (
    <div
      className={`flex w-max items-center justify-center gap-3 rounded-md px-3 py-2 ${statusClass[status]}`}
    >
      <CoursStatusIconSvg className="h-5 w-5" status={status.toLowerCase()} />
      <span className="capitalize">{status}</span>
    </div>
  );
}

export default DashboardCourseStatus;
