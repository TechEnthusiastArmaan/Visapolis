"use client";

import { useState } from 'react';

export default function Calendar({ onDateSelect }) {
    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());

    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const startingDay = firstDayOfMonth.getDay(); // 0 for Sunday, 1 for Monday...

    const minBookingDate = new Date();
    minBookingDate.setDate(today.getDate() + 1); // Booking available from tomorrow
    minBookingDate.setHours(0, 0, 0, 0); // Normalize to start of the day

    const handleSelect = (day) => {
        const date = new Date(currentYear, currentMonth, day);
        if (date >= minBookingDate) {
            onDateSelect(date);
        }
    };

    const changeMonth = (offset) => {
        const newMonthDate = new Date(currentYear, currentMonth + offset, 1);
        // Prevent navigating to past months
        if (newMonthDate.getFullYear() < today.getFullYear() || 
           (newMonthDate.getFullYear() === today.getFullYear() && newMonthDate.getMonth() < today.getMonth())) {
            return;
        }
        setCurrentMonth(newMonthDate.getMonth());
        setCurrentYear(newMonthDate.getFullYear());
    };
    
    // Check if the "previous month" button should be disabled
    const isPrevMonthDisabled = currentYear === today.getFullYear() && currentMonth === today.getMonth();

    return (
        <div className="booking-container">
            <div className="booking-header">
                <h2>Select a Date</h2>
            </div>
            <div className="calendar-nav">
                <button onClick={() => changeMonth(-1)} disabled={isPrevMonthDisabled}>
                    <i className="fas fa-chevron-left"></i>
                </button>
                <div className="month-display">
                    {new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long', year: 'numeric' })}
                </div>
                <button onClick={() => changeMonth(1)}>
                     <i className="fas fa-chevron-right"></i>
                </button>
            </div>
            <div className="calendar-grid">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => <div key={day} className="day-name">{day}</div>)}
                {Array.from({ length: startingDay }).map((_, i) => <div key={`empty-${i}`} />)}
                {Array.from({ length: daysInMonth }).map((_, day) => {
                    const date = new Date(currentYear, currentMonth, day + 1);
                    const isPast = date < minBookingDate;
                    
                    return (
                        <button key={day} onClick={() => handleSelect(day + 1)} disabled={isPast} className="day-cell">
                            {day + 1}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}