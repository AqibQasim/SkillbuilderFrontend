import { createAsyncThunk } from "@reduxjs/toolkit";

export const editProfile = createAsyncThunk(
  "profile/edit",
  async function (profileData) {},
);
