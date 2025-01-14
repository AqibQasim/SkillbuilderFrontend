import Banner from "@/components/Banner";
import CareerCounselling from "@/components/CareerCounselling";
import CoursePlatforms from "@/components/CoursePlatforms";
import ExploreCoursesAndBootcamps from "@/components/ExploreCoursesAndBootcamps";
import HomePageReviews from "@/components/HomePageReviews";
import LearningSection from "@/components/LearningSection";
import Showcase from "@/components/Showcase";

function home() {
  return (
    <div className="home-container mx-auto max-w-[120em] space-y-12 font-satoshi">
      <Banner />
      <Showcase />
      <CoursePlatforms />
      <CareerCounselling />
      <ExploreCoursesAndBootcamps />
      <LearningSection />
      <HomePageReviews />

      {/* <CarouselSection /> */}
    </div>
  );
}

export default home;
