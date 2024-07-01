import CurrentPath from "@/components/CurrentPath";
import InstructorHero from "@/components/InstructorHero";
import Navbar from "@/components/Navbar";
import { instructor } from "@/data/getInstructorById";
import { useRouter } from "next/router";

console.log(instructor);

function instructorDetails() {
  const router = useRouter();
  const instructorId = router.query.id;
  return (
    <div className="bg-bg_gray min-h-screen">
      <Navbar />
      <div className="path-wrapper w-[90%] max-w-screen-2xl mx-auto mt-16 mb-8">
        <CurrentPath />
      </div>
      <InstructorHero instructor={instructor} />
    </div>
  );
}

export default instructorDetails;
