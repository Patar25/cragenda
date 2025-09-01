// app/api/auth/[...nextauth]/route.ts
import { handlers } from "@/auth";

// re-export the actual functions
export const GET = handlers.GET;
export const POST = handlers.POST;

