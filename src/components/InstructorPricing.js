import React from "react";

const InstructorPricing = ({ onNext }) => {
  return (
    <div className="container mt-20">
      <form className="relative space-y-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label
              htmlFor="course-name"
              className="text-md mb-4 block font-semibold text-gray-700"
            >
              Course Price:
            </label>
            <input
              type="text"
              id="course-name"
              name="course-name"
              required
              className="border-darkgrey mt-1 block w-full rounded-md border bg-transparent p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="$"
            />
          </div>
          <div>
            <label
              htmlFor="course-name"
              className="text-md mb-4 block font-semibold text-gray-700"
            >
              Discount(Optional):
            </label>
            <input
              type="text"
              id="course-name"
              name="course-name"
              required
              className="border-darkgrey mt-1 block w-full rounded-md border bg-transparent p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Discount"
            />
          </div>
        </div>
        <br /> <br />
        <div className="mt-4 flex justify-end">
          <button
            type="button"
            className="rounded-md bg-blue px-10 py-2 font-normal text-white hover:bg-blue-600 max-lsm:w-full"
            onClick={onNext}
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};
export default InstructorPricing;
