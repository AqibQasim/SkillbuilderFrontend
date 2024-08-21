const base_Api = process.env.NEXT_PUBLIC_BASE_API;

import { createAsyncThunk } from "@reduxjs/toolkit";

export const studentEnrolledCoursesForOneInstructor = createAsyncThunk(
  "studentEnrolledCoursesForOneInstructor/studentEnrolledCoursesForOneInstructor",
  async ({ instructorId, studentId }, { rejectWithValue }) => {
    console.log("instructor id: ", instructorId);
    console.log("student id: ", studentId);
    try {
      const response = await fetch(
        `${base_Api}/student-enrolled-courses-on-instructor?instructor_id=${instructorId}&student_id=${studentId}`,
      );
      if (!response.ok) {
        throw new Error("Failed to fetch student enrolled courses");
      }
      const data = await response.json();
      console.log("Student enrolled courses for one instructor ", data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
