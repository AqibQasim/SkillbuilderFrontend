import { filterObject } from "@/utils/filterObject";
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
  successMessage: null,
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
      localStorage.removeItem("profile");
    },
    add: (state, action) => {
      Object.assign(state, action.payload);
    },
    clearSuccessMessage: (state) => {
      state.successMessage = null;
    },
    clearErrorMessage: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(editProfile.pending, (state) => {
        console.log("editProfile.pending");
        state.status = "loading";
        state.successMessage = null;
      })
      .addCase(editProfile.fulfilled, (state, action) => {
        console.log("editProfile.fulfilled", action.payload);
        let dataToSet;
        if (action.payload) dataToSet = filterObject(action.payload.data);
        state.status = "idle";
        state.successMessage = "Profile updated successfully";
        state.error = null;
        Object.assign(state, dataToSet);
        localStorage.setItem("profile", JSON.stringify(state));
      })
      .addCase(editProfile.rejected, (state, action) => {
        console.log("editProfile.rejected", action.error.message);
        state.status = "error";
        state.successMessage = null;
        state.error = action.payload || action.error.message;
      });
  },
});

export const { add, remove, clearSuccessMessage, clearErrorMessage } =
  profileSlice.actions;
export default profileSlice.reducer;
