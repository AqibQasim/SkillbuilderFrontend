const base_Api = process.env.NEXT_PUBLIC_BASE_API;
import { createAsyncThunk } from "@reduxjs/toolkit";

export const uploadVideo = createAsyncThunk(
  "courseVideoUpload/Course",
  async ({ courseId, selectedVideo }, { rejectWithValue }) => {
    const formData = new FormData();
    console.log("Upload intro video for this courseId", courseId);

    try {
      formData.append("courseId", courseId);
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

      console.log("course intro upload API response on success", data);
      return data?.message;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to post the video.");
    }
  },
);
