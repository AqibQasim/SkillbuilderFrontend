import React from "react";
import BillCourse from "./BillCourse";
import { useDispatch, useSelector } from "react-redux";

const Bill = (props) => {
  const courses = props.courses;

  const totalPrice = courses.reduce((sum, course) => sum + parseInt(course.amount), 0);
  const NoOfCourses = courses.length;

  const userId = useSelector((state) => state.auth.user);

  console.log("COURSES IN THE BILL PAGE", courses)

  return (
    <div className="bg-white w-full flex flex-col h-fit gap-8 p-4 md:w-[30%] lg:w-[30%]">
      <div className="text-lg">
        <b>{NoOfCourses} courses Added</b>
      </div>
      <div className="flex flex-col gap-3">
        {courses.map((course, index) => (
          <BillCourse key={index} {...course} />
        ))}
        <div className="w-full h-[1px] bg-slate-200"></div>
        <div className="flex justify-between text-lg">
          <p>Total Price</p>
          <p className="text-blue">${totalPrice.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex justify-center">
        <form className="w-full" action="/api/checkout_sessions" method="POST">
          <input type="hidden" name="studentId" value={userId} />
          <input type="hidden" name="items" value={JSON.stringify(courses)} />
          <button className="bg-blue h-8 w-full rounded-lg text-white" type="submit">
            Checkout
          </button>
        </form>
      </div>
    </div>
  );
};

export default Bill;
