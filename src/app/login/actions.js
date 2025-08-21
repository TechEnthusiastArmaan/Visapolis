// src/app/login/actions.js
'use server';

import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import dbConnect from '@/lib/dbconnect';
import Admin from '@/models/Admin';

const SECRET_KEY = process.env.NEXTAUTH_SECRET; // Re-using this secret from your .env.local

export async function login(prevState, formData) {
    await dbConnect();
    const email = formData.get("email");
    const password = formData.get("password");

    const user = await Admin.findOne({ email });
    if (!user) {
        return { error: "Invalid credentials" };
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
        return { error: "Invalid credentials" };
    }

    // Create the token (payload)
    const payload = {
        id: user._id,
        email: user.email,
    };

    // Sign the token
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1d' });

    // Set the cookie
    cookies().set('session_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 // 1 day
    });

    return redirect("/admin/dashboard");
}