import React from "react";
import StarRating from "./StarRating";
import Image from "next/image";
const reviews = [
  {
    id: 1,
    name: "Zubair Alam",
    rating: 5,
    image: "/instructor.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
  },
  {
    id: 2,
    name: "Zubair Alam",
    rating: 3,
    image: "/instructor.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
  },
  {
    id: 3,
    name: "Zubair Alam",
    rating: 4,
    image: "/instructor.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
  },
];

const CourseReviews = () => {
  return (
    <div className="container mt-12">
      <h1 className="text-2xl mb-12  font-semibold max-sm:mt-[1rem]  max-sm:text-center max-sm:text-xl max-sm:w-[100%] max-sm:mb-[1rem]">
        Course Reviews
      </h1>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="h-auto w-[90%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
          {reviews.map((review) => (
            <div className="bg-white shadow-lg  rounded-tr-3xl rounded-bl-3xl p-8 max-w-sm">
              <div className="flex items-center space-x-4">
                <Image
                  src={review.image} // Add the path to your image
                  alt="Profile Picture"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="p-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{review.name}</h3>
                    <p></p>
                  </div>
                  <div className="flex items-center">
                    <StarRating rating={Math.round(review.rating)} />
                    <p className="text-gray-500 text-xs	ml-4">Sep 12, 2023</p>
                  </div>
                </div>
              </div>
              <p className="mt-2 text-gray-600 text-sm p-2">{review.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default CourseReviews;
