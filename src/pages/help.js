import React from 'react'
import Navbar from "@/components/Navbar";
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
            <Navbar cartItemsLength={courses?.length} />
            <div className="flex h-[100%] w-[100%] flex-col items-center bg-bg_gray">
            <LayoutWidth>
            <div className="path-wrapper mx-auto mb-8 mt-8 first-line:w-[90%] max-w-screen-2xl">
                <CurrentPath />
            </div>
            </LayoutWidth>
            <HelpHero/>
            <HelpCards />
            <div className="mt-5"></div>
            <RecentHelpCards />
            </div>
            <Footer />
        </>
  )
}

export default help