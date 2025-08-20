"use client";

import { useState } from 'react';

export default function Calendar({ onDateSelect }) {
    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());

    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const startingDay = firstDayOfMonth.getDay();

    const minBookingDate = new Date();
    minBookingDate.setDate(today.getDate() + 2);
    minBookingDate.setHours(0, 0, 0, 0); // Normalize to start of the day

    const handleSelect = (day) => {
        const date = new Date(currentYear, currentMonth, day);
        if (date >= minBookingDate) {
            onDateSelect(date);
        }
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

    return (
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg w-full max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Select a Date</h2>
            <div className="flex justify-between items-center mb-4">
                <button onClick={() => changeMonth(-1)} className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50" disabled={currentYear === today.getFullYear() && currentMonth === today.getMonth()}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <div className="text-lg font-semibold text-gray-700">
                    {new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long', year: 'numeric' })}
                </div>
                <button onClick={() => changeMonth(1)} className="p-2 rounded-full hover:bg-gray-100">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>
            <div className="grid grid-cols-7 gap-2 text-center text-sm">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => <div key={day} className="font-medium text-gray-500">{day}</div>)}
                {Array.from({ length: startingDay }).map((_, i) => <div key={`empty-${i}`} />)}
                {Array.from({ length: daysInMonth }).map((_, day) => {
                    const date = new Date(currentYear, currentMonth, day + 1);
                    const isPast = date < minBookingDate;
                    
                    return (
                        <button key={day} onClick={() => handleSelect(day + 1)} disabled={isPast}
                            className={`p-2 rounded-full transition-colors ${ isPast ? 'text-gray-300 cursor-not-allowed' : 'text-gray-700 hover:bg-blue-500 hover:text-white' }`}>
                            {day + 1}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
