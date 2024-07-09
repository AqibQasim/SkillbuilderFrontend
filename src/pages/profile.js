import React, { useEffect } from "react";
import Profile from "@/components/Profile";
import Navbar from "@/components/Navbar";
import LayoutWidth from "@/components/LayoutWidth";
import CurrentPath from "@/components/CurrentPath";
import { useDispatch, useSelector } from "react-redux";
import { filterObject } from "@/utils/filterObject";
import { editProfile } from "../../redux/thunks/profilethunk";
const profile = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(function () {
    if (!user) return;

    const updateProfile = filterObject(user);
    dispatch(editProfile(updateProfile));
  }, []);
  let profile_text = {
    image: "/profileimage.png",
    name: "Usman kareem",
    email: "Usmankareem@gmail.com",
    course: "UI / UX Designing +2",
    location: "Chicago, IL",
  };
  return (
    <>
      <div className="flex h-[100%] w-[100%] flex-col items-center bg-bg_gray">
        <Navbar />
        <LayoutWidth>
          <div className="path-wrapper mb-8 mt-16">
            <CurrentPath />
          </div>
        </LayoutWidth>
        <main className="w-full">
          <Profile profile_text={profile_text} />
        </main>
      </div>
    </>
  );
};

export default profile;
