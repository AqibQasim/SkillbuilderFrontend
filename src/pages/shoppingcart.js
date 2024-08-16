import Navbar from "@/components/Navbar";
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

const ShoppingCart = () => {

  useEffect(() => {
    setCurrentTab("");
  }, []);

  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const courses = useSelector((state) => state.cart.items);
  const id = useSelector((state) => state.singleInstructor.id);


  console.log(`id in shopping cart is ${id}`)
  console.log("length in root file:", courses?.length)

  useEffect(() => {

    setIsClient(true);
  }, [router?.isReady,courses]);

  if (!isClient) {
    return null;
  }

  return (
    <>
      <div className="h-[100%] w-[100%] flex flex-col items-center bg-bg_gray">
        <Navbar cartItemsLength={courses?.length} />
        <div className="path-wrapper w-[90%] max-w-screen-2xl mx-auto mt-16 mb-8">
          <CurrentPath />
        </div>
        <div className="path-wrapper w-[90%] max-w-screen-2xl mx-auto mb-8">
          <ShopCheckout courses={courses}  />
        </div>

        <Courses
          courses={courses}
          heading="You Might Also Like"
          paddingTop={"pt-5"}
        />
        <Footer />
      </div>
    </>
  );
};

export default withAuth(ShoppingCart);
