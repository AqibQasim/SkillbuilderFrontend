import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setResendCodeTimer } from "../../redux/slices/loginFlowSlice";
import { sendOtp } from "../../redux/thunks/loginFlowThunk";

function ResendCode({ email }) {
  const { resendCodeTimer } = useSelector((state) => state.loginFlow);
  const dispatch = useDispatch();

  useEffect(() => {
    let timer;
    if (resendCodeTimer > 0) {
      timer = setInterval(() => {
        dispatch(setResendCodeTimer(resendCodeTimer - 1));
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [resendCodeTimer, dispatch]);

  const handleResendCode = () => {
    if (resendCodeTimer === 0) {
      dispatch(sendOtp({ email }));
      dispatch(setResendCodeTimer(60)); // Set timer for 60 seconds
    } else {
      console.log("You can resend the code after the timer ends");
    }
  };

  return (
    <p className="mt-14 text-lightgray">
      Haven’t received code yet?{" "}
      <span
        className={`text-blue ${resendCodeTimer > 0 ? "cursor-not-allowed" : "cursor-pointer"}`}
        onClick={handleResendCode}
      >
        Resend code {resendCodeTimer > 0 && `in ${resendCodeTimer}s`}
      </span>
    </p>
  );
}

export default ResendCode;
