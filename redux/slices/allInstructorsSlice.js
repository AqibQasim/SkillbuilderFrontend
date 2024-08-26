import { createSlice } from "@reduxjs/toolkit";
import { fetchAllInstructors } from "../thunks/allInstructorsThunk";

const allInstructorsSlice = createSlice({
  name: "students",
  initialState: {
    instructors: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllInstructors.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchAllInstructors.fulfilled, (state, action) => {
        console.log("payload here in all instructors", action.payload);
        state.status = "succeeded";
        state.instructors = action.payload;
        state.error = null;
      })
      .addCase(fetchAllInstructors.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default allInstructorsSlice.reducer;
