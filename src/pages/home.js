import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
// import { useEffect, useState } from "react";
// import {setCurrentTab} from '../utils/currentTabMethods'
import Footer from "@/components/Footer";
import PromotionalList from "@/components/PromotionalList";
import SkillsList from "@/components/SkillsList";
import Courses from "../components/Courses";

const Home = () => {
  // useEffect(()=> {
  //     setCurrentTab('home');
  // },[]);

  return (
    <>
      <div className="flex h-[100%] w-[100%] flex-col items-center bg-bg_gray">
        <Navbar />
        <HeroSection />
        <SkillsList />
        <Courses heading="Our Courses" />
        <PromotionalList />
        <Footer />
      </div>
    </>
  );
};

export default Home;
