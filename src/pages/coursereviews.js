import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import { setCurrentTab } from "../utils/currentTabMethods";
import Footer from "@/components/Footer";
import CurrentPath from "@/components/CurrentPath";
import Reviews from "@/components/Reviews";

const CourseReviews = () => {
  useEffect(() => {
    setCurrentTab("");
  }, []);


  const review_data = [
    {rating:5}, {rating:5}, {rating:5},{rating:5}, {rating:5}, 
    {rating:4},  {rating:4},  {rating:4},
    {rating:1},  {rating:1}
]

let rating_counts = {
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0
}

// total count of reviews
  const total_count = review_data.length

// sum of ratings
  let rating_sum = review_data.reduce((num, {rating}) => num + rating, 0);
 
 // total sum of 5 stars
  let total_sum = 5 * total_count;

  let result = (rating_sum / total_sum) * 5;
  result = Math.round((result + Number.EPSILON) * 100) / 100

  // calculate percentages
  review_data.forEach((e) => {
       switch(e.rating){
            case 5:
                rating_counts.five++;
                break;
            case 4:
                rating_counts.four++;
                break;
            case 3:
                rating_counts.three++;
                break;
            case 2:
                rating_counts.two++;
                break;
            case 1:
                rating_counts.one++;
                break;
       }


   });

  return (
    <>
      <div className="h-[100%] w-[100%] flex flex-col items-center bg-bg_gray">
        <Navbar />
        <div className="path-wrapper w-[90%] max-w-screen-2xl mx-auto mt-16 mb-8">
          <CurrentPath />
        </div>
        <Reviews rating={result} total={total_count} counts={rating_counts} />
        <Footer />
      </div>
    </>
  );
};

export default CourseReviews;
