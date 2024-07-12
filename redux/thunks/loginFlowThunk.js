import { createAsyncThunk } from "@reduxjs/toolkit";

export const sendOtp = createAsyncThunk(
  "loginFlow/sendOtp",
  async (email, { rejectWithValue }) => {
    try {
      // Generate a 6-digit OTP
      const otp = Math.floor(100000 + Math.random() * 900000);

      const dataToSend = {
        email,
        content: otp,
        subject: "OTP for sending the email",
      };

      // Make the API request to send the email
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/send-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        },
      );

      const data = await response.text();

      if (!response.ok) {
        throw new Error(data.message || "Could not send the OTP");
      }

      const otpArray = otp.toString().split("");

      return {
        message: data.message,
        otpArray,
        userId: 2
      };
    } catch (error) {
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

      // Compare the OTP arrays
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
