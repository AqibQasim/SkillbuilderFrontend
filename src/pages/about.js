import Navbar from "@/components/Navbar";
import { useEffect } from "react";
import { setCurrentTab } from "@/utils/currentTabMethods";
import AboutHero from "@/components/AboutHero";
import AboutGoals from "@/components/AboutGoals";
import AboutVision from "@/components/AboutVision";

const about = () => {

    useEffect(() => {
        setCurrentTab('about');
    }, []);

    return (
        <>
        <div className="h-[100%] w-[100%] flex flex-col  bg-bg_gray">
            <Navbar />
            <AboutHero />
            <AboutGoals />
            <AboutVision />
        </div>
        </>
    )
}
export default about;