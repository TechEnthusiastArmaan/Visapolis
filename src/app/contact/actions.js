// src/app/contact/actions.js
'use server';

import dbConnect from '@/lib/dbconnect';
import ContactSubmission from '@/models/ContactSubmission';
import { revalidatePath } from 'next/cache';

// This is the Server Action that will be called by your form.
export async function submitContactForm(prevState, formData) {
    await dbConnect();

    // Extract data from the form
    const name = formData.get('name')?.toString();
    const email = formData.get('email')?.toString();
    const phone = formData.get('phone')?.toString();
    const message = formData.get('message')?.toString();

    // Basic server-side validation
    if (!name || !email || !message) {
        return {
            message: 'Validation failed: Please fill out all required fields.',
            isError: true,
        };
    }

    try {
        // Create a new submission document
        const submission = new ContactSubmission({
            name,
            email,
            phone,
            message,
        });

        // Save it to the database
        await submission.save();

        // This is not strictly necessary but good practice for other potential use cases
        revalidatePath('/admin/contact-queries');

        // Return a success message
        return { message: 'Message sent successfully!', isError: false };

    } catch (error) {
        console.error("Contact form submission error:", error);
        return {
            message: `Server Error: ${error.message}`,
            isError: true,
        };
    }
}