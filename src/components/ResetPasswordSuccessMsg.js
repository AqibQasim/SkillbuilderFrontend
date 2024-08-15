import { useDispatch } from "react-redux";
import ButtonLarge from "./ButtonLarge";
import { resetState } from "../../redux/slices/loginFlowSlice";
import { useRouter } from "next/router";

function ResetPasswordSuccessMsg() {
  const dispatch = useDispatch();
  const router = useRouter();
  function handleContinue() {
    dispatch(resetState());
    router.push("/login");
  }
  return (
    <div className="mt-8">
      <ButtonLarge onClick={handleContinue}>Continue</ButtonLarge>
    </div>
  );
}

export default ResetPasswordSuccessMsg;
