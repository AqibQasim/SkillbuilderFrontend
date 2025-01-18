import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllLiveSessionCourses = createAsyncThunk(
  "liveSessionCourses/getAllLiveSessionCourses",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/get-live-session-course`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Unable to fetch live session courses");
      }

      return {
        liveSessionCourses: data?.data,
      };
    } catch (error) {
      return rejectWithValue(
        error.message || "Failed to load live session courses",
      );
    }
  },
);
