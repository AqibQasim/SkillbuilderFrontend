import Image from "next/image";
import { useState } from "react";
import CoursesNew from "./CoursesNew";

function ExploreCourses({ filter }) {
  const [activeTab, setActiveTab] = useState("Most Popular");
  const [sortOrder, setSortOrder] = useState("Most Popular");
  const [selectedCategory, setSelectedCategory] = useState("development");
  

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleChangeSelectedCategory = (event) => {
    setSelectedCategory(event.target.value); // Update state with the selected value
  };

  return (
    <div className="bg-gray-50 py-10">
      <div className="mx-auto max-w-screen-xl px-4">
        {/* Title Section */}
        <h2 className="text-2xl font-bold text-gray-900">
          Courses to get you started
        </h2>
        <p className="mt-2 text-gray-600">
          Explore courses from experienced, real-world experts.
        </p>

        {/* Tabs Section */}
        <div className="mt-6 flex items-center justify-between">
          <ul className="flex gap-6 text-sm font-medium text-gray-600">
            {["Most Popular", "New Courses", "Trending Courses"].map((tab) => (
              <li
                key={tab}
                className={`cursor-pointer pb-1 ${
                  activeTab === tab
                    ? "border-b-4 border-blue-600 font-bold text-blue-600"
                    : "hover:border-b-4 hover:border-gray-300 hover:text-gray-800"
                }`}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </li>
            ))}
          </ul>

          {/* Sort Button */}
          <div className="flex gap-3">
            <select
              // onClick={() =>
              //   // setSortOrder(
              //   //   filter === "Most Popular" ? "New Arrivals" : "Most Popular",
              //   // )
              // }
              onChange={handleChangeSelectedCategory}
              className="flex items-center rounded-full border border-gray-300 bg-pink px-4 py-2 text-sm text-gray-600 hover:bg-pink-300"
            >
              <option value="">
                <Image
                  src="/filter-tick.svg"
                  alt="dropdown-Image"
                  width={20}
                  height={20}
                  className="ml-2 mr-3 inline-block"
                />
                Filter
              </option>
              <option value="development">Development</option>
              <option value="design">Design</option>
              <option value="marketing">Marketing</option>
              <option value="business">Business</option>
              <option value="others">Others</option>
            </select>

            <button
              onClick={() =>
                setSortOrder(
                  sortOrder === "Most Popular"
                    ? "New Arrivals"
                    : "Most Popular",
                )
              }
              className="flex items-center rounded-full border border-gray-300 bg-pink px-4 py-2 text-sm text-gray-600 hover:bg-pink-300"
            >
              Sort by <span className="ml-1 mr-4 font-bold">{sortOrder}</span>
              <Image
                src="/dropdown.png"
                alt="dropdown-Image"
                width={20}
                height={20}
                className="ml-2 inline-block"
              />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-8">
          {/* Pass the activeTab and sortOrder to CoursesNew */}
          <CoursesNew selectedCategory={selectedCategory} //activeTab={activeTab} sortOrder={sortOrder} 
          />
        </div>
      </div>
    </div>
  );
}

export default ExploreCourses;
