import React, { useEffect } from "react";
import { useRouter } from "next/router";

const   BootcampPaymentSuccess = () => {
  const router = useRouter();
  const { student_id, instructor_id, course_id, amount } = router?.query;

  async function addCounseling() {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/live-session-course-payment`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            student_id: student_id,
            instructor_id: instructor_id,
            course_id: course_id,
            amount: amount
          }),
        },
      );

      if (!res.ok) {
        throw new Error(`Error: ${res.status} - ${res.statusText}`);
      }

      const data = await res.json();
      console.log("Response:", data);
    } catch (error) {
      console.error("Error adding counseling:", error);
    }
  }

  useEffect(() => {
    if (router.isReady && student_id && instructor_id) {
      addCounseling();
    }
  }, [router?.isReady, student_id, instructor_id]);

  return (
    <>
      <div>Live bootcamp Payment Success!</div>
      <div>Student ID: {student_id}</div>
      <div>Instructor ID: {instructor_id}</div>
    </>
  );
};

export default BootcampPaymentSuccess;
