import {NextResponse} from "next/server";
import type {NextRequest} from "next/server";
import {defaultBrandKey} from "./utils/company.config";

export function middleware(request: NextRequest) {
    const host = request.headers.get("host") || "";

    // Determine brand key based on substrings in the host
    let brandKey: string;

    if (host.includes("filmsreimagined")) {
        brandKey = "filmsReimagined";
    } else if (host.includes("thehijabiphotographer")) {
        brandKey = "hijabiPhotographer";
    } else {
        brandKey = defaultBrandKey;
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