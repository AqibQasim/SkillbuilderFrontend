const base_Api = process.env.NEXT_PUBLIC_BASE_API;
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchpurchasecourses = createAsyncThunk(
  "purchasedcourses/user",
  async (id, { rejectWithValue }) => {
    console.log("this is id:", id);
    try {
      const response = await fetch(`${base_Api}/get-purchased-courses/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log("purchased course:", data);
      if (!response.ok) {
        throw new Error(data.message || "Unable to get purchased course");
      }
      return data?.data; // assuming the API returns the user object in data.data
    } catch (error) {
      return rejectWithValue(error.message || "Failed to get purchased course");
    }
  },
);
