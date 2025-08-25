// src/app/admin/bookings/BookingsTable.js
'use client'; 
import { useState } from 'react';
import BookingDetailsModal from './BookingDetailsModal';
import DeleteButton from './DeleteButton'; // Use your existing form-based delete button

export default function BookingsTable({ initialBookings, deleteBookingAction }) {
    const [bookings, setBookings] = useState(initialBookings);
    const [selectedBooking, setSelectedBooking] = useState(null);

    return (
        <>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th> Full Name </th>
                            <th> Email </th>
                            <th> Appointment Date </th>
                            <th> Time Slot </th>
                            <th> Received On </th>
                            <th className="text-end"> Actions </th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking) => (
                            <tr key={booking._id}>
                                <td>{booking.name}</td>
                                <td>{booking.email}</td>
                                <td>{new Date(booking.date).toLocaleDateString()}</td>
                                <td>{booking.time}</td>
                                <td>{new Date(booking.createdAt).toLocaleDateString()}</td>
                                <td className="text-end">
                                    {/* The "View Details" button to open the modal */}
                                    <button 
                                        className="btn btn-gradient-info btn-sm me-2" 
                                        onClick={() => setSelectedBooking(booking)}
                                    >
                                        View
                                    </button>
                                    
                                    {/* Your existing DeleteButton component */}
                                    <DeleteButton 
                                        bookingId={booking._id.toString()} 
                                        deleteAction={deleteBookingAction}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Render the modal, which will only be visible when selectedBooking is not null */}
            <BookingDetailsModal 
                booking={selectedBooking} 
                onClose={() => setSelectedBooking(null)} 
            />
        </>
    );
}