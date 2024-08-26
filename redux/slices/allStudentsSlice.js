import { createSlice } from "@reduxjs/toolkit";
import { fetchStudents } from "../thunks/allstudentsThunk";

const studentsSlice = createSlice({
  name: "students",
  initialState: {
    students: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        console.log("payload here in slice", action.payload);
        state.status = "succeeded";
        state.students = action.payload;
        state.error = null;
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default studentsSlice.reducer;
