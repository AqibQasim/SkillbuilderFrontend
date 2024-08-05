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

const enrolledCourseDummyReviews = [
  {
    name: "name",
    image: "image",
    rating: 4.5,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam excepturi quod error similique eaque vero qui blanditiis deleniti ducimus consequuntur.",
  },
  {
    name: "name",
    image: "image",
    rating: 4.5,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam excepturi quod error similique eaque vero qui blanditiis deleniti ducimus consequuntur.",
  },
  {
    name: "name",
    image: "image",
    rating: 4.5,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam excepturi quod error similique eaque vero qui blanditiis deleniti ducimus consequuntur.",
  },
  {
    name: "name",
    image: "image",
    rating: 4.5,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam excepturi quod error similique eaque vero qui blanditiis deleniti ducimus consequuntur.",
  },
];

function EnrolledCourseDetails() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const enrolledCourseId = router.query.id;
  const courses = useSelector((state) => state.cart.items);
  console.log("length in root file:", courses?.length);
  const { reviewsData: reviews, isReviewsLoading } = useSelector(
    (state) => state.allReviews || { reviewsData: [], isReviewsLoading: true },
  );
  const dispatch = useDispatch();
  console.log("Revviews", reviews);
  console.log("Revviews Loader", isReviewsLoading);

  useEffect(() => {
    if (enrolledCourseId) {
      dispatch(fetchAllReviews(enrolledCourseId));
    }
  }, [enrolledCourseId]);

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
          <div className="path-wrapper mb-8 mt-16">
            <CurrentPath dynamicPath={enrolledCourse?.title} />
          </div>
        </LayoutWidth>
        <div className="space-y-7">
          <EnrolledCourseDetailsHero enrolledCourse={enrolledCourse} />
          <EnrolledCourseAbout enrolledCourse={enrolledCourse} />
          <EnrolledCourseSkills enrolledCourse={enrolledCourse} />
          <CourseModules course={enrolledCourse} heading="Videos" />
          <EnrolledCourseRatingAndReviews reviews={reviews} />
          <CourseReviews reviews={reviews} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default EnrolledCourseDetails;

function EnrolledCourseAbout({ enrolledCourse }) {
  const [readMore, setReadMore] = useState(false);
  const words = enrolledCourse?.description.split(" ");
  const shortDescription = words?.slice(0, 15).join(" ");

  const isLongDescription = words?.length > 15;

  const description = readMore ? enrolledCourse?.description : shortDescription;

  return (
    <LayoutWidth>
      <div className="enrolled-course-about">
        <H2 className="mb-4">about course:</H2>
        <p className="font-medium">
          Purchase date:{" "}
          <span className="text-gray-500">
            {formatDate(enrolledCourse?.purchaseDate)}
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
          {enrolledCourse?.skills?.map((skill) => (
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
