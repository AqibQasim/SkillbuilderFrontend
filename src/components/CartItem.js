import Image from 'next/image'
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOneUser } from '../../redux/thunks/userInfoThunk';
import { useRouter } from "next/router";
import { removeItem } from '../../redux/slices/addToCart';
import { fetchOneInstructor } from '../../redux/thunks/instructorThunk';


const CartItem = ({
    // imgSrc,
    // title,
    // instructors,
    // duration,
    // rating ,
    // price,
    course
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
          console.log("course ki instructor id ", course.instructor_id)
          dispatch(fetchOneInstructor(course.instructor_id));
        }
      }, [dispatch, course]);


    useEffect(() => {
        if (course && course?.instructor_id) {
            dispatch(fetchOneUser(course?.instructor_id));
        }

        console.log("user in cart item:", user)
    }, [router?.isReady, course, course?.instructor_id]);

    const handleRemoveCourse = (courseId) => {
        dispatch(removeItem(courseId));
    };

    return (
        <div className='w-full h-fit gap-6 flex my-4 flex-wrap justify-center
                    sm:justify-between sm:flex-nowrap 
                    md:justify-between md:flex-nowrap
                    lg:justify-between lg:flex-nowrap'>

            <div className='w-full flex gap-5 flex-wrap justify-center 
                        sm:justify-normal sm:flex-nowrap
                        md:justify-normal md:flex-nowrap 
                        lg:justify-normal lg:flex-nowrap'>

                <div className='w-full md:w-fit lg:w-fit min-w-8 h-fit flex justify-center object-cover'>
                    <Image src='/dummyImg.svg'
                        //  className='aspect-auto'
                        className='height'
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
                <div className='flex flex-col justify-center gap-2'>
                    <div className='flex justify-center 
                                sm:justify-normal 
                                md:justify-normal'>
                        <b>{course?.title}</b>
                    </div>
                    <div className='text-sm'>
                        <p>{user?.first_name} {user?.last_name}</p>
                    </div>
                    <div className='w-full flex gap-4 flex-wrap md:flex-nowrap lg:flex-nowrap'>
                        <div className='text-xs'>
                            <p>{course?.creation_duration_hours}</p>
                        </div>
                        <div className='w-fit gap-1 md:gap-2 lg:gap-2 flex items-center'>
                            <p className='text-xs'>
                                {course?.rating}
                            </p>
                            <div className='w-fit h-fit'>
                                <Image
                                    src="/star.png"
                                    alt="star"
                                    height={15}
                                    width={15} />
                            </div>
                            <div className='w-fit h-fit'>
                                <Image
                                    src="/star.png"
                                    alt="star"
                                    height={15}
                                    width={15} />
                            </div>
                            <div className='w-fit h-fit'>
                                <Image
                                    src="/star.png"
                                    alt="star"
                                    height={15}
                                    width={15} />
                            </div>
                            <div className='w-fit h-fit'>
                                <Image
                                    src="/star.png"
                                    alt="star"
                                    height={15}
                                    width={15} />
                            </div>
                            <div className='w-fit h-fit'>
                                <Image
                                    src="/star.png"
                                    alt="star"
                                    height={15}
                                    width={15} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[80%] h-[100%] gap-0 flex justify-evenly self-center 
        sm:justify-between sm:flex-col sm:w-fit sm:gap-6 
        md:justify-between md:flex-col md:w-fit md:gap-8 
        lg:justify-normal lg:flex-col lg:w-fit lg:gap-10'>
                <p className='text-[#FF3939] cursor-pointer' onClick={(e)=> {
                    e.stopPropagation();
                    handleRemoveCourse(course?.id)
                }}>Remove</p>
                <p className='text-[#0000FF]'>{course?.amount}$</p>
            </div>
        </div>
    )
}

export default CartItem