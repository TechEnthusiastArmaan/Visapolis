// src/app/(admin)/content/actions.js
'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import dbConnect from '@/lib/dbconnect';
import PageContent from '@/models/PageContent';

export async function updatePageContent(pageIdentifier, formData) {
    await dbConnect();
    const contentData = {
        title: formData.get('title'),
        content: formData.get('content'),
        imageUrl: formData.get('imageUrl'),
        pageIdentifier,
    };
    await PageContent.findOneAndUpdate({ pageIdentifier }, contentData, {
        upsert: true, // This will create the document if it doesn't exist
        new: true,
    });
    revalidatePath(`/visa-details`); // Revalidate the public visa-details page
    revalidatePath(`/content/${pageIdentifier}`); // Revalidate the admin editing page
    redirect('/dashboard');
}