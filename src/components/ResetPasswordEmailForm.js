import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import ButtonLarge from "./ButtonLarge";
import { sendOtp } from "../../redux/thunks/loginFlowThunk";

const EmailForm = () => {
  const [localError, setLocalError] = useState("");
  const [localEmail, setLocalEmail] = useState("");
  const {
    email,
    error: errorFromSlice,
    loading,
  } = useSelector((state) => state.loginFlow);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (email) {
      setLocalEmail(email);
    }
  }, [email]);

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(localEmail)) {
      setLocalError("Please enter a valid email address");
      return;
    }
    setLocalError("");
    dispatch(sendOtp(localEmail));
  };

  const handleCancel = () => {
    router.push("/login");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4 mt-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-900"
        >
          Email<span className="text-lg text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="example@example.com"
          value={localEmail}
          className="mt-1 w-full rounded-lg border border-gray-300 p-2"
          required
          disabled={loading}
          onChange={(e) => setLocalEmail(e.target.value)}
        />
      </div>
      {localError && (
        <div className="mb-2 text-center text-red-500">{localError}</div>
      )}
      {errorFromSlice && (
        <div className="mb-2 text-center text-red-500">{errorFromSlice}</div>
      )}
      <div className="mb-4 mt-8 space-y-2">
        <ButtonLarge type="submit" disabled={loading} onClick={handleSubmit}>
          Submit
        </ButtonLarge>
        <ButtonLarge variant="secondary" onClick={handleCancel}>
          Cancel
        </ButtonLarge>
      </div>
    </form>
  );
};

export default EmailForm;
