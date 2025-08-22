// src/app/admin/actions/contentActions.js
'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import dbConnect from '@/lib/dbconnect'; // Using alias here is fine for server-only files
import PageContent from '@/models/PageContent';

export async function updatePageContent(pageIdentifier, formData) {
    await dbConnect();

    const contentData = {
        title: formData.get('title'),
        content: formData.get('content'),
        imageUrl: formData.get('imageUrl'),
        pageIdentifier,
    };

    // Use `findOneAndUpdate` with `upsert: true` to create the document if it doesn't exist,
    // or update it if it does. This is perfect for single-page content.
    await PageContent.findOneAndUpdate({ pageIdentifier }, contentData, {
        upsert: true,
        new: true,
    });
    
    // Revalidate the public page so changes are visible immediately
    revalidatePath(`/${pageIdentifier}`); 
    
    // Revalidate the admin editing page itself
    revalidatePath(`/admin/content/${pageIdentifier}`);
    
    // Redirect back to the main admin dashboard after saving
    redirect('/admin/dashboard');
}