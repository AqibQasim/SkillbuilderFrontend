"use client";
import React, { useEffect, useState } from "react";
import Banner from "@/components/Banner";
import BootcampHero from "@/components/bootcampHero";
import HomePageNavbar from "@/components/HomePageNavbar";
import { useRouter } from "next/router";
import HomepageFooter from "@/components/HomepageFooter";
import Image from "next/image";
import LayoutXPadding from "@/components/LayoutXPadding";
import CareerHero from "@/components/CarrerHero";
import Counseling from "@/components/Counseling";
import CounselingProcess from "@/components/CounselingProcess";
import CareerGuidance from "@/components/CarrerGuidance";
import Decision from "@/components/Decision";
import CareerReviews from "@/components/CareerReviews";

const Page = () => {
  const [studentProfile, setStudentProfile] = useState(null);

  useEffect(() => {
    setStudentProfile(JSON.parse(localStorage.getItem("profile")));
  }, []);

  return (
    <div className="home-container py-0 w-[100%] space-y-12 font-satoshi ">
    <div className="relative bottom-4 pt-10 ">
      <div className="absolute inset-0 -z-10">
        <Image
          src={"/CareerBackRound.png"}
          alt="career-counseling Hero"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
      </div>

      <LayoutXPadding>
        <div className="relative z-[70]">
          <HomePageNavbar />
        </div>
      </LayoutXPadding>

      <CareerHero studentProfile={studentProfile} />
     </div>
 
     <Counseling  studentProfile={studentProfile}/> 
     <CounselingProcess/>
     <CareerGuidance studentProfile={studentProfile}/>
     <Decision/>
     <CareerReviews/>
     <HomepageFooter />
    </div>
  );
};

export default Page;
