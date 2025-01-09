import Banner from "@/components/Banner";
import Showcase from "@/components/Showcase";

function home() {
  return (
    <div className="home-container font-satoshi mx-auto max-w-[120em]">
      <Banner />
      <Showcase />
    </div>
  );
}

export default home;
