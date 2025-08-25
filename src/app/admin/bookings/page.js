// src/app/admin/bookings/page.js
import dbConnect from '@/lib/dbconnect';
import Booking from '@/models/Booking';
import { deleteBooking } from './actions';
import BookingsTable from './BookingsTable'; // <-- We use the client wrapper

async function getBookings() {
    await dbConnect();
    const bookings = await Booking.find({}).sort({ createdAt: -1 });
    return JSON.parse(JSON.stringify(bookings));
}

export default async function BookingsPage() {
    const initialBookings = await getBookings();

    return (
        <>
            <div className="page-header">
                <h3 className="page-title">
                    <span className="page-title-icon bg-gradient-danger text-white me-2">
                        <i className="mdi mdi-calendar-check"></i>
                    </span> Bookings & Appointments
                </h3>
            </div>
            <div className="row">
                <div className="col-lg-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">All Received Bookings</h4>
                            <p className="card-description">
                                Here are all the appointments scheduled by users.
                            </p>
                            {/* Render the client component, passing down the data and action */}
                            <BookingsTable
                                initialBookings={initialBookings}
                                deleteBookingAction={deleteBooking}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}