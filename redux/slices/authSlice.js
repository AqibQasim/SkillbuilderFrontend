import { createSlice } from "@reduxjs/toolkit";
import { loginUser, signupUser, signupWithGoogle } from "../thunks/auththunks";
const initialState = {
  user: null,
  error: null,
  isLoading: false,
  successMessage: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSuccess: (state, action) => {
      state.successMessage = action.payload;
    },
    logout(state) {
      state.user = null;
      state.isLoading = false;
      // Remove from localStorage
      localStorage.removeItem("auth");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        console.log("action payload h ye : ",action.payload.user.id);
        state.user = action.payload.user.id;
        state.isLoading = false;
        state.error = null;
        // Save to localStorage
        localStorage.setItem("auth", JSON.stringify(state.user));
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
        // Save to localStorage
        localStorage.setItem("auth", JSON.stringify(state.user));
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
        // Save to localStorage
        localStorage.setItem("auth", JSON.stringify(state.user));
      })
      .addCase(signupWithGoogle.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});
export const { logout, setSuccess } = authSlice.actions;
export default authSlice.reducer;