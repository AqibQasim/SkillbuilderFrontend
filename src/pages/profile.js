import CurrentPath from "@/components/CurrentPath";
import Footer from "@/components/Footer";
import LayoutWidth from "@/components/LayoutWidth";
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import withAuth from "@/components/WithAuth";

const profile = () => {
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
          <div className="path-wrapper mb-8 mt-8">
            <CurrentPath />
          </div>
        </LayoutWidth>
        <main className="w-full">
          <Profile profile_text={profile_text} />
        </main>
        <Footer/>
      </div>
    </>
  );
};

export default profile;
