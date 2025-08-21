// src/app/(admin)/blog/edit/[id]/page.js
import BlogPostForm from '../BlogPostForm';
import { updatePost } from '../actions';
import dbConnect from '@/lib/dbconnect';
import Blog from '@/models/Blog';

async function getPost(id) {
    await dbConnect();
    const post = await Blog.findById(id);
    return JSON.parse(JSON.stringify(post));
}

export default async function EditPostPage({ params }) {
    const post = await getPost(params.id);
    const updatePostWithId = updatePost.bind(null, post._id);

    return (
        <div>
            <h1>Edit Blog Post</h1>
            <BlogPostForm action={updatePostWithId} post={post} />
        </div>
    );
}