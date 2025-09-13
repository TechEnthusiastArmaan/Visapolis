// "use client";

// import { useState } from 'react';
// // import Image from 'next/image';
// import { bookAppointment } from './actions';

// // Import the new components
// import Calendar from '../components/booking/Calendar';
// import TimePicker from '../components/booking/TimePicker';
// import BookingForm from '../components/booking/BookingForm';
// import AppointmentIntro from '../components/booking/AppointmentIntro'; // <-- IMPORT THE NEW COMPONENT


// // Import the specific CSS for this page
// import './booking.css';
// import Breadcrumb from '../components/about-sections/Breadcrumb';


// export default function AppointmentPage() {
//     const [step, setStep] = useState(1); // 1: Date, 2: Time, 3: Form
//     const [selectedDate, setSelectedDate] = useState(null);
//     const [selectedTime, setSelectedTime] = useState('');
    
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [submissionStatus, setSubmissionStatus] = useState(null); // 'success' or 'error'
//     const [errorMessage, setErrorMessage] = useState('');

//     const handleDateSelect = (date) => {
//         setSelectedDate(date);
//         setStep(2);
//     };

//     const handleTimeSelect = (time) => {
//         setSelectedTime(time);
//         setStep(3);
//     };

//     const handleFormSubmit = async (formData) => {
//         setIsSubmitting(true);
//         setSubmissionStatus(null);
//         setErrorMessage('');

//         const bookingData = {
//             date: selectedDate.toISOString().split('T')[0], // YYYY-MM-DD
//             time: selectedTime,
//             ...formData
//         };

//         try {
//             const result = await bookAppointment(bookingData);
//             if (result.success) {
//                 setSubmissionStatus('success');
//             } else {
//                 setSubmissionStatus('error');
//                 setErrorMessage(result.error || 'An unknown error occurred.');
//             }
//         } catch (error) {
//             setSubmissionStatus('error');
//             setErrorMessage('Failed to connect to the server. Please try again.');
//         } finally {
//             setIsSubmitting(false);
//         }
//     };
    
//     const handleReset = () => {
//       setStep(1);
//       setSelectedDate(null);
//       setSelectedTime('');
//       setSubmissionStatus(null);
//       setErrorMessage('');
//     }
//      // New handlers to receive success/error from the form component
//     const handleSuccess = (bookingData) => {
//         // We still have access to the selectedDate and Time here for the success message
//         setSubmissionStatus('success');
//     };

//     const handleError = (errorMsg) => {
//         setSubmissionStatus('error');
//         setErrorMessage(errorMsg);
//     };

//     const renderConfirmation = () => (
//         <div className="booking-container submission-status-box">
//              <div className="icon success">
//                 <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
//             </div>
//             <h3>Booking Confirmed!</h3>
//             <p>
//                 Your appointment for {selectedTime} on {selectedDate.toLocaleDateString()} is scheduled. A confirmation email has been sent to you.
//             </p>
//              <button onClick={handleReset} className="btn-style-one circle">Book Another</button>
//         </div>
//     );
    
//     const renderError = () => (
//         <div className="booking-container submission-status-box">
//              <div className="icon error">
//                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>
//             </div>
//             <h3>Booking Failed</h3>
//             <p className="text-danger">{errorMessage}</p>
//             <button onClick={() => setStep(3)} className="btn-style-one circle">
//                 Try Again<span></span>
//             </button>
//         </div>
//     );

//     const renderStep = () => {
//         if (submissionStatus === 'success') return renderConfirmation();
//         if (submissionStatus === 'error') return renderError(); // Error now uses state from handleError

//         switch (step) {
//             case 1:
//                 return <Calendar onDateSelect={handleDateSelect} />;
//             case 2:
//                 return <TimePicker selectedDate={selectedDate} onTimeSelect={handleTimeSelect} onBack={() => setStep(1)} />;
//             case 3:
//                 return (
//                     <BookingForm 
//                         selectedDate={selectedDate} 
//                         selectedTime={selectedTime} 
//                         onBack={() => setStep(2)} 
//                         onSuccess={handleSuccess}
//                         onError={handleError}
//                     />
//                 );
//             default:
//                 return <Calendar onDateSelect={handleDateSelect} />;
//         }
//     };

