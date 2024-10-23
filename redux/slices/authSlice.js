import { createSlice } from "@reduxjs/toolkit";
import { loginUser, signupUser, signupWithGoogle } from "../thunks/auththunks";
import { editProfile } from "../thunks/profilethunk";
import { filterObject } from "@/utils/filterObject";

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
    clearError: (state) => {
      state.error = null;
    },
    setSuccess: (state, action) => {
      state.successMessage = action.payload;
    },
    logout(state) {
      state.user = null;
      localStorage.removeItem("auth");
    },
    loginGoogleUserInStorage(state, action) {
      console.log("action payload user id h ye : ", action.payload.user.id);
      state.user = action.payload.user.id;
      state.isLoading = false;
      state.error = null;
      // Save to localStorage
      localStorage.setItem("auth", JSON.stringify(state.user));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        console.log("action payload h ye : ", action.payload.user.id);
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
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
    // .addCase(signupWithGoogle.pending, (state) => {
    //   state.isLoading = true;
    // })
    // .addCase(signupWithGoogle.fulfilled, (state, action) => {
    //   state.user = action.payload.user;
    //   state.isLoading = false;
    //   state.error = null;
    // })
    // .addCase(signupWithGoogle.rejected, (state, action) => {
    //   state.error = action.payload;
    //   state.isLoading = false;
    // });
  },
});
export const { loginGoogleUserInStorage, logout, setSuccess, clearError } =
  authSlice.actions;
export default authSlice.reducer;
