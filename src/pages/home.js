import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import {setCurrentTab} from '../utils/currentTabMethods'
import SkillsList from "@/components/SkillsList";
import PromotionalList from "@/components/PromotionalList";
import Courses from "../components/Courses";
import Footer from "@/components/Footer";

const Home = () => {

    useEffect(()=> {    
        setCurrentTab('home');
    },[]);

    return(
        <>

        <div className="h-[100%] w-[100%] flex flex-col items-center bg-bg_gray">
            <Navbar /> 
            <HeroSection />       
            <SkillsList /> 
            <Courses />
            <PromotionalList />
            <Footer />
        </div>
            
        </>
    )
}

export default Home;