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
    <section className=" px-6 md:px-12 lg:px-20 py-6">
      <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2">
        {/* Left Content */}
        <div className="w-full  h-96">
          {/* rating */}
          <div className="mb-4 flex w-max items-center gap-2 rounded-3xl bg-gray-200 px-2 py-1">
            <span className="text-md font-semibold">{course?.rating || 0}</span>
            <div className="flex text-yellow-400">
              <StarRating rating={course?.rating || 0} />
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
          {/* Enroll Now Button */}
          {/* <div>{course?.amount - course?.discount}</div> */}
          <div className="my-4 flex gap-4">
            <div className="flex items-center space-x-2 rounded-full border p-2">
              {/* <span className="text-xl text-green-600">🔑</span> */}
              <img src="/cup.png" alt="key" className="h-10 w-10" />
              <span className="text-sm text-gray-700 md:text-base">
              Master in-demand skills with expert guidance
              </span>
            </div>
            <div className="flex items-center space-x-2 rounded-full border p-2">
              <img src="/cup.png" alt="key" className="h-10 w-10" />
               
                {/* <span className="text-xl text-green-600">🎯</span> */}
              <span className="text-sm text-gray-700 md:text-base">
              Transform learning experiences for career success
              </span>
            </div>
          </div>
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
            <input type="hidden" name="amount" value={course?.amount-course?.discount} />
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
        <div className="w-full h-96 flex justify-center">
          <img
            src="/img-vid.png"
            alt="Computer Science Bootcamp"
            className="h-full object-cover rounded-2xl shadow-lg"
            // className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
