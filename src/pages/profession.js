import Fields from "@/components/Fields";
import Loader from "@/components/Loader";
import withAuth from "@/components/WithAuth";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchOneInstructor } from "../../redux/thunks/instructorThunk";

function profession() {
  // const userId = useSelector((state) => state.auth.user);
  // const id = useSelector((state) => state.singleInstructor.id);
  // console.log("fetched instructor id in profession.js is:", id);
  // const dispatch = useDispatch();
  // console.log("Inst id", id);

  // useEffect(
  //   function () {
  //     if (userId) {
  //       dispatch(fetchOneInstructor(userId));
  //     }
  //   },
  //   [userId],
  // );

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      {/* {isInstLoading ? <Loader /> : <Fields />} */}
      <Fields />
    </div>
  );
}

export default withAuth(profession);
