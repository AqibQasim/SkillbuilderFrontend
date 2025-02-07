import BootcampHero from "@/components/bootcampHero";
import BootcampModule from "@/components/BootcampModule";
import BootcampOutcome from "@/components/BootcampOutcome";
import BootcampRecommended from "@/components/BootcampRecommendedd";
import BootcampSection from "@/components/BootcampSection";
import BootcampTutor from "@/components/BootcampTutor";
import HomepageFooter from "@/components/HomepageFooter";
import HomePageNavbar from "@/components/HomePageNavbar";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Loader from "@/components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getOneLiveSessionCourse } from "../../../redux/thunks/liveSessionCourseThunk";

const page = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const course = useSelector((state) => state.liveSessionSingleCourse.data);
  const tutor = course?.instructor;

  useEffect(() => {
    if (!id || course?.id === id) return;
    dispatch(getOneLiveSessionCourse(id));
  }, [id]);

  if (!course) {
    return (
      router.replace('/')  && <Loader />
    );
  };

  return (
    <div className="home-container mx-auto max-w-[120em] space-y-12 font-satoshi">
      {/* <Banner /> */}
      <div className="mx-auto max-w-[95%]">
        <HomePageNavbar />
      </div>
      <BootcampHero />
      <BootcampSection course={course} />
      <BootcampOutcome course={course} />
      <BootcampModule course={course} />
      <BootcampTutor tutor={tutor || {}} />
      <BootcampRecommended />
      <HomepageFooter />
    </div>
  );
};

export default page;
