import CurrentPath from "@/components/CurrentPath";
import LayoutWidth from "@/components/LayoutWidth";
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import withAuth from "@/components/WithAuth";
import { useSelector } from "react-redux";

const profile = () => {
  // let profile_text = {
  //   image: "/profileimage.png",
  //   course: "UI / UX Designing +2",
  //   location: "Chicago, IL",
  // };
   const courses = useSelector((state) => state.cart.items);
   
  return (
    <>
      <div className="flex h-[100%] w-[100%] flex-col items-center bg-bg_gray">
        <Navbar cartItemsLength={courses?.length}/>
        <LayoutWidth>
          <div className="path-wrapper mb-8 mt-8">
            <CurrentPath />
          </div>
        </LayoutWidth>
        <main className="w-full">
          <Profile />
        </main>
      </div>
    </>
  );
};

export default withAuth(profile);
