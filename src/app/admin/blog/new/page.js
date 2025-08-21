// src/app/(admin)/blog/new/page.js
import BlogPostForm from './BlogPostForm';
import { createPost } from './actions';

export default function NewPostPage() {
    return (
        <div>
            <h1>Create New Blog Post</h1>
            <BlogPostForm action={createPost} />
        </div>
    );
}