import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import {setCurrentTab} from '../utils/currentTabMethods'
import Courses from "../components/Courses";
import Footer from "@/components/Footer";
import CurrentPath from "@/components/CurrentPath";
import ShopCheckout from "@/components/ShopCheckout";

const ShoppingCart = () => {

  const courses = [
    {
      id: 1,
      title: "Software Testing",
      rating: 5,
      image: "/dummyImg.svg",
      desc: "Equipping you with essential skills",
      price: 120,
    },
    {
      id: 2,
      title: "UI / UX Designing",
      rating: 4.9,
      image: "/dummyImg.svg",
      desc: "Equipping you with essential skills",
      price: 250,
    },
    {
      id: 3,
      title: "Web-Development",
      rating: 4.9,
      image: "/dummyImg.svg",
      desc: "Equipping you with essential skills",
      price: 250,
    },
    {
      id: 4,
      title: "Full-Stack Development",
      rating: 4.9,
      image: "/dummyImg.svg",
      desc: "Equipping you with essential skills",
      price: 250,
    }]

    useEffect(()=> {    
        setCurrentTab('');
    },[]);

    return(
        <>
        <div className="h-[100%] w-[100%] flex flex-col items-center bg-bg_gray">
            <Navbar /> 
            <div className="path-wrapper w-[90%] max-w-screen-2xl mx-auto mt-16 mb-8">
                <CurrentPath />
            </div>
            <ShopCheckout/>
            <Courses courses={courses} heading='You Might Also Like' paddingTop={'pt-5'}/>
            <Footer />
        </div>
        </>
    )
}

export default ShoppingCart;