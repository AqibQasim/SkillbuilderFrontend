import Navbar from "@/components/Navbar";
// import { useEffect } from "react";
// import { setCurrentTab } from "@/utils/currentTabMethods";
import AboutGoals from "@/components/AboutGoals";
import AboutHero from "@/components/AboutHero";
import AboutTeam from "@/components/AboutTeam";
import AboutVision from "@/components/AboutVision";
import CurrentPath from "@/components/CurrentPath";
import Router from "next/router";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";
import LayoutWidth from "@/components/LayoutWidth";
import { useState, useEffect } from "react";

const about = () => {
  // useEffect(() => {
  //   setCurrentTab("about");
  // }, []);

  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const courses = useSelector((state) => state.cart.items);
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
        <LayoutWidth>
        <div className="path-wrapper w-[90%] max-w-screen-2xl mx-auto mt-16 mb-8">
          <CurrentPath />
        </div>
        </LayoutWidth>
        <AboutHero />
        <AboutGoals />
        <AboutVision />
        <AboutTeam />
        <Footer />
      </div>
    </>
  );
};
export default about;
