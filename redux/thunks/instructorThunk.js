const base_Api = process.env.NEXT_PUBLIC_BASE_API;
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchOneInstructor = createAsyncThunk(
  "singleInstructor/fetchOne",
  async (id, { rejectWithValue }) => {
    console.log("this is id:", id);
    try {
      const response = await fetch(`${base_Api}/instructor-detail?id=${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log('isntructor data:', data);
      if (!response.ok) {
        throw new Error(data.message || "Unable to get instructor");
      }
      return data?.data; // assuming the API returns the user object in data.data
    } catch (error) {
      return rejectWithValue(error.message || "Failed to get instructor");
    }
  },
);
