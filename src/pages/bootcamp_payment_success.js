import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import HomePageNavbar from "@/components/HomePageNavbar";
import LayoutWidth from "@/components/LayoutWidth";
import HomepageFooter from "@/components/HomepageFooter";
import Image from "next/image";
import ButtonWithIcon from "@/components/ButtonWithIcon";
import BackButton from "@/components/BackButton";
import Link from "next/link";


const   BootcampPaymentSuccess = () => {
  const router = useRouter();
  const { student_id,  course_id } = router?.query;
  console.log("//// Student ID:", student_id, "Course ID:", course_id);
  const [data, setData] = useState(null);
  
  const [loading, setLoading] = useState(true);

  async function addCounseling() {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/get-live-session-course-payment-of-student?student_id=${student_id}&course_id=${course_id}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!res.ok) {
        throw new Error(`Error: ${res.status} - ${res.statusText}`);
      }

      const responseData = await res.json();
      console.log("API Response:", responseData);
      setData(responseData.data);
      
    } catch (error) {
      console.error("Error adding counseling:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (student_id && course_id) {
      addCounseling();
    }
  }, [router?.isReady, student_id, course_id]);
  console.log("apidata",data)

  if (loading) return <p className="text-center my-10">Loading...</p>;
  

  return (
    <>
      <LayoutWidth>
        <HomePageNavbar />
      </LayoutWidth>

      <LayoutWidth>
        <div className="my-20">

        <div class="flex justify-center items-center min-h-screen bg-gray-100">

<div class="max-w-4xl w-full bg-white shadow-md rounded-xl p-8 flex flex-col md:flex-row items-center">
    
    
    <div class="w-full  md:w-1/2 text-center md:text-left md:border-r-2 py-6">
    
    <div className="flex justify-center" >
    <Image
                    src="/letter.png"
                    alt="letter Logo"
                    width={120}
                    height={50 }
                    className=""
                  /> 
    </div>
   
        <h2 class="text-xl mt-4 text-center font-bold">Hi!  {data?.student?.first_name}</h2>
        <div className="flex justify-center mt-1" >
    <Image
                    src="/GoldenLine.png"
                    alt="letter Logo"
                    width={150}
                    height={10 }
                    className=""
                  /> 
    </div>
        <h3 class="text-lg mt-4 text-center font-semibold">Thank you for joining us!</h3>
        <p class="text-gray-600 text-center">Your live session journey is about to begin!</p>
        <div className="mt-8 flex place-items-center flex-col sm:flex-row justify-center  gap-[8px]" >
            <BackButton>Back to home </BackButton>

            <Link href="/bootcamp" passHref>
           <ButtonWithIcon text="View All Sessions" className="text-nowrap max-sm:mt-3" />
           </Link>
        </div>
         
        <div class="flex space-x-4 justify-center md:justify-start mt-4">
    
        </div>
    </div>

    
    <div class="hidden md:block w-[1px] bg-gray-200 h-full mx-6"></div>

    
    <div class="w-full md:w-1/2 p-6">
        <h3 class="text-lg font-semibold">Course Overview</h3>
        <div class="mt-4 space-y-3 text-sm text-gray-700">
            <div>
                <p class="font-medium">Course Name</p>
                <div class="p-2 border border-gray-300 rounded-md"> {data?.course?.title}</div>
            </div>
            <div>
                <p class="font-medium">Session Date & Time</p>
                <div class="p-2 border border-gray-300 rounded-md">Starts: February 10, 2025, at 5:00 PM</div>
            </div>
            <div>
                <p class="font-medium">Course Duration</p>
                <div class="p-2 border border-gray-300 rounded-md">2 Months</div>
            </div>
        </div>

       
   <div className="mt-4 space-y-4 text-sm text-gray-600">

  <div className="flex items-start gap-3">
    <Image
      src="/tick-circle.png"
      alt="Checkmark Icon"
      width={40}
      height={20}
      className="w-[20px] h-[20px] "
    />
    <p className="text-xs" >You’ll receive access to exclusive materials, live Q&A, and recorded sessions after the class.</p>
  </div>
  <div className="flex items-start gap-3">
    <Image
      src="/message.png"
      alt="Message Icon"
      width={20}
      height={20}
      className="w-[20px] h-[20px]"
    />
    <p className="text-xs" >Our account manager will add you to the exclusive WhatsApp group within 24 hours.</p>
  </div>
 
   <div className="flex items-start gap-3">
    <Image
      src="/message.png"
      alt="Email Icon"
      width={20}
      height={20}
      className="w-[20px] h-[20px]"
    />
    <p className="text-xs" >Check your email for additional details and access links.</p>
    </div>
</div>


    </div>
</div>

</div>


          
        </div>
      </LayoutWidth>
      <HomepageFooter />
    </>
  );
};

export default BootcampPaymentSuccess;
