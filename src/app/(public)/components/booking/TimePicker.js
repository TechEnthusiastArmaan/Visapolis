"use client";

import { useMemo } from 'react';
import { format } from 'date-fns';

// Helper function is now outside the component and accepts settings
const generateTimeSlots = (startTimeStr, endTimeStr, duration, dayStatus) => {
    if (!startTimeStr || !endTimeStr || !duration) {
        return []; // Return empty if settings are missing
    }
    const start = startTimeStr || '09:00';
    const end = endTimeStr || '15:00';
    const interval = duration || 30;

    const slots = [];
    const [startHour, startMinute] = startTimeStr.split(':').map(Number);
    const [endHour, endMinute] = endTimeStr.split(':').map(Number);

    const today = new Date();
    let currentTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), startHour, startMinute);
    const endTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), endHour, endMinute);

    while (currentTime < endTime) {
        const timeString = format(currentTime, 'HH:mm');
        let isValidSlot = true;

        // Filter slots based on the day's availability status
        if (dayStatus === 'morning' && currentTime.getHours() >= 12) {
            isValidSlot = false;
        }
        if (dayStatus === 'afternoon' && currentTime.getHours() < 12) {
            isValidSlot = false;
        }

        if (isValidSlot) {
            slots.push(timeString);
        }
        
        currentTime.setMinutes(currentTime.getMinutes() + duration);
    }
    
    return slots;
};

export default function TimePicker({ selectedDate, onTimeSelect, onBack, settings }) {
    if (!selectedDate || !settings.slotStartTime) {
        return (
            <div className="booking-container">
                <button onClick={onBack} className="booking-back-button">&larr; Back</button>
                <div className="booking-header">
                    <h2>Loading Times...</h2>
                    <p>Please wait a moment.</p>
                </div>
            </div>
        );
    }
    // Get the availability status for the SPECIFIC selected date
     const timeSlots = useMemo(() => {
        // If the necessary data isn't here yet, return an empty array.
        // The time slots will be calculated on the next render when the props are ready.
        if (!selectedDate || !settings) {
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
        
    // Depend on the props themselves. React will handle the object comparison.
    }, [selectedDate, settings]);


    // 2. NOW, perform the early return if props are missing.
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
                    <p>No available time slots for this day. Please select another date.</p>
                </div>
            )}
        </div>
    );
}