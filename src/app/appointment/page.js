// // src/app/appointment/page.js

// import Breadcrumb from "../components/about-sections/Breadcrumb";
// import ApplicationForm from "../components/ApplicationForm";
// import Image from "next/image";

// export const metadata = {
//   title: 'Appointment & Application Form',
//   description: 'Apply for your visa by filling out our comprehensive application form. Get started on your journey with Visaco today.',
// };

// export default function AppointmentPage() {
//     return (
//         <>
//             <Breadcrumb title="Apply Form" breadcrumbText="Apply Form" />
            
//             <div className="appoinment-style-one-area default-padding appoinment-page">
//                 <div className="container">
//                     <div className="row align-center">
                        
//                         <div className="col-xl-6 offset-xl-1 order-lg-last">
//                             {/* The form itself is a client component for state management */}
//                             <ApplicationForm />
//                         </div>

//                         <div className="col-xl-5">
//                             <div className="appoinment-style-two-thumb">
//                                 <div className="thumb-inner">
//                                     <Image src="/assets/img/illustration/11.png" alt="Illustration of a person with documents" width={485} height={600} />
//                                 </div>
//                                 <div className="fun-fact">
//                                     <div className="counter">
//                                         <div className="timer" data-to="50" data-speed="1000">50</div>
//                                     </div>
//                                     <h4>Daily Application</h4>
//                                 </div>
//                             </div>
//                         </div>
                        
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

"use client";

import { useState } from 'react';
import { bookAppointment } from './actions';

// Import the new components using RELATIVE paths
import Calendar from '../components/booking/Calendar';
import TimePicker from '../components/booking/TimePicker';
import BookingForm from '../components/booking/BookingForm';

export default function AppointmentPage() {
    const [step, setStep] = useState(1); // 1: Date, 2: Time, 3: Form
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState('');
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState(null); // 'success' or 'error'
    const [errorMessage, setErrorMessage] = useState('');

    // --- Step Navigation Handlers ---

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
                // Optional: Redirect or clear form after a delay
                setTimeout(() => {
                    setStep(1);
                    setSelectedDate(null);
                    setSelectedTime('');
                    setSubmissionStatus(null);
                }, 5000);
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

    // --- Render Functions for Status Messages ---
    
    const renderConfirmation = () => (
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md mx-auto text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <h3 className="text-lg leading-6 font-medium text-gray-900 mt-4">Booking Confirmed!</h3>
            <div className="mt-2 px-7 py-3">
                <p className="text-sm text-gray-500">
                    Your appointment for {selectedTime} on {selectedDate.toLocaleDateString()} has been scheduled. A confirmation email has been sent.
                </p>
            </div>
             <p className="text-xs text-gray-400 mt-4">You will be redirected shortly.</p>
        </div>
    );
    
    const renderError = () => (
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md mx-auto text-center">
             <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>
            </div>
            <h3 className="text-lg leading-6 font-medium text-gray-900 mt-4">Booking Failed</h3>
            <div className="mt-2 px-7 py-3">
                <p className="text-sm text-red-600">{errorMessage}</p>
            </div>
            <button onClick={() => { setSubmissionStatus(null); setStep(3); }} className="mt-4 bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700">
                Back to Form
            </button>
        </div>
    );

    const renderStep = () => {
        if (submissionStatus === 'success') return renderConfirmation();
        if (submissionStatus === 'error') return renderError();

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
        <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-sans">
            {renderStep()}
        </main>
    );
}