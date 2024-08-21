// pages/auth/google/callback.js
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { handleGoogleCallback } from "../../../../redux/thunks/googlethunk";

const GoogleCallback = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const handleCallback = async () => {
      console.log("inside callback function");
      const result = await dispatch(handleGoogleCallback());

      console.log("result h ye :", result);
      if (result.payload.status) {
        router.push("/"); // Redirect to the home page upon success
      } else {
        console.error(result.payload.message);
      }
    };

    handleCallback();
  }, [dispatch, router]);

  return (
    <div>
      <h1>Signing in...</h1>
    </div>
  );
};

export default GoogleCallback;
