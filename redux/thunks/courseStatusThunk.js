import { createAsyncThunk } from "@reduxjs/toolkit";

export const declineCourse = createAsyncThunk(
  "courseStatus/declineCourse",
  async (dataToSend, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/set-course-status`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to decline course");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
