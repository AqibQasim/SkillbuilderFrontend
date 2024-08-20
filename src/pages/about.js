import Navbar from "@/components/Navbar";
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
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const courses = useSelector((state) => state.cart.items);
  console.log("length in root file:", courses?.length);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsClient(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  }, [router?.isReady, courses]);

  if (!isClient) {
    return null;
  }

  if (isLoading) {
    return (
      <div className="flex h-[100vh] w-[100vw] items-center justify-center bg-bg_gray">
        <div className="loader">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <div className="flex h-[100%] w-[100%] flex-col items-center bg-bg_gray">
        <Navbar cartItemsLength={courses?.length} />
        <LayoutWidth>
          <div className="path-wrapper mx-auto mb-8 mt-16 w-[90%] max-w-screen-2xl">
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
