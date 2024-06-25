import { createAsyncThunk } from "@reduxjs/toolkit";
import { setSuccess } from "../slices/authSlice";
const base_Api = "http://localhost:4000";

export const loginUser = createAsyncThunk(
  "auth/login",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await fetch(`${base_Api}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      console.log("data:", data);
      if (!response.ok) {
        throw new Error(data.message || "Unable to login");
      }
      return data; // assuming the API returns the user object
    } catch (error) {
      return rejectWithValue(error.message || "Failed to login");
    }
  }
);

export const signupUser = createAsyncThunk(
  "auth/signup",
  async (userData, { rejectWithValue, dispatch }) => {
    console.log("Api call krne jarha hu bhai");
    try {
      console.log("Let's seee");
      const response = await fetch(`${base_Api}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      console.log("response tk to phch gya");
      const data = await response.text();

      dispatch(setSuccess(data.message));

      console.log("response data", data);

      if (!response.ok) {
        throw new Error(data.message || "User Already exist");
      }
      return data; // assuming the API returns the user object
    } catch (error) {
      return rejectWithValue(error.message || "Failed to signup");
    }
  }
);
