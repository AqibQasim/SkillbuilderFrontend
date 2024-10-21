// uploadCourseThunk.js
import { createAsyncThunk } from '@reduxjs/toolkit';

// Thunk for uploading course content
export const uploadCourseContent = createAsyncThunk(
  'courseUpload/uploadCourseContent',  // Unique action name
  async (courseData, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:4000/upload-course-content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(courseData),
      });

      if (!response.ok) {
        throw new Error('Failed to upload course content');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
