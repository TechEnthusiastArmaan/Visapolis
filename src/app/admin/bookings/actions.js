// src/app/admin/bookings/actions.js
'use server';

import dbConnect from '@/lib/dbconnect';
import Booking from '@/models/Booking';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function deleteBooking(bookingId) {
    if (!bookingId) {
        return { success: false, message: 'Booking ID is required.' };
    }

    try {
        await dbConnect();
        await Booking.findByIdAndDelete(bookingId);
        
        // This is crucial! It tells Next.js to refetch the data on the bookings page.
        revalidatePath('/admin/bookings');
        
        return { success: true, message: 'Booking deleted successfully.' };
    } catch (error) {
        console.error('Error deleting booking:', error);
        // Return a structured error so the server doesn't crash
        return { success: false, message: `Failed to delete booking: ${error.message}` };
    }
}