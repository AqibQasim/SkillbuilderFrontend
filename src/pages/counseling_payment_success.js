import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const CounselingPaymentSuccess = () => {
  const router = useRouter();
  const { student_id, instructor_id } = router?.query;
  const [email,setEmail]= useState(null);
  const [redirectTo,setRedirectTo]= useState(null);
  console.log(email)

  async function redirectToRecruitinn() {
    const tokenApiForRecruitinn= await fetch(`${process.env.NEXT_PUBLIC_RECRUITINN_BACKEND_API}/generate-career-counselling-token-for-assessment`,{
      method:"POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        candidateEmail:email,
        student_id,
        instructor_id
      })
    });

    const data= await tokenApiForRecruitinn.json();
    let redirectToRecruitinn=null;
    if(data.data.status===200){
      const {token}= data.data;
      redirectToRecruitinn=`${process.env.NEXT_PUBLIC_RECRUITINN_FRONTEND_API}/career-counselling?token=${token}`;
      setRedirectTo(redirectToRecruitinn);
    }
  }

  async function addCounseling() {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/career-counselling-payment`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            student_id: student_id,
            instructor_id: instructor_id,
          }),
        },
      );

      if (!res.ok) {
        throw new Error(`Error: ${res.status} - ${res.statusText}`);
      }

      const data = await res.json();
      console.log("Response:", data);
      await redirectToRecruitinn();
    } catch (error) {
      console.error("Error adding counseling:", error);
    }
  }

  useEffect(() => {
    
    if (router.isReady && student_id && instructor_id) {
      // setEmail(JSON.parse(localStorage.getItem('profile'))?.email);
      addCounseling();
    }
  }, [router?.isReady, student_id, instructor_id]);

  useEffect(()=>{
    if(redirectTo && email){
      router.push(redirectTo);
    }
  },[redirectTo])


  useEffect(() => {
     setEmail(JSON.parse(localStorage.getItem("profile"))?.email);

  }, [email])

  return (
    <>
      <div>Counseling Payment Success!</div>
      <div>Student ID: {student_id}</div>
      <div>Instructor ID: {instructor_id}</div>
    </>
  );
};

export default CounselingPaymentSuccess;