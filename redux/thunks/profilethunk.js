import { createAsyncThunk } from "@reduxjs/toolkit";

export const editProfile = createAsyncThunk(
  "profile/edit",
  async function (profileData, { rejectWithValue }) {
    console.log("running");
    console.log("userThunk", profileData);

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
      console.log("DATA from Profile thunk", data);

      return data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message || "Failed to update profile");
    }

    // return profileData;
  },
);
