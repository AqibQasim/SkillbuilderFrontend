import { createSlice } from "@reduxjs/toolkit";
import { compareOtp, sendOtp } from "../thunks/loginFlowThunk";

const initialState = {
  error: null,
  loading: false,
  email: "Test@example.com",
  otp: ["", "", "", "", "", ""],
  index: 2,
  headings: ["forgot password", "enter code", "reset password"],
  paragraphs: [
    "We’ll email you a link so you can reset your password.",
    "Enter the code that we sent to your email and reset your password.",
    "Set a strong password.",
  ],
};

const loginFlowSlice = createSlice({
  name: "loginFlow",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
      if (state.index === 1) state.index = 2;
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

export const { setEmail, setIndex, resetState } = loginFlowSlice.actions;
export default loginFlowSlice.reducer;
