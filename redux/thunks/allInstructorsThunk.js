import { createAsyncThunk } from "@reduxjs/toolkit";
const base_Api = process.env.NEXT_PUBLIC_BASE_API;

export const fetchAllInstructors = createAsyncThunk(
  "allInstructors/fetchAllInstructors",
  async (_, { rejectWithValue }) => {
    console.log("running all instructors think");
    try {
      const response = await fetch(`${base_Api}/get-all-instructors`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log("instructors response  returned from backend:", data);
      if (!response.ok) {
        throw new Error(data.message || "Unable to get instructors");
      }
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to get instructors");
    }
  },
);
