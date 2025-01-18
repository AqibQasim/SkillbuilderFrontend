const base_Api = process.env.NEXT_PUBLIC_BASE_API;
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getOneLiveSessionCourse = createAsyncThunk(
  "liveSessionOneCourse/getOneLiveSessionCourse",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${base_Api}/get-live-session-course/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Failed to fetch the live session course details. Please try again.",
        );
      }
      return data?.data;
    } catch (error) {
      return rejectWithValue(
        error.message ||
          "An unexpected error occurred while fetching the live session course details.",
      );
    }
  },
);
