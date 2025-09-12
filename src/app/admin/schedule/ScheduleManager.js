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
    // State for all three properties, making the component fully controlled.
    const [status, setStatus] = useState(initialStatus);
    const [fromTime, setFromTime] = useState(initialFromTime || '09:00');
    const [toTime, setToTime] = useState(initialToTime || '17:00');

    // NEW: This effect syncs the component's state with new props from the parent.
    // This is crucial for reflecting saved changes after a re-render.
    useEffect(() => {
        setStatus(initialStatus);
        setFromTime(initialFromTime || '09:00');
        setToTime(initialToTime || '17:00');
    }, [initialStatus, initialFromTime, initialToTime]);


    const handleStatusChange = (newStatus) => {
        setStatus(newStatus);
    };
    
    const getDisplayText = () => {
        switch(status) {
            case 'full_day': return 'Full Day';
            case 'custom': return 'Custom Hours';
            case 'unavailable': return 'Unavailable';
            default: return 'Full Day';
        }
    };

    return (
        <div className="col-md-4 form-group">
            <label>{format(day, 'eeee, MMM d')}</label>
            <input type="hidden" name={`day_date_${index}`} value={format(day, 'yyyy-MM-dd')} />
            
            <div className="dropdown">
                <button 
                    className="btn btn-light dropdown-toggle w-100 d-flex justify-content-between align-items-center" 
                    type="button" 
                    id={`dropdown-${index}`}
                    data-bs-toggle="dropdown" 
                    aria-expanded="false"
                >
                    {getDisplayText()}
                </button>
                <ul className="dropdown-menu">
                    <li><button className="dropdown-item" type="button" onClick={() => handleStatusChange('full_day')}>Full Day</button></li>
                    <li><button className="dropdown-item" type="button" onClick={() => handleStatusChange('custom')}>Custom Hours</button></li>
                    <li><button className="dropdown-item" type="button" onClick={() => handleStatusChange('unavailable')}>Unavailable</button></li>                
                </ul>
                <input type="hidden" name={`day_status_${index}`} value={status} />
            </div>

            {status === 'custom' && (
                <div className="d-flex mt-2 align-items-center" style={{ gap: '10px' }}>
                    <input 
                        type="time" 
                        name={`day_from_time_${index}`} 
                        className="form-control" 
                        // CHANGED: Use `value` instead of `defaultValue`
                        value={fromTime}
                        // CHANGED: Add `onChange` to update state
                        onChange={(e) => setFromTime(e.target.value)}
                    />
                    <span>to</span>
                    <input 
                        type="time" 
                        name={`day_to_time_${index}`} 
                        className="form-control" 
                        // CHANGED: Use `value` instead of `defaultValue`
                        value={toTime}
                        // CHANGED: Add `onChange` to update state
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

    // Helper to find the full settings object for a given date
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