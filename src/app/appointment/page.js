"use client";

import { useState } from 'react';
import Image from 'next/image';
import { bookAppointment } from './actions';

// Import the new components
import Calendar from '../components/booking/Calendar';
import TimePicker from '../components/booking/TimePicker';
import BookingForm from '../components/booking/BookingForm';

// Import the specific CSS for this page
import './booking.css';
import Breadcrumb from '../components/about-sections/Breadcrumb';


export default function AppointmentPage() {
    const [step, setStep] = useState(1); // 1: Date, 2: Time, 3: Form
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState('');
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState(null); // 'success' or 'error'
    const [errorMessage, setErrorMessage] = useState('');

    const handleDateSelect = (date) => {
        setSelectedDate(date);
        setStep(2);
    };

    const handleTimeSelect = (time) => {
        setSelectedTime(time);
        setStep(3);
    };

    const handleFormSubmit = async (formData) => {
        setIsSubmitting(true);
        setSubmissionStatus(null);
        setErrorMessage('');

        const bookingData = {
            date: selectedDate.toISOString().split('T')[0], // YYYY-MM-DD
            time: selectedTime,
            ...formData
        };

        try {
            const result = await bookAppointment(bookingData);
            if (result.success) {
                setSubmissionStatus('success');
            } else {
                setSubmissionStatus('error');
                setErrorMessage(result.error || 'An unknown error occurred.');
            }
        } catch (error) {
            setSubmissionStatus('error');
            setErrorMessage('Failed to connect to the server. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };
    
    const handleReset = () => {
      setStep(1);
      setSelectedDate(null);
      setSelectedTime('');
      setSubmissionStatus(null);
      setErrorMessage('');
    }

    const renderConfirmation = () => (
        <div className="booking-container submission-status-box">
             <div className="icon success">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <h3>Booking Confirmed!</h3>
            <p>
                Your appointment for {selectedTime} on {selectedDate.toLocaleDateString()} is scheduled. A confirmation email has been sent to you.
            </p>
             <button onClick={handleReset} className="btn-style-one circle">Book Another</button>
        </div>
    );
    
    const renderError = () => (
        <div className="booking-container submission-status-box">
             <div className="icon error">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>
            </div>
            <h3>Booking Failed</h3>
            <p className="text-danger">{errorMessage}</p>
            <button onClick={() => setStep(3)} className="btn-style-one circle">
                Try Again<span></span>
            </button>
        </div>
    );

    const renderStep = () => {
        if (submissionStatus === 'success') return renderConfirmation();
        if (submissionStatus === 'error' && step === 3) return renderError(); // Show error only on form step

        switch (step) {
            case 1:
                return <Calendar onDateSelect={handleDateSelect} />;
            case 2:
                return <TimePicker selectedDate={selectedDate} onTimeSelect={handleTimeSelect} onBack={() => setStep(1)} />;
            case 3:
                return <BookingForm selectedDate={selectedDate} selectedTime={selectedTime} onSubmit={handleFormSubmit} onBack={() => setStep(2)} isSubmitting={isSubmitting} />;
            default:
                return <Calendar onDateSelect={handleDateSelect} />;
        }
    };

    return (
        <>
            <Breadcrumb title="Book an Appointment" breadcrumbText="Appointment" />
            <div className="appoinment-style-one-area default-padding">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-xl-6 offset-xl-1 order-lg-last">
                           {renderStep()}
                        </div>
                        <div className="col-xl-5">
                            <div className="appoinment-style-two-thumb">
                                <div className="thumb-inner">
                                    <Image src="/assets/img/illustration/11.png" alt="Illustration" width={485} height={600} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}