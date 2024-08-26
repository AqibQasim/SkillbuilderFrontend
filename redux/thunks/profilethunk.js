import { createAsyncThunk } from "@reduxjs/toolkit";

export const editProfile = createAsyncThunk(
  "profile/edit",
  async function (profileData, { rejectWithValue }) {
    console.log("editProfile thunk running");
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

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to update profile");
      }

      console.log("DATA from Profile thunk", data);

      return data;
    } catch (error) {
      if(error.message == "Failed to fetch"){
        return rejectWithValue("Please Check your Internet connection")
      }
      console.log(error.message);
      return rejectWithValue(error.message || "Failed to update profile");
    }
  },
);
