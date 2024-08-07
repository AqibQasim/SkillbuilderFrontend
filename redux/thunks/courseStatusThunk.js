import { createAsyncThunk } from "@reduxjs/toolkit";

export const declineCourse = createAsyncThunk(
  "courseStatus/declineCourse",
  async (dataToSend, { rejectWithValue }) => {
    console.log("data in thunk to send", dataToSend);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/set-course-status`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        },
      );

      console.log("is response ok?", response.ok);

      if (!response.ok) {
        throw new Error("Failed to decline course");
      }

      const data = await response.json();
      console.log("returned data from the backend", data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
