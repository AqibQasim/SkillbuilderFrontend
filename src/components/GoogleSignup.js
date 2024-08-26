import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { loginGoogleUser } from "../../redux/thunks/auththunks";
import { useDispatch } from "react-redux";

function GoogleSignup() {
  const dispatch = useDispatch();
  async function signupSSOUser(credentialResponse) {
    console.log("Google Credential Response: ", credentialResponse);
    try {
      const decoded = jwtDecode(credentialResponse?.credential);
      console.log("Decoded token:", decoded);

      const fullName = decoded.name;
      const [fname, ...nameParts] = fullName.split(" ");
      const lname = nameParts.join(" ");

      const dataSend = {
        email: decoded.email,
        fname,
        lname,
      };

      // Sign up the user via Google SSO
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/signup-googleSSO`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataSend),
        },
      );

      const data = await response.json();
      console.log("API response:", data);

      if (!response.ok) {
        throw new Error(data.message || "Unable to sign up");
      }

      const token = data?.token || data?.message;
      console.log("Token:", token);

      const decodedToken = jwtDecode(token);
      console.log("Decoded token for user profile:", decodedToken);

      const { id, email } = decodedToken;
      const { given_name: first_name, family_name: last_name } = decoded;

      const googleLoginPayload = {
        token,
        user: {
          id,
          email,
          first_name,
          last_name,
        },
      };
      dispatch(loginGoogleUser(googleLoginPayload));
      return {
        message: "Successfully signed up and logged in with Google SSO",
      };
    } catch (error) {
      console.error("Signup error:", error.message);
    }
  }

  return (
    <div className="w-full">
      <GoogleLogin
        onSuccess={signupSSOUser}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
}

export default GoogleSignup;
