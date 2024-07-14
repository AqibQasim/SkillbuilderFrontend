import { createSlice } from "@reduxjs/toolkit";
import {
  compareOtp,
  sendOtp,
  resendOtp,
  resetPassword,
} from "../thunks/loginFlowThunk";

const initialState = {
  userId: null,
  error: null,
  loading: false,
  email: "",
  otp: ["", "", "", "", "", ""],
  headings: [
    "forgot password",
    "enter code",
    "reset password",
    "verification successful",
  ],
  index: 0,
  resendCodeTimer: 0,
  resendCodeTimeBase: 60,
  successMessage: null,
};

// Function to get dynamic paragraphs
const getParagraphs = (email) => [
  "We’ll email you a link so you can reset your password.",
  `Enter the code that we sent to your email ${email} and reset your password.`,
  "Set a strong password.",
  "Your Password has been reset click on continue to get started",
];

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
    setResendCodeTimer: (state) => {
      state.resendCodeTimer = state.resendCodeTimeBase;
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
        state.successMessage = null;
      })
      .addCase(sendOtp.fulfilled, (state, action) => {
        console.log("Payload", action.payload);
        state.loading = false;
        state.successMessage = action.payload.message;
        state.error = null;
        state.otp = action.payload.otpArray;
        state.userId = action.payload.userId;
        if (!action.payload.isResend) {
          console.log("Not a resend thus increasing the index by 1");
          state.index += 1;
        }
      })
      .addCase(sendOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(resendOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(resendOtp.fulfilled, (state, action) => {
        state.loading = false;
        state.resendCodeTimer = state.resendCodeTimeBase;
        state.successMessage = action.payload.message;
        state.error = null;
      })
      .addCase(resendOtp.rejected, (state, action) => {
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
      })
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = action.payload.message;
        state.index += 1;
        state.error = null;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  setEmail,
  setIndex,
  clearEmail,
  resetState,
  setResendCodeTimer,
} = loginFlowSlice.actions;
export default loginFlowSlice.reducer;
