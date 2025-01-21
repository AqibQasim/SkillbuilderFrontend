import { createSlice } from "@reduxjs/toolkit";
import { getOneLiveSessionCourse } from "../thunks/liveSessionCourseThunk";

const liveSessionSingleCourseSlice = createSlice({
  name: "liveSessionSingleCourse",
  initialState: {
    data: {},
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOneLiveSessionCourse.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getOneLiveSessionCourse.fulfilled, (state, action) => {
        console.log("action:", action);
        state.data = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getOneLiveSessionCourse.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export default liveSessionSingleCourseSlice.reducer;
