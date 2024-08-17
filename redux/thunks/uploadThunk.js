const base_Api = process.env.NEXT_PUBLIC_BASE_API;
import { createAsyncThunk } from "@reduxjs/toolkit";


export const uploadVideo = createAsyncThunk(
    "upload/Instructor",
    async (id, { rejectWithValue }) => {

        const formData = new FormData();
        console.log("this is id:",id);
        try {
            formData.append("instructorId", id); 
            formData.append("video", file);
            const response = await fetch(`${base_Api}/upload`, {
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
    }
);