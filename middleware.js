import { NextRequest, NextResponse } from "next/server";
import { i18n } from "./i18n.config";

export async function middleware(req) {
    const path = req.nextUrl.pathname;
    const { locales, defaultLocale } = i18n;
    const currentLocale =
        locales.find(
            (locale) => path.startsWith(`/${locale}/`) || path === `/${locale}`
        ) || defaultLocale;

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};