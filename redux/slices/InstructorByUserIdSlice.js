import { createSlice } from "@reduxjs/toolkit";
import { fetchInstructorByUserId } from "../thunks/InstructorByUserIdThunk";

const InstructorByUserIdSlice = createSlice({
  name: "user",
  initialState: {
    instructorByUserId: {},
    loading: false,
    error: null,
    successMessage: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInstructorByUserId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchInstructorByUserId.fulfilled, (state, action) => {
        console.log("action:", action);
        state.instructorByUserId = action.payload;
        state.loading = false;
      })
      .addCase(fetchInstructorByUserId.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default InstructorByUserIdSlice.reducer;
