import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import Table from "./Table";
import { useSelector } from "react-redux";

const InstructorCourseRow = ({ course }) => (
  <div className="grid grid-cols-5 py-5">
    <div>{course.course}</div>
    <div>{course.instructor}</div>
    <div>{course.price}</div>
    <div>{course.buyDate}</div>
    <div>{course.receipt}</div>
  </div>
);

const PaymentHistoryTable = () => {
  const [courses, setCourses] = useState([]);
   const userId = useSelector((state) => state.auth.user);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/get-purchased-courses/${userId}`,
      );

      const data = await res.json();

      // Transform the data to match the structure expected by the component
      const transformedData = data.data.map((courseData) => ({
        course: courseData.course.title,
        instructor: `${courseData.course.instructor.user.first_name} ${courseData.course.instructor.user.last_name}`,
        price: `$${courseData.course.amount}`,
        buyDetail: "Credit Card", // assuming this detail
        buyDate: new Date(courseData.created_at).toLocaleDateString(),
        receipt: "Receipt", // assuming this detail
      }));

      setCourses(transformedData);
    };

    fetchData();
  }, []);

  return (
    <>
      <Table columns="grid-cols-5">
        <Table.Header className={"mb-2 mt-10 rounded-xl bg-white"}>
          <div>Course</div>
          <div>Instructor</div>
          <div>Price</div>
          <div>Buy Date</div>
          <div>Receipt</div>
        </Table.Header>
        <Table.Body
          data={courses}
          render={(course, i) => (
            <InstructorCourseRow course={course} key={i} />
          )}
        />
      </Table>
    </>
  );
};

export default PaymentHistoryTable;
