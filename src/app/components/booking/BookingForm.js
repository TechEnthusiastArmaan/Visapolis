"use client";

import { useState } from "react";

export default function BookingForm({ selectedDate, selectedTime, onSubmit, onBack, isSubmitting }) {
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
                [name]: checked ? [...prev[name], value] : prev[name].filter(item => item !== value)
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
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg w-full max-w-2xl mx-auto">
            <button onClick={onBack} className="text-sm text-blue-600 hover:underline mb-4">&larr; Back to Time</button>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">Confirm Your Details</h2>
            <p className="text-center text-gray-500 mb-6">
                Appointment on {selectedDate.toLocaleDateString()} at {selectedTime}
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* --- PERSONAL INFORMATION --- */}
                <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <legend className="text-lg font-semibold text-gray-700 col-span-full mb-2">Personal Information</legend>
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Full Name *</label>
                        <input type="text" name="name" onChange={handleChange} value={formData.name} required className="w-full px-3 py-2 border rounded-md" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Phone *</label>
                        <input type="tel" name="phone" onChange={handleChange} value={formData.phone} required className="w-full px-3 py-2 border rounded-md" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Email *</label>
                        <input type="email" name="email" onChange={handleChange} value={formData.email} required className="w-full px-3 py-2 border rounded-md" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Country of Citizenship *</label>
                        <input type="text" name="citizenship" onChange={handleChange} value={formData.citizenship} required className="w-full px-3 py-2 border rounded-md" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Age *</label>
                        <input type="number" name="age" onChange={handleChange} value={formData.age} required className="w-full px-3 py-2 border rounded-md" />
                    </div>
                </fieldset>
                
                {/* --- Other fields can be added here following the same pattern --- */}
                <fieldset>
                    <legend className="text-lg font-semibold text-gray-700 mb-2">Education & Status</legend>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-2">Highest Level of Education</label>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                {["High School", "Certificate", "Diploma", "Bachelor's Degree", "Master's Degree", "PhD"].map(level => (
                                    <label key={level} className="flex items-center space-x-2"><input type="checkbox" name="education" value={level} onChange={handleChange} /> <span>{level}</span></label>
                                ))}
                            </div>
                        </div>
                         <div>
                            <label className="block text-sm font-medium text-gray-600 mb-2">Are you currently in Canada?</label>
                            <div className="flex items-center gap-4">
                               <label className="flex items-center space-x-2"><input type="radio" name="inCanada" value="Yes" onChange={handleChange} checked={formData.inCanada === 'Yes'} /> <span>Yes</span></label>
                               <label className="flex items-center space-x-2"><input type="radio" name="inCanada" value="No" onChange={handleChange} checked={formData.inCanada === 'No'} /> <span>No</span></label>
                            </div>
                        </div>
                    </div>
                </fieldset>

                <button type="submit" disabled={isSubmitting} className="w-full mt-6 bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-300">
                    {isSubmitting ? 'Scheduling...' : 'Schedule Appointment'}
                </button>
            </form>
        </div>
    );
}
