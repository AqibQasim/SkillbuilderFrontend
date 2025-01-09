import React, { useState } from "react";

const CourseCatagories = () => {
  const categories = [
    "Development",
    "Testing",
    "Business & Management",
    "Emerging Technologies",
    "Design",
  ];
  const [currentSelected, setCurrentSelected] = useState("Development");

  return (
    <div className="mx-auto mt-4 flex flex-wrap justify-center text-center">
      {categories.map((category, index) => (
        <div
          key={index}
          className={`mx-2 cursor-pointer rounded-full border-2 border-[#F6EBEB] px-3 py-2 text-[#313131] drop-shadow-xl ${
            category === currentSelected
              ? "bg-gradient-to-b from-[#F3F1FF] to-[#716CF3]"
              : "bg-gradient-to-b from-[#fff] to-[#CECECE]"
          }`}
          onClick={() => setCurrentSelected(category)}
          aria-selected={category === currentSelected}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default CourseCatagories;
