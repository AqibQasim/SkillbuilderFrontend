import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Login from "@/components/Login";
import { useSelector } from "react-redux";

function LoginPage() {
  const { data: session, status } = useSession();
  const { user, isLoading, error, successMessage } = useSelector(
    (state) => state.auth
  );
  const router = useRouter();

  // Check if user is authenticated
  if (status === "authenticated" || user) {
    router.replace("/home");
    return null;
  }

  // Render loading state while session status is loading
  if (status === "loading" ) {
    // for the time being use this
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 py-4">
        <h1>Loading... please wait</h1>
      </div>
    );
  }

  // If user is not authenticated and session has finished loading, render Signup component
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Login />
    </div>
  );
}
export default LoginPage;
