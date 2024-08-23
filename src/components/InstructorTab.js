import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InstructorIntendedLearner from "./InstructorIntendedLearner";
import SkillBuilderSvg from "./SkillBuilderSvg";
import InstructorVideos from "./InstructorVideos";
// import InstructorPricing from "./InstructorPricing";
import { fetchInstructorByUserId } from "../../redux/thunks/InstructorByUserIdThunk";
import { useRouter } from "next/router";

const InstructorTab = ({ steps, currentStep, onNext, onPrev }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.user);
  const instructorId = useSelector(
    (state) => state.instructorByUserId.instructorByUserId?.id
  );
  const [error, setError] = useState(false);

  useEffect(() => {
    if (userId && !instructorId) {
      dispatch(fetchInstructorByUserId(userId));
    }
  }, [userId, instructorId, dispatch]);

  useEffect(() => {
    const fetchPaymentDetails = async () => {
      if (!instructorId) return;
      try {
        const response = await fetch(
          `http://127.0.0.1:4000/check-payment-rec?id=${instructorId}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );

        const data = await response.json();
        
        if (!response.ok) {
          // Handle specific error messages
          if (data.message === "Instructor not found.") {
            alert("Instructor not found. Please ensure your payment details are added.");
          } else {
            alert(data.message || "Failed to fetch payment details");
          }
          throw new Error(data.message || "Failed to fetch payment details");
        }

        const { message } = data;

        // Check if message is an array and if it is empty
        if (Array.isArray(message) && message.length === 0) {
          alert("Please add a payment method first.");
          router.push("/dashboard/payments");
        }
      } catch (err) {
        console.error("Error in fetchPaymentDetails:", err);
        setError(true);
      }
    };

    if (instructorId) {
      fetchPaymentDetails();
    }
  }, [instructorId]);

  return (
    <div>
      <div className="container mb-10">
        <SkillBuilderSvg />
      </div>
      <div className="mb-4 flex items-center justify-center">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center justify-center">
            <div
              className={`flex h-10 items-center justify-center rounded-full border-2 px-8 ${
                currentStep === index
                  ? "border-blue text-blue"
                  : currentStep > index
                  ? "border-blue bg-blue text-white"
                  : "border-gray-300 text-gray-400"
              }`}
            >
              <span className="max-lsm:hidden"> {step} </span>
              {index === 0 && (
                <span
                  className={`ml-2 ${
                    currentStep >= index ? "text-white" : "text-gray-400"
                  }`}
                >
                  👤
                </span>
              )}
              {index === 1 && (
                <span
                  className={`ml-2 ${
                    currentStep >= index ? "text-blue-600" : "text-gray-400"
                  }`}
                >
                  🎥
                </span>
              )}
            </div>
            {index < steps.length - 1 && (
              <div
                className={`h-[1px] w-10 ${
                  currentStep > index ? "bg-blue-300" : "bg-gray-300"
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>
      <div className="mb-4">
        {currentStep === 0 && (
          <InstructorIntendedLearner onNext={onNext} />
        )}
        {currentStep === 1 && (
          <InstructorVideos onNext={onNext} onPrev={onPrev} />
        )}
        {/* {currentStep === 2 && (
          <InstructorPricing onNext={onNext} onPrev={onPrev} />
        )} */}
      </div>
    </div>
  );
};

export default InstructorTab;
