import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllLiveSessionCourses } from "../../redux/thunks/liveSessionCoursesThunk";
import { ExploreCoursesCard } from "./ExploreCoursesSlider";

const BootcampRecommended = () => {
  const dispatch = useDispatch();
  const liveSessionCourses = useSelector(
    (state) => state.liveSessionCourses.liveSessionCourses,
  );

  useEffect(() => {
    dispatch(getAllLiveSessionCourses());
  }, []);

  return (
    <div className="mx-auto w-full max-w-[80%] p-4">
      <h2 className="mb-4 text-2xl font-bold">
        Our Ai recommended courses with them
      </h2>
      <div class="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-4">
        {liveSessionCourses?.map((course, index) => (
          <ExploreCoursesCard
            key={course?.id}
            course={course}
            className={`${index % 2 === 0 ? "is-odd group" : "is-even group"} `}
          />
        ))}
      </div>
    </div>
  );
};
export default BootcampRecommended;
