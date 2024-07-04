// store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import contactReducer from "../slices/contactslice";
import coursesReducer from '../slices/allCoursesSlice'
import singleCourseReducer from '../slices/singleCourseSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contact: contactReducer,
    courses: coursesReducer,    
    singleCourse : singleCourseReducer
  },
});
