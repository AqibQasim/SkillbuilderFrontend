import { createAsyncThunk } from "@reduxjs/toolkit";

export const declineCourse = createAsyncThunk(
  "courseStatus/declineCourse",
  async (dataToSend, { rejectWithValue }) => {
    try {
      const state = getState();
      const statusDes = state.courseStatus.statusData.status_desc;

      // Validate all entries before dispatching
      const isValid = statusDes.every(
        (item) => item.module_id && item.content_id && item.description.trim(),
      );

      console.log("is valid", isValid);

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
