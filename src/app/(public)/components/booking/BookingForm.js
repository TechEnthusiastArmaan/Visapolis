"use client";
import { useState } from "react";
import { useTemplateScripts } from "../../hooks/useTemplateScripts";

export default function BookingForm({ selectedDate, selectedTime, onSubmit, onBack, isSubmitting }) {
    useTemplateScripts(); // Ensures JS plugins like nice-select work

    const [formData, setFormData] = useState({
        name: '', phone: '', email: '', citizenship: '', age: '',
        inCanada: '', canadaStatus: [], education: [], relativesInCanada: '',
        studiedInCanada: '', englishProficiency: [], frenchProficiency: [],
        workExperienceOutside: '0', jobOffer: '', workExperienceInside: '0',
        refugeeStatus: '', complications: '',
    });

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

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
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
            <form onSubmit={handleSubmit} >
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
                    <div className="col-lg-6">
                        <div className="form-group"><label htmlFor="citizenship">Citizenship *</label><input className="form-control" name="citizenship" id="citizenship" type="text" onChange={handleChange} value={formData.citizenship} required /></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group"><label htmlFor="age">Age *</label><input className="form-control" name="age" id="age" type="number" onChange={handleChange} value={formData.age} required /></div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group"><label className="fw-bold mb-3 d-block">In Canada?</label>
                            <div className="d-flex" style={{gap: '2rem'}}>
                                <label className="custom-form-check is-radio">Yes<input type="radio" name="inCanada" value="Yes" onChange={handleChange} checked={formData.inCanada === 'Yes'} required /><span className="checkmark"></span></label>
                                <label className="custom-form-check is-radio">No<input type="radio" name="inCanada" value="No" onChange={handleChange} checked={formData.inCanada === 'No'} /><span className="checkmark"></span></label>
                            </div>
                        </div>
                    </div>
                </div>
                {/* --- ALL OTHER FORM FIELDS --- */}
                {/* (I've included all fields from AssessmentForm.js below) */}
                <div className="row"><div className="col-lg-12 form-group"><label className="fw-bold mb-2 d-block">Status in Canada</label><div className="row mt-2"><div className="col-md-4"><label className="custom-form-check">Visitor<input type="checkbox" name="canadaStatus" value="Visitor" onChange={handleChange} /><span className="checkmark"></span></label></div><div className="col-md-4"><label className="custom-form-check">Student<input type="checkbox" name="canadaStatus" value="Student" onChange={handleChange} /><span className="checkmark"></span></label></div><div className="col-md-4"><label className="custom-form-check">Worker<input type="checkbox" name="canadaStatus" value="Worker" onChange={handleChange} /><span className="checkmark"></span></label></div><div className="col-md-4"><label className="custom-form-check">Permanent Resident<input type="checkbox" name="canadaStatus" value="Permanent Resident" onChange={handleChange} /><span className="checkmark"></span></label></div><div className="col-md-4"><label className="custom-form-check">Citizen<input type="checkbox" name="canadaStatus" value="Citizen" onChange={handleChange} /><span className="checkmark"></span></label></div><div className="col-md-4"><label className="custom-form-check">Out of Status<input type="checkbox" name="canadaStatus" value="Out of Status" onChange={handleChange} /><span className="checkmark"></span></label></div></div></div></div>
                <div className="row"><div className="col-lg-12 form-group"><label className="fw-bold mb-2 d-block">Education Level</label><div className="row mt-2"><div className="col-md-4"><label className="custom-form-check">High School<input type="checkbox" name="education" value="High School" onChange={handleChange} /><span className="checkmark"></span></label></div><div className="col-md-4"><label className="custom-form-check">Certificate<input type="checkbox" name="education" value="Certificate" onChange={handleChange} /><span className="checkmark"></span></label></div><div className="col-md-4"><label className="custom-form-check">Diploma<input type="checkbox" name="education" value="Diploma" onChange={handleChange} /><span className="checkmark"></span></label></div><div className="col-md-4"><label className="custom-form-check">Bachelor&apos;s Degree<input type="checkbox" name="education" value="Bachelor's Degree" onChange={handleChange} /><span className="checkmark"></span></label></div><div className="col-md-4"><label className="custom-form-check">Master&apos;s Degree<input type="checkbox" name="education" value="Master's Degree" onChange={handleChange} /><span className="checkmark"></span></label></div><div className="col-md-4"><label className="custom-form-check">Ph.D.<input type="checkbox" name="education" value="PhD" onChange={handleChange} /><span className="checkmark"></span></label></div></div></div></div>
                <div className="row"><div className="col-lg-6 form-group"><label className="fw-bold mb-3 d-block">Relatives in Canada?</label><div className="d-flex" style={{gap: '2rem'}}><label className="custom-form-check is-radio">Yes<input type="radio" name="relativesInCanada" value="Yes" onChange={handleChange} /><span className="checkmark"></span></label><label className="custom-form-check is-radio">No<input type="radio" name="relativesInCanada" value="No" onChange={handleChange} /><span className="checkmark"></span></label></div></div><div className="col-lg-6 form-group"><label className="fw-bold mb-3 d-block">Studied in Canada?</label><div className="d-flex" style={{gap: '2rem'}}><label className="custom-form-check is-radio">Yes<input type="radio" name="studiedInCanada" value="Yes" onChange={handleChange} /><span className="checkmark"></span></label><label className="custom-form-check is-radio">No<input type="radio" name="studiedInCanada" value="No" onChange={handleChange} /><span className="checkmark"></span></label></div></div></div>
                <div className="row"><div className="col-lg-6 form-group"><label className="fw-bold mb-2 d-block">English Proficiency</label><label className="custom-form-check">Beginner<input type="checkbox" name="englishProficiency" value="Beginner" onChange={handleChange}/><span className="checkmark"></span></label><label className="custom-form-check">Intermediate<input type="checkbox" name="englishProficiency" value="Intermediate" onChange={handleChange}/><span className="checkmark"></span></label><label className="custom-form-check">Advanced<input type="checkbox" name="englishProficiency" value="Advanced" onChange={handleChange}/><span className="checkmark"></span></label><label className="custom-form-check">None<input type="checkbox" name="englishProficiency" value="None" onChange={handleChange}/><span className="checkmark"></span></label></div><div className="col-lg-6 form-group"><label className="fw-bold mb-2 d-block">French Proficiency</label><label className="custom-form-check">Beginner<input type="checkbox" name="frenchProficiency" value="Beginner" onChange={handleChange}/><span className="checkmark"></span></label><label className="custom-form-check">Intermediate<input type="checkbox" name="frenchProficiency" value="Intermediate" onChange={handleChange}/><span className="checkmark"></span></label><label className="custom-form-check">Advanced<input type="checkbox" name="frenchProficiency" value="Advanced" onChange={handleChange}/><span className="checkmark"></span></label><label className="custom-form-check">None<input type="checkbox" name="frenchProficiency" value="None" onChange={handleChange}/><span className="checkmark"></span></label></div></div>
                <div className="row"><div className="col-lg-6"><div className="form-group"><label htmlFor="workExperienceOutside">Work Experience Outside Canada</label><select className="form-select" id="workExperienceOutside" name="workExperienceOutside" onChange={handleChange} value={formData.workExperienceOutside}><option value="0">0 years</option><option value="1">1 year</option><option value="2">2 years</option><option value="3+">3+ years</option></select></div></div><div className="col-lg-6"><div className="form-group"><label htmlFor="workExperienceInside">Work Experience in Canada</label><select className="form-select" id="workExperienceInside" name="workExperienceInside" onChange={handleChange} value={formData.workExperienceInside}><option value="0">0 years</option><option value="1">1 year</option><option value="2">2 years</option><option value="3+">3+ years</option></select></div></div></div>
                <div className="row"><div className="col-lg-6"><div className="form-group"><label className="fw-bold mb-3 d-block">Valid Job Offer?</label><div className="d-flex" style={{gap: '2rem'}}><label className="custom-form-check is-radio">Yes<input type="radio" name="jobOffer" value="Yes" onChange={handleChange} /><span className="checkmark"></span></label><label className="custom-form-check is-radio">No<input type="radio" name="jobOffer" value="No" onChange={handleChange} /><span className="checkmark"></span></label></div></div></div><div className="col-lg-6"><div className="form-group"><label className="fw-bold mb-3 d-block">Applied for Refugee Status?</label><div className="d-flex" style={{gap: '2rem'}}><label className="custom-form-check is-radio">Yes<input type="radio" name="refugeeStatus" value="Yes" onChange={handleChange} /><span className="checkmark"></span></label><label className="custom-form-check is-radio">No<input type="radio" name="refugeeStatus" value="No" onChange={handleChange} /><span className="checkmark"></span></label></div></div></div></div>
                <div className="row"><div className="col-lg-12"><div className="form-group"><label className="fw-bold mb-3 d-block">Any Complications?</label><div className="d-flex" style={{gap: '2rem'}}><label className="custom-form-check is-radio">Yes<input type="radio" name="complications" value="Yes" onChange={handleChange} /><span className="checkmark"></span></label><label className="custom-form-check is-radio">No<input type="radio" name="complications" value="No" onChange={handleChange} /><span className="checkmark"></span></label></div></div></div></div>
                
                {/* --- SUBMIT BUTTON --- */}
                <div className="row">
                    <div className="col-lg-12">
                        <button type="submit" disabled={isSubmitting} className="btn-style-one circle mt-30">
                            {isSubmitting ? 'Scheduling...' : 'Schedule Appointment'} <span></span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}