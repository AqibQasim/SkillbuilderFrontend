import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchLiveCoursesByInstructorId = createAsyncThunk(
  "instructorLiveCourses/fetchLiveCoursesByInstructorId",
  async (instructorId, { rejectWithValue }) => {
    console.log(instructorId);

    try {
      console.log("instructor id:", instructorId);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/get-live-session-courses/${instructorId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      const data = await response.json();
      console.log("data live courses:", data);

      if (!response.ok) {
        throw new Error(
          data.message || "Unable to fetch courses for instructor",
        );
      }

    //   console.log("data for instructor live courses:", data.data);

      // Filter
      const pendingCourses = data?.data.filter(
        (course) => course.instructor?.status === "pending"
      );
      const declinedCourses = data?.data.filter(
        (course) => course.instructor?.status === "declined"
      );
      const approvedCourses = data?.data.filter(
        (course) => course.instructor?.status === "approved"
      );

      console.log("Pending Courses:", pendingCourses);
      console.log("Declined Courses:", declinedCourses);
      console.log("Approved Courses:", approvedCourses);

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
