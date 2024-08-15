// ResetPassword.js
import React from "react";
import { useSelector } from "react-redux";
import ResetPasswordEmailForm from "@/components/ResetPasswordEmailForm";
import ResetPasswordOtpForm from "@/components/ResetPasswordOtpForm";
import ResetPasswordUpdatePasswordForm from "@/components/ResetPasswordUpdatePasswordForm";
import { maskEmail } from "@/utils/maskEmail";
import ResetPasswordSuccessMsg from "./ResetPasswordSuccessMsg";

// Function to get dynamic paragraphs
// We use a function to dynamically insert the email into the paragraphs
const getParagraphs = (email) => {
  const maskedEmail = maskEmail(email);
  return [
    "We’ll email you a link so you can reset your password.",
    <span>
      Enter the code that we sent to your email{" "}
      <span className="font-bold text-blue">{maskedEmail}</span> and reset your
      password.
    </span>,
    "Set a strong password.",
    "Your Password has been reset click on continue to get started",
  ];
};

const ResetPassword = () => {
  const { index, email, headings } = useSelector((state) => state.loginFlow);

  const paragraphs = getParagraphs(email);

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
};

export default ResetPassword;
