// src/app/(public)/appointment/BookingClient.js
'use client';

import { useState } from 'react';
import Calendar from '../components/booking/Calendar';
import TimePicker from '../components/booking/TimePicker';
import BookingForm from '../components/booking/BookingForm';
import AppointmentIntro from '../components/booking/AppointmentIntro';
// import PageHeader from '../components/PageHeader';
import './booking.css'; 
import Breadcrumb from '../../(public)/components/about-sections/Breadcrumb';


export default function BookingClient({ settings }) {
    const [step, setStep] = useState(1);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState('');
    const [submissionStatus, setSubmissionStatus] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const handleDateSelect = (date) => {
        setSelectedDate(date);
        setStep(2);
    };

    const handleTimeSelect = (time) => {
        setSelectedTime(time);
        setStep(3);
    };
    
    const handleSuccess = () => setSubmissionStatus('success');
    const handleError = (errorMsg) => {
        setSubmissionStatus('error');
        setErrorMessage(errorMsg);
    };

    const handleReset = () => {
        setStep(1);
        setSelectedDate(null);
        setSelectedTime('');
        setSubmissionStatus(null);
        setErrorMessage('');
    };

    const renderConfirmation = () => (
        <div className="booking-container submission-status-box">
             <div className="icon success">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <h3>Booking Confirmed!</h3>
            <p>
                Your appointment for {selectedTime} on {selectedDate?.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} is scheduled. A confirmation email has been sent to you.
            </p>
             <button onClick={handleReset} className="btn-style-one circle">Book Another Appointment</button>
        </div>
    );
    
    const renderError = () => (
         <div className="booking-container submission-status-box">
            <div className="icon error">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>
           </div>
           <h3>Booking Failed</h3>
           <p className="text-danger">{errorMessage}</p>
           <button onClick={() => { setSubmissionStatus(null); setStep(1); }} className="btn-style-one circle">
               Try Again<span></span>
           </button>
       </div>
    );

    // This function determines which step of the booking process to show.
    // It has access to the `settings` prop from the main component's scope.
    const renderStep = () => {
        if (submissionStatus === 'success') return renderConfirmation();
        if (submissionStatus === 'error') return renderError();

        switch (step) {
            case 1:
                return <Calendar onDateSelect={handleDateSelect} dayAvailability={settings?.dayAvailability} />;
            case 2:
                // This line was already correct and is the pattern to follow.
                return <TimePicker selectedDate={selectedDate} onTimeSelect={handleTimeSelect} onBack={() => setStep(1)} settings={settings} />;
            case 3:
                return <BookingForm selectedDate={selectedDate} selectedTime={selectedTime} onBack={() => setStep(2)} onSuccess={handleSuccess} onError={handleError} />;
            default:
                return <Calendar onDateSelect={handleDateSelect} dayAvailability={settings?.dayAvailability} />;
        }
    };

    return (
        <>
            <Breadcrumb title="About Us" breadcrumbText="About" />
            <div className="appoinment-style-one-area default-padding">
                <div className="container">
                    {step === 3 || submissionStatus ? (
                        <div className="row justify-content-center"> 
                            <div className="col-lg-8"> 
                                {renderStep()}
                            </div>
                        </div>
                    ) : (
                        <div className="row align-center">
                            <div className="col-xl-6 offset-xl-1 order-lg-last">
                               {renderStep()}
                            </div>
                            <div className="col-xl-5">
                                 <AppointmentIntro />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}