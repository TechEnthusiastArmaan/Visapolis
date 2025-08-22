// src/app/admin/blog/actions.js
'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import dbConnect from '@/lib/dbconnect';
import Blog from '@/models/Blog';

// Helper function to create a URL-friendly slug from a title
const createSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '');
};

// --- CREATE ---
export async function createPost(prevState, formData) {
    const title = formData.get('title');
    if (!title) return { message: 'Title is required.' };

    await dbConnect();
    
    const postData = {
        title: title,
        slug: createSlug(title), // Automatically generate the slug
        content: formData.get('content'),
        imageUrl: formData.get('imageUrl'),
        isPublished: formData.get('isPublished') === 'on',
    };

    try {
        await Blog.create(postData);
    } catch (error) {
        // Handle case where the generated slug might already exist
        if (error.code === 11000) {
            return { message: 'A post with a similar title already exists. Please choose a different title.' };
        }
        return { message: `Failed to create post: ${error.message}` };
    }

    revalidatePath('/blog'); // Revalidate the public blog page
    revalidatePath('/admin/blog'); // Revalidate the admin blog list
    redirect('/admin/blog');
}


// --- UPDATE ---
export async function updatePost(postId, prevState, formData) {
    const title = formData.get('title');
    if (!title) return { message: 'Title is required.' };

    await dbConnect();

    const postData = {
        title: title,
        slug: createSlug(title), // Also update the slug on edit
        content: formData.get('content'),
        imageUrl: formData.get('imageUrl'),
        isPublished: formData.get('isPublished') === 'on',
    };

    try {
        await Blog.findByIdAndUpdate(postId, postData);
    } catch (error) {
        if (error.code === 11000) {
            return { message: 'A post with a similar title already exists.' };
        }
        return { message: `Failed to update post: ${error.message}` };
    }
    
    revalidatePath('/blog');
    revalidatePath(`/blog/${postData.slug}`); // Revalidate the specific post page
    revalidatePath('/admin/blog');
    redirect('/admin/blog');
}


// --- DELETE ---
export async function deletePost(postId) {
    try {
        await dbConnect();
        await Blog.findByIdAndDelete(postId);
        revalidatePath('/blog');
        revalidatePath('/admin/blog');
        return { success: true, message: 'Post deleted successfully.' };
    } catch (error) {
        return { success: false, message: 'Failed to delete post.' };
    }
}