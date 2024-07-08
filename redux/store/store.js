import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import contactReducer from "../slices/contactslice";
import profileReducer from "../slices/profileSlice";

import coursesReducer from '../slices/allCoursesSlice'
import singleCourseReducer from '../slices/singleCourseSlice'
import singleInstructorReducer from '../slices/singleInstructorSlice'
import singleUserSlice from '../slices/singleUserSlice'
import getAllReviewsSlice from "../slices/getAllReviewsSlice";

// Function to load state from localStorage
function loadState() {
  try {
    const serializedState = localStorage.getItem("auth");
    if (serializedState === null) {
      return undefined;
    }
    return {
      auth: {
        user: JSON.parse(serializedState),
        isLoading: false,
        error: null,
        successMessage: null,
      },
    };
  } catch (err) {
    return undefined;
  }
}

// Load the state from localStorage
const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contact: contactReducer,
    profile: profileReducer,

    courses: coursesReducer,    
    singleCourse : singleCourseReducer,
    singleInstructor : singleInstructorReducer,
    singleUser : singleUserSlice,
    allReviews: getAllReviewsSlice
  },
  preloadedState,
});

export default store;

// store.js
// import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "../slices/authSlice";
// import contactReducer from "../slices/contactslice";

// export const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     contact: contactReducer,
//   },
// });
