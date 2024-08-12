// thunks/videoUploadThunk.js

import { createAsyncThunk } from "@reduxjs/toolkit";

export const uploadVideo = createAsyncThunk(
  "videoUpload/uploadVideo",
  async (file, thunkAPI) => {
    console.log("processing");
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
      console.log(data);
      return data;
    } catch (error) {
      console.log("Error message: ", error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
