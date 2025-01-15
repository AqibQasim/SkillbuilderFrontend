import React from "react";

const CourseCard = () => {
  return (
    <div className="mx-auto max-w-[80%] rounded-lg border-4 border-gray-200 bg-white p-6 shadow-lg md:p-10">
      <div className="flex flex-col gap-8 md:flex-row">
        {/* Left Section */}
        <div className="flex-1">
          <h2 className="text-xl font-bold text-gray-800 md:text-2xl">
            This course includes:
          </h2>
          <h1 className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl">
            Computer Science Bootcamp
          </h1>
          <p className="mt-1 text-sm text-gray-600 md:text-base">
            Weekly breakdown: 8 sessions per week. Approximately 19 hours of
            total study
          </p>
          {/* Features Section */}
          <div className="my-4 flex flex-wrap gap-4">
            <div className="flex items-center space-x-2 rounded-full border p-2">
              <span className="text-xl text-green-600">🔑</span>
              <span className="text-sm text-gray-700 md:text-base">
                16 x tutor-led sessions
              </span>
            </div>
            <div className="flex items-center space-x-2 rounded-full border p-2">
              <span className="text-xl text-green-600">
                <span className="text-xl text-green-600">🎯</span>
              </span>
              <span className="text-sm text-gray-700 md:text-base">
                8 hours of self-study
              </span>
            </div>
          </div>

          <p className="mb-6 text-sm font-semibold text-gray-700 md:text-base">
            Wide range of learning materials and research topics <br />
            Certification of completion from the Skillbuilder
          </p>
        </div>

        {/* Right Section */}
        <div className="flex-1 rounded-lg bg-gray-100 p-6">
          <h3 className="text-lg font-bold text-gray-800 md:text-2xl">
            By joining this course, you will be able to:
          </h3>
          <ul className="mt-4 space-y-3">
            <li className="flex items-start">
              <span className="mt-1 text-green-500">
                <i className="fas fa-check-circle"></i>
              </span>
              <p className="ml-2 text-sm text-gray-700 md:text-base">
                Describe in general terms the components of a computer and
                operating systems, their functions and purposes
              </p>
            </li>
            <li className="flex items-start">
              <span className="mt-1 text-green-500">
                <i className="fas fa-check-circle"></i>
              </span>
              <p className="ml-2 text-sm text-gray-700 md:text-base">
                Provide definitions and uses of a CPU, memory, and the bus
                system
              </p>
            </li>
            <li className="flex items-start">
              <span className="mt-1 text-green-500">
                <i className="fas fa-check-circle"></i>
              </span>
              <p className="ml-2 text-sm text-gray-700 md:text-base">
                Solve process scheduling and other resource-sharing problems
                common to operating systems
              </p>
            </li>
            <li className="flex items-start">
              <span className="mt-1 text-green-500">
                <i className="fas fa-check-circle"></i>
              </span>
              <p className="ml-2 text-sm text-gray-700 md:text-base">
                Demonstrate an understanding of visualization tools and their
                usefulness to a user
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
