import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { loginGoogleUser } from "../../redux/thunks/auththunks";

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
    <div className="flex w-full items-center justify-center">
      <GoogleLogin
        onSuccess={signupSSOUser}
        onError={() => {
          console.log("Login Failed");
        }}
        text="continue_with"
        // width="400px"
        // containerProps={{
        //   style: {
        //     width: "100% !important",
        //   },
        // }}
      />
    </div>
  );
}

export default GoogleSignup;

// ============================================ //
// =============== CUSTOM BUTTOM ============== //
// ============================================ //

// import { useGoogleLogin } from "@react-oauth/google";
// import { jwtDecode } from "jwt-decode";
// import { useDispatch } from "react-redux";
// import { loginGoogleUser } from "../../redux/thunks/auththunks";

// function GoogleSignup() {
//   const dispatch = useDispatch();
//   const login = useGoogleLogin({
//     onSuccess: async (tokenResponse) => {
//       console.log(tokenResponse);
//       try {
//         const response = await fetch(
//           "https://www.googleapis.com/oauth2/v3/userinfo",
//           {
//             headers: {
//               Authorization: `Bearer ${tokenResponse.access_token}`,
//             },
//           },
//         );
//         if (!response.ok) {
//           throw new Error("Failed to fetch user info");
//         }
//         const userInfo = await response.json();
//         signupSSOUser(userInfo);
//       } catch (error) {
//         console.error("Error fetching user info:", error);
//       }
//     },
//   });

//   async function signupSSOUser(credentialResponse) {
//     console.log("cred resp: ", credentialResponse);
//     const { email, given_name, family_name } = credentialResponse;

//     try {
//       const dataSend = {
//         email,
//         fname: given_name,
//         lname: family_name,
//       };

//       console.log("data send: ", dataSend);

//       const response = await fetch(
//         `${process.env.NEXT_PUBLIC_BASE_API}/signup-googleSSO`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(dataSend),
//         },
//       );

//       const data = await response.json();
//       console.log("API response:", data);

//       if (!response.ok) {
//         throw new Error(data.message || "Unable to sign up");
//       }

//       const token = data?.token || data?.message;
//       console.log("Token:", token);

//       const decodedToken = jwtDecode(token);
//       console.log("Decoded token for user profile:", decodedToken);

//       const id = decodedToken?.id;
//       const { given_name: first_name, family_name: last_name } =
//         credentialResponse;

//       const googleLoginPayload = {
//         token,
//         user: {
//           id,
//           email,
//           first_name,
//           last_name,
//         },
//       };
//       dispatch(loginGoogleUser(googleLoginPayload));
//       return {
//         message: "Successfully signed up and logged in with Google SSO",
//       };
//     } catch (error) {
//       console.error("Signup error:", error.message);
//     }
//   }

//   return (
//     <div className="flex items-center justify-center">
//       {/* <button onClick={() => login()} >Sign in with Google 🚀 </button> */}
//       <button
//         onClick={() => login()}
//         className="border-black text-black mb-4 mt-4 flex w-full items-center justify-center rounded-lg border bg-white p-2"
//       >
//         <span className="mr-2">
//           <img
//             src="https://authjs.dev/img/providers/google.svg"
//             className="size-5"
//             alt="Google Icon"
//           />
//         </span>
//         <span className="text-sm font-semibold">Continue with Google</span>
//       </button>
//     </div>
//   );
// }

// export default GoogleSignup;
