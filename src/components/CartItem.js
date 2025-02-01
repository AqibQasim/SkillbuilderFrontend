import Image from "next/image";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneUser } from "../../redux/thunks/userInfoThunk";
import { useRouter } from "next/router";
import { removeItem } from "../../redux/slices/addToCart";
import { fetchOneInstructor } from "../../redux/thunks/instructorThunk";
import StarRating from "./StarRating";

const CartItem = ({
  // imgSrc,
  // title,
  // instructors,
  // duration,
  // rating ,
  // price,
  course,
}) => {
  const router = useRouter();
  const dispatch = useDispatch();

  // const { userData: user, isUserLoading, userFetchError } = useSelector(
  //     (state) => state.singleUser || { userData: {}, isUserLoading: false, userFetchError: null }
  // );

  const { user, isInstLoading, InstructorError } = useSelector(
    (state) => state.singleInstructor,
  );

  useEffect(() => {
    if (course && course.instructor_id) {
      console.log("course ki instructor id ", course.instructor_id);
      dispatch(fetchOneInstructor(course.instructor_id));
    }
  }, [dispatch, course]);

  useEffect(() => {
    if (course && course?.instructor_id) {
      dispatch(fetchOneUser(course?.instructor_id));
    }

    console.log("user in cart item:", user);
  }, [router?.isReady, course, course?.instructor_id]);

  const handleRemoveCourse = (courseId) => {
    dispatch(removeItem(courseId));
  };

  return (
    <div className="my-4 flex h-fit w-full flex-wrap justify-center gap-6 sm:flex-nowrap sm:justify-between md:flex-nowrap md:justify-between lg:flex-nowrap lg:justify-between">
      <div className="flex w-full flex-wrap justify-center gap-5 sm:flex-nowrap sm:justify-normal md:flex-nowrap md:justify-normal lg:flex-nowrap lg:justify-normal">
        <div className="flex h-fit w-full min-w-8 justify-center object-cover md:w-fit lg:w-fit">
          <Image
            //  className='aspect-auto'
            src={
              course?.image
                ? `${process.env.NEXT_PUBLIC_BASE_API}/media/course/${course?.image}`
                : "/dummyImg.svg"
            }
            className="height"
            width={200}
            height={200}
          />

          {/* <Image
                src="/courseImg.png"
                alt="course Image"
                height={100}
                width={120}
                // layout='fill'
                /> */}
        </div>
        <div className="flex flex-col justify-center gap-2">
          <div className="flex justify-center sm:justify-normal md:justify-normal">
            <b>{course?.title}</b>
          </div>
          <div className="text-sm">
            <p>
              {user?.first_name} {user?.last_name}
            </p>
          </div>
          <div className="flex w-full flex-wrap gap-4 md:flex-nowrap lg:flex-nowrap">
            {/* <div className='text-xs'>
                            <p>{course?.creation_duration_hours}</p>
                        </div> */}
            <div className="flex w-fit items-center gap-1 md:gap-2 lg:gap-2">
              <p className="text-xs">{course?.rating}</p>
              <div className="h-fit w-fit">
                <StarRating key={router.asPath} rating={course?.rating} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-[100%] w-[80%] justify-evenly gap-0 self-center sm:w-fit sm:flex-col sm:justify-between sm:gap-6 md:w-fit md:flex-col md:justify-between md:gap-8 lg:w-fit lg:flex-col lg:justify-normal lg:gap-10">
        <p
          className="cursor-pointer text-[#FF3939]"
          onClick={(e) => {
            e.stopPropagation();
            handleRemoveCourse(course?.id);
          }}
        >
          {/* Remove */}
          <Image
            height={20}
            width={20}
            className="relative ml-auto"
            alt="cross"
            src="/Cross.png"
          />
        </p>
        <p className="text-[#0000FF]">{course?.amount}$</p>
      </div>
    </div>
  );
};

export default CartItem;
