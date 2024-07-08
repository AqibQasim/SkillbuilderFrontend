import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    authorized({ auth, request }) {
      // !! convert any value into a boolean
      return !!auth?.user;
    },
  },
  // Comment for now
  //   pages: {
  //     signIn: "/signin",
  //   },
};
export default NextAuth(authOptions);
