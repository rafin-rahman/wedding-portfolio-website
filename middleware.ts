import {NextResponse} from "next/server";
import type {NextRequest} from "next/server";
import {defaultBrandKey} from "./utils/company.config";

export function middleware(request: NextRequest) {
    const rawHost = request.headers.get("host") || "";

    // Define mapping of hosts to brand keys
    const allowedHosts: Record<string, string> = {
        "filmsreimagined.com": "filmsreimagined",
        "thehijabiphotographer.com": "thehijabiphotographer",
    };

    // Normalize host (remove "www." if present)
    const host = rawHost.startsWith("www.") ? rawHost.slice(4) : rawHost;

    // Validate host and determine brand key
    const brandKey = allowedHosts[host] || defaultBrandKey;

    if (!allowedHosts[host]) {
        console.error(`Invalid host: ${host}`);
        return new NextResponse("Invalid host", {status: 403});
    }

    // Add brand key to response headers
    const response = NextResponse.next();
    response.headers.set("x-brand", brandKey);

    return response;
}

// Middleware configuration
export const config = {
    matcher: "/:path*", // Match all paths
};