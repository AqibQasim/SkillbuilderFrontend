import Table from "@/components/Table";
import { formatCurrency } from "@/utils/formatCurrency";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import ChevronRightIconSvg from "./ChevronRightIconSvg";
import CoursStatusIconSvg from "./CoursStatusIconSvg";
import ButtonCircle from "./ButtonCircle";

export const statusClass = {
  approved: "bg-status-green-bg text-status-green",
  pending: "bg-status-orange-bg text-status-orange",
  declined: "bg-status-red-bg text-status-red",
};

function DashboardCourseRow({ course }) {
  const router = useRouter();
  const { image, title, amount, discount, status, id } = course;
  const { first_name, last_name } = useSelector((state) => state.profile);

  console.log(course);

  const handleRowClick = () => {
    // router.push(`/courses/${id}`);
    // router.push(`/dashboard/courses/${id}`);
    router.push(`courses/${id}`);
  };

  return (
    <Table.Row onClick={handleRowClick}>
      <div className="image-wrapper relative aspect-square h-10 w-10 overflow-hidden rounded-full">
        <img
          src={image}
          alt={title}
          className="h-full w-full rounded-full object-cover"
        />
      </div>
      <div className="title">{title}</div>
      <div>
        {first_name} {last_name}
      </div>
      <div>{formatCurrency(Number(amount))}</div>
      <div>{formatCurrency(Number(discount))}</div>
      <div
        className={`flex w-max items-center justify-center gap-3 rounded-md px-3 py-2 ${statusClass[status]}`}
      >
        <CoursStatusIconSvg className="h-5 w-5" status={status.toLowerCase()} />
        <span className="capitalize">{status}</span>
      </div>
      <ButtonCircle>
        <ChevronRightIconSvg
          className="relative -right-[1.5px] h-4 w-4 transition-transform duration-300 group-hover:-rotate-45"
          currentColor
        />
      </ButtonCircle>
    </Table.Row>
  );
}

export default DashboardCourseRow;
