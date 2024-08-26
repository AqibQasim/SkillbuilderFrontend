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

  return (
    <div className="h-full w-full bg-bg_gray">
      <Navbar cartItemsLength={courses?.length} />
      <div className="path-wrapper mx-auto mb-8 mt-16 w-[90%] max-w-screen-2xl">
        <CurrentPath dynamicPath={course.title} />
      </div>
      <CourseHero course={course} />
      <CourseInstructor course={course} user={user} />
      <CourseModule course={course?.modules} />
      <CourseReviews reviews={reviews} CourseId={id} />
      <Footer />
    </div>
  );
};

export default CourseDetails;
