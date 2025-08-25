// src/app/admin/blog/DeletePostButton.js
'use client';

import { deletePost } from './actions';
import { useFormStatus } from 'react-dom';

import React from 'react';

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <button type="submit" className="btn btn-gradient-danger btn-sm" disabled={pending}>
            {pending ? 'Deleting...' : 'Delete'}
        </button>
    );
}


export default function DeletePostButton({ postId }) {
    // --- THIS IS THE MISSING LINE ---
    // You must bind the postId to the deletePost server action to create the action handler.
    const deletePostWithId = deletePost.bind(null, postId);

    const handleFormSubmit = (event) => {
        if (!confirm('Are you sure you want to delete this post? This is irreversible.')) {
            // If the user clicks "Cancel", stop the form from submitting
            event.preventDefault();
        }
    };

    return (
         <form 
            action={deletePostWithId} 
            onSubmit={handleFormSubmit} 
            style={{ display: 'inline' }}
        >
            <SubmitButton />
        </form>
    );
}