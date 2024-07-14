import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setResendCodeTimer } from "../../redux/slices/loginFlowSlice";
import { resendOtp } from "../../redux/thunks/loginFlowThunk";

const ResendCode = ({ email }) => {
  const dispatch = useDispatch();
  const { resendCodeTimer, loading, resendCodeTimeBase } = useSelector(
    (state) => state.loginFlow,
  );

  useEffect(() => {
    let timer;
    if (resendCodeTimer > 0) {
      timer = setTimeout(() => {
        dispatch(setResendCodeTimer(resendCodeTimer - 1));
      }, 1000);
    }

    return () => clearTimeout(timer);
  }, [resendCodeTimer, dispatch]);

  const handleResendCode = () => {
    if (resendCodeTimer > 0) return;
    dispatch(resendOtp(email));
  };

  return (
    <p className="mt-14 text-lightgray">
      Haven’t received code yet?{" "}
      <span
        className={`text-blue ${resendCodeTimer > 0 || loading ? "cursor-not-allowed" : "cursor-pointer"}`}
        onClick={handleResendCode}
      >
        Resend code {resendCodeTimer > 0 && `in ${resendCodeTimer}s`}
      </span>
    </p>
  );
};

export default ResendCode;
