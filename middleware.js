// middleware.js
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.NEXTAUTH_SECRET;

export async function middleware(request) {
    const token = request.cookies.get('session_token')?.value;

    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    try {
        // This verifies the token is valid and not expired
        jwt.verify(token, SECRET_KEY);
        // If it passes, allow the request to continue
        return NextResponse.next();
    } catch (error) {
        // If verification fails (invalid/expired), redirect to login
        console.log("Token verification failed:", error.message);
        return NextResponse.redirect(new URL('/login', request.url));
    }
}

export const config = {
    matcher: ['/admin/:path*'],
};