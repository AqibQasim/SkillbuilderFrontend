import { createSlice } from "@reduxjs/toolkit";
import { fetchpurchasecourses } from "../thunks/purchasecoursesThunk";

const purchasecourseSlice = createSlice({
  name: "purchasecourses",
  initialState: {
    data: [],
    status: "idle",
    error: null,
    message: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchpurchasecourses.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchpurchasecourses.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchpurchasecourses.rejected, (state, action) => {
        state.status = "failed";
        // state.error = action.payload;
      });
  },
});

export default purchasecourseSlice.reducer;
