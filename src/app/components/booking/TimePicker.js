"use client";

import { useMemo } from 'react';

const generateTimeSlots = () => {
    const slots = [];
    for (let i = 9; i <= 14; i++) {
        slots.push(`${String(i).padStart(2, '0')}:00`);
        if (i < 14) slots.push(`${String(i).padStart(2, '0')}:30`);
    }
    return slots;
};

export default function TimePicker({ selectedDate, onTimeSelect, onBack }) {
    const timeSlots = useMemo(() => generateTimeSlots(), []);

    return (
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg w-full max-w-md mx-auto">
            <button onClick={onBack} className="text-sm text-blue-600 hover:underline mb-4">&larr; Back to Date</button>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">Select a Time</h2>
            <p className="text-center text-gray-500 mb-6">{selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {timeSlots.map(time => (
                    <button key={time} onClick={() => onTimeSelect(time)}
                        className="w-full p-3 bg-gray-100 text-gray-800 rounded-lg hover:bg-blue-500 hover:text-white font-semibold transition-colors">
                        {time}
                    </button>
                ))}
            </div>
        </div>
    );
}
