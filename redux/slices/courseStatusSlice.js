import { createSlice } from "@reduxjs/toolkit";
import { declineCourse } from "./thunks"; // Assuming the thunk is in the same directory

const initialState = {
  course_id: null,
  reason: "",
  status: "",
  status_desc: [
    {
      module_id: null,
      content_id: null,
      desc: "",
    },
  ],
  index: 0,
  successMessage: null,
  error: null,
  loading: false,
};

const courseStatusSlice = createSlice({
  name: "courseStatus",
  initialState,
  reducers: {
    resetState: (state) => {
      return initialState;
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
        console.log(action.payload);
      })
      .addCase(declineCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to decline course";
        state.successMessage = null;
      });
  },
});

export const { resetState } = courseStatusSlice.actions;

export default courseStatusSlice.reducer;
