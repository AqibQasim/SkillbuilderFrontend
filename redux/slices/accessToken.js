// src/store/authSlice.js

import { createSlice } from '@reduxjs/toolkit';
import { fetchAccessToken } from '../thunks/ytAccessThunk';

const initialState = {
  accessToken: null,
};

const authSlice = createSlice({
  name: 'ytAuth',
  initialState,
  reducers: {
    setAccessToken(state, action) {
      state.accessToken = action.payload;
      // Optionally store the token in localStorage for persistence
      if (typeof window !== 'undefined') {
        localStorage.setItem('accessToken', action.payload);
      }
    },
    clearAccessToken(state) {
      state.accessToken = null;
      if (typeof window !== 'undefined') {
        localStorage.removeItem('accessToken');
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccessToken.fulfilled, (state, action) => {
        state.accessToken = action.payload;
        state.error = null;
      })
      .addCase(fetchAccessToken.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { setAccessToken, clearAccessToken } = authSlice.actions;

export default authSlice.reducer;
