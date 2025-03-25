import { Router } from "next/router";
import ButtonSecond from "./ButtonSecond";
import ButtonWithIcon from "./ButtonWithIcon";
import HeadingSection from "./HeadingSection";
import ImageCssBg from "./ImageCssBg";
import LayoutXPadding from "./LayoutXPadding";
import ReviewsSlider from "./ReviewsSlider";
import StarRating from "./StarRating";
import Image from "next/image";
import { useState } from "react";
export const reviews = [
  {
    review: `SkillBuilder is trusted by thousands for its 90+ courses, user-friendly design, and engaging features like quizzes and progress trackers. Its personalized learning paths and practical content make it a go-to platform for career advancement.`,
    rating: 4,
  },
  {
    review: `SkillBuilder is trusted by thousands for its 90+ courses, user-friendly design, and engaging features like quizzes and progress trackers. Its personalized learning paths and practical content make it a go-to platform for career advancement.`,
    rating: 4,
  },
  {
    review: `SkillBuilder is trusted by thousands for its 90+ courses, user-friendly design, and engaging features like quizzes and progress trackers. Its personalized learning paths and practical content make it a go-to platform for career advancement.`,
    rating: 4,
  },

  {
    review: `SkillBuilder is trusted by thousands for its 90+ courses, user-friendly design, and engaging features like quizzes and progress trackers. Its personalized learning paths and practical content make it a go-to platform for career advancement.`,
    rating: 4,
  },

  {
    review: `SkillBuilder is trusted by thousands for its 90+ courses, user-friendly design, and engaging features like quizzes and progress trackers. Its personalized learning paths and practical content make it a go-to platform for career advancement.`,
    rating: 4,
  },

  {
    review: `SkillBuilder is trusted by thousands for its 90+ courses, user-friendly design, and engaging features like quizzes and progress trackers. Its personalized learning paths and practical content make it a go-to platform for career advancement.`,
    rating: 4,
  },
];

function HomePageReviews() {


  return (
    <>
      <LayoutXPadding>
        <HeadingSection
          labelText="Feedback"
          headingText="A skill-Building Journey with Skillbuilder"
          text="How Skillbuilder course helped you master new skills and advance in your career"
        />
      </LayoutXPadding>
      <ReviewsSlider />
     
    </>
  );
}

export default HomePageReviews;

export function HomePageReviewCard({ review, className = "" }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const MAX_LENGTH = 10; // Adjusted for better readability

  const toggleReadMore = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsExpanded((prev) => !prev);
  };

  return (
    <div
      className={`${className} review-card z-[2] flex max-w-[23.5rem] flex-col rounded-2xl border border-[#DEDEDE] p-4 text-[#4D5156] transition-all duration-300 ease-in-out group-odd:!bg-slate-600 hover:z-[1] 2xl:max-w-[25.5rem] xlg:p-6`}
    >
      <Image src="/coma.png" alt="coma-Image" width={40} height={40} className="inline-block" />

      <p className="review my-2 mb-4 font-medium 2xl:text-lg">
        {isExpanded ? review?.review : `${review?.review.slice(0, MAX_LENGTH)}...`}
        {review?.review.length > MAX_LENGTH && (
          <span
            onClick={toggleReadMore}
            className="ml-1 cursor-pointer text-[#D0722E] font-bold block"
          >
            {isExpanded ? " See Less" : " See More"}
          </span>
        )}
      </p>

      <hr className="mb-4 border-t-[0.4px] border-[#D0722E]" />

      <div className="review-info mt-12 flex items-center justify-between group-[.is-odd]:mt-auto">
        <div className="person flex items-center justify-center gap-2">
          <div className="icon-wrapper relative flex size-14 rounded-full bg-[#F5F5F5]">
            <ImageCssBg src="/review_avatar.svg" alt="review avatar image" />
          </div>

          <div className="person-info">
            <h3 className="font-medium text-[#170D23]">Jesper Hale</h3>
            <p className="text-xs text-[#4A525D]">Lead AI Researcher</p>
          </div>
        </div>
        <StarRating rating={review?.rating} />
      </div>
    </div>
  );
}