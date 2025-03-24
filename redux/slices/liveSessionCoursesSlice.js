import { createSlice } from "@reduxjs/toolkit";
import { getAllLiveSessionCourses } from "../thunks/liveSessionCoursesThunk";

const liveSessionCoursesSlice = createSlice({
  name: "liveSessionCourses",
  initialState: {
    liveSessionCourses: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllLiveSessionCourses.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getAllLiveSessionCourses.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.liveSessionCourses = action.payload.liveSessionCourses;
      })
      .addCase(getAllLiveSessionCourses.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default liveSessionCoursesSlice.reducer;
