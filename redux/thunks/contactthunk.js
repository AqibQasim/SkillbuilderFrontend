import { createAsyncThunk } from "@reduxjs/toolkit";

export const submitContactForm = createAsyncThunk(
  "contact/submit",
  async (contactData, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/contact-us`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contactData),
        }
      );
      const data = await response.json();
      console.log("data:", data);
      if (!response.ok) {
        throw new Error(data.message || "Unable to send message");
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to send message");
    }
  }
);
