// pages/courses/[id]/index.js
import { useRouter } from "next/router";
import Image from "next/image";
import courses from "@/data/courses";
import Navbar from "@/components/Navbar";

const CourseDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const course = courses.find((course) => course.id === parseInt(id));

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <>
      <Navbar />
      <h1 className="text-3xl font-semibold">Course Instructor</h1>
      
      <div className="course-details-container">
        <h1>{course.title}</h1>
        <Image src={course.image} alt={course.title} width={280} height={260} />
        <p>{course.desc}</p>
        <p>Rating: {course.rating}</p>
        <p>Price: ${course.price}</p>
      </div>
    </>
  );
};

export default CourseDetails;
