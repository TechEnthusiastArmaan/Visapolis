// src/app/admin/dashboard/components/AvailabilityToggle.js
'use client';

import { useState } from 'react';
import { updateAppointmentStatus } from '../../actions/settingsActions';


export default function AvailabilityToggle({ initialStatus }) {
    const [isAvailable, setIsAvailable] = useState(initialStatus);
    const [isLoading, setIsLoading] = useState(false);

    const handleToggle = async () => {
        setIsLoading(true);
        const newStatus = !isAvailable;
        const result = await updateAppointmentStatus(newStatus);
        
        if (result.success) {
            setIsAvailable(newStatus);
            window.swal("Status Updated!", `Appointments are now ${newStatus ? 'OPEN' : 'CLOSED'}.`, "success");
        } else {
            window.swal("Error!", "Failed to update the status.", "error");
        }
        setIsLoading(false);
    };

    const buttonClass = isAvailable ? 'btn btn-gradient-success' : 'btn btn-gradient-danger';

    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">Appointment Availability</h4>
                <p className="card-description">Use this toggle to open or close appointment bookings on the public website.</p>
                <div className="d-flex justify-content-between align-items-center">
                    <div>Current Status: <strong className={isAvailable ? 'text-success' : 'text-danger'}>{isAvailable ? ' OPEN' : ' CLOSED'}</strong></div>
                    <button onClick={handleToggle} disabled={isLoading} className={`${buttonClass} btn-fw`}>{isLoading ? 'Updating...' : (isAvailable ? 'Turn OFF' : 'Turn ON')}</button>
                </div>
            </div>
        </div>
    );
}