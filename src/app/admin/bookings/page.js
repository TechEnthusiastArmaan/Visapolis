// src/app/admin/bookings/page.js
import dbConnect from '@/lib/dbconnect';
import Booking from '@/models/Booking';
import { deleteBooking } from './actions'; // Import the new delete action

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
    const bookings = await getBookings();

    return (
        <div>
            <h1>Appointment Bookings</h1>
            <p>Here are all the appointments scheduled through your website.</p>
            
            <div style={{ overflowX: 'auto', marginTop: '20px' }}>
                <table style={{ width: '100%', minWidth: '800px', borderCollapse: 'collapse', fontSize: '14px' }}>
                    <thead>
                        <tr style={{ borderBottom: '2px solid #333' }}>
                            <th style={{ padding: '12px', textAlign: 'left' }}>Date</th>
                            <th style={{ padding: '12px', textAlign: 'left' }}>Time</th>
                            <th style={{ padding: '12px', textAlign: 'left' }}>Name</th>
                            <th style={{ padding: '12px', textAlign: 'left' }}>Email</th>
                            <th style={{ padding: '12px', textAlign: 'left' }}>Phone</th>
                            <th style={{ padding: '12px', textAlign: 'left' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.length > 0 ? (
                            bookings.map((booking) => (
                                <tr key={booking._id} style={{ borderBottom: '1px solid #eee' }}>
                                    <td style={{ padding: '12px' }}>{new Date(booking.date).toLocaleDateString()}</td>
                                    <td style={{ padding: '12px' }}>{booking.time}</td>
                                    <td style={{ padding: '12px' }}>{booking.name}</td>
                                    <td style={{ padding: '12px' }}>{booking.email}</td>
                                    <td style={{ padding: '12px' }}>{booking.phone}</td>
                                    <td style={{ padding: '12px' }}>
                                        {/* 
                                          The DeleteButton component wraps a form that calls our server action.
                                          This is the standard way to perform actions from a list.
                                        */}
                                        <DeleteButton bookingId={booking._id} />
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" style={{ padding: '20px', textAlign: 'center' }}>No bookings found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}