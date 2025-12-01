import { getToken } from "next-auth/jwt";
import { type NextRequest, NextResponse } from "next/server";
import createIntlMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// Create the next-intl middleware
const intlMiddleware = createIntlMiddleware(routing);

// Helper function
const redirectTo = (url: string, request: NextRequest) => {
  return NextResponse.redirect(new URL(url, request.url));
};

// Custom middleware function
async function customMiddleware(request: NextRequest) {
  const authToken = await getToken({ req: request });
  const { pathname } = request.nextUrl;

  // Remove locale prefix from pathname (e.g., /en/login -> /login)
  const pathnameWithoutLocale = pathname.replace(/^\/[a-z]{2}/, "");

  // Protected routes that require authentication
  const protectedRoutes = ["/my-account", "/cart", "/wishlist"];
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathnameWithoutLocale.startsWith(route),
  );

  // If user is not logged in and tries to access protected routes
  if (!authToken && isProtectedRoute) {
    const signInUrl = new URL("/login", request.url);
    signInUrl.searchParams.set("callbackUrl", pathnameWithoutLocale);
    return NextResponse.redirect(signInUrl);
  }

  // If user is logged in and tries to access auth pages, redirect to home
  if (
    authToken &&
    (pathnameWithoutLocale === "/login" || pathnameWithoutLocale === "/sign-up")
  ) {
    return redirectTo("/", request);
  }

  return null;
}

// Export as "proxy" function for Next.js 15+
export async function proxy(request: NextRequest) {
  // First, run the next-intl middleware
  const intlResult = await intlMiddleware(request);

  // If next-intl middleware redirected or rewritten, return its response
  if (intlResult.status !== 200) {
    return intlResult;
  }

  // Otherwise, run custom middleware
  const customResult = await customMiddleware(request);

  // If custom middleware returned a response, return it
  if (customResult) {
    return customResult;
  }

  // If neither middleware did anything, continue
  return intlResult;
}

// Update the matcher configuration
export const config = {
  matcher: [
    // Skip all internal paths (_next, api, etc.)
    "/((?!api|_next|_vercel|.*\\..*).*)",
    // Include all i18n routes
    "/",
    "/(en|ne)/:path*",
  ],
};
