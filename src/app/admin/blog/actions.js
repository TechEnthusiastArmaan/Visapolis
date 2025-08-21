// src/app/(admin)/blog/actions.js
'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import dbConnect from '@/lib/dbconnect';
import Blog from '@/models/Blog';

// Function to create a slug from a title
const createSlug = (title) => title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

export async function createPost(formData) {
    await dbConnect();
    const title = formData.get('title');
    const postData = {
        title,
        slug: createSlug(title),
        content: formData.get('content'),
        imageUrl: formData.get('imageUrl'),
        isPublished: formData.get('isPublished') === 'on',
    };
    await Blog.create(postData);
    revalidatePath('/blog'); // Revalidates both admin and public blog pages
    redirect('/admin/blog');
}

export async function updatePost(id, formData) {
    await dbConnect();
    const postData = {
        title: formData.get('title'),
        content: formData.get('content'),
        imageUrl: formData.get('imageUrl'),
        isPublished: formData.get('isPublished') === 'on',
    };
    await Blog.findByIdAndUpdate(id, postData);
    revalidatePath('/blog');
    redirect('/admin/blog');
}

export async function deletePost(id) {
    await dbConnect();
    await Blog.findByIdAndDelete(id);
    revalidatePath('/blog');
}