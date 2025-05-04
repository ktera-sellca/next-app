import { NextResponse, type NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const message = req.nextUrl.searchParams.get("message") || "hogehoge";
  const res = NextResponse.next();
  res.headers.append("x-message", message);

  return res;
}

export const config = {
  matcher: ["/", "/about"],
};
