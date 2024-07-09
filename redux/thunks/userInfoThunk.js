const base_Api = "http://localhost:4000";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchOneUser = createAsyncThunk(
    "singleUser/fetchOne",
    async (id, { rejectWithValue }) => {
        console.log("this is id:",id);
        try {
            const response = await fetch(`${base_Api}/user/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                // body: JSON.stringify({ token }),
            });
            const data = await response.json();
            // console.log("API Response Data in single user API :", data?.message);
            if (!response.ok) {
                throw new Error(data.message || "Unable to get data");
            }
            return data?.message; 
        } catch (error) {
            return rejectWithValue(error.message || "Failed to sign up with Google");
        }
    }
);