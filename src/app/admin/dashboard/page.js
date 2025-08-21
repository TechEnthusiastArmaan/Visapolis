// src/app/admin/dashboard/page.js
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import dbConnect from "@/lib/dbconnect";
import Booking from "@/models/Booking";

const SECRET_KEY = process.env.NEXTAUTH_SECRET;

// A self-contained helper function to get user info on the server
async function getUser() {
    const token = cookies().get('session_token')?.value;
    if (!token) return null;

    try {
        // Decode the user payload from the token
        const decoded = jwt.verify(token, SECRET_KEY);
        return decoded; // This will contain { id, email }
    } catch (error) {
        return null; // Token is invalid or expired
    }
}

async function getBookingCount() {
    await dbConnect();
    const count = await Booking.countDocuments();
    return count;
}

export default async function DashboardPage() {
    const user = await getUser();
    const bookingCount = await getBookingCount();

    return (
        <div>
            <h1>Dashboard</h1>
            {user ? (
                <p>Welcome, <strong>{user.email}</strong>!</p>
            ) : (
                <p>Welcome! Could not verify user.</p>
            )}
            <hr style={{ margin: '20px 0' }} />
            
            <div style={{ padding: '20px', border: '1px solid #eee', borderRadius: '8px' }}>
                <h2>Overview</h2>
                <p>You have a total of <strong>{bookingCount}</strong> appointment bookings.</p>
            </div>
        </div>
    );
}