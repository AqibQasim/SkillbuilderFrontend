import { fetchOneCourse } from "../thunks/coursesThunks";
import { createSlice } from "@reduxjs/toolkit";
import { fetchOneUser } from '../thunks/userInfoThunk';


const singleUserSlice = createSlice({
  name: "user",
  initialState: {
    userData: {},
    isUserLoading: false,
    userFetchError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOneUser.pending, (state) => {    
        state.isUserLoading = true;
        state.userFetchError = null;
      })
      .addCase(fetchOneUser.fulfilled, (state, action) => {
        console.log("action:", action);
        state.userData = action.payload;
        state.isUserLoading = false;
      })
      .addCase(fetchOneUser.rejected, (state, action) => {
        state.userFetchError = action.payload;
        state.isUserLoading = false;
      });
  },
});

export default singleUserSlice.reducer;