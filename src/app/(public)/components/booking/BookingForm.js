"use client";
import { useState } from "react";
import { useTemplateScripts } from "@/app/(public)/hooks/useTemplateScripts";

import { bookAppointment } from "@/app/(public)/appointment/actions"; 


export default function BookingForm({ 
    selectedDate, 
    selectedTime, 
    onBack, 
    // New props for handling the final result
    onSuccess, 
    onError 
}){    useTemplateScripts(); // Ensures JS plugins like nice-select work

    const [formData, setFormData] = useState({
        name: '', phone: '', email: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData(prev => ({
                ...prev,
                [name]: checked ? [...(prev[name] || []), value] : prev[name].filter(item => item !== value)
            }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

     const handleSubmit = async (event) => {
        event.preventDefault();
        
        // --- CLIENT-SIDE VALIDATION ---
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.name || !formData.phone || !formData.email) {
            window.swal("Incomplete Form", "Please fill out all required fields marked with an asterisk (*).", "warning");
            return;
        }
        if (!emailRegex.test(formData.email)) {
            window.swal("Invalid Email", "Please enter a valid email address.", "warning");
            return;
        }
         // 1. Convert the age from a string to a number
        // const age = parseInt(formData.age, 10);
        
        // // 2. Check if it's a valid number and within the desired range
        // if (isNaN(age) || age < 6 || age > 129) {
        //     window.swal("Invalid Age", "Please enter a valid age between 6 and 129.", "warning");
        //     return; // Stop the submission
        // }
        // --- END OF AGE VALIDATION ---
        // --- END VALIDATION ---

        setIsSubmitting(true);
        
        const bookingData = {
            date: selectedDate.toISOString().split('T')[0],
            time: selectedTime,
            ...formData
        };

        const result = await bookAppointment(bookingData);
        setIsSubmitting(false);

        if (result.success) {
            onSuccess(bookingData); // Notify parent page of success
        } else {
            onError(result.error || 'An unknown error occurred.'); // Notify parent of failure
        }
    };

    return (
        <div className="booking-container"> {/* The white box container */}
                    <div className="booking-form-header">
                <div className="booking-form-header-flex">
<button type="button" onClick={onBack} className="booking-back-button">
                        &larr; Back to Time Selection
                    </button>
                 <div className="main-header-text">
                        <h2>Confirm Your Details</h2>
                        {/* <p>Appointment for <strong>{selectedDate?.toLocaleDateString()}</strong> at <strong>{selectedTime}</strong></p> */}
                    </div>

                </div>
            </div>
            <p className="appointment-selection-highlight">
                Appointment for <strong>{selectedDate?.toLocaleDateString()}</strong> at <strong>{selectedTime}</strong>
            </p>
            <form onSubmit={handleSubmit} noValidate>
                 {/* --- SECTION 1: PERSONAL INFORMATION --- */}
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group"><label htmlFor="name">Full Name *</label><input className="form-control" name="name" id="name" type="text" onChange={handleChange} value={formData.name} required /></div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group"><label htmlFor="phone">Phone *</label><input className="form-control" name="phone" id="phone" type="tel" onChange={handleChange} value={formData.phone} required /></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group"><label htmlFor="email">Email *</label><input className="form-control" name="email" id="email" type="email" onChange={handleChange} value={formData.email} required /></div>
                    </div>
                </div>
                
                {/* --- ALL OTHER FORM FIELDS --- */}
                {/* (I've included all fields from AssessmentForm.js below) */}
                
                <div className="row">
                    <div className="col-lg-12">
                        <div 
                            className="fee-notice"
                            style={{
                                backgroundColor: '#f8f9fa', // A very light grey background
                                border: '1px solid #e9ecef',
                                borderRadius: '8px',
                                padding: '15px 20px',
                                textAlign: 'center',
                                margin: '20px 0',
                                fontSize: '16px'
                            }}
                        >
                            <p style={{ margin: 0, fontWeight: '700', color: 'var(--color-heading)' }}>
                                Professional Fee: <span style={{ color: 'var(--color-primary)' }}>$50</span> plus tax for 30 minute consultation
                            </p>
                        </div>
                    </div>
                </div>
                {/* --- SUBMIT BUTTON --- */}
                 <div className="row mt-4">
                    <div className="col-lg-12">
                        <button className="btn-style-one circle" type="submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Confirming...' : 'Confirm Booking'} <span></span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}