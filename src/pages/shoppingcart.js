import HomePageNavbar from "@/components/HomePageNavbar";
import { useEffect, useState } from "react";
import { setCurrentTab } from "../utils/currentTabMethods";
import Courses from "../components/Courses";
import Footer from "@/components/Footer";
import CurrentPath from "@/components/CurrentPath";
import ShopCheckout from "@/components/ShopCheckout";
import Router, { useRouter } from "next/router";
import { useSelector } from "react-redux";
// import { useState, useEffect } from "react";
import withAuth from "@/components/WithAuth";
import CoursesNew from "@/components/CoursesNew";
import HomepageFooter from "@/components/HomepageFooter";

const ShoppingCart = () => {
  useEffect(() => {
    setCurrentTab("");
  }, []);

  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const courses = useSelector((state) => state.cart.items);
  const id = useSelector((state) => state.singleInstructor.id);

  useEffect(() => {
    setIsClient(true);
  }, [router?.isReady, courses]);

  if (!isClient) {
    return null;
  }

  return (
    <>
      <div className="flex h-[100%] w-[100%] flex-col items-center bg-bg_gray">
        <HomePageNavbar />
        <div className="path-wrapper mx-auto mb-8 mt-16 w-[90%] max-w-screen-2xl">
          <CurrentPath />
        </div>
        <div className="path-wrapper mx-auto mb-8 w-[90%] max-w-screen-2xl">
          <ShopCheckout courses={courses} />
        </div>
        <div className="mb-2 text-start text-2xl font-bold">
          You Might Also Like
        </div>
        <CoursesNew
          courses={courses}
          // heading="You Might Also Like"
          // paddingTop={"pt-5"}
        />
        {/* <Footer /> */}
      </div>
      <HomepageFooter />
    </>
  );
};

export default withAuth(ShoppingCart);
