"use client";

import { useState } from 'react';
import { format, addDays } from 'date-fns'; // Import the date-fns library

export default function Calendar({ onDateSelect, dayAvailability = [] }) {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalize today to the start of the day
    
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());

    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const startingDay = firstDayOfMonth.getDay(); // 0 for Sunday

    // Bookings are available starting from tomorrow
    const minBookingDate = addDays(today, 1);

    const handleSelect = (day) => {
        const date = new Date(currentYear, currentMonth, day);
        onDateSelect(date);
    };

    const changeMonth = (offset) => {
        const newMonthDate = new Date(currentYear, currentMonth + offset, 1);
        if (newMonthDate.getFullYear() < today.getFullYear() || 
           (newMonthDate.getFullYear() === today.getFullYear() && newMonthDate.getMonth() < today.getMonth())) {
            return;
        }
        setCurrentMonth(newMonthDate.getMonth());
        setCurrentYear(newMonthDate.getFullYear());
    };
    
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
                    {format(new Date(currentYear, currentMonth), 'MMMM yyyy')}
                </div>
                <button onClick={() => changeMonth(1)}>
                     <i className="fas fa-chevron-right"></i>
                </button>
            </div>
            <div className="calendar-grid">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => <div key={day} className="day-name">{day}</div>)}
                {Array.from({ length: startingDay }).map((_, i) => <div key={`empty-${i}`} />)}
                {Array.from({ length: daysInMonth }).map((_, dayIndex) => {
                    const day = dayIndex + 1;
                    const date = new Date(currentYear, currentMonth, day);
                    date.setHours(0, 0, 0, 0); // Normalize for comparison

                    const dateString = format(date, 'yyyy-MM-dd');
                    const daySetting = dayAvailability.find(d => d.date === dateString);

                    const isPast = date < minBookingDate;
                    const isUnavailable = daySetting?.status === 'unavailable';
                    
                    return (
                        <button 
                            key={day} 
                            onClick={() => handleSelect(day)} 
                            disabled={isPast || isUnavailable} 
                            className="day-cell"
                        >
                            {day}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}