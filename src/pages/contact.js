import ContactForm from "@/components/ContactForm";
import ContactHero from "@/components/ContactHero";
import CurrentPath from "@/components/CurrentPath";
import Footer from "@/components/Footer";
import HomeSvg from "@/components/HomeSvg";
import Navbar from "@/components/Navbar";
import RightIconSvg from "@/components/RightIconSvg";
// import { setCurrentTab } from "@/utils/currentTabMethods";
import Image from "next/image";
// import { useEffect } from "react";

const contact = () => {
  // useEffect(() => {
  //   setCurrentTab("contact");
  // }, []);

  return (
    <>
      <div className="h-[100%] w-[100%] bg-bg_gray">
        <Navbar />
        <div className="path-wrapper mx-auto mb-8 mt-16 w-[90%] max-w-screen-2xl">
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
