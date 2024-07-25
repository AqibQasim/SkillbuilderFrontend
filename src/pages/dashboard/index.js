import DashboardLayout from "@/components/DashboardLayout";
import withAuth from "@/components/WithAuth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoursesByInstructorId } from "../../../redux/thunks/instructorCoursesThunk";

function Dashboard() {
  const dispatch = useDispatch();
  const instructorId = useSelector((state) => state.profile.id);
  const {
    courses: instructorCourses,
    isLoading,
    error,
  } = useSelector((state) => state.instructorCourses);

  console.log("instructor Courses", instructorCourses);
  console.log("instructor Courses length", instructorCourses.length);

  useEffect(() => {
    if (instructorId) {
      dispatch(fetchCoursesByInstructorId(instructorId));
    }
  }, [dispatch, instructorId]);

  return (
    <DashboardLayout>
      <>
        <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
        <p>Select an option from the side navigation to get started.</p>

        {isLoading && <p>Loading courses...</p>}
        {error && <p>Error: {error}</p>}
        {instructorCourses.length > 0 && (
          <div>
            <h2 className="text-xl font-bold">Your Courses</h2>
            <ul>
              {instructorCourses.map((course) => (
                <li key={course.id}> {course.title} </li>
              ))}
            </ul>
          </div>
        )}

        <div className="my-9">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ea
            blanditiis, fuga officiis ipsum voluptatibus ad asperiores accusamus
            numquam quasi repellendus minima in officia impedit rerum iusto
            atque incidunt natus.
          </p>
        </div>
        {/* Repeat the above block as needed */}
      </>
    </DashboardLayout>
  );
}

export default withAuth(Dashboard);
