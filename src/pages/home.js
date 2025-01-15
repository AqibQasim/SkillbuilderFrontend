import Banner from "@/components/Banner";
import CareerCounselling from "@/components/CareerCounselling";
import CoursePlatforms from "@/components/CoursePlatforms";
import CoursesSection from "@/components/CoursesSection";
import ExploreCoursesAndBootcamps from "@/components/ExploreCoursesAndBootcamps";
import Showcase from "@/components/Showcase";
import CarouselSection from "@/components/CarouselSection";

function home() {
  return (
    <div className="home-container mx-auto max-w-[120em] space-y-12 font-satoshi">
      <Banner />
      <Showcase />
      <CoursePlatforms />
      <CareerCounselling />
      <ExploreCoursesAndBootcamps />
      <CoursesSection />
    </div>
  );
}

export default home;
