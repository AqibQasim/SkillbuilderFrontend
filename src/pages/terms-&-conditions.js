import React from "react";
import Navbar from "@/components/Navbar";
import { useSelector } from "react-redux";
import Footer from "@/components/Footer";
import LayoutWidth from "@/components/LayoutWidth";
import CurrentPath from "@/components/CurrentPath";
import Conditions from "@/components/Conditions";

const help = () => {
  const courses = useSelector((state) => state.cart.items);

  return (
    <>
      <Navbar cartItemsLength={courses?.length} />
      <div className="flex h-[100%] w-[100%] flex-col bg-bg_gray py-5">
        <LayoutWidth>
          <div className="path-wrapper mx-auto mb-8 mt-8 max-w-screen-2xl first-line:w-[90%]">
            <CurrentPath />
          </div>
        </LayoutWidth>
        <LayoutWidth>
          <h1 className="mb-4 text-4xl text-start  font-semibold">Terms & Conditions</h1>
      </LayoutWidth>
      <Conditions />
      </div>
      <Footer />
    </>
  );
};

export default help;
