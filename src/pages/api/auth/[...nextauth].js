import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
      authorization:{ params: { prompt: 'select_account' } }
    }),
  ],
  session: {
    strategy: "jwt",
  },
  trustHost: true,
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
