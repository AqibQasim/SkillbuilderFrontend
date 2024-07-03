import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Login from "@/components/Login";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function LoginPage() {
  const { data: session, status } = useSession();
  const { user, isLoading } = useSelector((state) => state.auth);
  console.log("isLoading", isLoading);
  console.log("Status", status);
  const router = useRouter();

  // Check if user is authenticated
  if (status === "authenticated" || user) {
    router.replace("/home");
    return null;
  }

  // Render loading state while session status is loading
  if (status === "loading" || isLoading) {
    // for the time being use this
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100 py-4">
        <h1>Loading... please wait</h1>
      </div>
    );
  }

  // If user is not authenticated and session has finished loading, render Signup component
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Login />
    </div>
  );
}
export default LoginPage;
