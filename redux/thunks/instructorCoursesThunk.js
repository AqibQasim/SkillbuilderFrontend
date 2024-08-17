import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCoursesByInstructorId = createAsyncThunk(
  "instructorCourses/fetchCoursesByInstructorId",
  async (instructorId, { rejectWithValue }) => {
    console.log(instructorId);

    try {
      console.log("instructor id:", instructorId);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/get-courses-inst/${instructorId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      const data = await response.json();
      console.log("data for instructor courses:", data);

      if (!response.ok) {
        throw new Error(
          data.message || "Unable to fetch courses for instructor",
        );
      }

      // Filter
      const pendingCourses = data?.data?.filter(
        (course) => course.status === "pending",
      );
      const declinedCourses = data?.data?.filter(
        (course) => course.status === "declined",
      );
      console.log();
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
      console.log("ERROR:", error);
      return rejectWithValue(
        error.message || "Failed to fetch courses for instructor",
      );
    }
  },
);
