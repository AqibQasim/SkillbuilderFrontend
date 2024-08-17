import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCourse } from "../../redux/thunks/createCourseThunk";
import { setCourseDetails } from "../../redux/slices/createCourseSlice";
import { fetchInstructorByUserId } from "../../redux/thunks/InstructorByUserIdThunk";

const InstructorIntendedLearner = ({ onNext }) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.user);
  const instructorId = useSelector(
    (state) => state.instructorByUserId.instructorByUserId.id,
  );
  const title = useSelector((state) => state.createCourse.courseDetails.title);
  const category = useSelector(
    (state) => state.createCourse.courseDetails.category,
  );
  const learning_outcomes = useSelector(
    (state) => state.createCourse.courseDetails.learning_outcomes,
  );

  useEffect(
    function () {
      if (!userId || instructorId) return;
      dispatch(fetchInstructorByUserId(userId));
    },
    [userId, instructorId],
  );

  console.log("Getting the instructor id correctly?:", instructorId);

  const initialFormData = {
    instructor_id: instructorId,
    title: "",
    category: "",
    learning_outcomes: "",
    modulesCount: 0,
    amount: 0,
    charges: 0,
  };

  const [formData, setFormData] = useState(initialFormData);

  const submitHandler = (e) => {
    e.preventDefault();
    const { title, category, learning_outcomes } = formData;
    if (!title || !category || !learning_outcomes) return;

    const dataWithInstructorId = { ...formData, instructor_id: instructorId };
    console.log("submit this data?", dataWithInstructorId);

    dispatch(setCourseDetails(dataWithInstructorId));
    onNext();
  };

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
              defaultValue={title}
              onChange={(e) => handleChange("title", e.target.value)}
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
              defaultValue={category}
              id="category"
              name="category"
              required
              onChange={(e) => handleChange("category", e.target.value)}
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
              onChange={(e) => handleChange("time", e.target.value)}
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
              defaultValue={learning_outcomes}
              onChange={(e) =>
                handleChange("learning_outcomes", e.target.value)
              }
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
          <button
            type="submit"
            className="rounded-md bg-blue px-10 py-2 font-normal text-white hover:bg-blue-600 max-lsm:w-full"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default InstructorIntendedLearner;
