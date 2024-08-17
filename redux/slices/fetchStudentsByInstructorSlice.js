import { createSlice } from "@reduxjs/toolkit";
import { fetchStudentsByInstructor } from "../thunks/fetchStudentsByInstructorthunk";

const initialState = {
  students: [],
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
        state.students = action.payload.data;
      })
      .addCase(fetchStudentsByInstructor.rejected, (state, action) => {
        state.status = "failed";
        state.students = [];
        state.error = action.payload;
      });
  },
});

export default fetchStudentsByInstructorSlice.reducer;
