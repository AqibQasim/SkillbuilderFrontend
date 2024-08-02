import CurrentPath from "@/components/CurrentPath";
import Footer from "@/components/Footer";
import LayoutWidth from "@/components/LayoutWidth";
import { enrolledDummyCourses } from "@/components/MyLearningCourses";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function EnrolledCourseDetails() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const enrolledCourseId = router.query.id;
  const courses = useSelector((state) => state.cart.items);
  console.log("length in root file:", courses?.length);

  useEffect(() => {
    setIsClient(true);
  }, [router?.isReady, courses]);

  if (!isClient) {
    return null;
  }

  console.log("Dummy courses", enrolledDummyCourses);

  const enrolledCourse = enrolledDummyCourses.find(
    (enrolledCourse) => enrolledCourse.id === Number(enrolledCourseId),
  );

  console.log("Enrolled Course", enrolledCourse);

  return (
    <>
      <div className="h-[100%] w-[100%] bg-bg_gray">
        <Navbar cartItemsLength={courses?.length} />
        <LayoutWidth>
          <div className="path-wrapper mx-auto mb-8 mt-16 w-[90%] max-w-screen-2xl">
            <CurrentPath dynamicPath={enrolledCourse?.title} />
          </div>
        </LayoutWidth>
        <Footer />
      </div>
    </>
  );
}

export default EnrolledCourseDetails;
