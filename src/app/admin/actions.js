// src/app/admin/actions.js
'use server';

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logout() {
    // To log out, we simply delete the cookie.
    cookies().set('session_token', '', { expires: new Date(0) });
    return redirect("/login");
}
import dbConnect from '@/lib/dbconnect';
import ContactSubmission from '@/models/ContactSubmission';

// New function to fetch contact queries
export async function getContactSubmissions() {
    try {
        await dbConnect();
        const submissions = await ContactSubmission.find({}).sort({ createdAt: -1 });
        return JSON.parse(JSON.stringify(submissions));
    } catch (error) {
        console.error('Failed to fetch contact submissions:', error);
        return [];
    }
}