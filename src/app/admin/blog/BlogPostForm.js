// src/app/(admin)/blog/BlogPostForm.js
'use client';

// A simple form, you can enhance the 'content' field with a Rich Text Editor later
export default function BlogPostForm({ action, post }) {
    return (
        <form action={action}>
            <div>
                <label>Title</label>
                <input type="text" name="title" defaultValue={post?.title} required style={{ width: '100%' }}/>
            </div>
            <div>
                <label>Content</label>
                <textarea name="content" defaultValue={post?.content} required style={{ width: '100%', minHeight: '300px' }}></textarea>
            </div>
            <div>
                <label>Image URL</label>
                <input type="text" name="imageUrl" defaultValue={post?.imageUrl} style={{ width: '100%' }}/>
            </div>
            <div>
                <label>
                    <input type="checkbox" name="isPublished" defaultChecked={post?.isPublished ?? true} />
                    Published
                </label>
            </div>
            <button type="submit">{post ? 'Update' : 'Create'} Post</button>
        </form>
    );
}