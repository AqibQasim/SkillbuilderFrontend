import React from "react";
import { useSelector } from "react-redux";
import Loader from "./Loader";

const StudentProfile = () => {
  const { userData: studentUser } = useSelector((state) => state.singleUser);
  const { first_name, last_name, email, location } = studentUser;

  return (
    <div className="container mx-auto p-5 md:p-10">
      <div className="flex flex-col items-center md:flex-row md:items-start">
        <img
          src="/studentprofile.png"
          alt="Profile"
          className="mb-5 h-32 w-32 rounded-full md:mb-0 md:mr-10 md:h-40 md:w-40"
        />
        <div className="mt-8">
          <h2 className="text-2xl font-medium md:text-3xl">
            {" "}
            {first_name} {last_name}{" "}
          </h2>
          <p className="text-md text-gray-900 md:text-lg">
            Email:{"      "}
            <span className="text-md text-gray-400">
              {" "}
              {email}
              {/* ameliaadriana@gmail.com{" "} */}
            </span>
          </p>
          <p className="text-md text-gray-900 md:text-lg">
            Location:
            <span className="text-md text-gray-400">
              {" "}
              {location || "Unavailable"}{" "}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
