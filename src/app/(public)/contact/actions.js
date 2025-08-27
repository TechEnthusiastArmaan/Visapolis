// src/app/contact/actions.js
'use server';
import dbConnect from '@/lib/dbconnect';
import ContactSubmission from '@/models/ContactSubmission';

export async function submitContactForm(prevState, formData) {
    try {
        await dbConnect();
        
        const submission = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            message: formData.get('message'),
        };

        await ContactSubmission.create(submission);
        
        // Return a clear success state
        return { 
            message: 'Your message has been sent successfully. We will get back to you shortly.', 
            isSuccess: true, 
            isError: false 
        };

    } catch (error) {
        console.error('Contact form submission error:', error);
        
        // Return a clear error state
        return { 
            message: 'Sorry, there was an issue sending your message. Please try again later.', 
            isError: true,
            isSuccess: false
        };
    }
}