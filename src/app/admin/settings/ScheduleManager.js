// src/app/admin/settings/ScheduleManager.js
'use client';
import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { updateSiteSettings } from "./actions";
import { addDays, format } from 'date-fns';

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <button type="submit" className="btn btn-gradient-primary me-2" disabled={pending}>
            {pending ? 'Saving Schedule...' : 'Save Schedule'}
        </button>
    );
}

// Helper to get the next 7 days
const getNextSevenDays = () => {
    const days = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
        days.push(addDays(today, i));
    }
    return days;
};

export default function ScheduleManager({ initialData }) {
    const [state, formAction] = useActionState(updateSiteSettings, { message: null });
    const nextSevenDays = getNextSevenDays();

    // Helper to find the saved status for a given date
    const getStatusForDate = (date) => {
        const dateString = format(date, 'yyyy-MM-dd');
        const found = initialData?.dayAvailability?.find(d => d.date === dateString);
        return found ? found.status : 'full_day';
    };

    useEffect(() => { /* ... swal notification logic ... */ }, [state]);

    return (
        <div className="card mt-4">
            <div className="card-body">
                <h4 className="card-title">Manage Appointment Schedule</h4>
                <p className="card-description">Set your availability for clients.</p>

                <form className="forms-sample mt-4" action={formAction}>
                    <h5 className="mb-3">Time Slot Configuration</h5>
                    <div className="row">
                        <div className="col-md-4 form-group">
                            <label>Start Time</label>
                            <input type="time" name="slotStartTime" className="form-control" defaultValue={initialData?.slotStartTime || '09:00'} />
                        </div>
                        <div className="col-md-4 form-group">
                            <label>End Time</label>
                            <input type="time" name="slotEndTime" className="form-control" defaultValue={initialData?.slotEndTime || '15:00'} />
                        </div>
                        <div className="col-md-4 form-group">
                            <label>Slot Duration (minutes)</label>
                            <input type="number" name="slotDuration" className="form-control" defaultValue={initialData?.slotDuration || 30} />
                        </div>
                    </div>

                    <h5 className="mt-4 mb-3">Daily Availability (Next 7 Days)</h5>
                    <div className="row">
                        {nextSevenDays.map((day, index) => (
                            <div className="col-md-4 form-group" key={index}>
                                <label>{format(day, 'eeee, MMM d')}</label>
                                <input type="hidden" name={`day_date_${index}`} value={format(day, 'yyyy-MM-dd')} />
                                <select className="form-control" name={`day_status_${index}`} defaultValue={getStatusForDate(day)}>
                                    <option value="full_day">Full Day</option>
                                    <option value="morning">Morning Only (AM)</option>
                                    <option value="afternoon">Afternoon Only (PM)</option>
                                    <option value="unavailable">Unavailable</option>
                                </select>
                            </div>
                        ))}
                    </div>
                    
                    {/* --- Pass all hidden fields for other settings --- */}
                    <input type="hidden" name="phoneNumber" defaultValue={initialData?.phoneNumber} />
                    <input type="hidden" name="email" defaultValue={initialData?.email} />
                    <input type="hidden" name="address" defaultValue={initialData?.address} />
                    <input type="hidden" name="googleMapsUrl" defaultValue={initialData?.googleMapsUrl} />
                    <input type="hidden" name="workingHours" defaultValue={initialData?.workingHours} />
                    <input type="hidden" name="facebookUrl" defaultValue={initialData?.facebookUrl} />
                    <input type="hidden" name="twitterUrl" defaultValue={initialData?.twitterUrl} />
                    <input type="hidden" name="linkedinUrl" defaultValue={initialData?.linkedinUrl} />
                    <input type="hidden" name="instagramUrl" defaultValue={initialData?.instagramUrl} />
                    <input type="hidden" name="tiktokUrl" defaultValue={initialData?.tiktokUrl} />
                     <div className="mt-4">
                        <SubmitButton />
                    </div>
                </form>
            </div>
        </div>
    );
}