import { createAsyncThunk } from "@reduxjs/toolkit";

export const editProfile = createAsyncThunk(
  "profile/edit",
  async function (profileData) {
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

      // For testing
      //   await new Promise((res) => setTimeout(res, 6000));

      const data = await response.json();
      console.log(data);

      // TODO: Uncomment to return actual data once fixed
      // return data;

      // Temporary placeholder for adding additional functionalities
      return profileData;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to update profile");
    }

    // return profileData;
  },
);
