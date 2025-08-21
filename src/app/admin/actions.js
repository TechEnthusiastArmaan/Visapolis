// src/app/admin/actions.js
'use server';

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logout() {
    // To log out, we simply delete the cookie.
    cookies().set('session_token', '', { expires: new Date(0) });
    return redirect("/login");
}