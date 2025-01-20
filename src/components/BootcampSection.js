import { useEffect } from "react";
import ButtonWithIcon from "./ButtonWithIcon";
import { useSelector } from "react-redux";
import { useState } from "react";
import StarRating from "./StarRating";

export default function BootcampSection({ course }) {
  const userId = useSelector((state) => state.auth.user);
  const [coursePurchased, setCoursePurchased] = useState(false);
  console.log("course is here?", course);

  useEffect(() => {
    if (userId && course?.course_id) {
      const fetchData = async () => {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API}/get-live-session-course-payment-of-student?student_id=${userId}&course_id=${course?.course_id}`,
        );

        const data = await res.json();

        if (data?.message === "live courses") {
          setCoursePurchased(true);
        }
      };

      fetchData();
    }
  }, [userId, course?.course_id]);

  return (
    <section className="bg-gray-50 px-6 md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:grid-cols-2">
        {/* Left Content */}
        <div>
          {/* rating */}
          <div className="mb-4 flex w-max items-center gap-2 rounded-3xl bg-gray-200 px-2 py-1">
            <span className="text-md font-semibold">{course?.rating || 0}</span>
            <div className="flex text-yellow-400">
              <StarRating rating={course?.rating || 0} />
              {/* Star Rating */}
              {/* {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                  >
                    <path d="M12 2.25l2.788 8.568h9.012L16.9 15.307l3.374 9.443-7.274-5.239-7.274 5.239 3.374-9.443L.2 10.818h9.012L12 2.25z" />
                  </svg>
                ))} */}
            </div>
          </div>

          {course && (
            <h1 className="mb-6 text-4xl font-bold text-gray-900">
              {course?.title || "title not found"}
            </h1>
          )}
          <p className="mb-4 font-medium leading-relaxed text-gray-600">
            {course?.description || "description not found"}
          </p>
          <p className="mb-6 text-lg font-semibold text-gray-700">
            60% Live Instructor-led online training, 40% On-demand flexible
            learning <span className="font-normal">(Best of both worlds!)</span>
          </p>
          {/* Features */}
          <div className="mb-8 flex flex-col gap-4 sm:flex-row">
            <div className="flex items-center gap-3 rounded-full bg-white p-4 shadow-md">
              <span className="rounded-full bg-blue-100 p-2 text-blue-500">
                🔑
              </span>
              <p className="rounded-3xl font-medium text-gray-800">
                Master in-demand skills with expert guidance
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-full bg-white p-4 shadow-md">
              <span className="rounded-full bg-blue-100 p-2 text-blue-500">
                🎯
              </span>
              <p className="font-medium text-gray-800">
                Transform learning experiences for career success
              </p>
            </div>
          </div>
          {/* Enroll Now Button */}
          <form
            className="w-full"
            action="/api/checkout_session_bootcamp"
            method="POST"
          >
            <input
              type="hidden"
              name="instructor_id"
              value={course?.instructor_id}
            />
            <input type="hidden" name="course_title" value={course?.title} />
            <input
              type="hidden"
              name="course_description"
              value={course?.description}
            />
            <input type="hidden" name="amount" value={course?.amount} />
            <input type="hidden" name="student_id" value={userId} />
            <input type="hidden" name="course_id" value={course?.id} />

            {!coursePurchased ? (
              <ButtonWithIcon text="Enroll now" className="text-nowrap" />
            ) : (
              <span>You have already purchased this course!</span>
            )}
          </form>
        </div>

        {/* Right Content */}
        <div className="relative">
          <img
            src="/bootcampVideo2.png"
            alt="Computer Science Bootcamp"
            className="border-black h-full w-full border pt-40"
            // className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
