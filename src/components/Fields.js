import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";

const Fields = () => {
  const [selected, setSelected] = useState("student");
  const router = useRouter();
  const userId = useSelector((state) => state.auth.user);
  const instructorId = useSelector(
    (state) => state.instructorByUserId.instructorByUserId.id,
  );

  console.log("fetched instructor id is:", instructorId);
  const instructorPath = instructorId ? "/dashboard" : "/details-upload";

  function handleContinue() {
    if (selected === "student") {
      router.push("/");
    } else if (selected === "instructor") {
      router.push(instructorPath);
    }
  }

  return (
    <div className="w-full max-w-md rounded-md bg-white p-6 shadow-md">
      <h1 className="mb-10 text-2xl font-semibold">
        You can choose to log in as an instructor or student
      </h1>

      <div className="mt-4 flex items-center">
        <input
          id="default-radio-1"
          type="radio"
          value="student"
          name="default-radio"
          className="blue group h-4 w-4 border-gray-300 bg-gray-100"
          checked={selected === "student"}
          onChange={() => setSelected("student")}
        />
        <label
          htmlFor="default-radio-1"
          className={`ms-2 w-full cursor-pointer text-base font-medium ${
            selected === "student" ? "text-blue-700" : "text-gray-900"
          }`}
        >
          As Student
        </label>
      </div>
      <hr className="my-4" />

      <div className="mt-4 flex items-center">
        <input
          id="default-radio-2"
          type="radio"
          value="instructor"
          name="default-radio"
          className="h-4 w-4 border-gray-300 bg-gray-100"
          checked={selected === "instructor"}
          onChange={() => setSelected("instructor")}
        />
        <label
          htmlFor="default-radio-2"
          className={`ms-2 w-full cursor-pointer text-base font-medium ${
            selected === "instructor" ? "text-blue-700" : "text-gray-900"
          }`}
        >
          As Instructor
        </label>
      </div>
      <hr className="my-4" />
      <div className="mb-4 mt-10">
        <button
          onClick={handleContinue}
          className="w-full rounded-lg bg-blue-700 p-2 text-white"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Fields;
