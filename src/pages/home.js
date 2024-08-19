import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import { setCurrentTab } from "../utils/currentTabMethods";
import SkillsList from "@/components/SkillsList";
import PromotionalList from "@/components/PromotionalList";
import Courses from "../components/Courses";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const Home = () => {
  // Set current tab on mount
  useEffect(() => {
    setCurrentTab("home");
  }, []);

  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [loading, setLoading] = useState(true);
  const courses = useSelector((state) => state.cart.items);
  console.log("length in root file:", courses?.length);

  // Ensure that we only set isClient to true when the router is ready and courses are available
  useEffect(() => {
    if (router?.isReady) {
      setIsClient(true);
      setLoading(false);
    }
  }, [router?.isReady, courses]);

  if (loading) {
    return (
      <div className="flex h-[100vh] w-[100vw] items-center justify-center bg-bg_gray">
        <div className="loader">Loading...</div>
      </div>
    );
  }

  if (!isClient) {
    return null;
  }

  return (
    <>
      <div className="flex h-[100%] w-[100%] flex-col items-center bg-bg_gray">
        <Navbar cartItemsLength={courses?.length} />
        <HeroSection />
        <SkillsList />
        <Courses heading="Find the courses that fit you" />
        <PromotionalList />
        <Footer />
      </div>
    </>
  );
};

export default Home;
