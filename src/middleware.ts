import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { LOCALES, DEFAULT_LOCALE, Locale } from "@/lib/constants";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Skip middleware for static files and API routes
  if (pathname.includes(".") || pathname.startsWith("/api/")) {
    return NextResponse.next();
  }

  // const locale = getLocale(request);
  const { searchParams } = request.nextUrl;

  // If accessing root with locale in query, redirect to localized path
  if (pathname === "/" && searchParams.has("locale")) {
    const locale = searchParams.get("locale");
    if (LOCALES.includes(locale as Locale)) {
      return NextResponse.redirect(new URL(`/${locale}`, request.url));
    }
  }

  // Redirect to default locale if accessing root
  if (pathname === "/") {
    return NextResponse.redirect(new URL(`/${DEFAULT_LOCALE}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};
