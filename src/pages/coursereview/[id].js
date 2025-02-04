import CourseReview from "@/components/CourseReview";
import Footer from "@/components/Footer";
import HomePageNavbar from "@/components/HomePageNavbar";
import React, { useEffect, useReducer } from "react";
import Writereview from "@/components/Writereview";
import Reviews from "@/components/Reviews";
import ReviewModal from "@/components/ReviewModal";
import StarRating from "@/components/StarRating";
import ReviewModalContainer from "@/components/ReviewModalContainer";
import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllReviews } from "../../../redux/thunks/reviewsThunk";
import checkIfStudentHasPurchasedCourse from "@/utils/checkIfStudentHasPurchasedCourse";

const coursereviews = () => {
  const router = useRouter();
  const CourseId = router.query.id;
  const studentId = useSelector((state) => state.auth.user);
  //console.log("Student logged in: ",userId)
  const [hasUserPurchasedCourse, setHasUserPurchasedCourse] = useState(false);

  const [reviewsDatta, setReviewsData] = useState([]);

  const dispatch = useDispatch();
  const { reviewsData: reviews, isReviewsLoading } = useSelector(
    (state) => state.allReviews || { reviewsData: [], isReviewsLoading: true },
  );

  const checkWhetherHasUserPurchasedCourse = async () => {
    const res = await checkIfStudentHasPurchasedCourse(
      { id: CourseId },
      studentId,
    );
    if (res) {
      setHasUserPurchasedCourse(true);
    }
  };
  useEffect(() => {
    dispatch(fetchAllReviews(CourseId));
    checkWhetherHasUserPurchasedCourse();
  }, [CourseId]);
  // useEffect(()=>{
  //   console.log("Me HUn CourseID: ",CourseId);
  //   console.log("Me HUn typeof(CourseID): ",typeof(CourseId));
  //   console.log(reviews)

  // },[])

  useEffect(() => {
    const list = [];
    reviews.forEach((review) => {
      console.log("Raatingg ", review?.rating);
      list.push({
        rating: parseFloat(review.rating),
      });
    });
    setReviewsData(list);
  }, [reviews]);

  let rating_counts = {
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
  };

  // total count of reviews
  const total_count = reviewsDatta.length;

  // sum of ratings
  let rating_sum = reviewsDatta.reduce((num, { rating }) => num + rating, 0);

  // total sum of 5 stars
  let total_sum = 5 * total_count;

  let result = (rating_sum / total_sum) * 5;
  result = Math.round((result + Number.EPSILON) * 100) / 100;

  // calculate percentages
  reviewsDatta.forEach((e) => {
    switch (e.rating) {
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
  //Rayyans work
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <main>
      {" "}
      <div className="w-full bg-bg_gray">
        <HomePageNavbar />
        <div>
          <Reviews rating={result} total={total_count} counts={rating_counts} />
        </div>
        <ReviewModalContainer isOpen={isModalOpen} onClose={closeModal}>
          <ReviewModal onClose={closeModal} courseId={CourseId} />
        </ReviewModalContainer>
        {hasUserPurchasedCourse ? (
          <Writereview openModal={openModal} />
        ) : (
          <div className="flex flex-1 justify-center">Purchase the course in order to write your review</div>
        )}
        {reviews.map((review) => (
          <CourseReview
            name={`${review?.user?.first_name} ${review?.user?.last_name}`}
            description={review.review}
            time={review.date}
          />
        ))}

        <Footer />
      </div>
    </main>
  );
};

export default coursereviews;
