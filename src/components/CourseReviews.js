import React from "react";
import StarRating from "./StarRating";
import Image from "next/image";
import LayoutWidth from "./LayoutWidth";
import formatDate from "../utils/formatDate";
import {useRouter} from "next/router";

// const reviews = [
//   {
//     id: 1,
//     name: "Zubair Alam",
//     rating: 5,
//     image: "/instructor.png",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
//   },
//   {
//     id: 2,
//     name: "Zubair Alam",
//     rating: 3,
//     image: "/instructor.png",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
//   },
//   {
//     id: 3,
//     name: "Zubair Alam",
//     rating: 4,
//     image: "/instructor.png",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
//   },
// ];

const CourseReviews = ({ reviews, CourseId }) => {

  const router = useRouter();
  console.log("I am courseID from CourseReviews.js: ", CourseId);
  const handleViewAll = () => {
    console.log("View All Button is clicked!!");
    router.push(`/coursereview/${CourseId}`);
  }
  console.log("reviews in course reviews", reviews);
  if (!reviews || reviews.length === 0)
    return (
      <LayoutWidth>
        <div className="no-reviews">
          <h1 className="text-2xl font-semibold max-sm:mb-[1rem] max-sm:mt-[1rem] max-sm:w-[100%] max-sm:text-center max-sm:text-xl">
            Course Reviews
          </h1>
          <p>
            There are no reviews for this course yet. Be the first to leave a
            review!
          </p>
        </div>
      </LayoutWidth>
    );
  return (
    // <div className="container mt-12">
    <LayoutWidth>
      <div className="mt-12">
        <div className="flex justify-between">
          <h1 className="mb-12 text-2xl font-semibold max-sm:mb-[1rem] max-sm:mt-[1rem] max-sm:w-[100%] max-sm:text-center max-sm:text-xl">
            Course Reviews
          </h1>
          <button className="text-gray-500" onClick={handleViewAll}>
            View All
          </button>
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <div className="grid h-auto w-[95%] grid-cols-1 place-items-center items-start gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.slice(0, 3).map((review) => (
              <div className="max-w-sm rounded-bl-3xl rounded-tr-3xl bg-white p-4 shadow-lg">
                <div className="flex items-center space-x-4 object-contain">
                  <Image
                    src={review?.user?.profile || "/Avatardisplay.png"}
                    alt="Profile Picture"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div className="p-2">
                    <div className="flex items-center justify-between">
                      {/* <h3 className="text-lg font-semibold">{review.name}</h3> */}
                      <h3 className="text-lg font-semibold">
                        {`${review?.user?.first_name} ${review?.user?.last_name}`}
                      </h3>
                      <p></p>
                    </div>
                    <div className="flex items-center">
                      <StarRating
                        rating={Math.round(parseInt(review?.rating))}
                      />
                      <p className="ml-4 text-xs text-gray-500">
                        {formatDate(review?.date)}
                      </p>
                    </div>
                  </div>
                </div>
                <p className="mt-2 p-2 text-sm text-gray-600">
                  {review?.review}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </LayoutWidth>
  );
};
export default CourseReviews;