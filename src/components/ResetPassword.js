import ResetPasswordEmailForm from "@/components/ResetPasswordEmailForm";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIndex } from "../../redux/slices/loginFlowSlice";
import { compareOtp } from "../../redux/thunks/loginFlowThunk";
import ShowPassword from "./ShowPassword";
import ResetPasswordOtpForm from "./ResetPasswordOtpForm";
import ResetPasswordUpdatePasswordForm from "./ResetPasswordUpdatePasswordForm";

function ResetPassword() {
  const { index, headings, paragraphs } = useSelector(
    (state) => state.loginFlow,
  );

  return (
    <div className="w-full max-w-md rounded-md bg-white p-6 shadow-md">
      <h2 className="mb-7 text-center text-2xl font-bold capitalize text-darkgray">
        {headings[index]}
      </h2>
      <p className="text-lightgray">{paragraphs[index]}</p>
      {index === 0 && <ResetPasswordEmailForm />}
      {index === 1 && <ResetPasswordOtpForm />}
      {index === 2 && <ResetPasswordUpdatePasswordForm />}
    </div>
  );
}

export default ResetPassword;
