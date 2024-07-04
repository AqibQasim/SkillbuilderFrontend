import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ReviewStarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);

    return (
        <div className="flex gap-1 flex-wrap
                        xsm:gap-3
                        sm:gap-4
                        md:gap-5
                        lg:gap-6 ">
            {[...Array(fullStars)].map((_, i) => (
                <div className='h-full'>
                    <FontAwesomeIcon key={`full-${i}`} icon={faStar} className="text-yellow-500 
                                                                                text-sm 
                                                                                xsm:text-lg 
                                                                                sm:text-2xl 
                                                                                md:text-4xl 
                                                                                lg:text-6xl" />
                </div>
            ))}
            {halfStar && 
            <div className='h-full'>
                <FontAwesomeIcon icon={faStar} className="text-yellow-300 text-sm 
                                                                                xsm:text-lg 
                                                                                sm:text-2xl 
                                                                                md:text-4xl 
                                                                                lg:text-6xl"/>
            </div>}
            {[...Array(emptyStars)].map((_, i) => (
                <div className='h-full'>
                    <FontAwesomeIcon key={`empty-${i}`} icon={faStar} className="text-gray-200 text-sm 
                                                                                xsm:text-lg 
                                                                                sm:text-2xl 
                                                                                md:text-4xl 
                                                                                lg:text-6xl" />
                </div>
            ))}
        </div>
    );
}

export default ReviewStarRating
