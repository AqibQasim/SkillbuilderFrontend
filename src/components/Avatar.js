import React from "react";
const avatarBaseApi = "https://ui-avatars.com/api/";

const Avatar = ({ firstName = "Zubai", lastName = "Alam", className }) => {
  const firstLetter = firstName?.charAt(0).toUpperCase();

  return (
    <div
      className={`${className} image-wrapper relative flex aspect-square h-12 w-12 items-center justify-center overflow-hidden rounded-full`}
    >
      <img
        src={`${avatarBaseApi}?background=random&rounded=true&name=${firstName}+${lastName}`}
        alt={`${firstName}'s avatar image`}
        className="h-full w-full rounded-full object-cover"
      />
    </div>
  );

  // return (
  //   <div
  //     className={`flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-2xl font-bold text-white ${className}`}
  //   >
  //     {firstLetter}
  //   </div>
  // );
};

export default Avatar;
