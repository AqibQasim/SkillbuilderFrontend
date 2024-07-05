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
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAllCourses } from "../../../redux/thunks/auththunks";
import { fetchOneCourse } from "../../../redux/thunks/coursesThunks";

const CourseDetails = () => {
  const router = useRouter();
  const { id } = router?.query;
  const dispatch = useDispatch();
  // const {
  //   data: course = {},
  //   isLoading,
  //   error,
  // } = useSelector(
  //   (state) => state.course || { data: [], isLoading: false, error: null }
  // );

  const { data: course, isLoading, error } = useSelector(
    (state) => state.singleCourse || { data: {}, isLoading: false, error: null }
  );

  // const course = courses?.find((course) => course.id === parseInt(id));

  useEffect(() => {
        dispatch(fetchOneCourse(id));
          console.log("course:",course);
  },[router?.isReady])
      

  return (
    <>
      <div className="h-[100%] w-[100%] bg-bg_gray">
        <Navbar />
        <div className="path-wrapper w-[90%] max-w-screen-2xl mx-auto mt-16 mb-8">
          <CurrentPath />
        </div>
        <CourseHero course={course} />
        <CourseInstructor course={course} />
        <CourseModule course={course} />
        <CourseReviews course={course} />
        <Footer />
      </div>
    </>
  );
};

export default CourseDetails;
