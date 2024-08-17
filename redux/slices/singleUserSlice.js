import { createSlice } from "@reduxjs/toolkit";
import { fetchOneUser } from "../thunks/userInfoThunk";

const singleUserSlice = createSlice({
  name: "user",
  initialState: {
    userData: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOneUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOneUser.fulfilled, (state, action) => {
        console.log("action:", action);
        state.userData = action.payload;
        state.loading = false;
      })
      .addCase(fetchOneUser.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default singleUserSlice.reducer;
