import { createSlice } from "@reduxjs/toolkit";
import { fetchNotificationInstructorThunk } from "../thunks/notificationThunk";

const fetchNotificationInstructorSlice = createSlice({
    name: "fetchNotification",
    initialState: {
      message: null,
      notifications: null
    },
    extraReducers: (builder) =>
      builder
        .addCase(fetchNotificationInstructorThunk.fulfilled, (state, action) => {
          state.message = action.payload;
          state.notifications= action.payload.data;
        })
        .addCase(fetchNotificationInstructorThunk.rejected, (state, action) => {
          state.message = action.payload;
        })
        .addCase(fetchNotificationInstructorThunk.pending, (state, action) => {
          state.message = action.payload;
        }),
  });

  export default fetchNotificationInstructorSlice.reducer;