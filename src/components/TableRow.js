import { formatCurrency } from "@/utils/formatCurrency";
import React from "react";
import CoursStatusIconSvg from "./CoursStatusIconSvg";

function TableRow({ image, title, instructor, price, skills, status }) {
  const statusClass = {
    approved: "bg-status-green-bg text-status-green",
    pending: "bg-status-orange-bg text-status-orange",
    declined: "bg-status-red-bg text-status-red",
  };
  return (
    <div className="grid grid-cols-[minmax(14rem,1fr)_repeat(4,1fr)] items-center p-4">
      <div className="flex items-center">
        <img src={image} alt={title} className="mr-4 h-10 w-10 rounded-full" />
        <span>{title}</span>
      </div>
      <div>{instructor}</div>
      <div>{formatCurrency(price)}</div>
      <div>{skills}</div>
      <div
        className={`flex w-max items-center justify-center gap-3 rounded-sm px-3 py-2 ${statusClass[status]}`}
      >
        <CoursStatusIconSvg className="h-5 w-5" status={status.toLowerCase()} />
        <span className="capitalize">{status}</span>
      </div>
    </div>
  );
}

export default TableRow;
