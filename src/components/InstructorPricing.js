import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { setCourseDetails } from "../../redux/slices/createCourseSlice";
import { useDispatch, useSelector } from "react-redux";


const InstructorPricing = ({ onNext, onPrev }) => {
  const router = useRouter();
  const dispatch= useDispatch();

  const instructorId = useSelector(
    (state) => state.instructorByUserId.instructorByUserId.id,
  );
  const courseId = useSelector((state) => state.createCourse.courseId);
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

  const initialFormData = {
    instructor_id: instructorId,
    //creation_duration_hours:"",
    category,
    learning_outcomes,
    modulesCount: 0,
    amount,
    charges:0,
    discount,
  };

  const submitHandler = (e) => {
    console.log("we here");
    console.log("form data to submit?", formData);
    e.preventDefault();
    const dataWithInstructorId = { ...formData, instructor_id: instructorId };
    const { instructor_id, title, category, learning_outcomes } =
      dataWithInstructorId;
    if (!instructor_id || !title || !category || !learning_outcomes)
      return;

    console.log("submit this data?", dataWithInstructorId);

    dispatch(setCourseDetails(dataWithInstructorId));
    onNext();
  };

  const [formData, setFormData] = useState({
    ...initialFormData,
    title,
    category,
    learning_outcomes,
    amount,
    discount,
  });

  const handleChange = (field, value) => {
    console.log(`Field: ${field}, value: ${value}`);
    setFormData((prevFormData) => ({ ...prevFormData, [field]: value }));
  };

  const continueHandler = () => {
    router.push("/congratulations?source=courseUpload");
  };
  return (
    <div className="container mt-20">
      <form onSubmit={submitHandler} className="relative space-y-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
              Discount (Optional):
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
        </div>
        <br /> <br />
        <div className="mt-4 flex justify-end">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              <button
                type="button"
                className="rounded-md bg-bg_gray px-10 py-2 font-normal text-blue max-lsm:w-full"
                onClick={onPrev}
              >
                Previous
              </button>
            </div>
            <div>
              <button
                type="submit"
                className="rounded-md bg-blue px-10 py-2 font-normal text-white hover:bg-blue-600 max-lsm:mt-4 max-lsm:w-full"
                //onClick={continueHandler}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default InstructorPricing;
