import { createSlice } from "@reduxjs/toolkit";
import { fetchLiveCoursesByInstructorId } from "../thunks/instructorLiveCoursesThunk";

const instructorLiveCoursesSlice = createSlice({
  name: "instructorLiveCourses",
  initialState: {
    liveCourses: [],
    pendingCourses: [],
    declinedCourses: [],
    approvedCourses: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLiveCoursesByInstructorId.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchLiveCoursesByInstructorId.fulfilled, (state, action) => {
        console.log("data when fulfilled:", action.payload);
        state.liveCourses = action.payload.courses;
        state.pendingCourses = action.payload.pendingCourses;
        state.declinedCourses = action.payload.declinedCourses;
        state.approvedCourses = action.payload.approvedCourses;
        state.isLoading = false;
      })
      .addCase(fetchLiveCoursesByInstructorId.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export default instructorLiveCoursesSlice.reducer;
