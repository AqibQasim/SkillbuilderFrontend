import Signup from "@/components/Signup";
import redirectIfAuthenticated from "@/components/redirectIfAuthenticated";
import { GoogleOAuthProvider } from "@react-oauth/google";
import dotenv from "dotenv";
dotenv.config({ path: "../../.env" });

function signup() {
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
      <div className="flex justify-between items-center px-12 py-6 shadow-md bg-gray-100 border-b border-y-gray-300 ">
        <div className="flex items-center space-x-4">
          <img src="/logo.svg" alt="logo" className="h-8" />
        </div>
      </div>
      <div className="flex min-h-screen items-center justify-center bg-gray-100 py-4">
        <Signup />
      </div>
    </GoogleOAuthProvider>
  );
}

export default redirectIfAuthenticated(signup);
