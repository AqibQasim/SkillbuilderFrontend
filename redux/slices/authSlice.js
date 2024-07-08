import { createSlice } from "@reduxjs/toolkit";
import { loginUser, signupUser, signupWithGoogle } from "../thunks/auththunks";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    error: null,
    isLoading: false,
    successMessage: null,
  },
  reducers: {
    setSuccess: (state, action) => {
      state.successMessage = action.payload;
    },
    logout(state) {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.userId;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(signupUser.pending, (state) => {
        state.isLoading = true;
        state.successMessage = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoading = false;
        state.error = null;
        state.successMessage = action.payload;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(signupWithGoogle.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signupWithGoogle.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(signupWithGoogle.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { logout, setSuccess } = authSlice.actions;
export default authSlice.reducer;
