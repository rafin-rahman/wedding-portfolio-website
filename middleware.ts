// middleware.ts
import {NextResponse} from 'next/server';
import type {NextRequest} from 'next/server';
import companyConfigs, {defaultBrandKey} from './utils/company.config';

export function middleware(request: NextRequest) {
    const host = request.headers.get('host') || '';
    const isLocal = host.startsWith('localhost');

    // Determine brand key
    const brandKey = isLocal ? defaultBrandKey : host;

    // Fallback to default if brand key is not recognized
    const brand = companyConfigs[brandKey] ? brandKey : defaultBrandKey;

    // Add brand to response headers
    const response = NextResponse.next();
    response.headers.set('x-brand', brand);

    return response;
}

// Middleware configuration
export const config = {
    matcher: '/:path*',
};