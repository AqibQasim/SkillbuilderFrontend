import Image from "next/image";
import StarRating from "./StarRating";
const CourseReview = ({ name, rating, description }) => {
  return (
    <div className="flex justify-center p-10">
      <article className="w-[75%] border-2 rounded-lg p-10">
        <div class="flex items-center mb-4">
          <Image
            class="me-4 "
            src="/profile.png"
            alt=""
            width={60}
            height={60}
          />
          <div class="font-medium dark:text-bg_text_gray text-sm">
            <p>{name} </p>
            <div class="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
              <StarRating rating={Math.round(rating)} />
              <p className=" pl-4 ms-2 text-xs font-medium text-bg_text_gray ">
                <time datetime="2017-03-03 19:00">July 3rd, 2024</time>
              </p>{" "}
            </div>
          </div>
        </div>

        <p class="mb-3 text-bg_text_gray dark:text-gray-400">{description}</p>
        <div className="w-full flex justify-between">
          <div>
            {" "}
            <button>
              <a
                href="#"
                class="block mb-5 text-sm font-medium text-blue-600  dark:text-blue-500"
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
