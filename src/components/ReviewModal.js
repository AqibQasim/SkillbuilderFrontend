// import React from 'react'
// import styles from "@/styles/reviewModal.module.css"
// import ReviewStarRating from './ReviewStarRating'

// const ReviewModal = ({onClose}) => {
//     const handleCloseClick = (e) => {
//         e.preventDefault();
//         onClose();
//     };
//   return (
//     <div className='p-4 w-full flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-8 border rounded-lg border-black bg-white'>
//         <div className='flex flex-col gap-4'>
//             <div>
//                 <p><b>Rate your recent experience</b></p>
//             </div>
//             <div className='flex gap-8 w-full'>
//                 <ReviewStarRating rating="2"/>
//             </div>
//         </div>
//         <div className='flex flex-col gap-4'>
//             <div>
//                 <p><b>Tell us more about your experience ( optional )</b></p>
//             </div>
//             <div className='rounded-xl border border-black p-3 pb-1'>
//                 <textarea className='w-full placeholder-xsm h-[5rem] sm:h-[7rem] md:h-[9rem] lg:h-[10rem] focus:border-none focus:outline-none
//                                     sm:placeholder-sm
//                                     md:placeholder-base
//                                     lg:placeholder-base'
//                 placeholder='Write down your experience with our company'/>
//             </div>
//         </div>
//         <div className='flex flex-col gap-4 border-0'>
//             <div>
//                 <p><b>Give your review a title</b></p>
//             </div>
//             <div className='rounded-xl border border-zinc-300 p-3 pb-1'>
//                 <textarea className='w-full placeholder-xsm h-[3rem] focus:border-none focus:outline-none
//                                     sm:placeholder-sm
//                                     md:placeholder-base
//                                     lg:placeholder-base'
//                 placeholder="What's important for people to know?"/>
//             </div>
//         </div>
//         <div className='flex flex-wrap w-full gap-2 self-end
//                         xsm:flex-nowrap
//                         sm:flex-nowrap
//                          md:flex-nowrap
//                          lg:flex-nowrap'>
//             <button className='px-4 py-2 w-full font-semibold self-end bg-[#E9E9EE] rounded-md'
//                     onClick={handleCloseClick}>
//                 <p className='text-[#0038FF]'>Cancel</p>
//             </button>
//             <button className='px-4 py-2 w-full font-semibold rounded-md min-w-fit bg-[#0038FF]'>
//             <p>Submit Review</p>
//             </button>
//         </div>
//     </div>
//   )
// }

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetStatus } from "../../redux/slices/reviewSlice.js";
import { postReview } from "../../redux/thunks/postReviewThunk";
import styles from "@/styles/reviewModal.module.css";
import ReviewStarRating from "./ReviewStarRating";

const ReviewModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.review);

  // const reviewMe = useSelector((state) => state.review);

  const [rating, setRating] = useState(2); // Initial rating
  const [review, setReview] = useState("");
  const [reviewTitle, setReviewTitle] = useState("");

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // {
    //     "course_id":"12344555",
    //     "user_id":"122345",
    //     "rating":10,
    //     "review":"this is the best course"
    // }
    const reviewData = {
      rating,
      review,
      reviewTitle,
    };

    // Dispatch the thunk to post the review
    dispatch(postReview(reviewData)).then(() => {
      if (success) {
        onClose(); // Close modal on successful submission
      }
    });
  };

  return (
    <div className="border-black flex w-full flex-col gap-4 rounded-lg border bg-white p-4 sm:gap-6 md:gap-8 lg:gap-8">
      <div className="flex flex-col gap-4">
        <div>
          <p>
            <b>Rate your recent experience</b>
          </p>
        </div>
        <div className="flex w-full gap-8">
          <ReviewStarRating rating={rating} setRating={setRating} />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <p>
            <b>Tell us more about your experience (optional)</b>
          </p>
        </div>
        <div className="border-black rounded-xl border p-3 pb-1">
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="placeholder-xsm sm:placeholder-sm md:placeholder-base lg:placeholder-base h-[5rem] w-full focus:border-none focus:outline-none sm:h-[7rem] md:h-[9rem] lg:h-[10rem]"
            placeholder="Write down your experience with our company"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 border-0">
        <div>
          <p>
            <b>Give your review a title</b>
          </p>
        </div>
        <div className="rounded-xl border border-zinc-300 p-3 pb-1">
          <textarea
            value={reviewTitle}
            onChange={(e) => setReviewTitle(e.target.value)}
            className="placeholder-xsm sm:placeholder-sm md:placeholder-base lg:placeholder-base h-[3rem] w-full focus:border-none focus:outline-none"
            placeholder="What's important for people to know?"
          />
        </div>
      </div>
      <div className="flex w-full flex-wrap gap-2 self-end sm:flex-nowrap md:flex-nowrap lg:flex-nowrap xsm:flex-nowrap">
        <button
          className="w-full self-end rounded-md bg-[#E9E9EE] px-4 py-2 font-semibold"
          onClick={handleCloseClick}
        >
          <p className="text-[#0038FF]">Cancel</p>
        </button>
        <button
          className="w-full min-w-fit rounded-md bg-[#0038FF] px-4 py-2 font-semibold"
          onClick={handleSubmit}
          disabled={loading} // Disable button while loading
        >
          <p>{loading ? "Submitting..." : "Submit Review"}</p>
        </button>
      </div>
      {error && <p className="text-red-500">Error: {error}</p>}
      {success && (
        <p className="text-green-500">Review submitted successfully!</p>
      )}
    </div>
  );
};

export default ReviewModal;

// export default ReviewModal
