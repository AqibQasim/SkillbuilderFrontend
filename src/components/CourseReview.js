import Image from "next/image";
import StarRating from "./StarRating";
import Dropdown from "./DropDown";
import LikeDislike from "./LikeDislike";
const CourseReview = ({ name, rating, description, time }) => {
  return (
    <div className="flex justify-center p-10">
      <article className="w-[75%] max-md:w-[100%]  rounded-sm p-10 bg-white">
        <div class="flex items-center mb-4 justify-between">
          <div className="flex items-center">
            <Image
              class="me-4 "
              src="/profile.png"
              alt=""
              width={60}
              height={60}
            />
            <div class="font-medium dark:text-bg_text_gray text-sm">
              <p className="text-black mb-2">{name} </p>
              <div class="flex items-center mb-1 space-x-1 rtl:space-x-reverse mt-1">
                {/* <StarRating rating={rating} className="cursor-pointer" /> */}
                <p className=" pl-3 ms-2 text-xs font-normal text-bg_text_gray max-sm:hidden">
                  <time datetime="2017-03-03 19:00">{time.slice(0,10)}</time>
                </p>{" "}
              </div>
            </div>
          </div>
          <div>
            <Dropdown className="bg-cards_gray" />
          </div>
        </div>
        <p class="py-4 text-bg_text_gray dark:text-gray-400">{description}</p>
        <div className="w-full flex justify-between">
          <div className="mt-5 w-[25%] max-md:w-[50%] border-2 rounded-sm shadow-sm flex justify-center cursor-pointer hover:bg-bg_gray ">
            {" "}
            <button>
              <a
                href="#"
                class="block mb-2 mt-2 text-sm font-normal text-black-600  dark:text-black max-sm:text-xs"
              >
                Reply to this Review
              </a>
            </button>
          </div>
          <div className="flex">
            <LikeDislike />
          </div>
        </div>
      </article>
    </div>
  );
};
export default CourseReview;
