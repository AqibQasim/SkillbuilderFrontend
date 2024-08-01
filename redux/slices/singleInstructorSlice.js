import { createSlice } from "@reduxjs/toolkit";
import { fetchOneInstructor } from "../thunks/instructorThunk";

const initialState = {
  id: null,
  user_id: null,
  experience: "",
  specialization: "",
  video_url: "",
  status: "",
  created_at: "",
  skills: [],
  reviews: [],
  education: [],
  isInstLoading: false,
  InstructorError: null,
  successMessage: null,
};

const singleInstructorSlice = createSlice({
  name: "instructor",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOneInstructor.pending, (state) => {
        state.isInstLoading = true;
        state.InstructorError = null;
        state.successMessage = null;
      })
      .addCase(fetchOneInstructor.fulfilled, (state, action) => {
        Object.assign(state, action.payload);
        state.isInstLoading = false;
        state.InstructorError = null;
        state.successMessage = "Instructor fetched successfully";
      })
      .addCase(fetchOneInstructor.rejected, (state, action) => {
        state.InstructorError = action.payload || action.error.message;
        state.isInstLoading = false;
        state.successMessage = null;
      });
  },
});

export default singleInstructorSlice.reducer;
