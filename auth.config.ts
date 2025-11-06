import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const path = nextUrl.pathname;

      const isAdminRoute = path.startsWith("/admin");
      const isDashboardRoute = path.startsWith("/dashboard");

      // Protect /admin and /dashboard routes
      if (isAdminRoute || isDashboardRoute) {
        return isLoggedIn;
      }

      // Public routes are allowed
      return true;
    },
  },
  providers: [], // Providers are added in auth.ts only
} satisfies NextAuthConfig;
