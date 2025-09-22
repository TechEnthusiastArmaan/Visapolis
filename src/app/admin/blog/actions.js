'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import dbConnect from '@/lib/dbconnect';
import Blog from '@/models/Blog';
import path from 'path';
import fs from 'fs';

const createSlug = (title) =>
  title
    .toLowerCase()
    .trim()
    .replace(/['"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');

async function saveFileToPublicDir(file) {
  if (!file || typeof file !== 'object' || !('arrayBuffer' in file)) return '';
  const bytes = Buffer.from(await file.arrayBuffer());
  const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'blog');
  await fs.promises.mkdir(uploadDir, { recursive: true });
  const safeName = file.name
    .replace(/\s+/g, '-')
    .replace(/[^a-zA-Z0-9.\-_]/g, '');
  const filename = `${Date.now()}-${safeName}`;
  const filepath = path.join(uploadDir, filename);
  await fs.promises.writeFile(filepath, bytes);
  return `/uploads/blog/${filename}`;
}

// --- CREATE ---
export async function createPost(prevState, formData) {
  const title = formData.get('title')?.toString().trim();
  if (!title) return { message: 'Title is required.' };

  await dbConnect();
  
  // --- THIS IS THE KEY CHANGE ---
  // We now read the URL from the hidden input field instead of the file.
  const imageUrl = formData.get('imageUrl')?.toString() ?? '';
  
  const content = formData.get('content')?.toString() ?? '';
  const isPublished = formData.get('isPublished') === 'on';

  const doc = {
    title,
    slug: createSlug(title),
    content,
    imageUrl, // Save the Cloudinary URL
    isPublished,
  };

  try {
    await Blog.create(doc);
  } catch (error) {
    return { message: `Failed to create post: ${error.message}` };
  }

  revalidatePath('/blog');
  revalidatePath('/admin/blog');
  redirect('/admin/blog');
}


// --- UPDATE ---
export async function updatePost(postId, prevState, formData) {
  await dbConnect();

  const existing = await Blog.findById(postId);
  if (!existing) return { message: 'Post not found.' };

  const title = formData.get('title')?.toString().trim();
  if (!title) return { message: 'Title is required.' };
  
  // --- KEY CHANGE ---
  // The 'imageUrl' from the form will be the new Cloudinary URL if the user
  // uploaded a new image, or the old one if they didn't.
  const imageUrl = formData.get('imageUrl')?.toString() || existing.imageUrl;
  
  const content = formData.get('content')?.toString() ?? '';
  const isPublished = formData.get('isPublished') === 'on';
  const newSlug = createSlug(title);

  try {
    await Blog.findByIdAndUpdate(postId, {
      title,
      slug: newSlug,
      content,
      imageUrl, // Save the new or existing URL
      isPublished,
    });
  } catch (error) {
    return { message: `Failed to update post: ${error.message}` };
  }
}
// --- DELETE ---
export async function deletePost(postId) {
  try {
    await dbConnect();
    await Blog.findByIdAndDelete(postId);
    revalidatePath('/blog');
    revalidatePath('/admin/blog');
    return { success: true, message: 'Post deleted successfully.' };
  } catch {
    return { success: false, message: 'Failed to delete post.' };
  }
}

// --- FETCH PUBLISHED BLOGS ---
export async function getPublishedBlogs(limit = 6) {
  try {
    await dbConnect();
    const blogs = await Blog.find({ isPublished: true })
      .sort({ createdAt: -1 })
      .limit(limit)
      .select('title slug imageUrl createdAt')
      .lean();
    
    // Manually serialize the data to ensure it's plain objects
    return blogs.map(blog => ({
      _id: blog._id.toString(), // Convert ObjectId to string
      title: blog.title,
      slug: blog.slug,
      imageUrl: blog.imageUrl,
      createdAt: blog.createdAt.toISOString() // Convert Date to string
    }));
  } catch (error) {
    console.error('Failed to fetch published blogs:', error);
    return [];
  }
}
