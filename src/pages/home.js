import Banner from "@/components/Banner";
import CoursePlatforms from "@/components/CoursePlatforms";
import Showcase from "@/components/Showcase";

function home() {
  return (
    <div className="home-container mx-auto max-w-[120em] font-satoshi">
      <Banner />
      <Showcase />
      <CoursePlatforms />
    </div>
  );
}

export default home;
