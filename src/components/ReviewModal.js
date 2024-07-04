import React from 'react'
import styles from "@/styles/reviewModal.module.css"
import ReviewStarRating from './ReviewStarRating'

const ReviewModal = ({onClose}) => {
    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
    };
  return (
    <div className='p-4 w-full flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-8 border rounded-lg border-black bg-white'>
        <div className='flex flex-col gap-4'>
            <div>
                <p><b>Rate your recent experience</b></p>
            </div>
            <div className='flex gap-8 w-full'>
                <ReviewStarRating rating="2"/>
            </div>
        </div>
        <div className='flex flex-col gap-4'>
            <div>
                <p><b>Tell us more about your experience ( optional )</b></p>
            </div>
            <div className='rounded-xl border border-black p-3 pb-1'>
                <textarea className='w-full placeholder-xsm h-[5rem] sm:h-[7rem] md:h-[9rem] lg:h-[10rem] focus:border-none focus:outline-none
                                    sm:placeholder-sm
                                    md:placeholder-base
                                    lg:placeholder-base'
                placeholder='Write down your experience with our company'/>
            </div>
        </div>
        <div className='flex flex-col gap-4 border-0'>
            <div>
                <p><b>Give your review a title</b></p>
            </div>
            <div className='rounded-xl border border-zinc-300 p-3 pb-1'>
                <textarea className='w-full placeholder-xsm h-[3rem] focus:border-none focus:outline-none
                                    sm:placeholder-sm
                                    md:placeholder-base
                                    lg:placeholder-base'
                placeholder="What's important for people to know?"/>
            </div>
        </div>
        <div className='flex flex-wrap w-full gap-2 self-end
                        xsm:flex-nowrap 
                        sm:flex-nowrap  
                         md:flex-nowrap 
                         lg:flex-nowrap'>
            <button className='px-4 py-2 w-full font-semibold self-end bg-[#E9E9EE] rounded-md'
                    onClick={handleCloseClick}>
                <p className='text-[#0038FF]'>Cancel</p>
            </button>
            <button className='px-4 py-2 w-full font-semibold rounded-md min-w-fit bg-[#0038FF]'>
            <p>Submit Review</p>
            </button>
        </div>
    </div>
  )
}

export default ReviewModal