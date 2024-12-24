import {NextResponse} from "next/server";
import type {NextRequest} from "next/server";
import {defaultBrandKey} from "./utils/company.config";

export function middleware(request: NextRequest) {
    const host = request.headers.get("host");

    // Map domains to brand keys
    const domainToBrandMap: Record<string, string> = {
        "filmsreimagined.com": "filmsReimagined",
        "thehijabiphotographer.com": "hijabiPhotographer",
    };

    // Determine brand key or fallback to default
    const brandKey = domainToBrandMap[host || ""] || defaultBrandKey;

    // Debugging
    console.log("Host:", host);
    console.log("Resolved Brand Key:", brandKey);

    // Add brand key to response headers
    const response = NextResponse.next();
    response.headers.set("x-brand", brandKey);

    return response;
}

// Middleware configuration
export const config = {
    matcher: "/:path*",
};