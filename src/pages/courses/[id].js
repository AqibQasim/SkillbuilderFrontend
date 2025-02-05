import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import CourseInstructor from "@/components/CourseInstructor";
import CourseHero from "@/components/CourseHero";
import CurrentPath from "@/components/CurrentPath";
import Footer from "@/components/Footer";
import CourseReviews from "@/components/CourseReviews";
import CourseModule from "@/components/CourseModule";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchOneCourse } from "../../../redux/thunks/coursesThunks";
import { fetchOneInstructor } from "../../../redux/thunks/instructorThunk";
import { fetchOneUser } from "../../../redux/thunks/userInfoThunk";
import { fetchAllReviews } from "../../../redux/thunks/reviewsThunk";
import Loader from "@/components/Loader";
import HomePageNavbar from "@/components/HomePageNavbar";
import LayoutXPadding from "@/components/LayoutXPadding";
import InstructorIntro from "@/components/InstructorIntro"; 
import Image from "next/image";

const CourseDetails = () => {
  const router = useRouter();
  const { id } = router?.query;
  const dispatch = useDispatch();

  const { data: course, isLoading: courseLoading } = useSelector(
    (state) => state.singleCourse || { data: {}, isLoading: true },
  );

  const { user, isInstLoading } = useSelector(
    (state) => state.singleInstructor || { user: {}, isInstLoading: true },
  );

  const { reviewsData: reviews, isReviewsLoading } = useSelector(
    (state) => state.allReviews || { reviewsData: [], isReviewsLoading: true },
  );

  const courses = useSelector((state) => state.cart.items);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, [router?.isReady, courses]);

  useEffect(() => {
    if (id) {
      dispatch(fetchOneCourse(id));
    }
  }, [id]);

  useEffect(() => {
    if (course && course.instructor_id) {
      dispatch(fetchOneInstructor(course.instructor_id));
    }
  }, [course]);

  useEffect(() => {
    if (course && course.instructor_id) {
      dispatch(fetchOneUser(course.instructor_id));
    }
  }, [course]);

  useEffect(() => {
    if (course && course.id) {
      dispatch(fetchAllReviews(course.id));
    }
  }, [course]);

  if (!isClient || courseLoading || isInstLoading || isReviewsLoading) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center">
        <Loader />
      </div>
    );
  }
  //restrict the url if course id is not available
  if (!course?.id) {
    return (
      router.push("/") && <Loader />
    );
  }

  return (
    <div className="w-full bg-bg_gray">
      {/* <Navbar cartItemsLength={courses?.length} /> */}
      <LayoutXPadding>
        <div className="pt-4">
          <HomePageNavbar className="!mt-0" />
        </div>
      </LayoutXPadding>

      <div className="path-wrapper mx-auto mb-8 mt-16 w-[90%] max-w-screen-2xl">
        <CurrentPath dynamicPath={course.title} />
      </div>
      <CourseHero course={course} />
      <div className="path-wrapper mx-auto mb-8 mt-2 w-[90%] max-w-screen-2xl text-2xl font-semibold">
        <div>What You'll Learn:</div>
      </div>
      <div className="path-wrapper mx-auto mb-8 mt-2 w-[90%] max-w-screen-2xl">
        <ul className="grid grid-cols-2 text-wrap">
          {course?.learning_outcomes?.map((outcome, index) => (
            <li key={index} className="flex gap-2">
              <div className="text-6xl mt-1 ">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  className="text-black h-4 w-4"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 10l-3-3 1.4-1.4L6 7.2 11.6 1.6 13 3z" />
                </svg>
              </div>
              {outcome}
            </li>
          ))}
        </ul>
      </div>
      <div className="path-wrapper mx-auto mb-8 mt-16 w-[90%] max-w-screen-2xl text-2xl font-semibold">
        <div>Course Introduction</div>
      </div>
      <InstructorIntro video={course?.video_url} />
      <CourseInstructor course={course} user={user} />
      <CourseModule course={course?.modules} course_id={id} />
      <CourseReviews reviews={reviews} CourseId={id} />
      <Footer />
    </div>
  );
};

export default CourseDetails;
