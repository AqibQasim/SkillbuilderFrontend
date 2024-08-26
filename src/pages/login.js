import Login from "@/components/Login";
import redirectIfAuthenticated from "@/components/redirectIfAuthenticated";
import { GoogleOAuthProvider } from "@react-oauth/google";

function login() {
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <Login />
      </div>
    </GoogleOAuthProvider>
  );
}

export default redirectIfAuthenticated(login, "/profession");
