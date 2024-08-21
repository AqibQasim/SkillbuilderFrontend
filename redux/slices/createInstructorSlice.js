import { createSlice } from "@reduxjs/toolkit";
import { createInstructor } from "../thunks/createInstructorthunk";

const initialState = {
  instructorDetails: {
    user_id: null,
    experience: [""],
    specialization: "",
    qualifications: [{ percentage: "", degree: "" }],
    skills: [{ percentage: "", title: "" }],
    video_url: "",
  },
  index: 0,
  // index: 1,
  successMessage: null,
  loading: false,
  error: null,
};

const instructorSlice = createSlice({
  name: "instructor",
  initialState,
  reducers: {
    resetErrorAndLoader: (state) => {
      state.error = null;
      state.successMessage = null;
      state.loading = null;
    },
    updateInstructorDetails: (state, action) => {
      state.instructorDetails = {
        ...state.instructorDetails,
        ...action.payload,
      };
      state.index += 1;
    },
    incrementIndex: (state) => {
      state.index += 1;
    },
    decrementIndex: (state) => {
      state.index -= 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createInstructor.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createInstructor.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = action.payload.message;
        state.error = null;
      })
      .addCase(createInstructor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export const {
  updateInstructorDetails,
  resetErrorAndLoader,
  incrementIndex,
  decrementIndex,
} = instructorSlice.actions;
export default instructorSlice.reducer;
