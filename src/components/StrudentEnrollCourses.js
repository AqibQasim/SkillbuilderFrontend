import Image from "next/image";
import { useRouter } from "next/router";
import StarRating from "./StarRating";
import "../styles/courses.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/slices/addToCart";
import { useEffect, useState } from "react";
import LayoutWidth from "./LayoutWidth";

const StrudentEnrollCourses = ({ heading, paddingTop }) => {
  //   const [addedToCart, setAddedToCart] = useState(false);
  const router = useRouter();
  //   const dispatch = useDispatch();

  const courses = [
    {
      id: 1,
      title: "UI / UX Designing",
      rating: 4.9,
      learning_outcomes: "Equipping you with essential skills",
      amount: 250,
      image: "/courseImg.png",
    },
    {
      id: 2,
      title: "Web Development",
      rating: 4.9,
      learning_outcomes: "Equipping you with essential skills",
      amount: 250,
      image: "/courseImg.png",
    },
    // Add more course objects as needed
  ];

  //   const cartItems = useSelector((state) => state.cart.items);

  //   const handleAddToCart = (course) => {
  //     if (!cartItems.some((item) => item.id === course.id)) {
  //       dispatch(addItem(course));
  //     }
  //   };

  //   const isCourseAddedToCart = (course) => {
  //     return cartItems.some((item) => item.id === course.id);
  //   };

  return (
    <LayoutWidth>
      <div className="wrapper">
        <div
          className={`${paddingTop} my-8 mt-[-0.5rem] flex h-auto w-[90%] justify-between max-sm:my-0 max-sm:mb-6 max-sm:mt-[-3rem]`}
        >
          <h2 className="text-2xl font-semibold max-sm:mt-4 max-sm:text-xl">
            {heading}
          </h2>
          {/* <span
            onClick={() => router.push("/courses")}
            className="flex cursor-pointer items-center gap-3 font-semibold text-blue max-sm:mt-4 max-sm:text-sm"
          >
            View All
            <Image src="/rightArrow.svg" width={15} height={15} />
          </span> */}
        </div>

        <div className="flex w-full flex-col items-center justify-center">
          <div className="grid h-auto grid-cols-1 place-items-center gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {courses.slice(0, 8).map((course) => (
              <div
                key={course.id}
                className="img-container mb-4 flex h-auto w-full max-w-sm transform flex-col items-start rounded-2xl border border-cards_gray bg-white p-2 transition transition-shadow duration-300 hover:border-[rgb(152,159,233)] hover:shadow-lg"
                onClick={() => router.push(`/courses/${course.id}`)}
              >
                <Image
                  className="w-[100%] pt-1"
                  src={course.image}
                  alt={course.title}
                  width={280}
                  height={260}
                />
                <div className="w-[100%] p-2">
                  <div className="mt-2 flex w-full items-center justify-between">
                    <div>
                      <span className="text-sm">{course.rating}</span>
                      <StarRating rating={Math.round(course.rating)} />
                    </div>
                    {/* {isCourseAddedToCart(course) && (
                      <span className="font-semibold text-blue">
                        Added To Cart
                      </span>
                    )} */}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{course.title}</h3>
                  <p className="mb-2 text-sm">{course.learning_outcomes}</p>

                  <div className="flex w-[100%] justify-between pb-2 max-md:pb-2">
                    <div className="flex w-[50%] items-center justify-start gap-2 lg:items-center lg:justify-start lg:gap-1">
                      <span className="font-semibold text-blue">
                        ${course.amount}
                      </span>
                      {/* <span className="text-[0.5rem] text-bg_text_gray">
                        <span className="stroke-bg_text_gray line-through">
                          $400
                        </span>{" "}
                        88% off
                      </span> */}
                    </div>
                    {/* <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(course);
                      }}
                      className="rounded-lg bg-blue px-2 py-2 text-xs text-white"
                    >
                      Add To Cart
                    </button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </LayoutWidth>
  );
};

export default StrudentEnrollCourses;