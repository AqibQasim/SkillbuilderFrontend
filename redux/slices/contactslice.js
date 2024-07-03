import { createSlice } from "@reduxjs/toolkit";
import { submitContactForm } from "../thunks/contactthunk";

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    isLoading: false,
    successMessage: null,
    error: null,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitContactForm.pending, (state) => {
        state.isLoading = true;
        state.successMessage = null;
        state.error = null;
      })
      .addCase(submitContactForm.fulfilled, (state, action) => {
        state.successMessage = action.payload.message;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(submitContactForm.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export default contactSlice.reducer;
