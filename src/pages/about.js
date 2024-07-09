import Navbar from "@/components/Navbar";
// import { useEffect } from "react";
// import { setCurrentTab } from "@/utils/currentTabMethods";
import AboutGoals from "@/components/AboutGoals";
import AboutHero from "@/components/AboutHero";
import AboutTeam from "@/components/AboutTeam";
import AboutVision from "@/components/AboutVision";
import CurrentPath from "@/components/CurrentPath";
import Footer from "@/components/Footer";
import LayoutWidth from "@/components/LayoutWidth";

const about = () => {
  // useEffect(() => {
  //   setCurrentTab("about");
  // }, []);

  return (
    <>
      <div className="flex h-[100%] w-[100%] flex-col items-center bg-bg_gray">
        <Navbar />
        <LayoutWidth>
          <div className="path-wrapper mb-8 mt-16">
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
