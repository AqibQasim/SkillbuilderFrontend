import { createSlice } from "@reduxjs/toolkit";
import { uploadVideo } from "../thunks/instructorvideothunk";

const videoUploadSlice = createSlice({
  name: "courseVideoUpload",
  initialState: {
    loading: false,
    success: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(uploadVideo.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(uploadVideo.fulfilled, (state, action) => {
        console.log("Payloaaaad :", action.payload);
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(uploadVideo.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.error.message;
      });
  },
});

export default videoUploadSlice.reducer;