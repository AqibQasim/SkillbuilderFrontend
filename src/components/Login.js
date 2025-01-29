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
import GoogleSignup from "./GoogleSignup";

const Login = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [formError, setFormError] = useState("");
  // const [showError, setShowError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  // const { isLoading, error, user } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showError, setShowError] = useState(false);
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
  
    let hasError = false;
  
    if (!email.trim()) {
      setEmailError("Email is required");
      hasError = true;
    } else {
      setEmailError("");
    }
  
    if (!password.trim()) {
      setPasswordError("Password is required");
      hasError = true;
    } else if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])[A-Za-z\d!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{8,}$/.test(password)) {
      setPasswordError("Invalid password");
      hasError = true;
    } else {
      setPasswordError("");
    }
  
    if (hasError) return;
  
    dispatch(setLoginFlowEmail(email));
    dispatch(loginUser({ email, password }));
  };
  
  return (
    <div className="w-full h-fit max-w-md rounded-2xl bg-white p-10 shadow-md">
      
      {/* Global Error Message (API errors like "Invalid email or password") */}
      {showError && error && (
        <ErrorMessage
          showError={showError}
          setShowError={setShowError}
          errorMessage={error}
        />
      )}
  
      <div className="flex items-center justify-between">
        <h2 className="text-center text-2xl font-bold text-darkgray">
          Login
        </h2>
        <Link href="/signup" className="text-blue-600 hover:underline">
          Register
        </Link> 
      </div>
  
      {/* Form */}
      <form onSubmit={SubmitHandler}>
        {/* Email Field */}
        <div className="mb-4 mt-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-900">
            Email<span className="text-lg text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            placeholder="name@domain.com"
            name="email"
            value={email}
            className="mt-1 w-full rounded-lg border border-gray-300 p-2"
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
        </div>
  
        {/* Password Field */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-900">
            Password<span className="text-lg text-red-500">*</span>
          </label>
          <div className="password-wrapper relative mt-1 flex items-center">
            <input
              type={!showPassword ? "password" : "text"}
              id="password"
              placeholder="Password"
              name="password"
              value={password}
              className="w-full rounded-lg border border-gray-300 p-2 mb-2"
              onChange={(e) => setPassword(e.target.value)}
            />
            <ShowPassword pass={showPassword} setPass={setShowPassword} className="absolute right-2 cursor-pointer" />
          </div>
          {passwordError && <p className="text-red-500 text-xs mt-1">{passwordError}</p>}
        </div>
  
        {/* Forgot Password */}
        <div className="text-right">
          <Link href="/reset-password" className="text-sm font-semibold text-blue hover:underline">
            Forgot Password?
          </Link>
        </div>
  
        {/* Login Button */}
        <div className="mb-4 mt-4">
          <button type="submit" className="w-full rounded-lg bg-blue p-2 text-white hover:bg-blue-600">
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
        <GoogleSignup />
      </div>
    </div>
  );
  
};

export default Login;
