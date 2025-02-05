import ContactForm from "@/components/ContactForm";
import ContactHero from "@/components/ContactHero";
import CurrentPath from "@/components/CurrentPath";
import HomepageFooter from "@/components/Footer";
import HomePageNavbar from "@/components/HomePageNavbar";
import LayoutWidth from "@/components/LayoutWidth";
// import { setCurrentTab } from "@/utils/currentTabMethods";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const contact = () => {
  // useEffect(() => {
  //   setCurrentTab("contact");
  // }, []);

  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const courses = useSelector((state) => state.cart.items);
  console.log("length in root file:", courses?.length);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsClient(true);
  }, [router?.isReady, courses]);

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
      <div className="h-[100%] w-[100%] bg-bg_gray">
        <LayoutWidth>
          <HomePageNavbar />
        </LayoutWidth>
        <LayoutWidth>
          <div className="path-wrapper mx-auto mb-8 mt-16 w-[90%] max-w-screen-2xl">
            <CurrentPath />
          </div>
        </LayoutWidth>
        <ContactHero />
        <ContactForm />
        {/* <Footer /> */}
      </div>
      <HomepageFooter />
    </>
  );
};

export default contact;
