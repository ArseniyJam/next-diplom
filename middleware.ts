import { NextRequest, NextResponse } from "next/server";
import { getMe } from "@/services/get-me";

const authRoutes = ["/login", "/register"];
const categories = [
   "/shop/All",
   "/shop/Casual",
   "/shop/Formal",
   "/shop/Party",
   "/shop/Gym",
];

export async function middleware(request: NextRequest) {
   const user = await getMe();
   const currentPath = request.nextUrl.pathname;

   if (user.ok && authRoutes.includes(currentPath)) {
      return NextResponse.redirect(new URL("/", request.url));
   }
   if (
      currentPath.startsWith("/shop") &&
      !categories.some((category) => currentPath.startsWith(category))
   ) {
      return NextResponse.redirect(new URL("/shop/All", request.url));
   }
   return NextResponse.next();
}

export const config = {
   mathcer: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
