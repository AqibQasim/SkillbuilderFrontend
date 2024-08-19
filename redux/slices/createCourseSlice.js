import { createSlice } from "@reduxjs/toolkit";
import { createInstructor } from "../thunks/createInstructorthunk";
import { createCourse } from "../thunks/createCourseThunk";

const initialState = {
  courseDetails: {
    instructor_id: "",
    title: "",
    category: "",
    learning_outcomes: "",
    modulesCount: 0,
    amount: 0,
    charges: 0,
  },
  successMessage: null,
  loading: false,
  error: null,
};

const createCourseSlice = createSlice({
  name: "instructor",
  initialState,
  reducers: {
    setCourseDetails: (state, action) => {
      state.courseDetails = {
        ...state.courseDetails,
        ...action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCourse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createCourse.fulfilled, (state, action) => {
        console.log("payload on createCourse fulfilled case", action.payload);
        state.loading = false;
        // state.courseDetails = action.payload;
        state.error = null;
      })
      .addCase(createCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export const { setCourseDetails } = createCourseSlice.actions;
export default createCourseSlice.reducer;
