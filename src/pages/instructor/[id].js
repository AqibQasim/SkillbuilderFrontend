import CurrentPath from "@/components/CurrentPath";
import Footer from "@/components/Footer";
import InstructorHero from "@/components/InstructorHero";
import InstructorIntro from "@/components/InstructorIntro";
import InstructorTopCourses from "@/components/InstructorTopCourses";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import { fetchOneInstructor } from "../../../redux/thunks/instructorThunk";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchOneUser } from "../../../redux/thunks/userInfoThunk";
import { fetchCoursesByInstructorId } from "../../../redux/thunks/instructorCoursesThunk";

export function SubHeading({ children }) {
  return (
    <h2 className="sub-heading text-3xl font-semibold capitalize">
      {children}
    </h2>
  );
}

function InstructorDetails() {
  const router = useRouter();
  const instructorId = router?.query?.id;
  const instructor = useSelector((state) => state.singleInstructor);
  const user = useSelector((state) => state.singleUser.userData);
  const instructor_courses = useSelector((state) => state.instructorCourses);
  const dispatch = useDispatch();

  
  useEffect(() => {
    if (instructorId) {
      console.log("inst id in individual compionent:",instructorId)
      dispatch(fetchOneInstructor(instructorId));
    }
  }, [instructorId, dispatch]);


  useEffect(() => {
    console.log("Instructor data:", instructor);
  }, [instructor]);

  
  
  useEffect(() => {
    if (instructor) {
      console.log("Instructor id before fetcheing user", instructor.id)
      dispatch(fetchOneUser(instructorId))
    }
  }, [instructor, dispatch]);


  useEffect(() => {
    if (instructor ) {
     dispatch(fetchCoursesByInstructorId(instructorId));
    
    }
  }, [instructor, dispatch]);

  // useEffect(() => {
  //   if (instructor && instructor.skills && instructor.skills.length > 0) {
  //     console.log(`instructor courses fetched ${instructor.skills[0].title}`);
  //   } else {
  //     console.log('No skills available for this instructor.');
  //   }
  // }, [instructor]);

  useEffect(() => {
    if (instructor_courses && instructor_courses.courses && instructor_courses.courses.length > 0 && instructor.video_url) {
      console.log(`Instructor courses fetched: ${instructor_courses.courses[0].id}`);
    }
  }, [instructor_courses, dispatch]);
  
  // useEffect(() => {
  //   if (instructor_courses) {
  //    console.log(`instructor courses fetched ${instructor_courses.courses[0].id}`)
  //   }
  // }, [instructor_courses, dispatch]);
  
  
  return (
    <div className="min-h-screen bg-bg_gray">
      <Navbar />
      <div className="path-wrapper mx-auto mb-8 mt-16 w-[90%] max-w-screen-2xl">
        <CurrentPath dynamicPath={`${user?.first_name} ${user?.last_name}`} />
      </div>

      {(instructor && instructor.skills && 
      <InstructorHero instructor={instructor} user={user} />)}

    {(instructor && instructor.video_url && 
      <InstructorIntro video={instructor.video_url}/>
      )}
      <InstructorTopCourses  courses={instructor_courses.courses}  /> 
      <Footer />
    </div>
  );
}

export default InstructorDetails;
