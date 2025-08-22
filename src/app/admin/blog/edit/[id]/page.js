// src/app/admin/blog/edit/[id]/page.js
import { updatePost } from '../../actions';
import BlogPostForm from '../../BlogPostForm';
import dbConnect from '@/lib/dbconnect';
import Blog from '@/models/Blog';
import { notFound } from 'next/navigation';

async function getPost(id) {
    await dbConnect();
    const post = await Blog.findById(id);
    if (!post) notFound();
    return JSON.parse(JSON.stringify(post));
}

export default async function EditPostPage({ params }) {
    const post = await getPost(params.id);

    // Bind the postId to the updatePost server action
    const updatePostWithId = updatePost.bind(null, post._id);

    return (
        <div>
            <h1>Edit Blog Post</h1>
            <BlogPostForm formAction={updatePostWithId} initialData={post} />
        </div>
    );
}