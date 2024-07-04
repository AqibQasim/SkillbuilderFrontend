import { createSlice } from "@reduxjs/toolkit";

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
  isLoading: false,
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
      state.isLoading = false;
      state.successMessage = "Wooo updated";
    },
    add: (state, action) => {
      state = { ...state, ...action.payload };
    },
  },
});

export const { add, remove } = profileSlice.actions;
export default profileSlice.reducer;
