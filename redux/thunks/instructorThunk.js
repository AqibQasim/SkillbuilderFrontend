const base_Api = process.env.NEXT_PUBLIC_BASE_API;
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchOneInstructor = createAsyncThunk(
    "singleInstructor/fetchOne",
    async (id, { rejectWithValue }) => {
        console.log("this is id:",id);
        try {
            const response = await fetch(`${base_Api}/instructor-detail/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                // body: JSON.stringify({ token }),
            });
            const data = await response.json();
            // console.log("API Response Data in single instructor API :", data?.data);
            if (!response.ok) {
                throw new Error(data.message || "Unable to sign up with Google");
            }
            return data?.data; // assuming the API returns the user object
        } catch (error) {
            return rejectWithValue(error.message || "Failed to sign up with Google");
        }
    }
);