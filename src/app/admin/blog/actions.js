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

  const file = formData.get('image');
  const imageUrl = await saveFileToPublicDir(file);

  // WYSIWYG HTML + plain textarea
  const content = formData.get('content')?.toString() ?? '';
  // const rawContent = formData.get('rawContent')?.toString() ?? '';

  // If page sent `intent=publish`, publish even if checkbox wasn’t ticked
  const intent = formData.get('intent')?.toString();
  const isPublished =
    intent === 'publish' || formData.get('isPublished') === 'on';

  const doc = {
    title,
    slug: createSlug(title),
    content,
    // rawContent,

    imageUrl,
    isPublished,
  };

  try {
    await Blog.create(doc);
  } catch (error) {
    if (error?.code === 11000) {
      return {
        message:
          'A post with a similar title already exists. Please choose a different title.',
      };
    }
    return { message: `Failed to create post: ${error.message}` };
  }

  revalidatePath('/blog');
  revalidatePath('/admin/blog');
  redirect('/admin/blog');
}

// --- UPDATE ---
export async function updatePost(postId, prevState, formData) {
  await dbConnect();

  // Load existing post to compare slug & keep old image if needed
  const existing = await Blog.findById(postId);
  if (!existing) return { message: 'Post not found.' };
  const oldSlug = existing.slug;

  const title = formData.get('title')?.toString().trim();
  if (!title) return { message: 'Title is required.' };

  // Optional new image
  const file = formData.get('image');
  const newImageUrl = await saveFileToPublicDir(file);
  const imageUrl = newImageUrl || existing.imageUrl || '';

  const content = formData.get('content')?.toString() ?? '';
  // const// rawContent = formData.get('rawContent')?.toString() ?? '';

  const intent = formData.get('intent')?.toString();
  const isPublished =
    intent === 'publish' || formData.get('isPublished') === 'on';

  const newSlug = createSlug(title);

  try {
    await Blog.findByIdAndUpdate(postId, {
      title,
      slug: newSlug,
      content,
      // rawContent,
      imageUrl,
      isPublished,
    });
  } catch (error) {
    if (error?.code === 11000) {
      return { message: 'A post with a similar title already exists.' };
    }
    return { message: `Failed to update post: ${error.message}` };
  }

  // Revalidate list and both old/new detail pages (if slug changed)
  revalidatePath('/blog');
  revalidatePath(`/blog/${oldSlug}`);
  if (newSlug !== oldSlug) revalidatePath(`/blog/${newSlug}`);
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