//     return (
//         <>
//             <Breadcrumb title="Book an Appointment" breadcrumbText="Appointment" />
//             <div className="appoinment-style-one-area default-padding">
//                 <div className="container">
//                      {step === 3 || submissionStatus ? (
//                         // LAYOUT FOR STEP 3 (FORM) & CONFIRMATION/ERROR SCREENS
//                         <div className="row justify-content-center"> 
//                           {/* `justify-content-center` is a Bootstrap class to center the column */}
//                             <div className="col-lg-8"> 
//                               {/* Using a wider column for the form */}
//                                 {renderStep()}
//                             </div>
//                         </div>

//                     ) : (
//                     <div className="row align-center">
//                         <div className="col-xl-6 offset-xl-1 order-lg-last">
//                            {renderStep()}
//                         </div>
//                         <div className="col-xl-5">
//                              <AppointmentIntro />
//                         </div>
//                     </div>
//                       )}
//                 </div>
//             </div>
//         </>
//     );
// }

// src/app/(public)/appointment/page.js
// import Link from 'next/link';
// // Import the server action to fetch the status
// import { getAppointmentStatus } from '@/app/admin/actions/settingsActions'; 
// // Import your new client component
// import BookingClient from './BookingClient'; 
// // Import the shared Breadcrumb
// import Breadcrumb from '../components/about-sections/Breadcrumb';

// // A small, self-contained component for the "unavailable" message
// const UnavailableNotice = () => (
//     <div className="booking-container text-center" style={{padding: '50px'}}>
//         <div className="booking-header">
//             <h2>Bookings Currently Closed</h2>
//             <p className="card-description">
//                 We are not available to take new appointments at the moment. Please check back later or contact us directly for inquiries.
//             </p>
//         </div>
//         <Link href="/contact" className="btn-style-one circle mt-4">
//             Contact Us
//         </Link>
//     </div>
// );

// // This is now a Server Component (no 'use client' directive)
// export default async function AppointmentPage() {
//     // 1. Fetch the availability status directly on the server
//     const isAvailable = await getAppointmentStatus();

//     // 2. Conditionally render the correct component based on the status
//     if (!isAvailable) {
//         return (
//             <>
//                 <Breadcrumb title="Book an Appointment" breadcrumbText="Appointment" />
//                 <div className="appoinment-style-one-area default-padding">
//                     <div className="container">
//                         <div className="row justify-content-center">
//                             <div className="col-lg-8">
//                                 <UnavailableNotice />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </>
//         );
//     }

//     // 3. If bookings are open, render the full, interactive client component
//     return <BookingClient />;
// }

import Link from 'next/link';
import { getSiteSettings } from '@/app/admin/settings/actions';
import BookingClient from './BookingClient';
import Breadcrumb from '@/app/(public)/components/about-sections/Breadcrumb';
// import PageHeader from '@/app/(public)/components/PageHeader';

const UnavailableNotice = () => (
    <div className="booking-container text-center" style={{padding: '50px'}}>
        <div className="booking-header">
            <h2>Bookings Currently Closed</h2>
            <p className="card-description">
                We are not available to take new appointments at this time. Please check back later or contact us directly.
            </p>
        </div>
        <Link href="/contact" className="btn-style-one circle mt-4">Contact Us</Link>
    </div>
);

export default async function AppointmentPage() {
    const settings = await getSiteSettings();
    const isAvailable = settings?.isAvailableForAppointments ?? true;
 console.log("--- SETTINGS FETCHED ON SERVER ---");
    console.log(JSON.stringify(settings, null, 2));
    console.log("---------------------------------");
    if (!isAvailable) {
        return (
            <>
                <Breadcrumb title="Book an Appointment" breadcrumbText="Appointment" />
                <div className="appoinment-style-one-area default-padding">
                    <div className="container">
                        <div className="row justify-content-center"><div className="col-lg-8"><UnavailableNotice /></div></div>
                    </div>
                </div>
            </>
        );
    }
    // Pass ALL settings to the client component
    return <BookingClient settings={settings} />;
}