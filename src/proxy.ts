import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "@/i18n/config";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the pathname already starts with a known locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    // Extract locale and set it as a header for the root layout
    const locale = pathname.split("/")[1];
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-locale", locale);
    return NextResponse.next({ request: { headers: requestHeaders } });
  }

  // Redirect /o-mne to /about for backwards compatibility
  if (pathname === "/o-mne") {
    return NextResponse.redirect(new URL("/about", request.url));
  }

  // No locale prefix → rewrite to default locale (transparent, URL stays clean)
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", defaultLocale);

  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.rewrite(request.nextUrl, {
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: [
    /*
     * Match all paths except:
     * - /api/ routes
     * - /_next/ (Next.js internals)
     * - /favicon.ico, robots.txt, sitemap.xml
     * - Static files with extensions
     */
    "/((?!api|_next/static|_next/image|favicon\\.ico|robots\\.txt|sitemap\\.xml|.*\\..*).*)",
  ],
};
