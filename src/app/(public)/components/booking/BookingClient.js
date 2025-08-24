// src/app/components/booking/BookingClient.js
'use client';

import { useState } from 'react';
import DatePicker from './DatePicker';
import TimePicker from './TimePicker';
import ApplicationForm from '../ApplicationForm'; // <-- IMPORTING YOUR FORM

export default function BookingClient() {
  const [step, setStep] = useState(1); // 1: Date, 2: Time, 3: Form
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setStep(2);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setStep(3);
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {step > 1 && (
        <button
          onClick={handleBack}
          className="mb-6 text-sm font-medium text-gray-600 hover:text-gray-900"
        >
          &larr; Back to {step === 2 ? 'Date Selection' : 'Time Selection'}
        </button>
      )}

      {step === 1 && <DatePicker onDateSelect={handleDateSelect} />}
      
      {step === 2 && selectedDate && (
        <TimePicker
          selectedDate={selectedDate}
          onTimeSelect={handleTimeSelect}
        />
      )}

      {step === 3 && selectedDate && selectedTime && (
        // Passing date and time to your form
        <ApplicationForm
          selectedDate={selectedDate}
          selectedTime={selectedTime}
        />
      )}
    </div>
  );
}