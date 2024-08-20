import { createSlice } from "@reduxjs/toolkit";
import {
  createInstructorAndUploadIntroVideo,
  uploadIntroVideo,
} from "../thunks/instructorIntroVideoThunk";

const instructorIntroVideoSlice = createSlice({
  name: "instructorIntroVideo",
  initialState: {
    successMessage: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(uploadIntroVideo.pending, (state) => {
        state.loading = true;
        state.successMessage = null;
        state.error = null;
      })
      .addCase(uploadIntroVideo.fulfilled, (state, action) => {
        console.log("Payloaaaad :", action.payload);
        state.loading = false;
        state.successMessage = action.payload.message;
        state.error = null;
      })
      .addCase(uploadIntroVideo.rejected, (state, action) => {
        state.loading = false;
        state.successMessage = null;
        state.error = action.payload.message || "Failed to upload intro video";
      })
      .addCase(createInstructorAndUploadIntroVideo.pending, (state) => {
        state.loading = true;
        state.successMessage = null;
        state.error = null;
      })
      .addCase(
        createInstructorAndUploadIntroVideo.fulfilled,
        (state, action) => {
          state.loading = false;
          state.successMessage = action.payload.message;
          state.error = null;
        },
      )
      .addCase(
        createInstructorAndUploadIntroVideo.rejected,
        (state, action) => {
          state.loading = false;
          state.successMessage = null;
          state.error = action.payload.message;
        },
      );
  },
});

export default instructorIntroVideoSlice.reducer;
