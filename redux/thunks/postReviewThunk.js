import { createAsyncThunk } from "@reduxjs/toolkit";

// Thunk to post the review
export const postReview = createAsyncThunk(
  "review/postReview",
  async (reviewData, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/post-review`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(reviewData),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to submit review");
      }

      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
