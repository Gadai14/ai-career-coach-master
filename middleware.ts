// middleware.ts
import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

// Match routes you want Clerk to protect
export const config = {
  matcher: [
    "/((?!_next/image|_next/static|favicon.ico).*)",
  ],
};
