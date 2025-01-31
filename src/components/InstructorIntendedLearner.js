import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCourse } from "../../redux/thunks/createCourseThunk";
import { setCourseDetails } from "../../redux/slices/createCourseSlice";
import { fetchInstructorByUserId } from "../../redux/thunks/InstructorByUserIdThunk";
import ImageUpload from "./ImageUpload";

const InstructorIntendedLearner = ({ onNext }) => {
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(null);
  const [learningOutcomes, setLearningOutcomes] = useState([""]);
  const [level, setLevel] = useState("");
  const userId = useSelector((state) => state.auth.user);
  const instructorId = useSelector(
    (state) => state.instructorByUserId.instructorByUserId.id,
  );
  const courseId = useSelector((state) => state.createCourse.courseId);
  const image = useSelector((state) => state.createCourse.courseDetails.image);
  const title = useSelector((state) => state.createCourse.courseDetails.title);
  const amount = useSelector(
    (state) => state.createCourse.courseDetails.amount,
  );
  const discount = useSelector(
    (state) => state.createCourse.courseDetails.discount,
  );
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

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      learning_outcomes: learningOutcomes,
    }));
  }, [learningOutcomes]);


  console.log("Getting the instructor id correctly?:", instructorId);

  const initialFormData = {
    instructor_id: instructorId,
    creation_duration_hours: "",
    image: "",
    category: "",
    learning_outcomes: learningOutcomes,
    modulesCount: 0,
    amount: 0,
    charges: 0,
    discount: 0,
    level, // Adding level to form data
  };

  const [formData, setFormData] = useState({
    ...initialFormData,
    title,
    category,
    image: selectedImage,
    learning_outcomes: learningOutcomes,
    amount,
    discount,
  });

  console.log("form data", formData);

  const submitHandler = (e) => {
    console.log("we here");
    console.log("form data to submit?", formData);
    e.preventDefault();
    const dataWithInstructorId = {
      ...formData,
      instructor_id: instructorId,
      level,
      image: selectedImage,
    };
    const { instructor_id, title, category, learning_outcomes } =
      dataWithInstructorId;
    if (!instructor_id || !title || !category || !learning_outcomes) return;

    console.log("submit this data?", dataWithInstructorId);

    dispatch(setCourseDetails(dataWithInstructorId));
    onNext();
  };

  const handleChange = (field, value) => {
    console.log(`Field: ${field}, value: ${value}`);
    setFormData((prevFormData) => ({ ...prevFormData, [field]: value }));
  };

   const handleOutcomeChange = (index, value) => {
     const updatedOutcomes = [...learningOutcomes];
     updatedOutcomes[index] = value;
     setLearningOutcomes(updatedOutcomes);
   };

   const addOutcomeField = () => {
     setLearningOutcomes([...learningOutcomes, ""]);
   };

   const removeOutcomeField = (index) => {
     setLearningOutcomes(learningOutcomes.filter((_, i) => i !== index));
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
              Category:
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
        <br/>
        <div>
          <label
            htmlFor="level"
            className="text-md mb-4 block font-semibold text-gray-700"
          >
            Course Level:
          </label>
          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="border-darkgrey mt-1 block w-full rounded-md border bg-transparent p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Select Level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="expert">Expert</option>
          </select>
        </div>
        <br />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-1">
          <div>
            {/* <label
              htmlFor="creation_duration_hours"
              className="text-md mb-4 block font-semibold text-gray-700"
            >
              Time:
            </label>
            <input
              // onChange={}
              onChange={(e) =>
                handleChange("creation_duration_hours", e.target.value)
              }
              type="number"
              id="creation_duration_hours"
              name="creation_duration_hours"
              required
              className="border-darkgrey mt-1 block w-full rounded-md border bg-transparent p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="hours"
            /> */}
          </div>
          <div>
            <label
              htmlFor="learning"
              className="text-md mb-4 block font-semibold text-gray-700"
            >
              Description:
            </label>
            <textarea
              defaultValue={learning_outcomes}
              onChange={(e) => handleChange("description", e.target.value)}
              // type="text"
              id="learning"
              name="learning"
              required
              className="border-darkgrey mt-1 block w-full rounded-md border bg-transparent p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter the details or learning outcomes of this course"
            />
          </div>
        </div>
        <br />
        <label
          htmlFor="learning"
          className="text-md mb-4 block font-semibold text-gray-700"
        >
          Course Outcomes:
        </label>
        {learningOutcomes.map((outcome, index) => (
          <div key={index} className="mb-2 flex space-x-2">
            <input
              type="text"
              value={outcome}
              onChange={(e) => handleOutcomeChange(index, e.target.value)}
              className="border-darkgrey flex-1 rounded-md border bg-transparent p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder={`Outcome ${index + 1}`}
              required
              minLength={30}
            />
            {index > 0 && (
              <button
                type="button"
                onClick={() => removeOutcomeField(index)}
                className="rounded-md bg-red-500 px-3 py-1 text-white hover:bg-red-600"
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={addOutcomeField}
          className="mt-2 rounded-md bg-blue px-2 py-1 text-white"
        >
          Add Another Outcome
        </button>

        <br />
        <label
          htmlFor="learning"
          className="text-md mb-4 mt-4 block font-semibold text-gray-700"
        >
          Upload an image of this course:
        </label>
        <ImageUpload
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
        {/* <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label
              htmlFor="amount"
              className="text-md mb-4 block font-semibold text-gray-700"
            >
              Amount:
            </label>
            <input
              defaultValue={amount}
              onChange={(e) => handleChange("amount", e.target.value)}
              type="number"
              id="amount"
              name="amount"
              required
              className="border-darkgrey mt-1 block w-full rounded-md border bg-transparent p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Price"
            />
          </div>
          <div>
            <label
              htmlFor="learning"
              className="text-md mb-4 block font-semibold text-gray-700"
            >
              Discount:
            </label>
            <input
              defaultValue={discount}
              onChange={(e) => handleChange("discount", e.target.value)}
              type="number"
              id="discount"
              name="discount"
              required
              className="border-darkgrey mt-1 block w-full rounded-md border bg-transparent p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Discount"
            />
          </div>
        </div> */}
        <br />
        <div className="mt-4 flex justify-end">
          {/* <button
          <button
            type="submit"
            className="rounded-md bg-blue px-10 py-2 font-normal text-white hover:bg-blue-600 max-lsm:w-full"
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
