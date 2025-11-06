import { auth } from "./auth-edge";

export default auth((req) => {
  // Optional: add custom logic
  // Example: redirect unauthenticated users manually (if needed)
  // if (!req.auth && req.nextUrl.pathname.startsWith("/dashboard")) {
  //   return Response.redirect(new URL("/login", req.url));
  // }

  return;
});

export const config = {
  // Match all routes except API, static assets, and images
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
