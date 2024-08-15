import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import { setCurrentTab } from "@/utils/currentTabMethods";
// import { useEffect } from "react";
// import { setCurrentTab } from "@/utils/currentTabMethods";
import Courses from "@/components/Courses";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import CurrentPath from "@/components/CurrentPath";

const courses = () => {
  useEffect(() => {
    setCurrentTab("courses");
  }, []);
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const courses = useSelector((state) => state.cart.items);
  console.log("length in root file:", courses?.length);

  useEffect(() => {
    setIsClient(true);
  }, [router?.isReady, courses]);

  if (!isClient) {
    return null;
  }

  return (
    <>
      <div className="flex h-[100%] w-[100%] flex-col items-center bg-bg_gray">
        <Navbar cartItemsLength={courses?.length} />
        <div className="path-wrapper mx-auto mb-8 mt-16 w-[90%] max-w-screen-2xl">
          <CurrentPath />
        </div>
        <Courses paddingTop="pt-10" heading="High TO Low" />
        <Courses paddingTop="pt-10" heading="Low To High" />
        <Courses paddingTop="pt-10" heading="Free Courses" />
        <Footer />
      </div>
    </>
  );
};

export default courses;
