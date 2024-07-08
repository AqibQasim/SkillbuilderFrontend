import { fetchOneCourse } from "../thunks/coursesThunks";
import { createSlice } from "@reduxjs/toolkit";
import { fetchOneInstructor } from "../thunks/instructorThunk";


const singleCourseSlice = createSlice({
  name: "instructor",
  initialState: {
    instructorData: {},
    isInstLoading: false,
    InstructorError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOneInstructor.pending, (state) => {    
        state.isInstLoading = true;
        state.InstructorError = null;
      })
      .addCase(fetchOneInstructor.fulfilled, (state, action) => {
        console.log("action:", action);
        state.instructorData = action.payload;
        state.isInstLoading = false;
      })
      .addCase(fetchOneInstructor.rejected, (state, action) => {
        state.InstructorError = action.payload;
        state.isInstLoading = false;
      });
  },
});

export default singleCourseSlice.reducer;