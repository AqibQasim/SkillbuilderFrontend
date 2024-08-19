import { createAsyncThunk } from "@reduxjs/toolkit";

export const createCourse = createAsyncThunk(
  "courses/createCourse",
  async (courseData, { rejectWithValue }) => {
    console.log("[Course data in thunk]:", courseData);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/create-course`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(courseData),
        },
      );
      console.log("[this is course data]:", courseData);

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
