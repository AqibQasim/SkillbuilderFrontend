const base_Api = process.env.NEXT_PUBLIC_BASE_API;
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchInstructorByUserId = createAsyncThunk(
  "instructorByUserId/fetchInstructorByUserId",
  async (id, { rejectWithValue }) => {
    console.log("User id for instructor details:", id);
    try {
      const response = await fetch(`${base_Api}/get-inst-by-user/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(
        "API Response Data in User id for instructor details API :",
        data,
      );
      if (!response.ok) {
        throw new Error(data.message || "Unable to get instructor");
      }
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to instructor");
    }
  },
);
