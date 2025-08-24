// src/app/admin/bookings/page.js
import dbConnect from '@/lib/dbconnect';
import Booking from '@/models/Booking';
import { deleteBooking } from './actions'; // Import the new delete action
import BookingsTable from './BookingsTable';


// Server-side function to fetch all bookings from the database
async function getBookings() {
    await dbConnect();
    // Sort by createdAt descending to show the newest bookings first
    const bookings = await Booking.find({}).sort({ createdAt: -1 });
    return JSON.parse(JSON.stringify(bookings));
}

// A small, client-side component to confirm before deleting
import DeleteButton from './DeleteButton';

export default async function BookingsPage() {
     const initialBookings = await getBookings();

    // It passes the initial data and the server action down to the client component for rendering
    return (
      <BookingsTable 
          initialBookings={initialBookings} 
          deleteBookingAction={deleteBooking}
      />
    );
}