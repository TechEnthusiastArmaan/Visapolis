"use client";
import { useState } from "react";
import { useTemplateScripts } from "@/app/hooks/useTemplateScripts";

export default function ContactForm() {
    // This hook will ensure any scripts that might interact with the form are ready
    useTemplateScripts();

    // Basic form state management
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        comments: '',
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        
        // This is where you would connect to a serverless function or an API endpoint.
        // For now, it will just simulate a submission.
        try {
            // Replace with your actual API endpoint if you have one.
            // const response = await fetch('/api/contact', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(formData),
            // });

            // const data = await response.json();

            // if (response.ok) {
                setTimeout(() => {
                    setStatus('Message Sent Successfully!');
                    setFormData({ name: '', email: '', phone: '', comments: '' });
                }, 1000); // Simulate network delay
            // } else {
            //     throw new Error(data.message || 'Something went wrong');
            // }

        } catch (error) {
             setTimeout(() => {
                setStatus(`Error: ${error.message}`);
             }, 1000);
        }
    };


    return (
        <div className="contact-form-style-one">
            <h2>Have questions? <br /> Get in touch!</h2>
            <form onSubmit={handleSubmit} className="contact-form contact-form">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group">
                            <input className="form-control" id="name" name="name" placeholder="Name" type="text" value={formData.name} onChange={handleChange} required/>
                            <span className="alert-error"></span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input className="form-control" id="email" name="email" placeholder="Email*" type="email" value={formData.email} onChange={handleChange} required />
                            <span className="alert-error"></span>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input className="form-control" id="phone" name="phone" placeholder="Phone" type="text" value={formData.phone} onChange={handleChange} />
                            <span className="alert-error"></span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group comments">
                            <textarea className="form-control" id="comments" name="comments" placeholder="Service Details" value={formData.comments} onChange={handleChange} suppressHydrationWarning={true}></textarea>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <button type="submit" name="submit" id="submit" className="btn-style-one circle">
                            Send Message <span></span>
                        </button>
                    </div>
                </div>
                {/* Alert Message */}
                <div className="col-lg-12 alert-notification">
                    <div id="message" className={status ? 'alert-msg' : ''}>
                        {status}
                    </div>
                </div>
            </form>
        </div>
    );
}