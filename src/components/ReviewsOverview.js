import { average } from "@/utils/average";
import StarRating from "./StarRating";

function ReviewsOverview({ reviews }) {
  const numberOfReviews = reviews.length;
  const roundedReviewsRatings = reviews.map((review) =>
    Math.round(review.rating),
  );
  const averageOfReviewsRatings = average(roundedReviewsRatings);
  console.log("Average", averageOfReviewsRatings);
  console.log("reviews rating", roundedReviewsRatings);
  console.log("number of reviews", numberOfReviews);

  return (
    <div className="flex min-w-max flex-col items-center justify-center gap-2">
      <p className="mb-2 text-6xl font-medium"> {averageOfReviewsRatings} </p>
      <StarRating color="blue" rating={averageOfReviewsRatings} />
      <p>based on {numberOfReviews} ratings </p>
    </div>
  );
}

export default ReviewsOverview;
