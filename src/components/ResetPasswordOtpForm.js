import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { compareOtp } from "../../redux/thunks/loginFlowThunk";
import { setIndex } from "../../redux/slices/loginFlowSlice";
import ButtonLarge from "./ButtonLarge";

const ResetPasswordOtpForm = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const { error, loading } = useSelector((state) => state.loginFlow);
  const dispatch = useDispatch();
  const inputsRef = useRef([]);
  const router = useRouter();

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (index < 5) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    const newOtp = [...otp];

    switch (e.key) {
      case "Backspace":
        if (otp[index] === "" && index > 0) {
          inputsRef.current[index - 1].focus();
        } else {
          newOtp[index] = "";
          setOtp(newOtp);
        }
        break;
      case "ArrowLeft":
        if (index > 0) {
          inputsRef.current[index - 1].focus();
        }
        break;
      case "ArrowRight":
        if (index < 5) {
          inputsRef.current[index + 1].focus();
        }
        break;
      default:
        break;
    }
  };

  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text");
    if (/^[0-9]{6}$/.test(paste)) {
      const newOtp = paste.split("").slice(0, 6);
      setOtp(newOtp);
      newOtp.forEach((value, index) => {
        inputsRef.current[index].value = value;
      });
      inputsRef.current[5].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(otp);
    dispatch(compareOtp(otp));
  };

  const handleCancel = () => {
    dispatch(setIndex(0));
    router.push("/login");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div
          className="mt-4 flex justify-center space-x-2"
          onPaste={handlePaste}
        >
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={digit}
              className="shadow-custom-input focus:border-primary focus:ring-primary h-12 w-12 rounded-lg border border-[#D0D5E7] text-center text-2xl focus:outline-none focus:ring-2"
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => (inputsRef.current[index] = el)}
              disabled={loading}
            />
          ))}
        </div>
        {error && <div className="mb-2 text-center text-red-500">{error}</div>}

        <div className="mt-8 space-y-2">
          <ButtonLarge type="submit" disabled={loading}>
            Reset Password
          </ButtonLarge>
          <ButtonLarge
            variant="secondary"
            onClick={handleCancel}
            disabled={loading}
          >
            Cancel
          </ButtonLarge>
        </div>
      </form>
      <p className="mt-14 text-lightgray">
        Haven’t received code yet?{" "}
        <span className="text-blue">Resend code</span>
      </p>
    </>
  );
};

export default ResetPasswordOtpForm;