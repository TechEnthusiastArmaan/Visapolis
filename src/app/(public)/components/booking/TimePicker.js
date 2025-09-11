"use client";

import { useMemo } from 'react';
import { format } from 'date-fns';

const generateTimeSlots = (startTimeStr, endTimeStr, duration, dayStatus) => {
    // This helper function can stay the same, but let's make it more robust with defaults.
    const start = startTimeStr || '09:00';
    const end = endTimeStr || '15:00';
    const interval = duration || 30;
    
    const slots = [];
    const [startHour, startMinute] = start.split(':').map(Number);
    const [endHour, endMinute] = end.split(':').map(Number);

    const today = new Date();
    let currentTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), startHour, startMinute);
    const endTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), endHour, endMinute);

    while (currentTime < endTime) {
        const timeString = format(currentTime, 'HH:mm');
        let isValidSlot = true;

        if (dayStatus === 'morning' && currentTime.getHours() >= 12) {
            isValidSlot = false;
        }
        if (dayStatus === 'afternoon' && currentTime.getHours() < 12) {
            isValidSlot = false;
        }

        if (isValidSlot) {
            slots.push(timeString);
        }
        
        currentTime.setMinutes(currentTime.getMinutes() + interval);
    }
    
    return slots;
};

export default function TimePicker({ selectedDate, onTimeSelect, onBack, settings }) {
    
    // --- THIS IS THE FINAL, CORRECTED LOGIC ---

    // 1. All Hooks are called UNCONDITIONALLY at the top of the component.
    const timeSlots = useMemo(() => {
        // We move the check for missing/incomplete data INSIDE the hook.
        // If data isn't ready, we generate an empty array, which is a valid result.
        if (!selectedDate || !settings?.slotStartTime) {
            return [];
        }

        const dateString = format(selectedDate, 'yyyy-MM-dd');
        const dayStatus = settings.dayAvailability?.find(d => d.date === dateString)?.status || 'full_day';

        return generateTimeSlots(
            settings.slotStartTime,
            settings.slotEndTime,
            settings.slotDuration,
            dayStatus
        );
        
    // The dependency array now correctly lists all external variables used inside.
    }, [selectedDate, settings]);


    // 2. The early return now happens AFTER all hooks have been called.
    // This is the single source of truth for the loading state.
    if (!selectedDate || !settings) {
        return (
            <div className="booking-container">
                <button onClick={onBack} className="booking-back-button">&larr; Back to Date</button>
                <div className="booking-header">
                    <h2>Loading Times...</h2>
                    <p>Please wait.</p>
                </div>
            </div>
        );
    }
    
    // --- END CORRECTION ---

    return (
        <div className="booking-container">
            <button onClick={onBack} className="booking-back-button">&larr; Back to Date Selection</button>
            <div className="booking-header">
                 <h2>Select a Time</h2>
                 <p>{selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
            </div>

            {timeSlots.length > 0 ? (
                <div className="time-picker-grid">
                    {timeSlots.map(time => (
                        <button key={time} onClick={() => onTimeSelect(time)} className="time-slot-btn">
                            {time}
                        </button>
                    ))}
                </div>
            ) : (
                <div className="text-center" style={{ padding: '30px 0'}}>
                    <p>Sorry, no available time slots were found for this day. Please select another date.</p>
                </div>
            )}
        </div>
    );
}