import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCourses = createAsyncThunk(
  "courses/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/all-courses`,
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

      // Filter
      const pendingCourses = data?.data?.filter(
        (course) => course.status === "pending",
      );
      const declinedCourses = data?.data?.filter(
        (course) => course.status === "declined",
      );
      const approvedCourses = data?.data?.filter(
        (course) => course.status === "approved",
      );

      console.log(`dasdasda ${data?.data}`);

      return {
        courses: data?.data,
        pendingCourses,
        declinedCourses,
        approvedCourses,
      };
    } catch (error) {
      return rejectWithValue(error.message || "Failed to load courses");
    }
  },
);
