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

export const approveCourse = createAsyncThunk(
  "courseStatus/approveCourse",
  async (dataToSend, { rejectWithValue }) => {
    console.log("data in approve thunk", dataToSend);
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
        throw new Error("Failed to approve course");
      }

      const data = await response.json();
      console.log("returned data from the backend", data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const suspendCourse = createAsyncThunk(
  "courseStatus/suspendCourse",
  async (dataToSend, { rejectWithValue }) => {
    console.log("data in suspend thunk", dataToSend);
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
        throw new Error("Failed to suspend course");
      }

      const data = await response.json();
      console.log("returned data from the backend", data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
