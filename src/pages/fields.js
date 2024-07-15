const courses = () => {
  return (
    <div className="bg_gray">
      <div className="h-[90vh] w-[100%] flex justify-center items-center">
        <div className="flex flex-col mx-5">
          <h1 className="text-2xl font-semibold mb-10">
            You can Choose You are sign up as a instructor or student
          </h1>

          <div className="flex items-center mt-4">
            <input
              id="default-radio-1"
              type="radio"
              value=""
              name="default-radio"
              className="w-4 h-4 blue bg-gray-100 border-gray-300"
            />
            <label
              htmlFor="default-radio-1"
              className="ms-2 text-base font-medium text-gray-900"
            >
              Sign Up with as a Student
            </label>
          </div>
          <hr className="my-4" />

          <div className="flex items-center mt-4">
            <input
              id="default-radio-2"
              type="radio"
              value=""
              name="default-radio"
              className="w-4 h-4 text-blue-700 bg-gray-100 border-gray-300 focus:ring-blue"
              defaultChecked
            />
            <label
              htmlFor="default-radio-2"
              className="ms-2 text-base font-medium text-blue-700"
            >
              Sign Up with as a Instructor
            </label>
          </div>
          <hr className="my-4" />
          <div className="mb-4 mt-10">
            <button
              type="submit"
              className="w-full bg-blue-700 text-white p-2 rounded-lg"
            >
            Continue
            </button>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default courses;
