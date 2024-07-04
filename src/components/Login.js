import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/thunks/auththunks";

const Login = () => {
  const dispatch = useDispatch();
  const { user, isLoading, error } = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");

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
  return (
    <div className="w-full max-w-md rounded-md bg-white p-6 shadow-md">
      <h2 className="text-center text-2xl font-bold text-darkgray">
        Welcome Back
        {user ? ` userId: ${user}` : " nope"}
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
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            className="mt-1 w-full rounded-lg border border-gray-300 p-2"
            required
            onChange={passwordchangeHandler}
          />
        </div>
        {formError && (
          <div className="mb-2 text-center text-red-500">{formError}</div>
        )}

        {!formError && error && (
          <div className="text-center text-red-500">{error}</div>
        )}
        <span className="ml-2 text-sm font-semibold text-blue">
          Forgot Password?
        </span>

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
          <span className="mx-4 text-gray-600">Or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <button className="mb-4 mt-4 flex w-full items-center justify-center rounded-lg border border-lightgray bg-white p-2 text-black">
          <span className="mr-2">
            <Image src="/googlelogo.png" width={25} height={25} />
            {/* <img src={googleicon} width={24} height={24} alt="Google Icon" /> */}
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
