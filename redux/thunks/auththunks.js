import { createAsyncThunk } from "@reduxjs/toolkit";
import { setSuccess } from "../slices/authSlice";
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
        dispatch(editProfile(dataForProfile));
      }

      return data; // assuming the API returns the user object
    } catch (error) {
      return rejectWithValue(error.message || "Failed to login");
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
      return rejectWithValue(error.message || "Failed to signup");
    }
  },
);
