import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");

  if (request.nextUrl.pathname.startsWith("/chat") && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  
  if (request.nextUrl.pathname === "/login" && token) {
    return NextResponse.redirect(new URL("/chat", request.url));
  }
  

  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/chat", request.url));
  }

  return NextResponse.next();
}