import { NextRequest } from "next/dist/server/web/spec-extension/request";
import { NextResponse } from "next/dist/server/web/spec-extension/response";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  // const token = request.cookies.has("accessToken");
  // const role = request.cookies.get("role");
  const token = localStorage.getItem("accessToken");
  const user = localStorage.getItem("user");
  const role = user ? JSON.parse(user).role : null;

  // Redirect to home if trying to access sign in or sign up page and token exists
  if (
    pathname.startsWith("/signin") &&
    pathname.startsWith("/signup") &&
    token
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Redirect to home if trying to access admin page and user is not admin
  if (pathname.startsWith("/admin") && role?.value !== "ADMIN") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Redirect to home if trying to access cart page and token doesn't exist
  if (pathname.startsWith("/cart") && !token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/signin", "/signup", "/admin", "/cart"],
};
