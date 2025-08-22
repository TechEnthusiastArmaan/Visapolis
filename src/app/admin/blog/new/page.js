// src/app/admin/blog/new/page.js
import { createPost } from '../actions';
import BlogPostForm from '../BlogPostForm'; // We will create this reusable form next

export default function NewPostPage() {
    return (
        <div>
            <h1>Create New Blog Post</h1>
            <BlogPostForm formAction={createPost} />
        </div>
    );
}