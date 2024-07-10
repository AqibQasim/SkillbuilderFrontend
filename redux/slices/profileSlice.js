import { createSlice } from "@reduxjs/toolkit";
import { editProfile } from "../thunks/profilethunk";
import { filterObject } from "@/utils/filterObject";

const initialState = {
  id: null,
  first_name: "",
  last_name: "",
  email: "",
  // password: "",
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
      // Remove from localStorage
      localStorage.removeItem("profile");
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
        let dataToSet;
        console.log("Payload", action.payload);
        if (action.payload) dataToSet = filterObject(action.payload.data);
        state.status = "idle";
        state.successMessage = "Profile updated successfully";
        state.error = null;
        Object.assign(state, dataToSet);
        // Save to localStorage
        localStorage.setItem("profile", JSON.stringify(state));
      })
      .addCase(editProfile.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export const { add, remove } = profileSlice.actions;
export default profileSlice.reducer;
