// import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar } from '@fortawesome/free-solid-svg-icons';

// const ReviewStarRating = ({ rating }) => {
//     const fullStars = Math.floor(rating);
//     const halfStar = rating % 1 !== 0;
//     const emptyStars = 5 - Math.ceil(rating);

//     return (
//         <div className="flex gap-1 flex-wrap
//                         xsm:gap-3
//                         sm:gap-4
//                         md:gap-5
//                         lg:gap-6 ">
//             {[...Array(fullStars)].map((_, i) => (
//                 <div className='h-full'>
//                     <FontAwesomeIcon key={`full-${i}`} icon={faStar} className="text-yellow-500 
//                                                                                 text-sm 
//                                                                                 xsm:text-lg 
//                                                                                 sm:text-2xl 
//                                                                                 md:text-4xl 
//                                                                                 lg:text-6xl" />
//                 </div>
//             ))}
//             {halfStar && 
//             <div className='h-full'>
//                 <FontAwesomeIcon icon={faStar} className="text-yellow-300 text-sm 
//                                                                                 xsm:text-lg 
//                                                                                 sm:text-2xl 
//                                                                                 md:text-4xl 
//                                                                                 lg:text-6xl"/>
//             </div>}
//             {[...Array(emptyStars)].map((_, i) => (
//                 <div className='h-full'>
//                     <FontAwesomeIcon key={`empty-${i}`} icon={faStar} className="text-gray-200 text-sm 
//                                                                                 xsm:text-lg 
//                                                                                 sm:text-2xl 
//                                                                                 md:text-4xl 
//                                                                                 lg:text-6xl" />
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default ReviewStarRating


import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

// const ReviewStarRating = ({ initialRating }) => {
//     const [rating, setRating] = useState(initialRating);

//     const handleClick = (index) => {
//         setRating(index + 1); // index is 0-based, so add 1 to set the correct rating
//     };

//     const fullStars = Math.floor(rating);
//     const halfStar = rating % 1 !== 0;
//     const emptyStars = 5 - Math.ceil(rating);

//     return (
//         <div className="flex gap-1 flex-wrap xsm:gap-3 sm:gap-4 md:gap-5 lg:gap-6 ">
//             {[...Array(5)].map((_, i) => (
//                 <div key={i} className='h-full cursor-pointer' onClick={() => handleClick(i)}>
//                     <FontAwesomeIcon
//                         icon={faStar}
//                         className={
//                             i < fullStars
//                                 ? "text-yellow-500 text-sm xsm:text-lg sm:text-2xl md:text-4xl lg:text-6xl"
//                                 : i === fullStars && halfStar
//                                 ? "text-yellow-300 text-sm xsm:text-lg sm:text-2xl md:text-4xl lg:text-6xl"
//                                 : "text-gray-200 text-sm xsm:text-lg sm:text-2xl md:text-4xl lg:text-6xl"
//                         }
//                     />
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default ReviewStarRating;


const ReviewStarRating = ({ rating, setRating }) => {
    const handleClick = (index) => {
      setRating(index + 1);
    };
  
    return (
      <div className="flex gap-1 flex-wrap xsm:gap-3 sm:gap-4 md:gap-5 lg:gap-6 ">
        {[...Array(5)].map((_, i) => (
          <div key={i} className='h-full cursor-pointer' onClick={() => handleClick(i)}>
            <FontAwesomeIcon
              icon={faStar}
              className={
                i < rating
                  ? "text-yellow-500 text-sm xsm:text-lg sm:text-2xl md:text-4xl lg:text-6xl"
                  : "text-gray-200 text-sm xsm:text-lg sm:text-2xl md:text-4xl lg:text-6xl"
              }
            />
          </div>
        ))}
      </div>
    );
  };
  
  export default ReviewStarRating;