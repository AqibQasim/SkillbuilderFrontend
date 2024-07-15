import InstructorTab from "@/components/InstructorTab";
import withAuth from "@/components/WithAuth";
import { useState } from "react";
function courseUpload() {
  const steps = ["Intended learners", "Videos"];
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    setCurrentStep((prevStep) =>
      prevStep < steps.length - 1 ? prevStep + 1 : prevStep,
    );
  };
  return (
    <div className="p-4">
      <InstructorTab
        steps={steps}
        currentStep={currentStep}
        onNext={handleNext}
      />
    </div>
  );
}

export default courseUpload;
