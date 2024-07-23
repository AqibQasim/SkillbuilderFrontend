import Table from "@/components/Table";
import { formatCurrency } from "@/utils/formatCurrency";
import Image from "next/image";
import { useRouter } from "next/router";
import CoursStatusIconSvg from "./CoursStatusIconSvg";
import ChevronRightIconSvg from "./ChevronRightIconSvg";

function DashboardCourseRow({ course }) {
  const { image, title, instructor, price, skills, status, id } = course;
  const router = useRouter();

  const statusClass = {
    approved: "bg-status-green-bg text-status-green",
    pending: "bg-status-orange-bg text-status-orange",
    declined: "bg-status-red-bg text-status-red",
  };

  const handleRowClick = () => {
    // router.push(`/courses/${id}`);
    // router.push(`/dashboard/courses/${id}`);
    router.push(`courses/${id}`);
  };

  return (
    <Table.Row onClick={handleRowClick}>
      <Image
        className="h-10 w-10 rounded-full"
        alt={title}
        src={image}
        height={40}
        width={40}
      />
      <div className="title">{title}</div>
      <div>{instructor}</div>
      <div>{formatCurrency(price)}</div>
      <div>{skills}</div>
      <div
        className={`flex w-max items-center justify-center gap-3 rounded-md px-3 py-2 ${statusClass[status]}`}
      >
        <CoursStatusIconSvg className="h-5 w-5" status={status.toLowerCase()} />
        <span className="capitalize">{status}</span>
      </div>
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-arrow-link-bg text-arrow-link-text group-hover:text-black">
        <ChevronRightIconSvg
          className="relative -right-[1.5px] h-4 w-4 transition-transform duration-300 group-hover:-rotate-45"
          currentColor
        />
      </div>
    </Table.Row>
  );
}

export default DashboardCourseRow;
