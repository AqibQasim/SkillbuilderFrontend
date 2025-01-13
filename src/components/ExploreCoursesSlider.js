// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { ExploreCoursesCard } from "./ExploreCoursesAndBootcamps";

function ExploreCoursesSlider() {
  return (
    <div className="mr-auto w-[calc(100%+5rem)]">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        grabCursor={true}
        // breakpoints={{
        //   640: {
        //     slidesPerView: 1,
        //     spaceBetween: 20,
        //   },
        //   768: {
        //     slidesPerView: 2,
        //     spaceBetween: 20,
        //   },
        //   //   1024: {
        //   //     slidesPerView: 2,
        //   //     spaceBetween: 100,
        //   //   },
        //   1440: {
        //     slidesPerView: 3,
        //     spaceBetween: 20,
        //   },
        // }}
        className="explore-courses-swiper"
      >
        <SwiperSlide>
          <ExploreCoursesCard />
        </SwiperSlide>
        <SwiperSlide>
          <ExploreCoursesCard />
        </SwiperSlide>
        <SwiperSlide>
          <ExploreCoursesCard />
        </SwiperSlide>
        <SwiperSlide>
          <ExploreCoursesCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ExploreCoursesSlider;
