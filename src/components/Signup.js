import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { signupUser, signupWithGoogle } from "../../redux/thunks/authThunks";
import { useSession, signIn, signOut } from 'next-auth/react';
// import { signupUser } from "../../redux/thunks/auththunks";

const Signup = () => {

  const dispatch = useDispatch();
  const { isLoading, error, successMessage } = useSelector(
    (state) => state.auth
  );


  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formError, setFormError] = useState("");
  const [gmailData, setGmailData] = useState();
  const [gstatus, setgStatus] = useState();

  // const createGoogleUser = async () => {
  //   try {
  //     const reqBody = {
  //       email: data?.user?.email,
  //       image: data?.user?.image,
  //       name: data?.user?.name,
  //       status: status
  //     }

  //     const response = await fetch(`${base_Api}/api/createGoogleUser`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(reqBody),
  //     });
  //     const data = await response.json();
  //     console.log("data:",data);
  //   } catch (e) {
  //     console.log('ERR:', err);
  //   }
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const passwordCriteria =
  //     /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])[A-Za-z\d!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{8,}$/;
  //   if (password !== confirmPassword) {
  //     setFormError("Passwords do not match");
  //     return;
  //   }
  //   if (!passwordCriteria.test(password)) {
  //     setFormError(
  //       "Password must contain at least one capital letter, one number, and one special character."
  //     );
  //     return;
  //   }
  //   setFormError("");
  //   if (password)
  //     dispatch(signupUser({ first_name, last_name, email, password }));
  // };

  // const { data, status } = useSession();
  // console.log("data:", data, "status:", status);
  // if (status === 'loading') return <h1> loading... please wait</h1>;
  // if (status === 'authenticated') {
  //   console.log("AUTHENTICATED SUCCESSFULLY!");
  //   setGmailData(data);
  //   setgStatus(status);
  //   if(gmailData && gstatus){
  //     createGoogleUser();
  //   }
  // }


  // const base_Api = "http://localhost:3000";

  // // export const loginUser = createAsyncThunk(
  // //   "auth/login",
  // //   async (userData, { rejectWithValue }) => {
  // //     try {
  // //       const response = await fetch(`${base_Api}/login`, {
  // //         method: "POST",
  // //         headers: {
  // //           "Content-Type": "application/json",
  // //         },
  // //         body: JSON.stringify(userData),
  // //       });


  const { data, status } = useSession();
  
  useEffect(() => {
    if (status === 'authenticated') {
      console.log("AUTHENTICATED SUCCESSFULLY!");
      createGoogleUser(data);
    }
  }, [status, data]);

  const createGoogleUser = async (data) => {
    try {
      const reqBody = {
        email: data?.user?.email,
        image: data?.user?.image,
        name: data?.user?.name,
      }

      const response = await fetch('/api/create-user', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reqBody),
      });
      const result = await response.json();
      console.log("Google user created:", result);
    } catch (err) {
      console.log('ERR:', err);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const passwordCriteria =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])[A-Za-z\d!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{8,}$/;
    if (password !== confirmPassword) {
      setFormError("Passwords do not match");
      return;
    }
    if (!passwordCriteria.test(password)) {
      setFormError(
        "Password must contain at least one capital letter, one number, and one special character."
      );
      return;
    }
    setFormError(""); 
    dispatch(signupUser({ first_name, last_name, email, password }));
  };

  if (status === 'loading') return <h1>Loading... please wait</h1>;


  return (
    <div className="max-w-md w-full px-6 py-4 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold text-darkgray">Create Your Account</h2>
      <p className="text-lightgray">Start your learning journey with us </p>
      {/* Form */}
      <form className="mt-4" onSubmit={handleSubmit}>
        {/* First Name */}
        <div className="mb-2 ">
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-900"
          >
            First Name<span className="text-red-500 text-lg">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
            required
            value={first_name}
            onChange={(e) => setfirst_name(e.target.value)}
          />
        </div>
        {/* Last Name */}

        <div className="mb-2 ">
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-900"
          >
            Last Name<span className="text-red-500 text-lg">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
            required
            value={last_name}
            onChange={(e) => setlast_name(e.target.value)}
          />
        </div>

        {/* Email */}
        <div className="mb-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-900"
          >
            Email<span className="text-red-500 text-lg">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="mb-2">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-900"
          >
            Password<span className="text-red-500 text-lg">*</span>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-2">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-900"
          >
            Confirm Password<span className="text-red-500 text-lg">*</span>
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        {formError && (
          <div className="text-center text-red-500 mb-2">{formError}</div>
        )}
        {successMessage && (
          <div className="text-center text-green-500 mb-2">
            {successMessage}
          </div>
        )}

        {/* Agree to Terms Checkbox */}
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-blue-500"
              required
            />
            <span className="ml-2 text-sm font-semibold text-black">
              I agree to all our{" "}
              <a href="/login" className="text-blue-600 hover:underline">
                Terms & Conditions
              </a>
            </span>
          </label>
        </div>

        {/* Sign Up Button */}
        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-blue-700 text-white p-2 rounded-lg hover:bg-blue-600"
          >
            {isLoading ? "Signing up..." : "Sign Up"}
          </button>
        </div>
        {error && <div className="text-center text-red-500">{error}</div>}
      </form>

      {/* Login Link */}
      <div className="text-center">
        <p>
          Already have an account?
          <Link href="/login" className="text-blue-600 hover:underline">
            {" "}
            Login
          </Link>
        </p>
      </div>

      {/* Social Logins */}
      <div className="mt-4">
        <div className="flex items-center justify-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-600">Or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <button
          // onClick={handleGoogleSignIn}
          onClick={() => signIn('google')}
          className="bg-white mt-4 bg-blue-700 border mb-4 w-full border-black text-black p-2 rounded-lg flex items-center justify-center"
        >
          <span className="mr-2">
            <Image src="/googlelogo.png" width={25} height={25} alt="" />
            {/* <img src={googleicon} width={24} height={24} alt="Google Icon" /> */}
          </span>
          <span className="font-semibold text-sm">Continue with Google</span>
        </button>
      </div>
    </div>
  );
};
export default Signup;
