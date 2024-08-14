import React from "react";
import { useSelector } from "react-redux";
import Loader from "./Loader";
import Avatar from "./Avatar";

const StudentProfile = () => {
  const { userData: studentUser } = useSelector((state) => state.singleUser);
  const { first_name, last_name, email, location } = studentUser;

  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-8">
      <Avatar
        firstName={first_name}
        lastName={last_name}
        className="h-32 w-32 rounded-full sm:h-40 sm:w-40"
      />
      <div className="my-[unset] text-center sm:my-auto sm:text-left">
        <h2 className="text-2xl font-medium md:text-3xl">
          {" "}
          {first_name} {last_name}{" "}
        </h2>
        <p className="text-md text-gray-900 md:text-lg">
          Email:{"      "}
          <span className="text-md text-gray-400"> {email}</span>
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
  );
};

export default StudentProfile;
