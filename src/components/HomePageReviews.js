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
    name: 'Qadir Bukhsh',
    location: 'United States',
    review: `Had an amazing experience with Sir Zubair and the team. The bootcamp covered everything in automation, and the support was excellent. Highly recommend it for anyone looking to start their journey in test automation!`,
    rating: 5,
  },
  {
    name: 'Davina',
    location: 'Pakistan',
    review: `A great experience with Skill Builder’s Test Automation bootcamp. Sir Zubair explained everything in detail, making even remote sessions interactive. Highly recommended for anyone struggling with self-learning automation!`,
    rating: 5,
  },
  {
    name: 'Noor e Hira',
    location: 'Pakistan',
    review: `Completed the SQA Mastery course with Sir Zubair, and it was an outstanding experience. His expertise made complex topics easy to grasp. A must for anyone looking to build a strong foundation in SQA.`,
    rating: 5,
  },
  {
    name: 'Adnan Siddiqui',
    location: 'Germany',
    review: `Great experience! The tutor is highly knowledgeable and explains concepts thoroughly until they are well understood. Highly recommended for those looking to master test automation.`,
    rating: 5,
  },
  {
    name: 'Sidra Munaf',
    location: 'United Kingdom',
    review: `Enrolled in the Test Automation bootcamp, and it has been a transformative experience. Sir Zubair and the team provide practical insights and real-world challenges, making learning highly effective.`,
    rating: 5,
  },
  {
    name: 'Shaheer Khan',
    location: 'Pakistan',
    review: `I recently completed SkillBuilder’s Web Automation course. The content was excellent, and the instructor’s guidance was invaluable. I gained hands-on experience with Selenium and Cypress. Looking forward to exploring more courses with SkillBuilder!`,
    rating: 5,
  },
];


function HomePageReviews({ role }) {
  return (
    <>
      <LayoutXPadding>
        <HeadingSection
        role={role}
          labelText="Feedback"
          headingText="A skill-Building Journey with Skillbuilder"
          text="How Skillbuilder course helped you master new skills and advance in your career"
        />
      </LayoutXPadding>
      <ReviewsSlider />
      {role === "home" && <LayoutXPadding>
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
        </LayoutXPadding>}
    </>
  );
}

export default HomePageReviews;

export function HomePageReviewCard({ review, className = "" ,MAX_LENGTH = 400}) {
  const [isExpanded, setIsExpanded] = useState(false);
   // Adjusted for better readability
    console.log("maxlength/////",MAX_LENGTH )
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
            className="ml-1 cursor-pointer text-[#D0722E] text-sm font-medium inline-block"
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
            <h3 className="font-medium text-[#170D23]">{review?.name} </h3>
            <p className="text-xs text-[#4A525D]">{review?.location}</p>
          </div>
        </div>
        <StarRating rating={review?.rating} />
      </div>
    </div>
  );
}