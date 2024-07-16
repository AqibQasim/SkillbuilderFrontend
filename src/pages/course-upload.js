import InstructorTab from "@/components/InstructorTab";
import withAuth from "@/components/WithAuth";
import { useState } from "react";

function courseUpload() {
  const steps = ["Intended learners", "Videos", "Pricing"];
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    setCurrentStep((prevStep) =>
      prevStep < steps.length - 1 ? prevStep + 1 : prevStep,
    );
  };
  const prevHandler = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };
  return (
    <div className="container mx-auto p-4">
      <InstructorTab
        steps={steps}
        currentStep={currentStep}
        onNext={handleNext}
        onPrev={prevHandler}
      />
    </div>
  );
}

export default withAuth(courseUpload);
