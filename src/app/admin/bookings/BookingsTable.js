// src/app/admin/bookings/BookingsTable.js
'use client'; // This component needs to be a client component for state and event handling

import { useState } from 'react';
import BookingDetailsModal from './BookingDetailsModal';

export default function BookingsTable({ initialBookings, deleteBookingAction }) {
  const [bookings, setBookings] = useState(initialBookings);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const handleDelete = async (bookingId) => {
    if (window.confirm('Are you sure you want to delete this booking?')) {
      const result = await deleteBookingAction(bookingId);
      if (result.success) {
        setBookings(currentBookings => currentBookings.filter(b => b._id !== bookingId));
      } else {
        alert(result.message || 'Failed to delete booking.');
      }
    }
  };

  return (
    <>
      <div>
        <h1>Appointment Bookings</h1>
        <p>Here are all the appointments scheduled through your website.</p>
        
        <div style={{ overflowX: 'auto', marginTop: '20px' }}>
          {/* Using AdminLTE classes for a styled table that fits the theme */}
          <div className="card">
            <div className="card-body p-0"> {/* p-0 to make table flush */}
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th style={{ padding: '12px' }}>Date</th>
                    <th style={{ padding: '12px' }}>Time</th>
                    <th style={{ padding: '12px' }}>Name</th>
                    <th style={{ padding: '12px' }}>Email</th>
                    <th style={{ padding: '12px' }}>Phone</th>
                    <th style={{ width: '150px', padding: '12px' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.length > 0 ? (
                    bookings.map((booking) => (
                      <tr key={booking._id}>
                        <td style={{ padding: '12px' }}>{new Date(booking.date).toLocaleDateString()}</td>
                        <td style={{ padding: '12px' }}>{booking.time}</td>
                        <td style={{ padding: '12px' }}>{booking.name}</td>
                        <td style={{ padding: '12px' }}>{booking.email}</td>
                        <td style={{ padding: '12px' }}>{booking.phone}</td>
                        <td style={{ padding: '12px' }}>
                          {/* NEW "View" Button */}
                          <button 
                            className="btn btn-info btn-sm me-2" 
                            onClick={() => setSelectedBooking(booking)}
                          >
                            View
                          </button>
                          
                          {/* Existing Delete Logic */}
                          <button onClick={() => handleDelete(booking._id)} className="btn btn-danger btn-sm">
                            Delete
                          </button>
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
        </div>
      </div>

      {/* The Modal Component (sits outside the main div) */}
      <BookingDetailsModal 
          booking={selectedBooking} 
          onClose={() => setSelectedBooking(null)} 
      />
    </>
  );
}