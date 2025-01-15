import { useState } from "react";

const BootcampModule = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const courseSections = [
    "Course Overview",
    "Course Overview",
    "Course Overview",
    "Course Overview",
    "Course Overview",
  ];

  return (
    <div className="mx-auto w-full max-w-[80%] p-4">
      <h2 className="mb-4 text-xl font-bold">Course Details:</h2>
      <div className="space-y-2">
        {courseSections.map((section, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg border shadow-sm"
          >
            <button
              className="flex w-full items-center justify-between bg-gray-100 p-4 transition hover:bg-gray-200 focus:outline-none"
              onClick={() => toggleSection(index)}
            >
              <span>{section}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 transition-transform ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openIndex === index && (
              <div className="border-t bg-white p-4">
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus lacinia odio vitae vestibulum.
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BootcampModule;
