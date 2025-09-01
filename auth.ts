// auth.ts (Auth.js v5 style)
import NextAuth from "next-auth";
import { authConfig } from "./next-auth.config";

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig);
