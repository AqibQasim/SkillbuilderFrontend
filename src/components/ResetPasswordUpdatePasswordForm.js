import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetState, setIndex } from "../../redux/slices/loginFlowSlice";
import { resetPassword } from "../../redux/thunks/loginFlowThunk";
import ButtonLarge from "./ButtonLarge";
import ShowPassword from "./ShowPassword";

const ResetPasswordUpdatePasswordForm = () => {
  const [localError, setLocalError] = useState(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { index, loading, error, successMessage } = useSelector(
    (state) => state.loginFlow,
  );
  const dispatch = useDispatch();
  const router = useRouter();

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
    dispatch(resetPassword(password));
  };

  const handleCancel = () => {
    dispatch(resetState());
    router.push("/login");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-2 mt-3">
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
            disabled={loading}
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
            disabled={loading}
          />
          <ShowPassword
            pass={showConfirmPassword}
            setPass={setShowConfirmPassword}
            className="absolute right-2 block cursor-pointer"
          />
        </div>
      </div>
      {(localError || error) && (
        <div className="mb-2 text-center text-red-500">
          {localError || error}
        </div>
      )}
      {successMessage && (
        <div className="mb-2 text-center text-green-500">{successMessage}</div>
      )}
      <div className="mt-8 space-y-2">
        <ButtonLarge type="submit" disabled={loading}>
          Change Password
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
  );
};

export default ResetPasswordUpdatePasswordForm;
