import React from "react";
import BillCourse from "./BillCourse";

const Bill = (props) => {
  // const NoOfCourses = props.NoOfCourses;
  const courses = props.courses;
  var totalPrice = 0;
  courses.map((course) => {
    totalPrice += parseInt(course?.amount);
  });

  const NoOfCourses = courses.length;
  // const title = "UI / UX Designing";
  // const price = "249.9";
  // const totalPrice = 449.9;

  return (
    <div
      className="bg-white w-full flex flex-col h-fit gap-8 p-4
                    
                    md:w-[30%] lg:w-[30%]"
    >
      {/* md:my-5 md:mr-5 md:m-0 
                        lg:my-5 lg:mr-5 lg: lg:m-0 */}
      <div className="text-lg">
        <b>{NoOfCourses} courses Added</b>
      </div>
      <div className="flex flex-col gap-3">
        {/* ---------Courses--------- */}
        {courses.map((course) => (
          <BillCourse {...course} />
        ))}

        {/* ---------Courses--------- */}

        <div className="w-full h-[1px] bg-slate-200"></div>
        <div className="flex justify-between text-lg">
          <p className="">Total Price</p>
          <p className="text-blue">${totalPrice}</p>
        </div>
      </div>

      <div className="flex  justify-center">
        <button className="bg-blue mx-2 h-8 w-full rounded-lg">
          <p className="text-white">Checkout</p>
        </button>
      </div>
    </div>
  );
};

export default Bill;
