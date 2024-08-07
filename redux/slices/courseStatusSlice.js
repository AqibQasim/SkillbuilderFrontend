import { createSlice } from "@reduxjs/toolkit";
import { declineCourse } from "../thunks/courseStatusThunk";

const initialState = {
  statusData: {
    course_id: null,
    reason: "",
    status: "",
    status_desc: [],
  },
  successMessage: null,
  error: null,
  loading: false,
};

const courseStatusSlice = createSlice({
  name: "courseStatus",
  initialState,
  reducers: {
    resetState: (state) => initialState,
    setCourseId: (state, action) => {
      state.statusData.course_id = action.payload;
    },
    setReason: (state, action) => {
      state.statusData.reason = action.payload;
    },
    setCourseStatusModuleAndLectures: (state, action) => {
      state.statusData.status_desc = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(declineCourse.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(declineCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.successMessage =
          action.payload.message || "Course declined successfully";
      })
      .addCase(declineCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to decline course";
        state.successMessage = null;
      });
  },
});

export const {
  resetState,
  setReason,
  setCourseId,
  setCourseStatusModuleAndLectures,
} = courseStatusSlice.actions;

export default courseStatusSlice.reducer;
