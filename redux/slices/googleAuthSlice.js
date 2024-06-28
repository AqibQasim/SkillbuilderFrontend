// import { createSlice } from "@reduxjs/toolkit";
// import { googleLogin } from "../thunks/auththunks";

// const authSlice = createSlice({
//   name: "auth",
//   initialState: {
//     user: null,
//     error: null,
//     isLoading: false,
//   },
//   reducers: {
//     logout(state) {
//       state.user = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(googleLogin.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(googleLogin.fulfilled, (state, action) => {
//         state.user = action.payload.user;
//         state.isLoading = false;
//         state.error = null;
//       })
//       .addCase(googleLogin.rejected, (state, action) => {
//         state.error = action.payload;
//         state.isLoading = false;
//       });
//   },
// });

// export const { logout } = authSlice.actions;
// export default authSlice.reducer;
