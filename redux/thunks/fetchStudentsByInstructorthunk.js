import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchStudentsByInstructor = createAsyncThunk(
  "students/fetchStudentsByInstructor",
  async (instructorId, { rejectWithValue }) => {
    console.log(instructorId);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/get-students-by-inst?${instructorId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      const data = await response.json();
      console.log("data for instructor students:", data);

      if (!response.ok) {
        throw new Error(
          data.message || "Unable to fetch students for instructor",
        );
      }

      return data;
    } catch (error) {
      return rejectWithValue(
        error.message || "Failed to fetch students for instructor",
      );
    }
  },
);
