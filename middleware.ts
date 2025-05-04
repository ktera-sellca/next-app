import { NextResponse, type NextRequest } from "next/server";
import { geolocation } from "@vercel/functions";

export function middleware(req: NextRequest) {
  const { city, country } = geolocation(req);
  const res = NextResponse.next();

  res.headers.append("x-city", city || "unknown");
  res.headers.append("x-country", country || "unknown");

  return res;
}

export const config = {
  matcher: ["/", "/about"],
};
