import { createAsyncThunk } from "@reduxjs/toolkit";

export const createInstructor = createAsyncThunk(
  "instructor/createInstructor",
  async (instructorData, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/create-instructor`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(instructorData),
        },
      );
      console.log("this is instructor data ", instructorData);

      if (!response.ok) {
        const errorData = await response.json();
        console.log("error data ", errorData);
        return rejectWithValue(errorData);
      }

      const data = await response.json();
      console.log("current data ", data);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
