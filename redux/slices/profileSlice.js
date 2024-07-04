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
    remove: (state) => {
      state.id = null;
      state.first_name = "";
      state.last_name = "";
      state.email = "";
      state.password = "";
      state.profession = "";
      state.location = "";
      state.facebook_profile = "";
      state.twitter_profile = "";
      state.linkedin_profile = "";
      state.error = "";
      state.status = "idle";
      state.successMessage = "Profile removed";
    },
    add: (state, action) => {
      Object.assign(state, action.payload);
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
        state.error = null;
        Object.assign(state, action.payload);
      })
      .addCase(editProfile.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export const { add, remove } = profileSlice.actions;
export default profileSlice.reducer;
