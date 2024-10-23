import Signup from "@/components/Signup";
import redirectIfAuthenticated from "@/components/redirectIfAuthenticated";
import { GoogleOAuthProvider } from "@react-oauth/google";
import dotenv from "dotenv";
dotenv.config({ path: "../../.env" });

function signup() {
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
      <div className="flex min-h-screen items-center justify-center bg-gray-100 py-4">
        <Signup />
      </div>
    </GoogleOAuthProvider>
  );
}

export default redirectIfAuthenticated(signup);
