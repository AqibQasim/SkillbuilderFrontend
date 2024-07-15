// src/redux/thunks/googlethunk.js
import { createAsyncThunk } from "@reduxjs/toolkit";

export const googleSignIn = createAsyncThunk("auth/googleSignIn", async () => {
  console.log("calling signup 2222");
  const googleAuthURL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&redirect_uri=${window.location.origin}/auth/google/callback&response_type=code&scope=profile email`;
  window.location.href = googleAuthURL;
});

export const handleGoogleCallback = createAsyncThunk(
  "auth/handleGoogleCallback",
  async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    console.log("code inside thunk: ", code);

    if (code) {
      const response = await fetch(
        `http:localhost:4000/auth/google`,
        {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      const data = await response.json();
      console.log("data from backend: ", data);
      return data;
    } else {
      throw new Error("No code found in URL");
    }
  },
);
