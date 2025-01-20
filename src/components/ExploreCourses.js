import Image from "next/image";
import { useState } from "react";
import CoursesNew from "./CoursesNew";

function ExploreCourses() {
  const [activeTab, setActiveTab] = useState("Most Popular");
  const [sortOrder, setSortOrder] = useState("Most Popular");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="bg-gray-50 py-10">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Title Section */}
        <h2 className="text-2xl font-bold text-gray-900">Courses to get you started</h2>
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
                    ? "text-blue-600 border-b-4 border-blue-600 font-bold"
                    : "hover:text-gray-800 hover:border-b-4 hover:border-gray-300"
                }`}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </li>
            ))}
          </ul>
          

          {/* Sort Button */}
          <div  className="flex gap-3">

          <button
    onClick={() =>
      setSortOrder(filter  === "Most Popular" ? "New Arrivals" : "Most Popular")
    }
    className="flex items-center rounded-full border border-gray-300 px-4 py-2 bg-pink text-sm text-gray-600 hover:bg-pink-300"
  >
     <Image
      src="/filter-tick.png"
      alt="dropdown-Image"
      width={20}
      height={20}
      className="ml-2 mr-3 inline-block"
    />
    Filter 
   
  </button>
  <button
    onClick={() =>
      setSortOrder(sortOrder === "Most Popular" ? "New Arrivals" : "Most Popular")
    }
    className="flex items-center rounded-full border border-gray-300 px-4 py-2 bg-pink text-sm text-gray-600 hover:bg-pink-300"
  >
    Sort by <span className="font-bold ml-1 mr-4">{sortOrder}</span>
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
          <CoursesNew activeTab={activeTab} sortOrder={sortOrder} showallCourses={true}/>
        </div>
      </div>
    </div>
  );
}

export default ExploreCourses;

