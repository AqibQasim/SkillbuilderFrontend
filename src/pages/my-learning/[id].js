import CourseModules from "@/components/CourseModule";
import CourseReviews from "@/components/CourseReviews";
import CurrentPath from "@/components/CurrentPath";
import EnrolledCourseDetailsHero from "@/components/EnrolledCourseDetailsHero";
import Footer from "@/components/Footer";
import GalleryIconSvg from "@/components/GalleryIconSvg";
import H2 from "@/components/H2";
import LayoutWidth from "@/components/LayoutWidth";
import { enrolledDummyCourses } from "@/components/MyLearningCourses";
import Navbar from "@/components/Navbar";
import ReviewsOverview from "@/components/ReviewsOverview";
import Skill from "@/components/Skill";
import formatDate from "@/utils/formatDate";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllReviews } from "../../../redux/thunks/reviewsThunk";
import { fetchOneCourse } from "../../../redux/thunks/coursesThunks";

const courseProgress = 100;

function EnrolledCourseDetails() {
  const dispatch = useDispatch();

  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const enrolledCourseId = router.query.id;
  const courses = useSelector((state) => state.cart.items);
  console.log("length in root file:", courses?.length);
  const { reviewsData: reviews, isReviewsLoading } = useSelector(
    (state) => state.allReviews || { reviewsData: [], isReviewsLoading: true },
  );
  useEffect(() => {
    try {
      if (enrolledCourseId) {
        dispatch(fetchOneCourse(enrolledCourseId));
        dispatch(fetchAllReviews(enrolledCourseId));
      }
    } catch (e) {
      console.log("error ###", e);
    }
  }, [router?.isReady, enrolledCourseId]);

  const { data: course, courseLoading } = useSelector(
    (state) => state.singleCourse || { data: [], courseLoading: true },
  );

  if (course) {
    console.log("course fetched", course);
  }
  console.log("Revviews", reviews);
  console.log("Revviews Loader", isReviewsLoading);
  useEffect(() => {
    setIsClient(true);
  }, [router?.isReady, courses]);

  if (!isClient) {
    return null;
  }

  const enrolledCourse = enrolledDummyCourses.find(
    (enrolledCourse) => enrolledCourse.id === Number(enrolledCourseId),
  );

  console.log("Enrolled Course", enrolledCourse);

  return (
    <>
      <div className="h-[100%] w-[100%] bg-bg_gray">
        <Navbar cartItemsLength={courses?.length} />
        <LayoutWidth>
          <div className="path-wrapper mb-8 mt-16">
            <CurrentPath dynamicPath={course?.title} />
          </div>
        </LayoutWidth>
        <div className="space-y-7">
          <EnrolledCourseDetailsHero videolink={course?.video_url} />
          <EnrolledCourseAbout
            enrolledCourse={course?.description}
            purchasedCourses={course?.purchased_course}
          />
          <EnrolledCourseSkills enrolledCourse={course?.skills} />
          <CourseModules course={course?.modules} heading="Videos" />
          <EnrolledCourseRatingAndReviews reviews={reviews} />
          <CourseReviews reviews={reviews} />
         
         <CourseCertificate course={course} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default EnrolledCourseDetails;

function EnrolledCourseAbout({ enrolledCourse, purchasedCourses }) {
  const [readMore, setReadMore] = useState(false);
  const words = enrolledCourse?.split(" ");
  const shortDescription = words?.slice(0, 15).join(" ");
  const isLongDescription = words?.length > 15;
  const description = readMore ? enrolledCourse : shortDescription;
  const purchased_courses = purchasedCourses;

  useEffect(() => {
    console.log("#######", enrolledCourse);
  }, []);

  return (
    <LayoutWidth>
      <div className="enrolled-course-about">
        <H2 className="mb-4">about course:</H2>
        <p className="font-medium">
          Purchase date:{" "}
          <span className="text-sm text-gray-500">
            {purchased_courses?.map((purchased_course) => (
              <span>{purchased_course.created_at.slice(0, 10)}</span>
            ))}
          </span>
        </p>
        <p className="text-gray-500 md:max-w-screen-md">
          {description}
          {isLongDescription && (
            <span
              className="cursor-pointer text-black-shade-1"
              onClick={() => setReadMore((rm) => !rm)}
            >
              {readMore ? " Show less" : " Read more"}
            </span>
          )}
        </p>
      </div>
    </LayoutWidth>
  );
}

function EnrolledCourseSkills({ enrolledCourse }) {
  console.log({ enrolledCourse });

  return (
    <LayoutWidth>
      <div className="enrolled-course-skills">
        <H2 className="mb-4">Skills you'll gain</H2>
        <div className="mt-4 flex flex-wrap items-center justify-start gap-4">
          {enrolledCourse?.map((skill) => (
            <Skill>
              <GalleryIconSvg className="size-7" /> {skill}{" "}
            </Skill>
          ))}
        </div>
      </div>
    </LayoutWidth>
  );
}

function EnrolledCourseRatingAndReviews({ reviews }) {
  return (
    <LayoutWidth>
      <div className="rating-&-reviews">
        <H2 className="mb-4">Rating & Review</H2>

        <div className="flex flex-wrap items-center justify-start bg-white p-10">
          <ReviewsOverview reviews={reviews} />
          <div className="min-w-max">
            <progress
              className="h-1 w-full rounded-full bg-gray-shade-1 text-blue"
              id="enrolled-course-progress"
              value={2}
              max="5"
            >
              {" "}
              {/* {progress}{" "} */}2{" "}
            </progress>
          </div>
        </div>
      </div>
    </LayoutWidth>
  );
}


function CourseCertificate({course}) {
  const router = useRouter();

  const handleCertificateView = () => {
    // Navigate to the certificate page, replace '/certificate' with the correct path if needed
    router.push(`/certificate/${course.id}`);
  };

  return (
    <LayoutWidth>
      {courseProgress === 100 && (
        <>
          <H2 className="ms-16">Certificate </H2> 
          <button 
            className="font-medium text-white rounded-md bg-blue p-2 ms-16"
            onClick={handleCertificateView} // Navigate on button click
          >
            View Certificate
          </button>
        </>
      )}
    </LayoutWidth>
  );
}
