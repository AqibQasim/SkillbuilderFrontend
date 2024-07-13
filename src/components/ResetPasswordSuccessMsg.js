import { useDispatch } from "react-redux";
import ButtonLarge from "./ButtonLarge";
import { setIndex } from "../../redux/slices/loginFlowSlice";
import { useRouter } from "next/router";

function ResetPasswordSuccessMsg() {
  const dispatch = useDispatch();
  const router = useRouter();
  function handleContinue() {
    router.push("/login");
    dispatch(setIndex(0));
  }
  return (
    <div className="mt-8">
      <ButtonLarge onClick={handleContinue}>Continue</ButtonLarge>
    </div>
  );
}

export default ResetPasswordSuccessMsg;
