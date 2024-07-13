import { createSlice } from "@reduxjs/toolkit";
import { compareOtp, sendOtp } from "../thunks/loginFlowThunk";

const initialState = {
  userId: null,
  error: null,
  loading: false,
  email: "",
  otp: ["", "", "", "", "", ""],
  index: 0,
  headings: [
    "forgot password",
    "enter code",
    "reset password",
    "verification successful",
  ],
  paragraphs: [
    "We’ll email you a link so you can reset your password.",
    "Enter the code that we sent to your email and reset your password.",
    "Set a strong password.",
    "Your Password has been reset click on continue to get started",
  ],
};

const loginFlowSlice = createSlice({
  name: "loginFlow",
  initialState,
  reducers: {
    clearEmail: (state) => {
      state.email = "";
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setIndex: (state, action) => {
      state.index = action.payload;
    },
    resetState: (state) => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendOtp.fulfilled, (state, action) => {
        console.log("Payload", action.payload);
        state.loading = false;
        state.successMessage = action.payload.message;
        state.error = null;
        state.otp = action.payload.otpArray;
        state.userId = action.payload.userId;
        state.index += 1;
      })
      .addCase(sendOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(compareOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(compareOtp.fulfilled, (state) => {
        state.loading = false;
        state.successMessage = "OTP compared successfully";
        state.error = null;
        state.index += 1;
      })
      .addCase(compareOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Invalid OTP";
      });
  },
});

export const { setEmail, setIndex, clearEmail, resetState, index } =
  loginFlowSlice.actions;
export default loginFlowSlice.reducer;
