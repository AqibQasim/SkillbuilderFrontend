import React from "react";
import InstructorIntendedLearner from "./InstructorIntendedLearner";
import SkillBuilderSvg from "./SkillBuilderSvg";
import InstructorDetails from "./InstructorDetails";
import TakeIntro from "@/components/TakeIntro";
import Congrats from "@/components/Congrats"

const InstructorTab = ({ steps, currentStep, onNext }) => {
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
                  ? "border-blue-600 text-blue-600"
                  : "border-gray-300 text-gray-400"
              }`}
            >
              {step}
              {index === 0 && <span className="ml-2 text-blue-600">👤</span>}
              {index === 1 && <span className="ml-2 text-gray-400">🎥</span>}
              {index === 2 && <span className="ml-2 text-gray-400">💲</span>}
            </div>
            {index < steps.length - 1 && (
              <div className="h-[1px] w-10 bg-gray-300"></div>
            )}
          </div>
        ))}
      </div>
      <div className="mb-4">
        {currentStep === 0 && (
          <div>
            <InstructorDetails />
          </div>
        )}
        {currentStep === 1 && <div><TakeIntro/></div>}
        {currentStep === 2 && <div><Congrats/></div>}
        
      </div>
      <div className="flex w-[90%] justify-end">
        {currentStep < steps.length - 1 && (
          <button
            onClick={onNext}
            className="flex justify-end rounded-md bg-blue-600 px-4 py-2 text-white"
          >
            Continue
          </button>
        )}
      </div>
    </div>
  );
};

export default InstructorTab;
