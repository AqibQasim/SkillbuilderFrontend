import Fields from "@/components/Fields";
import Loader from "@/components/Loader";
import withAuth from "@/components/WithAuth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchInstructorByUserId } from "../../redux/thunks/InstructorByUserIdThunk";

function profession() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.user);
  const instructorId = useSelector(
    (state) => state.instructorByUserId.instructorByUserId.id,
  );

  useEffect(() => {
    if (!userId || instructorId) return;
    dispatch(fetchInstructorByUserId(userId));
  }, [userId]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      {/* {isInstLoading ? <Loader /> : <Fields />} */}
      <Fields />
    </div>
  );
}

export default withAuth(profession);
