// import { fetchAllCourses } from "../thunks/auththunks";
import { createSlice } from "@reduxjs/toolkit";
import { fetchAllReviews } from "../thunks/reviewsThunk";


const courseRevSlice = createSlice({
  name: "allReviews",
  initialState: {
    reviewsData: [],
    isReviewsLoading: false,
    reviewsError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllReviews.pending, (state) => {    
        state.isReviewsLoading = true;
        state.reviewsError = null;
      })
      .addCase(fetchAllReviews.fulfilled, (state, action) => {
        console.log("action:", action);
        state.reviewsData = action.payload;
        state.isReviewsLoading = false;
      })
      .addCase(fetchAllReviews.rejected, (state, action) => {
        state.reviewsError = action.payload;
        state.isReviewsLoading = false;
      });
  },
});

export default courseRevSlice.reducer;