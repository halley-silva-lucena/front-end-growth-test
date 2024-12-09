import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { LOCALES, DEFAULT_LOCALE } from "@/lib/constants";

function getLocale(request: NextRequest) {
  // Check for locale in pathname
  const pathname = request.nextUrl.pathname;
  const pathnameLocale = LOCALES.find((locale) => pathname.startsWith(`/${locale}`));

  // Check for locale in searchParams
  const { searchParams } = request.nextUrl;
  const queryLocale = searchParams.get("locale");
  const validQueryLocale = LOCALES.includes(queryLocale as any) ? queryLocale : null;

  return pathnameLocale || validQueryLocale || DEFAULT_LOCALE;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Skip middleware for static files and API routes
  if (pathname.includes(".") || pathname.startsWith("/api/")) {
    return NextResponse.next();
  }

  const locale = getLocale(request);
  const { searchParams } = request.nextUrl;

  // If accessing root with locale in query, redirect to localized path
  if (pathname === "/" && searchParams.has("locale")) {
    const locale = searchParams.get("locale");
    if (LOCALES.includes(locale as any)) {
      return NextResponse.redirect(new URL(`/${locale}`, request.url));
    }
  }

  // Redirect to default locale if accessing root
  if (pathname === "/") {
    return NextResponse.redirect(new URL(`/${DEFAULT_LOCALE}`, request.url));
  }

  // Add locale prefix if it's missing
  //   if (!pathname.startsWith(`/${locale}/`) && !pathname.startsWith("/_next")) {
  //     return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  //   }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};
