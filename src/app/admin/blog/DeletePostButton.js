// src/app/admin/blog/DeletePostButton.js
'use client';

import { useFormStatus } from 'react-dom';
import { deletePost } from './actions'; // Your server action for deleting a post

// SubmitButton sub-component remains the same
function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <button type="submit" className="btn btn-gradient-danger btn-sm" disabled={pending}>
            {pending ? 'Deleting...' : 'Delete'}
        </button>
    );
}

export default function DeletePostButton({ postId }) {
    const deletePostWithId = deletePost.bind(null, postId);

    // This is the new SweetAlert-powered handler
    const handleSubmit = async (event) => {
        event.preventDefault(); // Stop the form's default submission

        // Use the global 'swal' function from the script in your layout
        const willDelete = await window.swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this blog post!",
            icon: "warning",
            buttons: ["Cancel", "Yes, delete it!"],
            dangerMode: true,
        });

        // 'willDelete' will be true if the user clicks "Yes, delete it!"
        if (willDelete) {
            // Manually call the server action
            const result = await deletePostWithId();
            
            // The revalidatePath in the server action handles the UI refresh.
            // We can optionally show a success message.
            if (result.success) {
                await window.swal("Deleted!", "The blog post has been removed.", "success");
            } else {
                window.swal("Error!", result.message || "Failed to delete the post.", "error");
            }
        }
    };

    return (
        // We use the new `handleSubmit` function
        // The `action` prop is not strictly necessary anymore but is harmless
        <form onSubmit={handleSubmit} style={{ display: 'inline' }}>
            <SubmitButton />
        </form>
    );
}