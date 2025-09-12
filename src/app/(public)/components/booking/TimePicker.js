"use client";

import { useMemo, useState, useEffect } from 'react'; // Import useState and useEffect
import { format, isToday } from 'date-fns';
import { getBookedSlotsForDate } from '@/app/(public)/appointment/actions'; // Import the server action

// Helper function to generate all possible time slots for a day
const generateTimeSlots = (startTimeStr, endTimeStr, duration) => {
    if (!startTimeStr || !endTimeStr || !duration) {
        return [];
    }
    
    const slots = [];
    const interval = duration; // Duration in minutes

    const today = new Date(); // Use a base date for time calculations
    
    // Create start and end time Date objects
    const [startHour, startMinute] = startTimeStr.split(':').map(Number);
    const startTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), startHour, startMinute);

    const [endHour, endMinute] = endTimeStr.split(':').map(Number);
    const endTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), endHour, endMinute);

    let currentTime = new Date(startTime);

    // Loop while the START of a potential slot is less than the final end time
    while (currentTime < endTime) {
        // This check ensures a full slot can fit before the end time.
        // For example, if end time is 17:00 and duration is 40 mins,
        // the last valid slot to generate is 16:20 (ends at 17:00).
        // The 16:40 slot will not be generated as it would end at 17:20.
        const slotEndTime = new Date(currentTime.getTime() + interval * 60000);
        if (slotEndTime <= endTime) {
            slots.push(format(currentTime, 'HH:mm'));
        }
        currentTime.setMinutes(currentTime.getMinutes() + interval);
    }
    return slots;
};


export default function TimePicker({ selectedDate, onTimeSelect, onBack, settings }) {
        console.log('--- DEBUGGING TIME PICKER PROPS ---', { settings, selectedDate });

    const [bookedSlots, setBookedSlots] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // ... this useEffect is correct and remains unchanged ...
        if (selectedDate) {
            setIsLoading(true);
            getBookedSlotsForDate(selectedDate)
                .then(slots => setBookedSlots(slots))
                .catch(err => console.error("Failed to fetch booked slots:", err))
                .finally(() => setIsLoading(false));
        }
    }, [selectedDate]);

    // --- CHANGE 2: A more explicit and clear useMemo hook ---
    const timeSlots = useMemo(() => {
        if (!selectedDate || !settings) return [];

        const dateString = format(selectedDate, 'yyyy-MM-dd');
        const daySetting = settings.dayAvailability?.find(d => d.date === dateString);

        // 1. Establish the default working hours first
        let startTime = settings.slotStartTime;
        let endTime = settings.slotEndTime;
        let dayStatus = 'full_day';

        // 2. Check for a specific setting for the selected day and override defaults
        if (daySetting) {
            dayStatus = daySetting.status || 'full_day';

            if (dayStatus === 'unavailable') {
                return []; // If unavailable, stop here and return no slots.
            }

            // This is the key part: if status is custom and times are provided, USE THEM.
            if (dayStatus === 'custom' && daySetting.fromTime && daySetting.toTime) {
                startTime = daySetting.fromTime;
                endTime = daySetting.toTime;
            }
        }

        // 3. Final check for valid data before generating slots
        if (!startTime || !endTime || !settings.slotDuration) {
            console.error("Cannot generate slots: Missing start time, end time, or duration.");
            return [];
        }
        
        // Pass the definitively chosen times to the generator function
        return generateTimeSlots(startTime, endTime, settings.slotDuration);

    }, [selectedDate, settings]);

    // Early return for initial loading state
    if (!selectedDate || !settings) {
        // ... this part is unchanged
    }
    
    // --- CHANGE 2: Define current time and date check here for efficiency ---
    const now = new Date();
    const isSelectedDateToday = selectedDate ? isToday(selectedDate) : false;

    return (
        <div className="booking-container">
            <button onClick={onBack} className="booking-back-button">&larr; Back to Date Selection</button>
            <div className="booking-header">
                 <h2>Select a Time</h2>
                 <p>{selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
            </div>

            {isLoading ? (
                <div className="text-center" style={{ padding: '30px 0'}}>
                    <p>Checking available slots...</p>
                </div>
            ) : timeSlots.length > 0 ? (
                <div className="time-picker-grid">
                    {timeSlots.map(time => {
                        const isBooked = bookedSlots.includes(time);

                        // --- CHANGE 3: The new logic to disable past time slots ---
                        let isPast = false;
                        if (isSelectedDateToday) {
                            const [hour, minute] = time.split(':').map(Number);
                            const slotDateTime = new Date(selectedDate);
                            slotDateTime.setHours(hour, minute, 0, 0); // Set slot time on the selected date

                            // Check if the slot's time is before the current time
                            if (slotDateTime < now) {
                                isPast = true;
                            }
                        }

                        const isDisabled = isBooked || isPast;

                        return (
                            <button 
                                key={time} 
                                onClick={() => onTimeSelect(time)} 
                                className="time-slot-btn"
                                disabled={isDisabled}
                                // Update style logic to account for any disabled reason
                                style={isDisabled ? { backgroundColor: '#f0f0f0', color: '#ccc', cursor: 'not-allowed', textDecoration: 'line-through' } : {}}
                            >
                                {time}
                            </button>
                        );
                    })}
                </div>
            ) : (
                <div className="text-center" style={{ padding: '30px 0'}}>
                    <p>Sorry, no available time slots were found for this day.</p>
                </div>
            )}
        </div>
    );
}