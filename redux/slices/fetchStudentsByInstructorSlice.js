import { createSlice } from "@reduxjs/toolkit";
import { fetchStudentsByInstructor } from "../thunks/fetchStudentsByInstructorthunk";

const initialState = {
  students: [],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const fetchStudentsByInstructorSlice = createSlice({
  name: "students",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudentsByInstructor.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchStudentsByInstructor.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.students = action.payload;
      })
      .addCase(fetchStudentsByInstructor.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default fetchStudentsByInstructorSlice.reducer;
