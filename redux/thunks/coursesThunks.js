const base_Api = process.env.NEXT_PUBLIC_BASE_API;
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchOneCourse = createAsyncThunk(
  "singleCourse/fetchOne",
  async (id, { rejectWithValue }) => {
    console.log("id in single course param", id);
    try {
      const response = await fetch(`${base_Api}/get-one-course/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Failed to fetch the course details. Please try again.",
        );
      }

      return data?.data; // assuming the API returns the course object
    } catch (error) {
      return rejectWithValue(
        error.message ||
          "An unexpected error occurred while fetching the course.",
      );
    }
  },
);
