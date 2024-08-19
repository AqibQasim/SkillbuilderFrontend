// import { instructor } from "@/data/getInstructorById";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createCourse } from "../../redux/thunks/createCourseThunk";

const InstructorIntendedLearner = ({ onNext }) => {
  const profile = useSelector((state) => state.profile);
  const userId = profile?.id;
  console.log("profile data:", userId);
  const dispatch = useDispatch();
  // console.log("[DISPATCH THE THUNK]:",)

  const initialFormData = {
    instructor_id: "",
    title: "",
    category: "",
    learning_outcomes: "",
    modulesCount: 0,
    amount: 0,
    charges: 0,
  };

  const [formData, setFormData] = useState({
    ...initialFormData,
    instructor_id: userId,
  });

  useEffect(() => {
    setFormData((prevFormData) => ({ ...prevFormData, instructor_id: userId }));
  }, [userId]);

  // Submit handler
  const submitHandler = (e) => {
    e.preventDefault();

    // Log the formData for debugging
    console.log("[FORMDATA TO BE SENT TO THUNK]:", formData);

    // Dispatch the thunk to create the course
    dispatch(createCourse(formData));

    // Call the onNext callback after the thunk dispatches
    onNext();
  };


  useEffect(() => {
    console.log("log the form data:",formData)
  },[formData])

  // const handleNestedChange = (section, index, key, value) => {
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     [section]: prevFormData[section].map((item, i) =>
  //       i === index ? { ...item, [key]: value } : item,
  //     ),
  //   }));
  // };

  // const handleExperienceChange = (index, value) => {
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     experience: prevFormData.experience.map((item, i) =>
  //       i === index ? value : item,
  //     ),
  //   }));
  // };

  const handleChange = (field, value) => {
    setFormData((prevFormData) => ({ ...prevFormData, [field]: value }));
  };

  return (
    <div className="container mt-20">
      <form onSubmit={submitHandler} className="relative space-y-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label
              htmlFor="course-name"
              className="text-md mb-4 block font-semibold text-gray-700"
            >
              Course Name:
            </label>
            <input
              onChange={(e) => handleChange('title', e.target.value)}
              type="text"
              id="course-name"
              name="course-name"
              required
              className="border-darkgrey mt-1 block w-full rounded-md border bg-transparent p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Development"
            />
          </div>
          <div>
            <label
              htmlFor="category"
              className="text-md mb-4 block font-semibold text-gray-700"
            >
              Field:
            </label>
            <select
              id="category"
              name="category"
              required
              onChange={(e) => handleChange('category', e.target.value)}
              className="border-darkgrey mt-1 block w-full rounded-md border bg-transparent p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Select category</option>
              <option value="development">Development</option>
              <option value="design">Design</option>
              <option value="marketing">Marketing</option>
              <option value="business">Business</option>
              <option value="others">Others</option>
            </select>
          </div>
        </div>
        <br />
        <br />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label
              htmlFor="time"
              className="text-md mb-4 block font-semibold text-gray-700"
            >
              Time:
            </label>
            <input
              // onChange={}
              onChange={(e) => handleChange('time', e.target.value)}
              type="number"
              id="time"
              name="time"
              required
              className="border-darkgrey mt-1 block w-full rounded-md border bg-transparent p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="hours"
            />
          </div>
          <div>
            <label
              htmlFor="learning"
              className="text-md mb-4 block font-semibold text-gray-700"
            >
              Outcome of this Course:
            </label>
            <input
              onChange={(e) => handleChange("learning_outcomes",e.target.value)}
              type="text"
              id="learning"
              name="learning"
              required
              className="border-darkgrey mt-1 block w-full rounded-md border bg-transparent p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Learning"
            />
          </div>
        </div>
        <br /> <br />
        <div className="mt-4 flex justify-end">
          {/* <button
            type="submit"
            className="rounded-md bg-blue px-10 py-2 font-normal text-white hover:bg-blue-600 max-lsm:w-full"
            onClick={onNext}
          >
            Continue
          </button> */}
          <button
            type="submit"
            className="rounded-md bg-blue px-10 py-2 font-normal text-white hover:bg-blue-600 max-lsm:w-full"
          >
            Continue
          </button>

          {/* <Button type="submit" className="!px-10">
            Continue
          </Button> */}
        </div>
      </form>
    </div>
  );
};

export default InstructorIntendedLearner;
