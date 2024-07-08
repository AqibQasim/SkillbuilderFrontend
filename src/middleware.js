import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });
  const { pathname } = request.nextUrl;

  // Redirect logged-in users away from login/signup pages
  if (token) {
    if (pathname === "/login" || pathname === "/signup") {
      return NextResponse.redirect(new URL("/home", request.url));
    }
    return NextResponse.next();
  }

  // Redirect non-authenticated users to login page, except when already on login/signup pages
  const isAuthPage = pathname === "/login" || pathname === "/signup";
  if (!isAuthPage) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [ "/login", "/signup"],
};

// not using next-auth  provided middleware as i couldnt fix signup page redirect issue
/*
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const { token } = req.nextauth;
    const { pathname } = req.nextUrl;

    console.log("token", token);
    console.log("pathname", pathname);
    // Allow access to the signup page even if signIn redirects to /login
    if (!token && pathname === "/signup") {
      console.log("TTTTTTTTtttrrrrrrrrrruuuuuueeeee");
      return NextResponse.next();
    }

    // Redirect logged-in users away from login and signup pages
    if (token && (pathname === "/login" || pathname === "/signup")) {
      // Redirect to home page if logged-in user tries to access login or signup
      console.log(`signIn || signup`);
      return NextResponse.redirect(new URL("/courses", req.url));

      // Uncomment the following code to redirect to the previous path in history
      // const previousPath = req.headers.get("referer");
      // return NextResponse.redirect(previousPath || new URL("/home", req.url));
    }
  },
  {
    // Matches the pages config in `[...nextauth]`
    pages: {
      signIn: "/login",
    },
    callbacks: {
      // !! Convert any value into a Boolean
      authorized: ({ token }) => !!token,
    },
  },
);

export const config = {
  matcher: ["/about", "/profile", "/login", "/signup"],
};

*/
