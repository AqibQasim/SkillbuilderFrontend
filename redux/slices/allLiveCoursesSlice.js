import { createSlice } from "@reduxjs/toolkit";
import { fetchLiveCourses } from "../thunks/allLiveCoursesThunk";
const liveCourseSlice = createSlice({
  name: "liveCourses",
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
      .addCase(fetchLiveCourses.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchLiveCourses.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.courses = action.payload.courses;
        state.pendingCourses = action.payload.pendingCourses;
        state.declinedCourses = action.payload.declinedCourses;
        state.approvedCourses = action.payload.approvedCourses;
      })
      .addCase(fetchLiveCourses.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default liveCourseSlice.reducer;
