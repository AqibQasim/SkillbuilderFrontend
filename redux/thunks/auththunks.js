import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginGoogleUserInStorage, setSuccess } from "../slices/authSlice";
import { editProfile } from "./profilethunk";
import { filterObject } from "@/utils/filterObject";

export const loginUser = createAsyncThunk(
  "auth/login",
  async (userData, { dispatch, rejectWithValue }) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        },
      );
      const data = await response.json();
      console.log("data:", data);
      if (!response.ok) {
        throw new Error(data.message || "Unable to login");
      }

      // Update profile
      let dataForProfile;
      if (data.user) {
        dataForProfile = filterObject(data.user);
        console.log(`dataForProfile: ${dataForProfile}`);
        dispatch(editProfile(dataForProfile));
      }

      return data; // assuming the API returns the user object
    } catch (error) {
      if (error.message === "Failed to fetch") {
        return rejectWithValue("Please check your network or try again later.");
      }
      return rejectWithValue(error.message || "Failed to login");
    }
  },
);

export const loginGoogleUser = createAsyncThunk(
  "auth/loginGoogleUser",
  async (userData, { dispatch, rejectWithValue }) => {
    console.log(
      "this is user data to login user and update profile: ",
      userData,
    );
    try {
      const loginGoogleUserResult = dispatch(
        loginGoogleUserInStorage(userData),
      );
      console.log("Google Login Result:", loginGoogleUserResult);

      // Update profile
      let dataForProfile;
      if (userData?.user) {
        dataForProfile = filterObject(userData?.user);
        console.log(`dataForProfile: ${dataForProfile}`);
        const editProfileResult = await dispatch(editProfile(dataForProfile)); // Assuming you meant to call editProfile here
        console.log("Edit Profile Result:", editProfileResult);
      }

      return {
        message: "Successfully logged in and profile updated via Google",
      };
    } catch (error) {
      console.error("Google Login Error:", error.message);
      return rejectWithValue(error.message || "Failed to log in via Google");
    }
  },
);

export const signupUser = createAsyncThunk(
  "auth/signup",
  async (userData, { rejectWithValue, dispatch }) => {
    console.log("Api call krne jarha hu bhai");
    try {
      console.log(`${process.env.NEXT_PUBLIC_BASE_API}/signup`);
      console.log("Let's seee");
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        },
      );
      console.log("response tk to phch gya");
      const data = await response.text();

      dispatch(setSuccess(data.message));

      console.log("response data", data);

      if (!response.ok) {
        throw new Error(data.message || "Email Already Exist");
      }
      return data; // assuming the API returns the user object
    } catch (error) {
      if (error.message == "Failed to fetch") {
        return rejectWithValue("Please check your network or try again later.");
      }
      return rejectWithValue(error.message || "Failed to signup");
    }
  },
);
