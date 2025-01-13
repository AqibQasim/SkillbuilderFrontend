import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import ImageCssBg from "./ImageCssBg";

function ExploreCoursesSlider() {
  return (
    <div className="mr-auto w-[calc(100%+5rem)] rounded-[0.875rem] bg-gradient-to-t from-[rgba(186,186,186,0.2)] to-transparent shadow-[10px_20px_81px_rgba(186,186,186,0.3)]">
      <Swiper
        style={{ borderRadius: "0.875rem" }}
        slidesPerView={"auto"}
        spaceBetween={20}
        grabCursor={true}
        className="explore-courses-swiper"
      >
        {Array.from({ length: 7 }).map((_, index) => (
          <SwiperSlide key={index}>
            <ExploreCoursesCard
              className={`${index % 2 === 0 ? "is-odd group" : "is-even group"}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ExploreCoursesSlider;

export function ExploreCoursesCard({ className }) {
  return (
    <div
      className={`${className} explore-courses-card group relative grid max-w-[25.25rem] grid-rows-[13.375rem_1fr] overflow-hidden rounded-[0.875rem]`}
    >
      <div className="explore-courses-card-image relative row-span-1 rounded-[0.875rem] bg-slate-400">
        <ImageCssBg className="rounded-t-[0.875rem]" src="/dummyImg.svg" />
      </div>
      <div className="explore-courses-card-content inverted-radius relative -top-4 h-[calc(100%+1rem)] rounded-[0.875rem] px-5 py-4 !pb-0 group-[.is-even]:bg-[#B0f1F2] group-[.is-odd]:bg-[#B0B1F2]">
        <h2 className="text-xl font-bold text-[#2C2C2C]">
          Master Interaction Design: Creating Seamless use...
        </h2>
        <p className="mb-2 text-[0.6rem] text-[#5C5C5C]">
          Unleash your creativity with courses in graphic design, UI/UX, video
          editing, animation, and photography. Whether...
        </p>
        <div className="text-xs">
          By:
          <span className="font-semibold text-[#2C2C2C]">Zubair Alam</span>
        </div>
        <div className="mt-1 flex justify-start text-xs">
          <div className="my-auto h-[9.6px] w-[11.6px]">
            <Image
              className="size-full"
              src={"/level.svg"}
              width={11.6}
              height={9.6}
            />
          </div>
          <span className="ms-1 self-start text-[#2C2C2C]">
            <span className="text-[#929292]">Level: </span> Beginner
          </span>
        </div>
        <div className="mt-5 flex w-[calc(100%-3.5rem)] items-center justify-between">
          <Image
            src="/course_people.png"
            alt="enrolled students images"
            height={29}
            width={117}
          />
          <div className="flex items-center justify-start gap-2 rounded-[1.6875rem] bg-white p-2 text-sm">
            <span className="text-black">
              <span className="stroke-bg_text_black line-through">69.00</span> -
            </span>
            <span className="text-sm font-semibold text-blue">$49.00</span>
          </div>
        </div>
      </div>
      <Link
        href={"/home"}
        className="link absolute bottom-0 right-0 flex size-[3.75rem] items-center justify-center rounded-[0.875rem] rounded-tl-[3rem] bg-[#B0B1F2] text-black-shade-1 group-[.is-even]:bg-[#B0f1F2]"
      >
        <Image src="/link_arrow.svg" height={18.5} width={18.5} />
      </Link>
    </div>
  );
}
