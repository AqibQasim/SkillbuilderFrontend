// courseUploadSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { uploadCourseContent } from '../thunks/uploadCourseThunk';// Import the thunk

// Slice for managing course upload state
const courseUploadSlice = createSlice({
  name: 'courseUpload',  // Slice name
  initialState: {
    isLoading: false,
    success: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(uploadCourseContent.pending, (state) => {
        state.isLoading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(uploadCourseContent.fulfilled, (state) => {
        state.isLoading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(uploadCourseContent.rejected, (state, action) => {
        state.isLoading = false;
        state.success = false;
        state.error = action.payload;
      });
  },
});

// Export the reducer to add to the store
export const courseUploadReducer = courseUploadSlice.reducer;
