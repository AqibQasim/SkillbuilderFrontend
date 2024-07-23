import { createSlice } from "@reduxjs/toolkit";
import { fetchCoursesByInstructorId } from "../thunks/instructorCoursesThunk";

const instructorCoursesSlice = createSlice({
  name: "instructorCourses",
  initialState: {
    courses: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoursesByInstructorId.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCoursesByInstructorId.fulfilled, (state, action) => {
        console.log("action:", action);
        state.courses = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCoursesByInstructorId.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export default instructorCoursesSlice.reducer;
