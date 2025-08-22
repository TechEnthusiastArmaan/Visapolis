// src/app/admin/blog/DeletePostButton.js
'use client';

import { deletePost } from './actions';

export default function DeletePostButton({ postId }) {

    const handleDelete = async () => {
        const confirmed = window.confirm('Are you sure you want to delete this post permanently?');
        if (confirmed) {
            const result = await deletePost(postId);
            if (!result.success) {
                alert(result.message);
            }
        }
    };

    return (
        <button 
            onClick={handleDelete}
            style={{ 
                color: 'red', 
                background: 'none', 
                border: 'none', 
                cursor: 'pointer', 
                padding: 0 
            }}
        >
            Delete
        </button>
    );
}