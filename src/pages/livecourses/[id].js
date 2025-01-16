import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import CourseInstructor from "@/components/CourseInstructor";
import CourseHero from "@/components/CourseHero";
import CurrentPath from "@/components/CurrentPath";
import Footer from "@/components/Footer";
import BootcampHero from "@/components/bootcampHero";
import CourseReviews from "@/components/CourseReviews";
import CourseModule from "@/components/CourseModule";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchOneCourse } from "../../../redux/thunks/coursesThunks";
import { fetchOneInstructor } from "../../../redux/thunks/instructorThunk";
import { fetchOneUser } from "../../../redux/thunks/userInfoThunk";
import { fetchAllReviews } from "../../../redux/thunks/reviewsThunk";
import Loader from "@/components/Loader";
import ExploreCourses from "@/components/ExploreCourses";
import LiveCoursesCard from "@/components/LiveCoursesCard";
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
  const [sortOrder, setSortOrder] = useState("Most Popular"); 

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
       
      <BootcampHero 
      title={ "Introduce SkillBuilder and the range of courses available."}
      subtitle={"Explore top-rated courses designed to help you master in-demand skills and achieve your goals."}
      tagline={"Courses" }
      />
    <div class="bg-gray-50 py-10">
    <div className="max-w-screen-xl mx-auto px-4 ">
    <h2 class="text-3xl font-bold text-gray-900">Live online UX/UI Design <br/> Bootcamps</h2>
    <p class="mt-3 text-gray-600">
      Explore courses from experienced, real-world experts.
    </p>
    </div> 
      <div  className="flex justify-end max-w-screen-xl mx-auto mt-12">
                <div  className="flex gap-3">
              
                        <button
                  onClick={() =>
                    setSortOrder(filter  === "Most Popular" ? "New Arrivals" : "Most Popular")
                  }
                  className="flex items-center rounded-full border border-gray-300 px-4 py-2 bg-pink text-sm text-gray-600 hover:bg-pink-300"
                >
                   <Image
                    src="/filter-tick.png"
                    alt="dropdown-Image"
                    width={20}
                    height={20}
                    className="ml-2 mr-3 inline-block"
                  />
                  Filter 
                 
                </button>
                <button
                  onClick={() =>
                    setSortOrder(sortOrder === "Most Popular" ? "New Arrivals" : "Most Popular")
                  }
                  className="flex items-center rounded-full border border-gray-300 px-4 py-2 bg-pink text-sm text-gray-600 hover:bg-pink-300"
                >
                  Sort by <span className="font-bold ml-1 mr-4"> {sortOrder}</span>
                  <Image
                    src="/dropdown.png"
                    alt="dropdown-Image"
                    width={20}
                    height={20}
                    className="ml-2 inline-block"
                  />
                </button>
              
                </div>
      </div>      
      <div className="grid xl:grid-cols-4 max-xlg:grid-cols-3  max-w-screen-xl mx-auto  gap-3 mt-16">
      {Array(8)
      .fill(null)
      .map((_, index) => (
        <LiveCoursesCard key={index} />
      ))}
    </div>
       
     
</div>

          

      <Footer />
    </div>
  );
};

export default CourseDetails;
