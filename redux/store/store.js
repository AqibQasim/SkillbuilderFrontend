import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import contactReducer from "../slices/contactslice";
import profileReducer from "../slices/profileSlice";
import coursesReducer from "../slices/allCoursesSlice";
import singleCourseReducer from "../slices/singleCourseSlice";
import singleInstructorReducer from "../slices/singleInstructorSlice";
import singleUserSlice from "../slices/singleUserSlice";
import getAllReviewsSlice from "../slices/getAllReviewsSlice";
import cartReducer from "../slices/addToCart";

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
    contact: contactReducer,
    profile: profileReducer,
    courses: coursesReducer,
    singleCourse: singleCourseReducer,
    singleInstructor: singleInstructorReducer,
    singleUser: singleUserSlice,
    allReviews: getAllReviewsSlice,
    cart: cartReducer,
  },
  preloadedState,
});

// Subscribe to store updates
store.subscribe(() => {
  saveState(store.getState());
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
