import Navbar from "@/components/Navbar";
import { useEffect } from "react";
import { setCurrentTab } from "@/utils/currentTabMethods";
import AboutHero from "@/components/AboutHero";
import AboutGoals from "@/components/AboutGoals";
import AboutVision from "@/components/AboutVision";
import Footer from "@/components/Footer";
import AboutTeam from "@/components/AboutTeam";
import CurrentPath from "@/components/CurrentPath";
import Router from "next/router";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const about = () => {
  useEffect(() => {
    setCurrentTab("about");
  }, []);

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
        <div className="path-wrapper w-[90%] max-w-screen-2xl mx-auto mt-16 mb-8">
          <CurrentPath />
        </div>
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
