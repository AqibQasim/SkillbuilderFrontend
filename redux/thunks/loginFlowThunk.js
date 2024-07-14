import { createAsyncThunk } from "@reduxjs/toolkit";

export const sendOtp = createAsyncThunk(
  "loginFlow/sendOtp",
  async ({ email, signal, isResend = false }, { rejectWithValue }) => {
    try {
      const otp = Math.floor(100000 + Math.random() * 900000);

      const dataToSend = {
        email,
        content: otp,
        subject: "OTP for sending the email",
      };

      const fetchOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      };

      // Attach signal if exists
      if (signal) {
        fetchOptions.signal = signal;
      }

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/send-email`,
        fetchOptions,
      );

      const data = await response.text();

      if (!response.ok) {
        throw new Error(data.message || "Could not send the OTP");
      }

      const otpArray = otp.toString().split("");

      return {
        message: data.message,
        otpArray,
        userId: 2,
        isResend,
      };
    } catch (error) {
      if (signal && signal.aborted) {
        return rejectWithValue("Request canceled");
      }
      console.error("Error sending OTP:", error);
      return rejectWithValue(error.message || "Failed to send OTP");
    }
  },
);

export const compareOtp = createAsyncThunk(
  "loginFlow/compareOtp",
  async (otp, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const storedOtp = state.loginFlow.otp;

      const isEqual =
        otp.length === storedOtp.length &&
        otp.every((value, index) => value === storedOtp[index]);

      if (!isEqual) {
        throw new Error("Invalid OTP");
      }

      return { isEqual };
    } catch (error) {
      console.error("Error comparing OTP:", error);
      return rejectWithValue(error.message || "Failed to compare OTP");
    }
  },
);

export const resendOtp = createAsyncThunk(
  "loginFlow/resendOtp",
  async (email, { getState, dispatch, rejectWithValue }) => {
    try {
      await dispatch(sendOtp({ email, isResend: true })).unwrap();
      return { message: "The code has been sent successfully" };
    } catch (error) {
      console.error("Error resending OTP:", error);
      return rejectWithValue(error.message || "Failed to resend OTP");
    }
  },
);
