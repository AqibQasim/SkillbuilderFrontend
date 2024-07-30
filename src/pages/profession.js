import Fields from "@/components/Fields";
import Loader from "@/components/Loader";
import withAuth from "@/components/WithAuth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneInstructor } from "../../redux/thunks/instructorThunk";

function profession() {
  const userId = useSelector((state) => state.auth.user);
  const { user_id: instructorId, isInstLoading } = useSelector(
    (state) => state.singleInstructor,
  );
  const dispatch = useDispatch();

  useEffect(
    function () {
      if (!userId) return;
      if (userId && instructorId) return;
      dispatch(fetchOneInstructor(userId));
    },
    [userId, instructorId],
  );

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      {isInstLoading ? <Loader /> : <Fields />}
    </div>
  );
}

export default withAuth(profession);
