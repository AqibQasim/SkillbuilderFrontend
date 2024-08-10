import AdminDashboardLayout from "@/components/AdminDashboardLayout";
import Loader from "@/components/Loader";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneInstructor } from "../../../../redux/thunks/instructorThunk";

const InstructorDetails = () => {
  const router = useRouter();
  const instructorId = router.query.id;
  const dispatch = useDispatch();
  const { isInstLoading, InstructorError } = useSelector(
    (state) => state.singleInstructor,
  );

  const store = useSelector((state) => state);
  console.log("Redux store", store);

  useEffect(() => {
    if (instructorId) {
      dispatch(fetchOneInstructor(instructorId));
    }
  }, [instructorId]);
  console.log("Loading...", isInstLoading);
  console.log("Error...", InstructorError);

  if (isInstLoading)
    return (
      <AdminDashboardLayout>
        <Loader />
      </AdminDashboardLayout>
    );

  // Todo Error isnt Showing yet
  if (InstructorError)
    return (
      <AdminDashboardLayout>
        <p>Could not load Instructor</p>
      </AdminDashboardLayout>
    );

  return <AdminDashboardLayout>[instructor page]</AdminDashboardLayout>;
};

export default InstructorDetails;
