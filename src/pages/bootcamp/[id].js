import React, { useEffect } from "react";
import Banner from "@/components/Banner";
import BootcampHero from "@/components/bootcampHero";
import HomePageNavbar from "@/components/HomePageNavbar";
import Showcase from "@/components/Showcase";
import BootcampSection from "@/components/BootcampSection";
import { useRouter } from "next/router";
import { useState } from "react";


const page = () => {
  const router = useRouter();
  const { id } = router.query;
  const [course, setCourse] = useState(null)


  useEffect(() => {
    if(id){
       const fetchData = async () => {
         const res = await fetch(
           `${process.env.NEXT_PUBLIC_BASE_API}/get-live-session-course/${id}`,
         );

         const data = await res.json();

         // Transform the data to match the structure expected by the component
         setCourse({
           instructor_id: data?.data?.instructor_id,
           course_id:data?.data?.id,
           title: data?.data?.title,
           description: data?.data?.description,
           price: parseFloat(data?.data?.amount),
           buyDate: new Date(data?.data?.created_at).toLocaleDateString(),
         });

       };

       fetchData();
    }
  }, [id])

  return (
    <div className="home-container mx-auto max-w-[120em] space-y-12 font-satoshi">
      <Banner />
      <HomePageNavbar />
      <BootcampHero />
      <BootcampSection course={course}/>
    </div>
  );
};

export default page;
