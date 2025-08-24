// middleware.js
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import * as jose from 'jose';

const SECRET_KEY = new TextEncoder().encode(process.env.NEXTAUTH_SECRET);

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // Protect all routes under /admin
  if (pathname.startsWith('/admin')) {
    const sessionToken = cookies().get('session_token')?.value;

    if (!sessionToken) {
      // Redirect to login if no token
      const loginUrl = new URL('/login', request.url);
      return NextResponse.redirect(loginUrl);
    }

    try {
      // Verify the token
      await jose.jwtVerify(sessionToken, SECRET_KEY);
      // If token is valid, proceed to the requested admin page
      return NextResponse.next();
    } catch (error) {
      // If token is invalid (expired, wrong signature, etc.)
      console.error('Middleware JWT Verification Error:', error.message);
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('error', 'session_expired');
      return NextResponse.redirect(loginUrl);
    }
  }

  // Allow all other requests to pass through
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'], // Apply middleware only to admin routes
};