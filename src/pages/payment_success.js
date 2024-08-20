import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import { setCurrentTab } from "../utils/currentTabMethods";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../redux/slices/addToCart";

const PaymentSuccess = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isClient, setIsClient] = useState(false);
  const [loading, setLoading] = useState(true);
  const courses = useSelector((state) => state.cart.items);
  const userId = useSelector((state) => state.auth.user);

  useEffect(() => {
    setCurrentTab("Payment Success");
  }, []);

  useEffect(() => {
    if (router?.isReady && courses.length > 0) {
      setIsClient(true);
      setLoading(false);

      const enrollInCourses = async () => {
        try {
          const enrollPromises = courses.map((course) =>
            fetch("http://localhost:4000/enroll-in-course", {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                student_id: userId,
                course_id: course.id,
                filter: "id",
              }),
            }),
          );

          // Wait for all requests to complete
          const responses = await Promise.all(enrollPromises);

          responses.forEach((response, index) => {
            if (!response.ok) {
              throw new Error(
                `Failed to enroll in course with id: ${courses[index].id}`,
              );
            }
          });

          console.log("Enrollment successful for all courses");
          dispatch(clearCart());
          router.push("/my-learning");
        } catch (error) {
          console.error("Error enrolling in courses:", error);
        }
      };

      enrollInCourses();
    }
  }, [router?.isReady, courses]);

  if (loading) {
    return (
      <div className="flex h-[100vh] w-[100vw] items-center justify-center bg-bg_gray">
        <div className="loader">Loading...</div>
      </div>
    );
  }

  if (!isClient) {
    return null;
  }

  return (
    <>
      <div className="flex h-[100%] w-[100%] flex-col items-center bg-bg_gray">
        <Navbar cartItemsLength={courses?.length} />
        <div>Payment Success!</div>
        <Footer />
      </div>
    </>
  );
};

export default PaymentSuccess;
