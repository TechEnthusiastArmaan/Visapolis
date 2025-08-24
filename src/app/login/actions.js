// src/app/login/actions.js
'use server';

import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import dbConnect from '@/lib/dbconnect';
import Admin from '@/models/Admin';
import { verifyPassword } from '@/lib/passwordUtils';


const SECRET_KEY = process.env.NEXTAUTH_SECRET;

export async function login(prevState, formData) {
    await dbConnect();
    const email = formData.get("email");
    const password = formData.get("password");
    let user; // Define user in the outer scope

    try {
        // Use the new utility function for verification.
        // It returns the user object on success or null on failure.
        const user = await verifyPassword(email, password);

        if (!user) {
            // This covers both "user not found" and "password mismatch" cases.
            return { error: "Invalid credentials" };
        }

        // If we get here, authentication was successful and 'user' is the validated user object.
        const payload = {
            id: user._id.toString(),
            email: user.email,
        };

        const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1d' });

        cookies().set('session_token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            path: '/',
            sameSite: 'lax',
            maxAge: 60 * 60 * 24 // 1 day
        });

    } catch (error) {
        console.error("Login action error:", error);
        return { error: "An unexpected server error occurred." };
    }

    redirect("/admin/dashboard");
}