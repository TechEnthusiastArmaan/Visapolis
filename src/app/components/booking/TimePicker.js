"use client";

import { useMemo } from 'react';

const generateTimeSlots = () => {
    const slots = [];
    // 9:00 AM to 2:30 PM
    for (let i = 9; i <= 14; i++) { 
        slots.push(`${String(i).padStart(2, '0')}:00`);
        if (i < 14) slots.push(`${String(i).padStart(2, '0')}:30`);
    }
    return slots;
};

export default function TimePicker({ selectedDate, onTimeSelect, onBack }) {
    const timeSlots = useMemo(() => generateTimeSlots(), []);

    return (
        <div className="booking-container">
            <button onClick={onBack} className="booking-back-button">&larr; Back to Date</button>
            <div className="booking-header">
                 <h2>Select a Time</h2>
                 <p>{selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
            </div>
            <div className="time-picker-grid">
                {timeSlots.map(time => (
                    <button key={time} onClick={() => onTimeSelect(time)} className="time-slot-btn">
                        {time}
                    </button>
                ))}
            </div>
        </div>
    );
}