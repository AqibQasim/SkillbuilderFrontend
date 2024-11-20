import { fetchNotificationStudentThunk } from "../thunks/notificationThunk";

const { createSlice } = require("@reduxjs/toolkit");


// export const createNotificationSlice = createSlice({
//   name: "notification",
//   initialState: {
//     message: null,
//     //notifications: null
//   },
//   extraReducers: (builder) =>
//     builder
//       .addCase(createNotificationThunk.fulfilled, (state, action) => {
//         state.message = action.payload;
//       })
//       .addCase(createNotificationThunk.rejected, (state, action) => {
//         state.message = action.payload;
//       })
//       .addCase(createNotificationThunk.pending, (state, action) => {
//         state.message = action.payload;
//       }),
// });

const fetchNotificationStudentSlice = createSlice({
  name: "fetchNotification",
  initialState: {
    message: null,
    notifications: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchNotificationStudentThunk.fulfilled, (state, action) => {
        state.message = action.payload;
        state.notifications= action.payload.data;
        //state.notifications= action.payload.data
      })
      .addCase(fetchNotificationStudentThunk.rejected, (state, action) => {
        state.message = action.payload;
      })
      .addCase(fetchNotificationStudentThunk.pending, (state, action) => {
        state.message = action.payload;
      }),
});

export default fetchNotificationStudentSlice.reducer;
