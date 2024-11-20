const base_Api = process.env.NEXT_PUBLIC_BASE_API;
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const createNotificationThunk = createAsyncThunk(
//   "notification/create",
//   async (payload, { rejectWithValue }) => {
//     console.log("payload for create course", payload);
//     try {
//       const response = await fetch(`${base_Api}/create-notification`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         //: payload,
//       });
//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(
//           data.message ||
//             "Failed to fetch the course details. Please try again.",
//         );
//       }
//       console.log("[date retrieved from backend]:", data);
//       return data?.data; // assuming the API returns the course object
//     } catch (error) {
//       return rejectWithValue(
//         error.message ||
//           "An unexpected error occurred while fetching the course.",
//       );
//     }
//   },
// );

export const fetchNotificationStudentThunk = createAsyncThunk(
  "fetchNotification/fetchNotificationStudentThunk",
  async (student_id, { rejectWithValue }) => {
    console.log("payload for create course", student_id);
    try {
      const response = await fetch(
        `${base_Api}/get-notification?student_id=${student_id}`,
        {
          method: "GET",
          // headers: {
          //   "Content-Type": "application/json",
          // },
          //body: payload,
        },
      );
      
      if (!response.ok) {
        throw new Error(
          data.message ||
          "Failed to fetch the course details. Please try again.",
        );
      }
      const data = await response.json();
      console.log("[date retrieved from backend]:", data);
      return data; // assuming the API returns the course object
    } catch (error) {
      return rejectWithValue(
        error.message ||
          "An unexpected error occurred while fetching the course.",
      );
    }
  },
);

export const fetchNotificationInstructorThunk = createAsyncThunk(
  "fetchNotification/fetchNotificationInstructorThunk",
  async (instructor_id, { rejectWithValue }) => {
    console.log("payload for create course", instructor_id);
    try {
      const response = await fetch(
        `${base_Api}/get-notification?instructor_id=${instructor_id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          //body: payload,
        },
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Failed to fetch the course details. Please try again.",
        );
      }
      console.log("[date retrieved from backend]:", data);
      return data; // assuming the API returns the course object
    } catch (error) {
      return rejectWithValue(
        error.message ||
          "An unexpected error occurred while fetching the course.",
      );
    }
  },
);
