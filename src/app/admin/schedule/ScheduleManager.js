'use client';
import { useActionState, useEffect, useState } from "react"; // <-- Import useState
import { useFormStatus } from "react-dom";
import { updateScheduleSettings } from "./actions";
import { addDays, format } from 'date-fns';
import React from 'react'; // Import React for fragments if needed

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <button type="submit" className="btn btn-gradient-primary me-2" disabled={pending}>
            {pending ? 'Saving Schedule...' : 'Save Schedule'}
        </button>
    );
}

const getNextSevenDays = () => {
    const days = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
        days.push(addDays(today, i));
    }
    return days;
};


// --- NEW SUB-COMPONENT FOR EACH DAY ---
// This component manages its own state for showing/hiding the custom time fields.
const DayAvailabilityInput = ({ day, index, initialStatus, initialFromTime, initialToTime }) => {
    // 1. State for all three properties makes the component fully controlled.
    const [status, setStatus] = useState(initialStatus);
    const [fromTime, setFromTime] = useState(initialFromTime || '09:00');
    const [toTime, setToTime] = useState(initialToTime || '17:00');

    // 2. A useEffect to sync state if props change (important for after-save updates)
    useEffect(() => {
        setStatus(initialStatus);
        setFromTime(initialFromTime || '09:00');
        setToTime(initialToTime || '17:00');
    }, [initialStatus, initialFromTime, initialToTime]);

    const getDisplayText = () => {
        // ... (This function is correct, no changes)
    };

    return (
        <div className="col-md-4 form-group">
            <label>{format(day, 'eeee, MMM d')}</label>
            <input type="hidden" name={`day_date_${index}`} value={format(day, 'yyyy-MM-dd')} />
            
            <select 
                className="form-control" 
                name={`day_status_${index}`}
                value={status} // Use value to be a controlled component
                onChange={(e) => setStatus(e.target.value)}
            >
                <option value="full_day">Full Day</option>
                <option value="custom">Custom Hours</option>
                <option value="unavailable">Unavailable</option>
            </select>
            
            {status === 'custom' && (
                <div className="d-flex mt-2 align-items-center" style={{ gap: '10px' }}>
                    <input 
                        type="time" 
                        name={`day_from_time_${index}`} 
                        className="form-control"
                        // 3. Use `value` and `onChange` for the time inputs
                        value={fromTime}
                        onChange={(e) => setFromTime(e.target.value)}
                    />
                    <span>to</span>
                    <input 
                        type="time" 
                        name={`day_to_time_${index}`} 
                        className="form-control"
                        value={toTime}
                        onChange={(e) => setToTime(e.target.value)}
                    />
                </div>
            )}
        </div>
    );
};


export default function ScheduleManager({ initialData }) {
    const [state, formAction] = useActionState(updateScheduleSettings, { message: null });
    const nextSevenDays = getNextSevenDays();

    const getDaySettings = (date) => {
        const dateString = format(date, 'yyyy-MM-dd');
        return initialData?.dayAvailability?.find(d => d.date === dateString) || {};
    };

    useEffect(() => {
        if (state?.message) {
            window.swal("Status", state.message, state.message.includes('success') ? "success" : "error");
        }
    }, [state]);


    return (
        <form className="forms-sample mt-4" action={formAction}>
            <h5 className="mb-3">Default Time Slot Configuration</h5>
            <div className="row">
                <div className="col-md-4 form-group">
                    <label>Default Start Time</label>
                    <input type="time" name="slotStartTime" className="form-control" defaultValue={initialData?.slotStartTime || '09:00'} />
                </div>
                <div className="col-md-4 form-group">
                    <label>Default End Time</label>
                    <input type="time" name="slotEndTime" className="form-control" defaultValue={initialData?.slotEndTime || '15:00'} />
                </div>
                <div className="col-md-4 form-group">
                    <label>Slot Duration (minutes)</label>
                    <input type="number" name="slotDuration" className="form-control" defaultValue={initialData?.slotDuration || 30} />
                </div>
            </div>

            <h5 className="mt-4 mb-3">Daily Availability (Next 7 Days)</h5>
            <div className="row">
                {nextSevenDays.map((day, index) => {
                    // We get the full settings object for the day
                    const daySettings = getDaySettings(day);
                    // Then we pass down ALL the necessary initial values
                    return (
                        <DayAvailabilityInput 
                            key={index}
                            day={day}
                            index={index}
                            initialStatus={daySettings.status || 'full_day'}
                            initialFromTime={daySettings.fromTime}
                            initialToTime={daySettings.toTime}
                        />
                    );
                })}
            </div>
            
            <div className="mt-4"><SubmitButton /></div>
        </form>
    );
}