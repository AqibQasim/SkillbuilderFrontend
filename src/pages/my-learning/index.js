import CurrentPath from "@/components/CurrentPath";
import Footer from "@/components/Footer";
import LayoutWidth from "@/components/LayoutWidth";
import MyLearningCourses from "@/components/MyLearningCourses";
import MyLearningHero from "@/components/MyLearningHero";
import Navbar from "@/components/Navbar";
import withAuth from "@/components/WithAuth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function MyLearning() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const courses = useSelector((state) => state.cart.items);
  console.log("length in root file:", courses?.length);

  useEffect(() => {
    setIsClient(true);
  }, [router?.isReady, courses]);

  if (!isClient) {
    return null;
  }
  return (
    <>
      <div className="h-[100%] w-[100%] bg-bg_gray">
        <Navbar cartItemsLength={courses?.length} />
        <LayoutWidth>
          <div className="path-wrapper mb-8 mt-16">
            <CurrentPath />
          </div>
        </LayoutWidth>
        <MyLearningHero />
        <MyLearningCourses />
        <Footer />
      </div>
    </>
  );
}

export default withAuth(MyLearning);
