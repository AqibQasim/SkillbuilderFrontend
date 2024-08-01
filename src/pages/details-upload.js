import InstructorTab2 from "@/components/InstructorTab2";
import withAuth from "@/components/WithAuth";
// import withAuth from "@/components/WithAuth";
import { useState } from "react";
import { useSelector } from "react-redux";
function detailsUpload() {
  const steps = ["Basic Info", "Videos"];
  const [currentStep, setCurrentStep] = useState(0);
  const testCurrentStep = useSelector((state) => state.instructor.index);

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
      <InstructorTab2
        steps={steps}
        // currentStep={currentStep}
        currentStep={testCurrentStep}
        onNext={handleNext}
        onPrev={prevHandler}
      />
    </div>
  );
}

export default withAuth(detailsUpload);
