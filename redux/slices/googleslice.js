// src/redux/slices/authSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { googleSignIn, handleGoogleCallback } from "../thunks/googlethunk";

const authSlice = createSlice({
  name: "authgoogle",
  initialState: {
    user: null,
    status: "idle",
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(googleSignIn.pending, (state) => {
        state.status = "loading";
      })
      .addCase(googleSignIn.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(googleSignIn.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(handleGoogleCallback.pending, (state) => {
        state.status = "loading";
      })
      .addCase(handleGoogleCallback.fulfilled, (state, action) => {
        state.status = "succeeded";
        if (action.payload.status) {
          state.user = action.payload.data;
        } else {
          state.error = action.payload.message;
        }
      })
      .addCase(handleGoogleCallback.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
