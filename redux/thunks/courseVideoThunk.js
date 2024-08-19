const base_Api = process.env.NEXT_PUBLIC_BASE_API;
import { createAsyncThunk } from "@reduxjs/toolkit";

export const uploadVideo = createAsyncThunk(
  "courseVideoUpload/Course",
  async ({ userId, selectedVideo }, { rejectWithValue }) => {
    const formData = new FormData();
    console.log("Upload intro video for this courseId", userId);
    try {
      formData.append("courseId", userId);
      formData.append("video", selectedVideo);
      const response = await fetch(`${base_Api}/upload-course-intro`, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log("API Response Data API :", data?.message);
      if (!response.ok) {
        throw new Error(data.message || "Unable to post video");
      }
      return data?.message;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to post the video.");
    }
  },
);
