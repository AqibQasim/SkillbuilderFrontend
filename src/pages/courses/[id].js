// pages/courses/[id]/index.js
import { useRouter } from "next/router";
import courses from "@/data/courses";
import Navbar from "@/components/Navbar";
import CourseInstructor from "@/components/CourseInstructor";
import CourseHero from "@/components/CourseHero";
import CurrentPath from "@/components/CurrentPath";
import Footer from "@/components/Footer";
import CourseReviews from "@/components/CourseReviews";
import CourseModule from "@/components/CourseModule";
const CourseDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const course = courses.find((course) => course.id === parseInt(id));

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <>
      <div className="h-[100%] w-[100%] bg-bg_gray">
        <Navbar />
        <div className="path-wrapper w-[90%] max-w-screen-2xl mx-auto mt-16 mb-8">
          <CurrentPath />
        </div>
        <CourseHero />
        <CourseInstructor />
        <CourseModule />
        <CourseReviews />
        <Footer />
      </div>
    </>
  );
};

export default CourseDetails;
