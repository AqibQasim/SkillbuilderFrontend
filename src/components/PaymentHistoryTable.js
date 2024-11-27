import React from 'react';
import Filter from './Filter';
import Table from "./Table";

const dummyData = [
  {
    course: 'React for Beginners',
    instructor: 'John Doe',
    price: '$50',
    buyDetail: 'Credit Card',
    buyDate: '2024-11-25',
    receipt: 'Receipt',
  },
  {
    course: 'Advanced JavaScript',
    instructor: 'Jane Smith',
    price: '$75',
    buyDetail: 'PayPal',
    buyDate: '2024-11-26',
    receipt: 'Receipt',
  },
  {
    course: 'CSS Mastery',
    instructor: 'Emily Johnson',
    price: '$40',
    buyDetail: 'Credit Card',
    buyDate: '2024-11-27',
    receipt: 'Receipt',
  },
  {
    course: 'CSS Mastery',
    instructor: 'Emily Johnson',
    price: '$40',
    buyDetail: 'Credit Card',
    buyDate: '2024-11-27',
    receipt: 'Receipt',
  },
  {
    course: 'CSS Mastery',
    instructor: 'Emily Johnson',
    price: '$40',
    buyDetail: 'Credit Card',
    buyDate: '2024-11-27',
    receipt: 'Receipt',
  },
  {
    course: 'CSS Mastery',
    instructor: 'Emily Johnson',
    price: '$40',
    buyDetail: 'Credit Card',
    buyDate: '2024-11-27',
    receipt: 'Receipt',
  },
  {
    course: 'CSS Mastery',
    instructor: 'Emily Johnson',
    price: '$40',
    buyDetail: 'Credit Card',
    buyDate: '2024-11-27',
    receipt: 'Receipt',
  },
];

const InstructorCourseRow = ({ course }) => (
  <div className="grid grid-cols-6 py-5">
    <div>{course.course}</div>
    <div>{course.instructor}</div>
    <div>{course.price}</div>
    <div>{course.buyDetail}</div>
    <div>{course.buyDate}</div>
    <div>{course.receipt}</div>
  </div>
);

const PaymentHistoryTable = () => {
  return (
    <>
      <Table columns="grid-cols-6">
        <Table.Header className={"bg-white rounded-xl mt-10 mb-2"}>
          <div>Course</div>
          <div>Instructor</div>
          <div>Price</div>
          <div>Buy detail</div>
          <div>Buy Date</div>
          <div>Receipt</div>
        </Table.Header>
        <Table.Body
          data={dummyData}
          render={(course, i) => (
            <InstructorCourseRow course={course} key={i} />
          )}
        />
      </Table>
    </>
  );
};

export default PaymentHistoryTable;
