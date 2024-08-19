import React from "react";
import InstructorIntendedLearner from "./InstructorIntendedLearner";
import SkillBuilderSvg from "./SkillBuilderSvg";
import InstructorVideos from "./InstructorVideos";
import InstructorPricing from "./InstructorPricing";

const InstructorTab = ({ steps, currentStep, onNext, onPrev }) => {
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
                  className={`ml-2 ${currentStep >= index ? "text-white" : "text-gray-400"}`}
                >
                  👤
                </span>
              )}
              {index === 1 && (
                <span
                  className={`ml-2 ${currentStep >= index ? "text-blue-600" : "text-gray-400"}`}
                >
                  🎥
                </span>
              )}
              {/* {index === 2 && (
                <span
                  className={`ml-2 ${currentStep >= index ? "text-blue-600" : "text-gray-400"}`}
                >
                  💲
                </span>
              )} */}
            </div>
            {index < steps.length - 1 && (
              <div
                className={`h-[1px] w-10 ${currentStep > index ? "bg-blue-300" : "bg-gray-300"}`}
              ></div>
            )}
          </div>
        ))}
      </div>
      <div className="mb-4">
        {currentStep === 0 && (
          <div>
            <InstructorIntendedLearner onNext={onNext} />
          </div>
        )}
        {currentStep === 1 && (
          <div>
            <InstructorVideos onNext={onNext} onPrev={onPrev} />
          </div>
        )}
        {/* {currentStep === 2 && (
          <div>
            <InstructorPricing onNext={onNext} onPrev={onPrev} />
          </div>
        )} */}
      </div>
    </div>
  );
};

export default InstructorTab;
