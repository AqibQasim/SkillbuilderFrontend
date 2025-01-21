import React from 'react'
import HomePageNavbar from '@/components/HomePageNavbar';
import { useSelector } from 'react-redux';
import Footer from "@/components/Footer";
import LayoutWidth from "@/components/LayoutWidth";
import CurrentPath from "@/components/CurrentPath";
import HelpHero from "@/components/HelpHero"
import HelpCards from '@/components/HelpCards'
import RecentHelpCards from '@/components/RecentHelpCards'

const help = () => {
const courses = useSelector((state) => state.cart.items);

  return (
    <>
      <div className="flex h-[100%] w-[100%] flex-col items-center bg-bg_gray">
        <HomePageNavbar />
      </div>
      <div className="flex h-[100%] w-[100%] flex-col items-center bg-bg_gray">
        <LayoutWidth>
          <div className="path-wrapper mx-auto mb-8 mt-8 max-w-screen-2xl first-line:w-[90%]">
            <CurrentPath />
          </div>
        </LayoutWidth>
        <HelpHero />
        <HelpCards />
        <div className="mt-5"></div>
        <RecentHelpCards />
      </div>
      <Footer />
    </>
  );
}

export default help