import { useEffect } from "react";
import { useRouter } from "next/router";

const useGoogleSignIn = () => {
  const router = useRouter();

  useEffect(() => {
    const handleCallback = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get("code");

      if (code) {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API}/auth/google/callback?code=${code}`,
            {
              method: "GET",
              credentials: "include",
              headers: {
                "Content-Type": "application/json",
              },
            },
          );

          const data = await response.json();

          if (data.status) {
            // Successfully logged in
            router.push("/home"); // Redirect to the home page
          } else {
            // Handle login failure
            console.error(data.message);
          }
        } catch (error) {
          console.error("Error during Google Sign-In callback:", error);
        }
      }
    };

    handleCallback();
  }, [router]);
};

export default useGoogleSignIn;
