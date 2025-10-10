// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host');
  
  // Direct redirect to www with https
  if (!hostname?.startsWith('www.') || url.protocol === 'http:') {
    return NextResponse.redirect(
      `https://www.modgilltravels.in${url.pathname}${url.search}`,
      308
    );
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
