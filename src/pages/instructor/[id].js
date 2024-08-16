import CurrentPath from "@/components/CurrentPath";
import Footer from "@/components/Footer";
import InstructorHero from "@/components/InstructorHero";
import InstructorIntro from "@/components/InstructorIntro";
import InstructorTopCourses from "@/components/InstructorTopCourses";
import Navbar from "@/components/Navbar";
import { instructor } from "@/data/getInstructorById";
import { useRouter } from "next/router";
import { fetchOneInstructor } from "../../../redux/thunks/instructorThunk";
import { fetchCoursesByInstructorId } from "../../../redux/thunks/instructorCoursesThunk";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAccessToken } from "../../../redux/thunks/ytAccessThunk";
// import {}

export function SubHeading({ children }) {
  return (
    <h2 className="sub-heading text-3xl font-semibold capitalize">
      {children}
    </h2>
  );
}

function instructorDetails() {
  const router = useRouter();
  const instructorId = router.query.id;
  const instructors = useSelector((state) => state.singleInstructor);
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.auth.accessToken);
  const error = useSelector((state) => state.auth.error);
  
  useEffect(() => {
    dispatch(fetchAccessToken());
    console.log("accessToken:",accessToken);
    console.log("error while fetching the access token:",error);
  },[accessToken]);


  console.log("instructor", instructors);
  useEffect(() => {
    if (instructorId) {
      dispatch(fetchOneInstructor(instructorId));
    }
  }, [instructorId]);
  return (
    <div className="min-h-screen bg-bg_gray">
      <Navbar />
      <div className="path-wrapper mx-auto mb-8 mt-16 w-[90%] max-w-screen-2xl">
        <CurrentPath dynamicPath={instructor.name} />
      </div>
      <InstructorHero instructor={instructor} />
      <InstructorIntro video={instructors?.video_url} />
      <InstructorTopCourses courses={instructor.topCourses} />
      <Footer />
    </div>
  );
}

export default instructorDetails;
