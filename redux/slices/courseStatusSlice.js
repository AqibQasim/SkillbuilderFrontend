import { createSlice } from "@reduxjs/toolkit";
import {
  declineCourse,
  approveCourse,
  suspendCourse,
} from "../thunks/courseStatusThunk";

const initialState = {
  statusData: {
    course_id: null,
    // Video Quality, Inappropriate Language, Discriminations, Course Curriculum,
    reason: "",
    // declined, suspended, approved
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
      })
      .addCase(approveCourse.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(approveCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.successMessage =
          action.payload.message || "Course approved successfully";
      })
      .addCase(approveCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to approve course";
        state.successMessage = null;
      })
      .addCase(suspendCourse.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(suspendCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.successMessage =
          action.payload.message || "Course suspended successfully";
      })
      .addCase(suspendCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to suspend course";
        state.successMessage = null;
      });
  },
});

const statusConstants = {
  DECLINED: "declined",
  SUSPENDED: "suspended",
  APPROVED: "approved",
};

export const {
  resetState,
  setReason,
  setCourseId,
  setCourseStatusModuleAndLectures,
} = courseStatusSlice.actions;

export default courseStatusSlice.reducer;
export { statusConstants };
