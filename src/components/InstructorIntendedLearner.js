import React from "react";

const InstructorIntendedLearner = () => {
  return (
    <div className="container mt-20">
      <form className="space-y-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label
              htmlFor="course-name"
              className="text-md block font-semibold text-gray-700"
            >
              Course Name:
            </label>
            <input
              type="text"
              id="course-name"
              name="course-name"
              required
              className="border-darkgrey mt-1 block w-[80%] rounded-md border bg-transparent p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Development"
            />
          </div>
          <div>
            <label
              htmlFor="category"
              className="text-md block font-semibold text-gray-700"
            >
              What Category Best Fits The Knowledge You'll Share?
            </label>
            <select
              id="category"
              name="category"
              required
              className="border-darkgrey mt-1 block w-[80%] rounded-md border bg-transparent p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Select category</option>
              <option value="development">Development</option>
              <option value="design">Design</option>
              <option value="marketing">Marketing</option>
              <option value="business">Business</option>
              <option value="business">Others</option>
            </select>
          </div>
        </div>
        <br />
        <br />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label
              htmlFor="time"
              className="text-md block font-semibold text-gray-700"
            >
              How Much Time Can You Spend Creating Your Course?
            </label>
            <input
              type="number"
              id="time"
              name="time"
              required
              className="border-darkgrey mt-1 block w-[80%] rounded-md border bg-transparent p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="hours"
            />
          </div>
          <div>
            <label
              htmlFor="learning"
              className="text-md block font-semibold text-gray-700"
            >
              What Will Students Learn In Your Course?
            </label>
            <input
              type="text"
              id="learning"
              name="learning"
              required
              className="border-darkgrey mt-1 block w-[80%] rounded-md border bg-transparent p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Learning"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="mt-4 inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default InstructorIntendedLearner;
