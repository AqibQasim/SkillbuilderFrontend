import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode } from "swiper/modules";
import { HomePageReviewCard, reviews } from "./HomePageReviews";

function ReviewsSlider() {
  return (
    <div className="flex w-full flex-col items-center">
    <div className="grid h-auto w-[90%] grid-cols-1 place-items-center gap-4 sm:grid-cols-2  lg:grid-cols-3  ">
      {reviews.map((review, i) => (
        <div key={review?.review + i} className="flex flex-col space-y-2">
          <HomePageReviewCard
            review={review}
            className={`${i % 2 === 0 ? "is-odd group h-full" : "is-odd group h-full"}`}
          />
        </div>
      ))}
    </div>
    </div>
  );

}

export default ReviewsSlider;
