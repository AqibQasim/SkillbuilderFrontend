import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode } from "swiper/modules";
import { HomePageReviewCard, reviews } from "./HomePageReviews";

function ReviewsSlider() {
  return (
    <div className="!h-[18rem] xlg:!h-[19.5rem]">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        // initialSlide={2}
        freeMode={true}
        //   grabCursor={true}
        modules={[FreeMode]}
        centeredSlides={false}
        style={{
          marginLeft: "0",
          height: "100%",
          boxShadow: "10px 20px 81px rgba(186, 186, 186, 0.2)",
        }}
        className="reviews-swiper"
      >
        {reviews.map((review, i) => (
          <SwiperSlide
            key={review?.review + i}
            style={{
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <HomePageReviewCard
              review={review}
              className={`${i % 2 === 0 ? "is-odd group h-full" : ""}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ReviewsSlider;
