import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

// Edge runtime-safe version (no bcrypt, no DB imports)
export const { auth } = NextAuth(authConfig);
