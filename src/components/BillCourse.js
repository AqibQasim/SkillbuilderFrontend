import React from "react";

const BillCourse = ({ title, price }) => {
  return (
    <div className="flex justify-between text-sm">
      <p className="">{title}</p>
      <p className="text-[#5C5C5C]">${price}</p>
    </div>
  );
};

export default BillCourse;
