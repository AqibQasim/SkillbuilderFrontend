import ResetPasswordEmailForm from "@/components/ResetPasswordEmailForm";
import { useSelector } from "react-redux";
import ResetPasswordOtpForm from "./ResetPasswordOtpForm";
import ResetPasswordUpdatePasswordForm from "./ResetPasswordUpdatePasswordForm";
import ResetPasswordSuccessMsg from "./ResetPasswordSuccessMsg";

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
      {index === 3 && <ResetPasswordSuccessMsg />}
    </div>
  );
}

export default ResetPassword;
