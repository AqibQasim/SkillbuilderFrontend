import ContactForm from "@/components/ContactForm";
import ContactHero from "@/components/ContactHero";
import CurrentPath from "@/components/CurrentPath";
import Footer from "@/components/Footer";
import HomeSvg from "@/components/HomeSvg";
import Navbar from "@/components/Navbar";
import RightIconSvg from "@/components/RightIconSvg";
import { setCurrentTab } from "@/utils/currentTabMethods";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";


const contact = () => {
  useEffect(() => {
    setCurrentTab("contact");
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
      <div className="h-[100%] w-[100%] bg-bg_gray">
        <Navbar cartItemsLength={courses?.length} />
        <div className="path-wrapper w-[90%] max-w-screen-2xl mx-auto mt-16 mb-8">
          <CurrentPath />
        </div>
        <ContactHero />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
};

export default contact;
