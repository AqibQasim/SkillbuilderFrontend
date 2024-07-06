import React from "react";

const Avatar = ({ name = "Zubai Alam", className }) => {
  const firstLetter = name?.charAt(0).toUpperCase();

  return (
    <div
      className={`flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-2xl font-bold text-white ${className}`}
    >
      {firstLetter}
    </div>
  );
};

export default Avatar;
