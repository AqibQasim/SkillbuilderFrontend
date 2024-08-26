import { configureStore } from "@reduxjs/toolkit";
import InstructorByUserIdSlice from "../slices/InstructorByUserIdSlice";
import ytAuthReducer from "../slices/accessToken.js";
import cartReducer from "../slices/addToCart";
import coursesReducer from "../slices/allCoursesSlice";
import approvedCoursesReducer from '../slices/allApprovedCoursesSlice';
import allInstructorsReducer from "../slices/allInstructorsSlice";
import studentsSlice from "../slices/allStudentsSlice";
import authReducer from "../slices/authSlice";
import contactReducer from "../slices/contactslice";
import courseStatusSlice from "../slices/courseStatusSlice";
import courseVideoUploadReducer from "../slices/courseVideoSlice";
import createCourseSlice from "../slices/createCourseSlice";
import InstructorReducer from "../slices/createInstructorSlice";
import {
  default as fetchStudentsByInstructorReducer,
  default as studentsReducer,
} from "../slices/fetchStudentsByInstructorSlice";
import getAllReviewsSlice from "../slices/getAllReviewsSlice";
import instructorCoursesSliceReducer from "../slices/instructorCoursesSlice";
import instructorIntroVideoSlice from "../slices/instructorIntroVideoSlice";
import instructorvideoReducer from "../slices/instructorvideoslice";
import loginFlowSlice from "../slices/loginFlowSlice";
import profileReducer from "../slices/profileSlice";
import purchasecourseSlice from "../slices/purchasecoursedSlice";
import reviewSlice from "../slices/reviewSlice";
import singleCourseReducer from "../slices/singleCourseSlice";
import singleInstructorReducer from "../slices/singleInstructorSlice";
import singleUserSlice from "../slices/singleUserSlice";
import studentEnrolledCoursesForOneInstructorSlice from "../slices/studentEnrolledCoursesForOneInstructorSlice";
// Function to load state from localStorage
function loadState() {
  try {
    const authSerializedState = localStorage.getItem("auth");
    const profileSerializedState = localStorage.getItem("profile");

    let preloadedState = {};

    if (authSerializedState !== null) {
      preloadedState.auth = {
        user: JSON.parse(authSerializedState),
        isLoading: false,
        error: null,
        successMessage: null,
      };
    }

    if (profileSerializedState !== null) {
      preloadedState.profile = JSON.parse(profileSerializedState);
    }

    return preloadedState;
  } catch (err) {
    return undefined;
  }
}

// Function to save state to localStorage
function saveState(state) {
  try {
    const authSerializedState = JSON.stringify(state.auth.user);
    localStorage.setItem("auth", authSerializedState);

    const profileSerializedState = JSON.stringify(state.profile);
    localStorage.setItem("profile", profileSerializedState);
  } catch (err) {
    // Ignore write errors
  }
}

// Load the state from localStorage
const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ytAuth: ytAuthReducer,
    contact: contactReducer,
    profile: profileReducer,
    courses: coursesReducer,
    singleCourse: singleCourseReducer,
    singleInstructor: singleInstructorReducer,
    singleUser: singleUserSlice,
    allReviews: getAllReviewsSlice,
    cart: cartReducer,
    instructor: InstructorReducer,
    loginFlow: loginFlowSlice,
    videoUpload: instructorvideoReducer,
    courseVideoUpload: courseVideoUploadReducer,
    instructorCourses: instructorCoursesSliceReducer,
    courseStatus: courseStatusSlice,
    students: studentsReducer,
    students: studentsSlice,
    allInstructors: allInstructorsReducer,
    studentsByInstructor: fetchStudentsByInstructorReducer,
    review: reviewSlice,
    courseVideoUpload: courseVideoUploadReducer,
    purchasecourse: purchasecourseSlice,
    instructorByUserId: InstructorByUserIdSlice,
    createCourse: createCourseSlice,
    instructorIntroVideo: instructorIntroVideoSlice,
    courses: approvedCoursesReducer,
    studentEnrolledCoursesForOneInstructor:
      studentEnrolledCoursesForOneInstructorSlice,
  },
  preloadedState,
});

// Subscribe to store updates
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
