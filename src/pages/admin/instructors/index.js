import AdminDashboardLayout from "@/components/AdminDashboardLayout";
import AdminInstructorsTable from "@/components/AdminInstructorsTable";
import withAuth from "@/components/WithAuth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllInstructors } from "../../../../redux/thunks/allInstructorsThunk";
import Loader from "@/components/Loader";

function Students() {
  const dispatch = useDispatch();
  const {
    instructors,
    status: instructorsStatus,
    error: instructorsError,
  } = useSelector((state) => state.allInstructors);

  useEffect(() => {
    console.log("running instructors Effect");
    if (instructors?.length > 0) return;
    dispatch(fetchAllInstructors());
  }, [instructors]);

  if (instructorsStatus === "loading")
    return (
      <AdminDashboardLayout>
        <div className="flex size-full items-center justify-center">
          <Loader />
        </div>
      </AdminDashboardLayout>
    );

  return (
    <AdminDashboardLayout>
      <AdminInstructorsTable instructors={instructors} />
    </AdminDashboardLayout>
  );
}

export default withAuth(Students);
