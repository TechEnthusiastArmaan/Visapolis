// src/app/(admin)/bookings/page.js
import dbConnect from '@/lib/dbconnect';
import Booking from '@/models/Booking';

async function getBookings() {
    await dbConnect();
    const bookings = await Booking.find({}).sort({ createdAt: -1 });
    return JSON.parse(JSON.stringify(bookings));
}

export default async function BookingsPage() {
    const bookings = await getBookings();

    return (
        <div>
            <h1>All Bookings</h1>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr style={{ borderBottom: '1px solid #ccc' }}>
                        <th style={{ padding: '10px', textAlign: 'left' }}>Date</th>
                        <th style={{ padding: '10px', textAlign: 'left' }}>Time</th>
                        <th style={{ padding: '10px', textAlign: 'left' }}>Name</th>
                        <th style={{ padding: '10px', textAlign: 'left' }}>Email</th>
                        <th style={{ padding: '10px', textAlign: 'left' }}>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((booking) => (
                        <tr key={booking._id} style={{ borderBottom: '1px solid #eee' }}>
                            <td style={{ padding: '10px' }}>{new Date(booking.date).toLocaleDateString()}</td>
                            <td style={{ padding: '10px' }}>{booking.time}</td>
                            <td style={{ padding: '10px' }}>{booking.name}</td>
                            <td style={{ padding: '10px' }}>{booking.email}</td>
                            <td style={{ padding: '10px' }}>{booking.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}