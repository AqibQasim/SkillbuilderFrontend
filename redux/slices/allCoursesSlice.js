import { createSlice } from "@reduxjs/toolkit";
import { fetchCourses } from "../thunks/allCoursesThunk";

const courseSlice = createSlice({
  name: "courses",
  initialState: {
    courses: [],
    pendingCourses: [],
    declinedCourses: [],
    approvedCourses: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.courses = action.payload.courses;
        state.pendingCourses = action.payload.pendingCourses;
        state.declinedCourses = action.payload.declinedCourses;
        state.approvedCourses = action.payload.approvedCourses;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default courseSlice.reducer;
