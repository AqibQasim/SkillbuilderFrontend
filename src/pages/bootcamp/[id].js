import React from "react";
import Banner from "@/components/Banner";
import BootcampHero from "@/components/bootcampHero";
import HomePageNavbar from "@/components/HomePageNavbar";
import Showcase from "@/components/Showcase";
import BootcampSection from "@/components/BootcampSection";
import BootcampOutcome from "@/components/BootcampOutcome";
import CourseModules from "@/components/CourseModule";
import BootcampModule from "@/components/BootcampModule";

const page = () => {
  return (
    <div className="home-container mx-auto max-w-[120em] space-y-12 font-satoshi">
      <Banner />
      <HomePageNavbar />
      <BootcampHero />
      <BootcampSection />
      <BootcampOutcome />
      <BootcampModule />
    </div>
  );
};

export default page;
