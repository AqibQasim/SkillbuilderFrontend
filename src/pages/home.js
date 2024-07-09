import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import { setCurrentTab } from '../utils/currentTabMethods'
import SkillsList from "@/components/SkillsList";
import PromotionalList from "@/components/PromotionalList";
import Courses from "../components/Courses";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const Home = () => {

    useEffect(() => {
        setCurrentTab('home');
    }, []);

    const router = useRouter();
    const [isClient, setIsClient] = useState(false);
    const courses = useSelector((state) => state.cart.items);
    console.log("length in root file:", courses?.length)

    useEffect(() => {
        setIsClient(true);
    }, [router?.isReady, courses]);

    if (!isClient) {
        return null;
    }

    return (
        <>
            <div className="h-[100%] w-[100%] flex flex-col items-center bg-bg_gray">
                <Navbar  cartItemsLength={courses?.length} />
                <HeroSection />
                <SkillsList />
                <Courses heading='Our Courses' />
                <PromotionalList />
                <Footer />
            </div>
        </>
    )
}

export default Home;