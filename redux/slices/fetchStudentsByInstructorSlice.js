import { createSlice } from "@reduxjs/toolkit";
import { fetchStudentsByInstructor } from "../thunks/fetchStudentsByInstructorthunk";

const initialState = {
  studentsByInstructor: [],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const fetchStudentsByInstructorSlice = createSlice({
  name: "studentsByInstructor",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudentsByInstructor.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchStudentsByInstructor.fulfilled, (state, action) => {
        console.log("instructor students in slice", action.payload);
        state.status = "succeeded";
        state.studentsByInstructor = action.payload;
      })
      .addCase(fetchStudentsByInstructor.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default fetchStudentsByInstructorSlice.reducer;
