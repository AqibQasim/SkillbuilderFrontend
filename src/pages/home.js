import Banner from "@/components/Banner";
import CarouselSection from "@/components/CarouselSection";
import CoursePlatforms from "@/components/CoursePlatforms";
import Showcase from "@/components/Showcase";

function home() {
  return (
    <div className="home-container mx-auto max-w-[120em] space-y-12 font-satoshi">
      <Banner />
      <Showcase />
      <CoursePlatforms />
      <CarouselSection />
    </div>
  );
}

export default home;
