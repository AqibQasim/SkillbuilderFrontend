import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import contactReducer from "../slices/contactslice";
import profileReducer from "../slices/profileSlice";

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
