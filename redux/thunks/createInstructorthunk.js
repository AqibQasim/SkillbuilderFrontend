import { createAsyncThunk } from "@reduxjs/toolkit";
import { uploadVideo } from "./instructorvideothunk";
import { fetchOneInstructor } from "./instructorThunk";

export const createInstructor = createAsyncThunk(
  "instructor/createInstructor",
  async (instructorData, { rejectWithValue }) => {
    console.log("Instructor data in thunk :", instructorData);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/create-instructor`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(instructorData),
        },
      );
      console.log("this is instructor data ", instructorData);

      if (!response.ok) {
        const errorData = await response.json();
        console.log("error data ", errorData);
        return rejectWithValue(errorData);
      }

      const data = await response.json();
      console.log("current data ", data);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const createInstructorAndUploadVideo = createAsyncThunk(
  "instructor/createInstructorAndUploadVideo",
  async (
    { instructorDetails, video },
    { getState, dispatch, rejectWithValue },
  ) => {
    let instructorCreated = false;
    const instructorId = getState().singleInstructor.id;

    if (!instructorId) {
      console.log("no id in state fetchOne");
      try {
        await dispatch(fetchOneInstructor(instructorDetails.user_id)).unwrap();
      } catch (error) {
        console.log(
          "No instructor with this id in the database, creating a new one.",
        );
      }
    }

    const updatedInstructorId = getState().singleInstructor.id;

    try {
      if (!updatedInstructorId) {
        console.log("no id in state create instructor");
        await dispatch(createInstructor(instructorDetails)).unwrap();
        instructorCreated = true;
      }
    } catch (error) {
      return rejectWithValue("Failed to create instructor.");
    }

    try {
      await dispatch(uploadVideo(video)).unwrap();
      return {
        message: instructorCreated
          ? "Instructor created and video uploaded successfully!"
          : "Video uploaded successfully!",
      };
    } catch (error) {
      return rejectWithValue({
        message: instructorCreated
          ? "Instructor created but failed to upload video."
          : "Failed to upload video.",
      });
    }
  },
);
