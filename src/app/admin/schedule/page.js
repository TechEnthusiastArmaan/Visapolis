// src/app/admin/schedule/page.js
import Link from 'next/link';
import { getSiteSettings } from '../settings/actions'; // We can reuse this action to get data
import ScheduleManager from './ScheduleManager'; // We will create this component next

export default async function SchedulePage() {
    // Fetch the current settings to populate the form
    const settings = await getSiteSettings();

    return (
        <>
            <div className="page-header">
                <h3 className="page-title">
                    <span className="page-title-icon bg-gradient-success text-white me-2">
                        <i className="mdi mdi-calendar-clock"></i>
                    </span> Manage Schedule
                </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link href="/admin/dashboard">Dashboard</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Schedule</li>
                    </ol>
                </nav>
            </div>
            <div className="row">
                <div className="col-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Appointment Availability</h4>
                            <p className="card-description">
                                Set your time slots and daily availability for client bookings.
                            </p>
                            <ScheduleManager initialData={settings} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}