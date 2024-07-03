// store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import contactReducer from "../slices/contactslice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contact: contactReducer,
  },
});
