import { createSlice } from "@reduxjs/toolkit";
import { createInstructor } from "../thunks/createInstructorthunk";

const initialState = {
  instructor: null,
  loading: false,
  error: null,
};

const instructorSlice = createSlice({
  name: "instructor",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createInstructor.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createInstructor.fulfilled, (state, action) => {
        state.loading = false;
        state.instructor = action.payload.message;
      })
      .addCase(createInstructor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export default instructorSlice.reducer;
