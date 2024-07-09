// components/Courses.js

import Image from "next/image";
import { useRouter } from "next/router";
import StarRating from "./StarRating";
import "../styles/courses.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCourses } from "../../redux/thunks/auththunks";
import { addItem } from "../../redux/slices/addToCart";
import { useEffect, useState } from "react";

const Courses = ({ heading, paddingTop }) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    data: courses = [],
    isLoading,
    error,
  } = useSelector(
    (state) => state.courses || { data: [], isLoading: false, error: null }
  );

  useEffect(() => {
    dispatch(fetchAllCourses());
  }, [dispatch]);


  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    dispatch(fetchAllCourses());
  }, [dispatch]);

  useEffect(() => {
    console.log("Updated cart items:", cartItems);
  }, [router?.isReady, cartItems]);

  // const handleAddToCart = (course) => {
  //   dispatch(addItem(course));
  // };
  const handleAddToCart = (course) => {
    if (!cartItems.some(item => item.id === course.id)) {
      dispatch(addItem(course));
    }
  };

  const isCourseAddedToCart = (course) => {
    return cartItems.some(item => item.id === course.id);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div
        className={`${paddingTop} w-[90%] flex justify-between mt-[-0.5rem] h-auto my-8 max-sm:my-0 max-sm:mb-6 max-sm:mt-[-3rem] `}
      >
        <h2 className="text-2xl font-semibold max-sm:text-xl max-sm:mt-4">
          {heading}
        </h2>
        <span
          onClick={() => router.push("/courses")}
          className="max-sm:mt-4 text-blue font-semibold flex gap-3 items-center cursor-pointer max-sm:text-sm"
        >
          View All
          <Image src="/rightArrow.svg" width={15} height={15} />
        </span>
      </div>

      <div className="w-full flex flex-col justify-center items-center">
        <div className="h-auto w-[90%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center">
          {courses?.slice(0, 8).map((course) => (
            <div
              key={course?.id}
              className="img-container border border-cards_gray h-auto w-full max-w-sm mb-4 bg-white rounded-2xl p-2 flex flex-col items-start transform transition transition-shadow duration-300 hover:shadow-lg hover:border-[rgb(152,159,233)]"
              onClick={() => router.push(`/courses/${course?.id}`)}
            >
              <Image
                className="w-[100%] pt-1"
                // src={course?.image}
                src='/dummyImg.svg'
                alt={course?.title}
                width={280}
                height={260}
              />
              <div className="p-2 w-[100%]">
                <div className="w-full flex justify-between items-center   mt-2">
                  <div>
                    <span className="text-sm">{course?.rating}</span>
                    <StarRating rating={Math.round(course?.rating)} />
                  </div>
                  {isCourseAddedToCart(course) && (
                    <span className="text-blue font-semibold">Added To Cart</span>
                  )}
                  {/* <span className="text-blue font-semibold" >Added To Cart</span> */}
                </div>
                <h3 className="text-lg font-semibold mt-4">{course?.title}</h3>
                <p className="mb-2 text-sm">{course?.learning_outcomes}</p>

                <div className="flex w-[100%] justify-between pb-2 max-md:pb-2">
                  <div className="w-[50%] flex lg:justify-start lg:items-center lg:gap-1 justify-start items-center gap-2">
                    <span className="text-blue font-semibold">
                      ${course?.amount}
                    </span>
                    <span className="text-[0.5rem] text-bg_text_gray ">
                      <span className="stroke-bg_text_gray line-through">
                        $400
                      </span>{" "}
                      88% off
                    </span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(course);
                    }}
                    className="py-2 px-2 text-white bg-blue rounded-lg text-xs">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Courses;
