import { createAsyncThunk } from "@reduxjs/toolkit";

export const editProfile = createAsyncThunk(
  "profile/edit",
  async function (profileData, { rejectWithValue }) {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/update-profile`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(profileData),
        },
      );

      if (!response.ok) {
        throw new Error(data.message || "Unable to update profile");
      }

      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to update profile");
    }

    // return profileData;
  },
);
