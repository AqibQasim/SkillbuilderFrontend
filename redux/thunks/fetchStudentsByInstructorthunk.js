import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchStudentsByInstructor = createAsyncThunk(
  "students/fetchStudentsByInstructor",
  async (instructorId) => {
    const response = await fetch(
      `http://localhost:4000/get-students-by-inst?instructor_id=${instructorId}`,
    );
    if (!response.ok) {
      throw new Error("Failed to fetch students");
    }
    const data = await response.json();
    return data;
  },
);
