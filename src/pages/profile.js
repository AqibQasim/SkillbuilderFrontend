import React from "react";
import Profile from "@/components/Profile";
const profile = () => {
  let profile_text = {
    image: "/profileimage.png",
    name: "Usman kareem",
    email: "Usmankareem@gmail.com",
    course: "UI / UX Designing +2",
    location: "Chicago, IL",
  };
  return (
    <main className="flex items-center justify-center">
      <Profile profile_text={profile_text} />
    </main>
  );
};

export default profile;
