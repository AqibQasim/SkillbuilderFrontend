// thunks/videoUploadThunk.js

import { createAsyncThunk } from "@reduxjs/toolkit";

export const uploadVideo = createAsyncThunk(
  "videoUpload/uploadVideo",
  async (file, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append("video", file);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/upload`,
        {
          method: "POST",
          body: formData,
        },
      );

      if (!response.ok) {
        throw new Error("Failed to upload video");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);