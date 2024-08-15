import { createSlice } from "@reduxjs/toolkit";
import { postReview } from "../thunks/postReviewThunk";
const reviewSlice = createSlice({
  name: "review",
  initialState: {
    loading: false,
    error: null,
    success: false,
  },
  reducers: {
    resetStatus: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postReview.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postReview.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(postReview.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetStatus } = reviewSlice.actions;
export default reviewSlice.reducer;
