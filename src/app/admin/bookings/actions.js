// src/app/admin/bookings/actions.js
'use server';

import { revalidatePath } from 'next/cache';
import dbConnect from '@/lib/dbconnect';
import Booking from '@/models/Booking';

/**
 * Deletes a booking by its ID.
 * @param {string} bookingId - The ID of the booking to delete.
 */
export async function getBookings() {
  try {
    await dbConnect();
    const bookings = await Booking.find({}).sort({ createdAt: -1 });
    return JSON.parse(JSON.stringify(bookings));
  } catch (error) {
    console.error('Failed to fetch bookings:', error);
    return [];
  }
}
export async function deleteBooking(bookingId) {
    try {
        await dbConnect();
        await Booking.findByIdAndDelete(bookingId);

        // Crucial: This tells Next.js to re-fetch the data on the bookings page
        // so the deleted booking disappears from the list instantly.
        revalidatePath('/admin/bookings');
        
        return { success: true, message: 'Booking deleted successfully.' };
    } catch (error) {
        console.error('Error deleting booking:', error);
        return { success: false, message: 'Failed to delete booking.' };
    }
}