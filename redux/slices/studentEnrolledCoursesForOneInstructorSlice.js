import { createSlice } from "@reduxjs/toolkit";
import { studentEnrolledCoursesForOneInstructor } from "../thunks/studentEnrolledCoursesForOneInstructorThunk";

const studentEnrolledCoursesForOneInstructorSlice = createSlice({
  name: "studentEnrolledCoursesForOneInstructor",
  initialState: {
    courses: [],
    loading: false,
    error: null,
    successMessage: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(studentEnrolledCoursesForOneInstructor.pending, (state) => {
        state.loading = false;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(
        studentEnrolledCoursesForOneInstructor.fulfilled,
        (state, action) => {
          console.log("Payload on fulfilled: ", action.payload);
          const { message, data } = action.payload;
          state.successMessage = message;
          state.courses = data;
          state.loading = true;
          state.error = null;
        },
      )
      .addCase(
        studentEnrolledCoursesForOneInstructor.rejected,
        (state, action) => {
          state.loading = false;
          state.error = action.payload.message;
        },
      );
  },
});

export default studentEnrolledCoursesForOneInstructorSlice.reducer;
