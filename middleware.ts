import { NextRequest } from "next/dist/server/web/spec-extension/request";
import { NextResponse } from "next/dist/server/web/spec-extension/response";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = localStorage.getItem("accessToken");
  const user = JSON.parse(localStorage.getItem("user") as string).state.user;
  const role = user !== "" ? user.role : null;

  // Redirect to home or admin if trying to access sign in or sign up page and token exists
  if (
    (pathname.startsWith("/signin") || pathname.startsWith("/signup")) &&
    token
  ) {
    if (role === "ADMIN") {
      return NextResponse.redirect(new URL("/admin", request.url));
    } else {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  // Redirect to admin if trying to access any page and user is admin
  if (!pathname.startsWith("/admin") && role === "ADMIN") {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  // Redirect to home if trying to access admin page and user is not admin
  if (pathname.startsWith("/admin") && role !== "ADMIN") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Redirect to signin if trying to access cart page and token doesn't exist
  if (pathname.startsWith("/cart") && !token) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/signin", "/signup", "/admin", "/cart"],
};
