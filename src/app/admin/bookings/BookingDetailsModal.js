// src/app/admin/bookings/BookingDetailsModal.js
'use client';

// A helper component to format and display a single piece of data
const DetailItem = ({ label, value }) => {
    if (!value || (Array.isArray(value) && value.length === 0)) {
        return null; // Don't render if the value is empty
    }
    
    const displayValue = Array.isArray(value) ? value.join(', ') : value;

    return (
        <div className="mb-3">
            <strong className="d-block text-muted">{label}</strong>
            <span>{displayValue}</span>
        </div>
    );
};

export default function BookingDetailsModal({ booking, onClose }) {
    if (!booking) return null;

    const formattedDate = new Date(booking.date).toLocaleDateString('en-US', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });

    return (
        <>
            {/* Modal Backdrop */}
            <div 
                className="modal-backdrop fade show" 
                style={{ display: 'block' }}
                onClick={onClose}
            ></div>
            
            {/* Modal Dialog */}
            <div 
                className="modal fade show" 
                tabIndex="-1" 
                style={{ display: 'block' }}
                onClick={(e) => e.target === e.currentTarget && onClose()} // Close modal if clicking outside the content area
            >
                <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Booking Details</h5>
                            <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
                        </div>
                       <div className="modal-body">
                    <h4>Appointment Info</h4>
                    <hr />
                    <DetailItem label="Date" value={formattedDate} />
                    <DetailItem label="Time" value={booking.time} />

                    <h4 className="mt-4">Client Information</h4>
                    <hr />
                    <DetailItem label="Full Name" value={booking.name} />
                    <DetailItem label="Email" value={booking.email} />
                    <DetailItem label="Phone" value={booking.phone} />
                </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={onClose}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}