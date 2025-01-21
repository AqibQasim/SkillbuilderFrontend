import React from "react";
import CareerCounselling from "@/components/CareerCounselling";
import HomePageNavbar from "@/components/HomePageNavbar";
import LayoutXPadding from "@/components/LayoutXPadding";
import HomepageFooter from "@/components/HomepageFooter";

const Counselling = () => {
  return (
    <>
      <LayoutXPadding>
        <div className="s">
          <HomePageNavbar />
        </div>
      </LayoutXPadding>
      <CareerCounselling />
      <HomepageFooter />
    </>
  );
};

export default Counselling;
