import React, { useEffect } from "react";
import { useRouter } from "next/router";
import HomePageNavbar from "@/components/HomePageNavbar";
import LayoutWidth from "@/components/LayoutWidth";
import HomepageFooter from "@/components/HomepageFooter";


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
      <LayoutWidth>
        <HomePageNavbar />
      </LayoutWidth>

      <LayoutWidth>
        <div className="my-20">
          <div>Your payment was successfull!</div>
         
          <div>You will soon be added to relevant groups and contacted by our Account Executive.</div>
        </div>
      </LayoutWidth>
      <HomepageFooter />
    </>
  );
};

export default BootcampPaymentSuccess;
