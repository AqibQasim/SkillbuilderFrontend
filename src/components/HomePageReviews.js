import { Router } from "next/router";
import ButtonSecond from "./ButtonSecond";
import ButtonWithIcon from "./ButtonWithIcon";
import HeadingSection from "./HeadingSection";
import ImageCssBg from "./ImageCssBg";
import LayoutXPadding from "./LayoutXPadding";
import ReviewsSlider from "./ReviewsSlider";
import StarRating from "./StarRating";

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
      <LayoutXPadding>
        <div className="btn w-full">
          <div className="wrapper box-shad !mx-auto w-max rounded-[2.5rem] bg-transparent shadow-[10px_20px_81px_rgba(186,186,186,0.5)]">
            <ButtonSecond
              withIcon
              className=""
              onClick={() => {
                window.open(
                  "https://www.trustpilot.com/review/skillbuilder.online",
                  "_blank",
                );
              }}
            >
              See 157+ reviews on Trustpilot
            </ButtonSecond>
          </div>
        </div>
      </LayoutXPadding>
    </>
  );
}

export default HomePageReviews;

export function HomePageReviewCard({ review, className = "" }) {
  return (
    <div
      className={`${className} review-card flex max-w-[25.5rem] flex-col rounded-2xl border border-[#DEDEDE] p-4 text-[#4D5156] shadow-[10px_20px_81px_rgba(186,186,186,0.3)] group-odd:!bg-slate-600 2xl:max-w-[36.5rem] xlg:p-6`}
    >
      <p className="review overflow-y-auto font-medium 2xl:text-xl">
        {review?.review}
      </p>
      <div className="review-info mt-8 flex items-center justify-between group-[.is-odd]:mt-auto">
        <div className="person flex items-center justify-center gap-2">
          <div className="icon-wrapper relative size-14 rounded-full bg-[#F5F5F5]">
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
