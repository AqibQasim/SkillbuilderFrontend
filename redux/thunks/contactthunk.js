import { createAsyncThunk } from "@reduxjs/toolkit";
const base_Api = "http://localhost:4000";

export const submitContactForm = createAsyncThunk(
  "contact/submit",
  async (contactData, { rejectWithValue }) => {
    try {
      const response = await fetch(`${base_Api}/contact-us`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });
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
