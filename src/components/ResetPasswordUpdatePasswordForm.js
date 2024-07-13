import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIndex } from "../../redux/slices/loginFlowSlice";
import {
  clearErrorMessage,
  clearSuccessMessage,
} from "../../redux/slices/profileSlice";
import { editProfile } from "../../redux/thunks/profilethunk";
import ButtonLarge from "./ButtonLarge";
import ShowPassword from "./ShowPassword";

const ResetPasswordUpdatePasswordForm = () => {
  const [localError, setLocalError] = useState(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { userId: id, index } = useSelector((state) => state.loginFlow);

  const {
    status,
    error: profileError,
    successMessage,
  } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    // Clear success and error messages on component mount
    dispatch(clearSuccessMessage());
    dispatch(clearErrorMessage());
  }, [dispatch]);

  useEffect(() => {
    if (successMessage === "Profile updated successfully") {
      dispatch(setIndex(index + 1));
    }
  }, [successMessage, dispatch, index]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const passwordCriteria =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])[A-Za-z\d!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{8,}$/;

    if (password !== confirmPassword) {
      setLocalError("Passwords do not match");
      return;
    }

    if (!passwordCriteria.test(password)) {
      setLocalError(
        "Password must contain at least one capital letter, one number, and one special character.",
      );
      return;
    }
    setLocalError(null);
    dispatch(editProfile({ password, id }));
  };

  const handleCancel = () => {
    dispatch(setIndex(0));
    router.push("/login");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-900"
          >
            Password<span className="text-lg text-red-500">*</span>
          </label>
          <div className="password-wrapper relative mt-1 flex items-center justify-center">
            <input
              type={!showPassword ? "password" : "text"}
              id="password"
              name="password"
              className="w-full rounded-lg border border-gray-300 p-2"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={status === "loading"}
            />
            <ShowPassword
              pass={showPassword}
              setPass={setShowPassword}
              className="absolute right-2 block cursor-pointer"
            />
          </div>
        </div>
        <div className="mb-2">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-900"
          >
            Confirm Password<span className="text-lg text-red-500">*</span>
          </label>
          <div className="password-wrapper relative mt-1 flex items-center justify-center">
            <input
              type={!showConfirmPassword ? "password" : "text"}
              id="confirmPassword"
              name="confirmPassword"
              className="w-full rounded-lg border border-gray-300 p-2"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              disabled={status === "loading"}
            />
            <ShowPassword
              pass={showConfirmPassword}
              setPass={setShowConfirmPassword}
              className="absolute right-2 block cursor-pointer"
            />
          </div>
        </div>
        {(localError || profileError) && (
          <div className="mb-2 text-center text-red-500">
            {localError || profileError}
          </div>
        )}
        <div className="mt-8 space-y-2">
          <ButtonLarge type="submit" disabled={status === "loading"}>
            Change Password
          </ButtonLarge>
        </div>
      </form>
      <ButtonLarge
        role="secondary"
        onClick={handleCancel}
        disabled={status === "loading"}
      >
        Cancel
      </ButtonLarge>
    </>
  );
};

export default ResetPasswordUpdatePasswordForm;
