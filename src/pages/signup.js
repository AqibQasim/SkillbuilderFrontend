import Signup from "@/components/Signup";
import redirectIfAuthenticated from "@/components/redirectIfAuthenticated";
import { GoogleOAuthProvider } from "@react-oauth/google";
import dotenv from "dotenv";
dotenv.config({ path: '../../.env' });

function signup() {
  return (
    <GoogleOAuthProvider clientId='1004575378288-drg77ff0g4521st4kvlfck9na4h4pnos.apps.googleusercontent.com'>
      <div className="flex min-h-screen items-center justify-center bg-gray-100 py-4">
        <Signup />
      </div>
    </GoogleOAuthProvider>
  );
}

export default redirectIfAuthenticated(signup);
