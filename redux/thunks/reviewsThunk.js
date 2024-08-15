const base_Api = process.env.NEXT_PUBLIC_BASE_API;
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllReviews = createAsyncThunk(
    "allReviews/fetchAll",
    async (id, { rejectWithValue }) => {
        console.log("this is id:",id);
        try {
            const response = await fetch(`${base_Api}/get-all-reviews/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                // body: JSON.stringify({ token }),
            });
            const data = await response.json();
            console.log("API Response Data in fetch all reviews API :", data?.message);
            if (!response.ok) {
                throw new Error(data.message || "Unable to get data");
            }
            return data?.message; 
        } catch (error) {
            return rejectWithValue(error.message || "Failed");
        }
    }
);