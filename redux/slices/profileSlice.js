import { createSlice } from "@reduxjs/toolkit";
import { editProfile } from "../thunks/profilethunk";

const initialState = {
  id: null,
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  profession: "",
  location: "",
  facebook_profile: "",
  twitter_profile: "",
  linkedin_profile: "",
  error: "",
  status: "idle",
  successMessage: "",
};

const profileSlice = createSlice({
  name: "profile",
  initialState,

  reducers: {
    setProfile: (state, action) => {
      Object.assign(state, action.payload);
    },
    clearProfile: (state) => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(editProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(editProfile.fulfilled, (state, action) => {
        state.status = "idle";
        state.successMessage = "Profile updated successfully";
        Object.assign(state, action.payload);
      })
      .addCase(editProfile.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload;
      });
  },
});

export const { setProfile, clearProfile } = profileSlice.actions;
export default profileSlice.reducer;