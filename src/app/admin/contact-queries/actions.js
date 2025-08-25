// src/app/admin/contact-queries/actions.js
'use server';

import dbConnect from '@/lib/dbconnect';
import ContactSubmission from '@/models/ContactSubmission';
import { revalidatePath } from 'next/cache';

export async function deleteContactSubmission(submissionId) {
    if (!submissionId) {
        return { success: false, message: 'Submission ID is required.' };
    }

    try {
        await dbConnect();
        await ContactSubmission.findByIdAndDelete(submissionId);
        
        // Tell Next.js to refresh the data on the contact queries page
        revalidatePath('/admin/contact-queries');
        
        return { success: true, message: 'Query deleted successfully.' };
    } catch (error) {
        console.error('Error deleting contact query:', error);
        return { success: false, message: `Failed to delete query: ${error.message}` };
    }
}