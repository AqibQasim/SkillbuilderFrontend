import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAccessToken = createAsyncThunk(
    'ytAuth/fetchAccessToken',
    async (code, { rejectWithValue }) => {

        try {
            console.log('[CODE IN AUTHORIZATION URL]:', code);
            const response = await fetch(`/api/auth/callback?code=${code}`);
            if (!response.ok) {
                // throw new Error('Failed to fetch access token');
            }
            const data = await response.json();
            console.log("[ACCESS TOKEN IN A THUNK]:", data);
            return data.accessToken;
        } catch (error) {
            console.error("[ERROR WHILE ACCESSING THE ACCESS TOKEN]:", error);
            return rejectWithValue(error.message);
        }
    }
);
