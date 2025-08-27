// src/app/admin/bookings/BookingsTable.js
'use client'; 
import { useState } from 'react';
import BookingDetailsModal from './BookingDetailsModal';
import DeleteButton from './DeleteButton';

export default function BookingsTable({ initialBookings, deleteBookingAction }) {
    // This client-side state holds the list of bookings displayed in the UI.
    const [bookings, setBookings] = useState(initialBookings);
    
    // State to manage which booking is shown in the modal.
    const [selectedBooking, setSelectedBooking] = useState(null);

    // --- THIS IS THE NEW FUNCTION ---
    // This function will be passed as a prop to the DeleteButton.
    // It's called by the DeleteButton after the server confirms a successful deletion.
    const handleBookingDeleted = (deletedBookingId) => {
        // We update our local 'bookings' state by filtering out the item that was just deleted.
        // This causes React to re-render the table instantly, removing the deleted row.
        setBookings(currentBookings => 
            currentBookings.filter(booking => booking._id !== deletedBookingId)
        );
    };

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
                                    <button 
                                        className="btn btn-gradient-info btn-sm me-2" 
                                        onClick={() => setSelectedBooking(booking)}
                                    >
                                        View
                                    </button>
                                    
                                    {/* --- THIS IS THE MODIFIED PART --- */}
                                    {/* We now pass the handleBookingDeleted function as the onDeleted prop. */}
                                    <DeleteButton 
                                        bookingId={booking._id.toString()} 
                                        deleteAction={deleteBookingAction}
                                        onDeleted={handleBookingDeleted}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <BookingDetailsModal 
                booking={selectedBooking} 
                onClose={() => setSelectedBooking(null)} 
            />
        </>
    );
}