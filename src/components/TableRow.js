import { formatCurrency } from "@/utils/formatCurrency";
import React from "react";
import CoursStatusIconSvg from "./CoursStatusIconSvg";
import { useRouter } from "next/router"; // Import useRouter
import ChevronRightIconSvg from "./ChevronRightIconSvg";

function TableRow({ course }) {
  const { image, title, instructor, price, skills, status, id } = course;
  const router = useRouter(); // Initialize useRouter

  const statusClass = {
    approved: "bg-status-green-bg text-status-green",
    pending: "bg-status-orange-bg text-status-orange",
    declined: "bg-status-red-bg text-status-red",
  };

  // Function to handle row click
  const handleRowClick = () => {
    // router.push(`/courses/${id}`);
    // router.push(`/dashboard/courses/${id}`);
    router.push(`courses/${id}`);
  };

  return (
    <div
      onClick={handleRowClick}
      className="group grid cursor-pointer grid-cols-[minmax(14rem,1fr)_repeat(4,1fr)_max-content] items-center p-4 transition-all duration-200 hover:bg-white"
    >
      <div className="flex items-center">
        <img src={image} alt={title} className="mr-4 h-10 w-10 rounded-full" />
        <span>{title}</span>
      </div>
      <div>{instructor}</div>
      <div>{formatCurrency(price)}</div>
      <div>{skills}</div>
      <div
        className={`flex w-max items-center justify-center gap-3 rounded-md px-3 py-2 ${statusClass[status]}`}
      >
        <CoursStatusIconSvg className="h-5 w-5" status={status.toLowerCase()} />
        <span className="capitalize">{status}</span>
      </div>
      <div className="flex h-7 w-7 items-center justify-center rounded-full">
        <ChevronRightIconSvg
          className="relative -right-[1.5px] h-4 w-4 transition-transform duration-300 group-hover:-rotate-45"
          currentColor
        />
      </div>
    </div>
  );
}

export default TableRow;
