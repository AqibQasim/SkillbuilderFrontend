import Navbar from "@/components/Navbar";
// import { useEffect } from "react";
// import { setCurrentTab } from "@/utils/currentTabMethods";
import Courses from "@/components/Courses";
import Footer from "@/components/Footer";

const courses = () => {
  // useEffect(() => {
  //   setCurrentTab("courses");
  // }, []);

  return (
    <>
      <div className="flex h-[100%] w-[100%] flex-col items-center bg-bg_gray">
        <Navbar />
        <Courses paddingTop="pt-10" heading="Courses Recommended For You" />
        <Courses paddingTop="pt-10" heading="Newly Released Courses" />
        <Courses paddingTop="pt-10" heading="Most Popular Courses" />
        <Footer />
      </div>
    </>
  );
};

export default courses;
