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

// export const googleLogin = createAsyncThunk(
//   "auth/googleLogin",
//   async (_, thunkAPI) => {
//     try {
//       const response = await fetch(`${base_Api}/auth/google`, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || "Network response was not ok");
//       }

//       const data = await response.json();
//       console.log("data:", data);
//       return { user: data.user };
//     } catch (error) {
//       console.error("Google login error:", error);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const signupWithGoogle = createAsyncThunk(
  "auth/googleSignup",
  async (token, { rejectWithValue }) => {
    try {
      const response = await fetch(`${base_Api}/auth/google`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });
      const data = await response.json();
      console.log("API Response Data:", data);
      if (!response.ok) {
        throw new Error(data.message || "Unable to sign up with Google");
      }
      return data; // assuming the API returns the user object
    } catch (error) {
      return rejectWithValue(error.message || "Failed to sign up with Google");
    }
  }
);

export const fetchAllCourses = createAsyncThunk(
  "courses/fetchAll",
  async (token, { rejectWithValue }) => {
    try {
      const response = await fetch(`${base_Api}/all-courses`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify({ token }),
      });
      const data = await response.json();
      console.log("API Response Data:", data);
      if (!response.ok) {
        throw new Error(data.message || "Unable to sign up with Google");
      }
      return data; // assuming the API returns the user object
    } catch (error) {
      return rejectWithValue(error.message || "Failed to sign up with Google");
    }
  }
);

// =======
//       const response = await fetch(`${base_Api}/signup`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(userData),
//       });
//       console.log("response tk to phch gya");
//       const data = await response.text();

//       dispatch(setSuccess(data.message));

//       console.log("response data", data);

//       if (!response.ok) {
//         throw new Error(data.message || "User Already exist");
//       }
//       return data; // assuming the API returns the user object
//     } catch (error) {
//       return rejectWithValue(error.message || "Failed to signup");
//     }
//   }
// );
// >>>>>>> a5d183ea25ab2a2120c6617c11081be5f0f7641e
