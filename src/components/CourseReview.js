import Image from "next/image";
import StarRating from "./StarRating";
import styles from "../styles/dropdown.module.css";
import Dropdown from "./dropdown";
const CourseReview = ({ name, rating, description }) => {
  return (
    <div className="flex justify-center p-10">
      <article className="w-[75%] rounded-sm p-10 bg-white">
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
              <p>{name} </p>
              <div class="flex items-center mb-1 space-x-1 rtl:space-x-reverse mt-1">
                <StarRating
                  rating={Math.round(rating)}
                  className="cursor-pointer"
                />
                <p className=" pl-3 ms-2 text-xs font-normal text-bg_text_gray ">
                  <time datetime="2017-03-03 19:00">July 3rd, 2024</time>
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
          <div className="mt-5 w-[25%] border-2 rounded-sm shadow-sm flex justify-center">
            {" "}
            <button>
              <a
                href="#"
                class="block mb-2 mt-2 text-sm font-normal text-black-600  dark:text-black"
              >
                Reply to this Review
              </a>
            </button>
          </div>
          <div className="flex">
            <Image
              src="/Like.svg"
              width={30}
              height={30}
              alt=""
              className="cursor-pointer mr-2"
            />
            <Image
              src="/Dislike.svg"
              width={30}
              height={30}
              alt=""
              className="cursor-pointer ml-2"
            />
          </div>
        </div>
      </article>
    </div>
  );
};
export default CourseReview;
