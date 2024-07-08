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
import { fetchOneInstructor } from "../../../redux/thunks/instructorThunk";
import { fetchOneUser } from "../../../redux/thunks/userInfoThunk";
import { fetchAllReviews } from "../../../redux/thunks/reviewsThunk";

const CourseDetails = () => {
  const router = useRouter();
  const { id } = router?.query;
  const dispatch = useDispatch();

  const { data: course, isLoading, error } = useSelector(
    (state) => state.singleCourse || { data: {}, isLoading: false, error: null }
  );

  const { userData: user, isUserLoading, userFetchError } = useSelector(
    (state) => state.singleUser || { userData: {}, isUserLoading: false, userFetchError: null }
  );

  const { instructorData: instructor, isInstLoading, InstructorError } = useSelector(
    (state) => state.singleInstructor || { instructorData: {}, isInstLoading: false, InstructorError: null }
  );

  const { reviewsData: reviews, isReviewsLoading, reviewsError } = useSelector(
    (state) => state.allReviews || { reviewsData: [], isReviewsLoading: false, reviewsError: null }
  );


  useEffect(() => {
    if(user){
      dispatch(fetchOneInstructor(user?.id));
    }
    // console.log("instructor:", instructor);
  },[router?.isReady, user])

  useEffect(() => {
    // console.log("user state updated:", user);
  }, [router?.isReady, user, course])

  useEffect(() => {
    dispatch(fetchOneCourse(id));
    // console.log("course:", course);
  }, [router?.isReady])

  useEffect(() => {
    if (course && course?.instructor_id) {
      dispatch(fetchOneUser(course?.instructor_id));
    }
  }, [router?.isReady, course]);

  useEffect(() => {
    if(course && course?.id){
      dispatch(fetchAllReviews(course?.id));
    }
  },[router?.isReady,course]);


  return (
    <>
      <div className="h-[100%] w-[100%] bg-bg_gray">
        <Navbar />
        <div className="path-wrapper w-[90%] max-w-screen-2xl mx-auto mt-16 mb-8">
          <CurrentPath />
        </div>
        <CourseHero course={course} />
        <CourseInstructor course={course} user={user} instructor={instructor} />
        <CourseModule course={course} />
        <CourseReviews reviews={reviews} />
        <Footer />
      </div>
    </>
  );
};

export default CourseDetails;
