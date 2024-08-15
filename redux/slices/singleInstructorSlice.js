import { createSlice } from "@reduxjs/toolkit";
import { fetchOneInstructor } from "../thunks/instructorThunk";

const initialState = {
  id: null,
  user_id: null,
  experience: [],
  specialization: "",
  video_url: "",
  status: "",
  created_at: "",
  skills: [],
  isInstLoading: false,
  InstructorError: null,
  successMessage: null,
  user: {
    id: null,
    status_desc: null,
    profile: null,
    first_name: "",
    email: "",
    profession: null,
    facebook_profile: null,
    is_active: false,
    role: "",
    source: "",
    created_at: "",
    updated_at: "",
  },
};

const singleInstructorSlice = createSlice({
  name: "instructor",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOneInstructor.pending, (state) => {
        state.isInstLoading = true;
        state.InstructorError = null;
        state.successMessage = null;
      })
      .addCase(fetchOneInstructor.fulfilled, (state, action) => {
        const data = action.payload; // Access the data directly
        state.user_id = data.user_id;
        state.experience = data.experience;
        state.specialization = data.specialization;
        state.video_url = data.video_url;
        state.status = data.status;
        state.skills = data.skills;
        state.user = data.user;
        state.isInstLoading = false;
        state.InstructorError = null;
        state.successMessage = "Instructor fetched successfully";
      })
      .addCase(fetchOneInstructor.rejected, (state, action) => {
        state.InstructorError = action.payload || action.error.message;
        state.isInstLoading = false;
        state.successMessage = null;
      });
  },
});

export default singleInstructorSlice.reducer;
