import React from "react";
import TableRow from "./TableRow";

function Table({ courses }) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-[minmax(14rem,1fr)_repeat(4,1fr)] p-4 text-bg_text_gray">
        <div>Course</div>
        <div>Instructor</div>
        <div>Price</div>
        <div>Skills</div>
        <div>Status</div>
      </div>
      <div className="divide-y-[1px] divide-dashboard-border">
        {courses.map((course, index) => (
          <TableRow
            key={index}
            title={course.title}
            image={course.image}
            instructor={course.instructor}
            price={course.price}
            skills={course.skills}
            status={course.status}
          />
        ))}
      </div>
    </div>
  );
}

export default Table;
