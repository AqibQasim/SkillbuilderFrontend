import { fetchOneCourse } from "../thunks/coursesThunks";
import { createSlice } from "@reduxjs/toolkit";

const singleCourseSlice = createSlice({
  name: "singleCourse",
  initialState: {
    data: {},
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOneCourse.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchOneCourse.fulfilled, (state, action) => {
        console.log("action:", action);
        state.data = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchOneCourse.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export default singleCourseSlice.reducer;
