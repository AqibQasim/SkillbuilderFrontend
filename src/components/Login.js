import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearError } from "../../redux/slices/authSlice";
import {
  clearEmail as clearLoginFlowEmail,
  setEmail as setLoginFlowEmail,
} from "../../redux/slices/loginFlowSlice";
import { loginUser } from "../../redux/thunks/auththunks";
import ErrorMessage from "./ErrorMessage";
import ShowPassword from "./ShowPassword";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");
  const [showError, setShowError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { isLoading, error, user } = useSelector((state) => state.auth);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearError());
    dispatch(clearLoginFlowEmail());
  }, []);

  useEffect(() => {
    if (error) {
      setShowError(true);
    }
  }, [error]);

  const SubmitHandler = (e) => {
    e.preventDefault();
    const passwordCriteria =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])[A-Za-z\d!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{8,}$/;
    if (!passwordCriteria.test(password)) {
      setFormError(
        "Password must contain at least one capital letter, one number, and one special character.",
      );
      return;
    }
    setFormError("");
    dispatch(setLoginFlowEmail(email));
    dispatch(loginUser({ email, password }));
  };

  const emailchangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordchangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const handleGoogleLogin = async (googleUser) => {
    const token = googleUser.getAuthResponse().id_token;
    dispatch(loginWithGoogle(token));
  };
  if (user) {
    router.replace("/home");
  }

  return (
    <div className="w-full max-w-md rounded-md bg-white p-6 shadow-md">
      {showError ? (
        <ErrorMessage
          showError={showError}
          setShowError={setShowError}
          errorMessage={error}
        />
      ) : null}
      <h2 className="text-center text-2xl font-bold text-darkgray">
        Welcome Back
      </h2>
      {/* Form */}
      <form onSubmit={SubmitHandler}>
        {/* Email */}
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
            value={email}
            className="mt-1 w-full rounded-lg border border-gray-300 p-2"
            required
            onChange={emailchangeHandler}
          />
        </div>

        {/* Password */}
        <div>
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
              value={password}
              className="w-full rounded-lg border border-gray-300 p-2"
              required
              onChange={passwordchangeHandler}
            />
            <ShowPassword
              pass={showPassword}
              setPass={setShowPassword}
              className="absolute right-2 block cursor-pointer"
            />
          </div>
        </div>
        {formError && (
          <div className="mb-2 text-center text-red-500">{formError}</div>
        )}

        {!formError && <div className="text-center text-red-500">{error}</div>}
        <Link
          href="/reset-password"
          className="ml-2 text-sm font-semibold text-blue"
        >
          Forgot Password?
        </Link>

        {/* Sign Up Button */}
        <div className="mb-4 mt-8">
          <button
            type="submit"
            className="w-full rounded-lg bg-blue p-2 text-white hover:bg-blue-600"
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </div>
      </form>

      {/* Social Logins */}
      <div className="mt-4">
        <div className="flex items-center justify-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-300">Or Login With</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <button className="mb-4 mt-4 flex w-full items-center justify-center rounded-lg border border-google-border bg-white p-2 text-black">
          <span className="mr-2">
            <Image src="/googlelogo.png" width={25} height={25} />
          </span>
          <span
            className="text-sm font-semibold"
            onClick={() => {
              window.gapi.auth2
                .getAuthInstance()
                .signIn()
                .then(handleGoogleLogin);
            }}
          >
            Continue with Google
          </span>
        </button>
      </div>
      <div className="mt-4 text-center">
        <p className="text-sm">
          New to SkillBuilder{" "}
          <Link href="/signup" className="text-blue-600 hover:underline">
            {" "}
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;