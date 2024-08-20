import React from "react";
import Image from "next/image";
import courses from "@/data/courses";
import { useRouter } from "next/router";
import LayoutWidth from "./LayoutWidth";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../../redux/slices/addToCart";

function CourseHero({ course }) {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = (course) => {
    if (!cartItems.some((item) => item.id === course.id)) {
      dispatch(addItem(course));
    }
  };

  const isCourseAddedToCart = (course) => {
    return cartItems.some((item) => item.id === course.id);
  };

  return (
    <div className="w-full bg-white">
      <LayoutWidth>
        <div
          className="relative mb-16 flex items-center py-16 lg:mb-20"
          id="Overview"
        >
          {/* Left Section */}
          <div className="text-black flex-1 text-left">
            <div className="mx-auto max-w-[27rem] text-center lg:mx-0 lg:max-w-none lg:pr-24 lg:text-left">
              {/* Content */}
              <h1 className="mb-4 text-5xl font-semibold">{course?.title}</h1>
              <p
                className={`text-md mx-auto mb-8 w-[85%] text-center font-normal leading-7 text-gray-600 lg:mx-0 lg:text-left`}
              >
                {course?.learning_outcomes}
              </p>
              <div className="flex justify-center lg:justify-start">
                {!isCourseAddedToCart(course) && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(course);
                    }}
                    className="rounded-md bg-blue px-8 py-3 font-semibold text-white transition duration-300 ease-in-out hover:bg-blue-700"
                  >
                    Add to Cart
                  </button>
                )}
                {isCourseAddedToCart(course) && (
                  <button
                    disabled
                    className="flex items-center rounded-md bg-blue px-8 py-3 font-semibold text-white transition duration-300 ease-in-out hover:bg-blue-700"
                  >
                    <Image
                      src="/Check.png"
                      width={25}
                      height={25}
                      alt="Check icon"
                      className="mr-2"
                    />
                    Added to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
          {/* Right Section (visible on all screens) */}
          <div className="text-black hidden flex-1 lg:flex lg:items-center lg:justify-center">
            <Image
              // src={course.image}
              src="/dummyImg.svg"
              alt="Contact us hero image"
              quality={100}
              width={472}
              height={358}
            />
          </div>
        </div>
      </LayoutWidth>
    </div>
  );
}

export default CourseHero;
