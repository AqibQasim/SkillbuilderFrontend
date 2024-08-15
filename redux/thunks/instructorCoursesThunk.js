import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCoursesByInstructorId = createAsyncThunk(
  "courses/fetchByInstructorId",
  async (instructorId, { rejectWithValue }) => {
    console.log(instructorId);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/get-courses-inst/${instructorId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      const data = await response.json();
      console.log("data for instructor courses:", data);

      if (!response.ok) {
        throw new Error(
          data.message || "Unable to fetch courses for instructor",
        );
      }

      return data;
    } catch (error) {
      return rejectWithValue(
        error.message || "Failed to fetch courses for instructor",
      );
    }
  },
);
