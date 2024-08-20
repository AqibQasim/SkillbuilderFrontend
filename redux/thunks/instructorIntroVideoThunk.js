const base_Api = process.env.NEXT_PUBLIC_BASE_API;
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createInstructor } from "./createInstructorthunk";

export const uploadIntroVideo = createAsyncThunk(
  "instructor/uploadIntroVideo",

  async ({ instructorId, file }, { rejectWithValue }) => {
    const formData = new FormData();
    console.log(
      "Instructor id to pass in for intro video upload:",
      instructorId,
    );

    try {
      formData.append("instructorId", instructorId);
      formData.append("video", file);
      const response = await fetch(`${base_Api}/upload`, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log("API Response Data API :", data?.message);
      if (!response.ok) {
        throw new Error(data.message || "Unable to post video");
      }
      console.log("Return Data in instructor intro video upload API", data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to post the video.");
    }
  },
);

export const createInstructorAndUploadIntroVideo = createAsyncThunk(
  "instructor/createInstructorAndUploadIntroVideo",
  async ({ instructorId, file }, { getState, dispatch, rejectWithValue }) => {
    console.log("Instructor Id", instructorId);
    console.log("Selected Video", file);
    let step = 0;
    try {
      if (instructorId) {
        step = 2;
        console.log("instrcutor exist uploading video");
        await dispatch(uploadIntroVideo({ instructorId, file })).unwrap();
        return { message: "Instructor created successfully" };
      }
      const state = getState();
      const instructorDetails = state.instructor.instructorDetails;
      // Create instructor
      step += 1;
      console.log("Create: Instructor details > ", instructorDetails);
      await dispatch(createInstructor(instructorDetails)).unwrap();
      // Upload intro video
      step += 1;
      await dispatch(uploadIntroVideo({ instructorId, file })).unwrap();
      return { message: "Instructor created successfully" };
    } catch (error) {
      const errorMessage =
        step === 1
          ? `Instructor Error: ${error?.message || "Could not create instructor"}`
          : `Instructor Video Error: ${error?.message || "Could not upload intro video"}`;
      console.error("creating instructor and uploading video:", error);
      console.log(
        "Error message for creating and uploading instructor ",
        errorMessage,
      );
      return rejectWithValue(errorMessage);
    }
  },
);
