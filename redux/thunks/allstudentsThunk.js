import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchStudents = createAsyncThunk(
  "students/fetchStudents",
  async (_, { rejectWithValue }) => {
    console.log("get all students");
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/get-all-students`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      const data = await response.json();
      console.log("API Response Data:", data?.data);
      if (!response.ok) {
        throw new Error(data.message || "Unable to fetch courses");
      }

      console.log(`students returned in thunk ${data}`, data);

      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to load students");
    }
  },
);
