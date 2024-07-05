import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import contactReducer from "../slices/contactslice";
import coursesReducer from '../slices/allCoursesSlice'
import singleCourseReducer from '../slices/singleCourseSlice'

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
    courses: coursesReducer,    
    singleCourse : singleCourseReducer
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
