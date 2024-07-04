import { createAsyncThunk } from "@reduxjs/toolkit";

export const editProfile = createAsyncThunk(
  "profile/edit",
  async function (profileData) {
    console.log("data from Thunk", profileData);

    return profileData;
  },
);
