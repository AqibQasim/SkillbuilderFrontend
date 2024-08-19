import { createSlice } from "@reduxjs/toolkit";
import { createCourse } from "../thunks/createCourseThunk";

const initialState = {
  courseId: null, // keep this ID OUTSIDE courseDetails
  courseDetails: {
    amount: 0,
    category: "",
    charges: 0,
    instructor_id: null,
    learning_outcomes: "",
    modulesCount: 0,
    video_url: "temp_url",
    description:
      "This is a temporary description for this course; it can be changed later.",
    creation_duration_hours: 0,
    image:
      "https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "",
  },
  successMessage: null,
  loading: false,
  error: null,
};

const createCourseSlice = createSlice({
  name: "instructor",
  initialState,
  reducers: {
    setCourseDetails: (state, action) => {
      console.log(console.log("payload on course detail", action.payload));
      state.courseDetails = {
        ...state.courseDetails,
        ...action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCourse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createCourse.fulfilled, (state, action) => {
        console.log("payload on createCourse fulfilled case", action.payload);
        state.loading = false;
        state.successMessage = action.payload?.message;
        // uncomment once api return course id
        // state.courseId = action.payload.data.courseId;

        state.error = null;
      })
      .addCase(createCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export const { setCourseDetails } = createCourseSlice.actions;
export default createCourseSlice.reducer;
