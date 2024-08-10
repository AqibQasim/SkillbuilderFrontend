import LayoutWidth from "./LayoutWidth";
import VideoElement from "./VideoElement";

function EnrolledCourseDetailsHero({ enrolledCourse }) {
  console.log(enrolledCourse);
  return (
    <div className="w-full bg-white py-4">
      <LayoutWidth>
        <div className="video-wrapper">
          <VideoElement />
        </div>
      </LayoutWidth>
    </div>
  );
}

export default EnrolledCourseDetailsHero;
