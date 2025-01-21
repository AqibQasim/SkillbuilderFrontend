import React, { useState } from "react";

const CourseCatagories = ({ setSelectedCategory }) => {
  const categories = [
    "Development",
    "Testing",
    "Business",
    "Marketing",
    "Design",
    "Others"
  ];
  const [currentSelected, setCurrentSelected] = useState(null);

  return (
    <div className="mx-auto mt-4 flex flex-wrap justify-center text-center">
      {categories.map((category, index) => (
        <div
          key={index}
          className={`mx-2 min-w-fit cursor-pointer rounded-full border px-3 py-2 text-[#313131] drop-shadow-xl hover:border-[#000] sm:mt-2 ${
            category === currentSelected
              ? "border-[#9A9FFF] bg-gradient-to-b from-[#F3F1FF] from-20% to-[#716CF3]"
              : "border-[#F6EBEB] bg-gradient-to-b from-[#fff] from-20% to-[#CECECE] hover:bg-gradient-to-r"
          }`}
          onClick={() => {
            setCurrentSelected(category)
            setSelectedCategory(category?.toLowerCase());
          }}
          aria-selected={category === currentSelected}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default CourseCatagories;
